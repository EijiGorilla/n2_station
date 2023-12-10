import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import LabelClass from '@arcgis/core/layers/support/LabelClass';
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
import { SimpleMarkerSymbol, LabelSymbol3D, TextSymbol3DLayer } from '@arcgis/core/symbols';
import { labelSymbol3DLine } from './Label';
import BuildingSceneLayer from '@arcgis/core/layers/BuildingSceneLayer';

/* Chainage Layer  */
var labelChainage = new LabelClass({
  labelExpressionInfo: { expression: '$feature.KmSpot' },
  symbol: {
    type: 'text',
    color: [85, 255, 0],
    haloColor: 'black',
    haloSize: 0.5,
    font: {
      size: 15,
      weight: 'bold',
    },
  },
});

var chainageRenderer = new SimpleRenderer({
  symbol: new SimpleMarkerSymbol({
    size: 5,
    color: [255, 255, 255, 0.9],
    outline: {
      width: 0.2,
      color: 'black',
    },
  }),
});

export const chainageLayer = new FeatureLayer({
  portalItem: {
    id: 'e47e9f4d475e4e24acad458a1428f3f9',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 5,
  title: 'Chainage',
  elevationInfo: {
    mode: 'relative-to-ground',
  },
  labelingInfo: [labelChainage],
  minScale: 150000,
  maxScale: 0,
  renderer: chainageRenderer,
  outFields: ['*'],
  popupEnabled: false,
});

// * Pier No layer * //
var pierNoLabelClass = new LabelClass({
  symbol: new LabelSymbol3D({
    symbolLayers: [
      new TextSymbol3DLayer({
        material: {
          color: 'white',
        },
        size: 10,
        halo: {
          color: 'black',
          size: 1,
        },
        font: {
          family: 'Ubuntu Mono',
        },
      }),
    ],
    verticalOffset: {
      screenLength: 40,
      maxWorldLength: 100,
      minWorldLength: 20,
    },
    callout: {
      type: 'line', // autocasts as new LineCallout3D()
      color: 'white',
      size: 0.7,
      border: {
        color: 'grey',
      },
    },
  }),
  labelPlacement: 'above-center',
  labelExpressionInfo: {
    expression: '$feature.PIER',
    //value: "{TEXTSTRING}"
  },
});

export const pierNoLayer = new FeatureLayer({
  portalItem: {
    id: 'e47e9f4d475e4e24acad458a1428f3f9',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 6,
  labelingInfo: [pierNoLabelClass],
  elevationInfo: {
    mode: 'on-the-ground', //absolute-height, relative-to-ground
  },
  title: 'Pier No',
  outFields: ['*'],
  popupEnabled: false,
});

// * PROW *//
export const rowLayer = new FeatureLayer({
  portalItem: {
    id: 'e47e9f4d475e4e24acad458a1428f3f9',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 1,
  title: 'ROW',
  definitionExpression: "Extension = 'N2'",
  popupEnabled: false,
});

// * Station Layer * //
const stationLayerTextSymbol = labelSymbol3DLine({
  materialColor: '#d4ff33',
  fontSize: 15,
  fontFamily: 'Ubuntu Mono',
  fontWeight: 'normal',
  haloColor: 'black',
  haloSize: 0.5,
  vOffsetScreenLength: 100,
  vOffsetMaxWorldLength: 700,
  vOffsetMinWorldLength: 80,
});

var labelClass = new LabelClass({
  symbol: stationLayerTextSymbol,
  labelPlacement: 'above-center',
  labelExpressionInfo: {
    expression: 'DefaultValue($feature.Station, "no data")',
    //value: "{TEXTSTRING}"
  },
});

export const stationLayer = new FeatureLayer({
  portalItem: {
    id: 'e47e9f4d475e4e24acad458a1428f3f9',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 2,
  title: 'Station',
  labelingInfo: [labelClass],
  elevationInfo: {
    mode: 'relative-to-ground',
  },
});
stationLayer.listMode = 'hide';

/* Building Scene Layer for station structures */
export const buildingLayer = new BuildingSceneLayer({
  portalItem: {
    id: '20e1136eec3149bda9ffa81effa08ebe',
  },
  outFields: ['*'],
  title: 'Station Structures',
});

// Discipline: Architectural
export let columnsLayer: null | any;
export let floorsLayer: null | any;
export let wallsLayer: null | any;

// Discipline: Structural
export let stFramingLayer: null | any;
export let stColumnLayer: null | any;
export let stFoundationLayer: null | any;

buildingLayer.when(() => {
  buildingLayer.allSublayers.forEach((layer: any) => {
    switch (layer.modelName) {
      case 'FullModel':
        layer.visible = true;
        break;

      case 'Columns':
        columnsLayer = layer;
        //excludedLayers.push(layer);
        break;

      case 'Floors':
        floorsLayer = layer;
        //excludedLayers
        break;

      case 'Walls':
        wallsLayer = layer;
        break;

      case 'StructuralFraming':
        stFramingLayer = layer;
        break;

      case 'StructuralColumns':
        stColumnLayer = layer;
        break;

      case 'StructuralFoundation':
        stFoundationLayer = layer;
        break;

      default:
        layer.visible = true;
    }
  });
});
