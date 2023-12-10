import SceneView from '@arcgis/core/views/SceneView';
import Map from '@arcgis/core/Map';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery';
import LayerList from '@arcgis/core/widgets/LayerList';
import Search from '@arcgis/core/widgets/Search';
import Expand from '@arcgis/core/widgets/Expand';
import GroupLayer from '@arcgis/core/layers/GroupLayer';
import Compass from '@arcgis/core/widgets/Compass';
import BuildingExplorer from '@arcgis/core/widgets/BuildingExplorer';
import { buildingLayer, chainageLayer, pierNoLayer, rowLayer, stationLayer } from './layers';

export const map = new Map({
  basemap: 'dark-gray-vector', // "streets-night-vector", basemap
  ground: 'world-elevation',
});

const alignmentGroupLayer = new GroupLayer({
  title: 'Alignment',
  visible: true,
  visibilityMode: 'independent',
  layers: [chainageLayer, pierNoLayer, rowLayer], //stationLayer,
});

map.add(buildingLayer);
map.add(alignmentGroupLayer);
map.add(stationLayer);

export const view = new SceneView({
  container: undefined,
  map,
  camera: {
    position: {
      x: 120.750421,
      y: 14.902323,
      z: 2000,
    },
    tilt: 65,
  },
  viewingMode: 'local',
  environment: {
    starsEnabled: false,
  },
});

export const basemaps = new BasemapGallery({
  view,
  container: undefined,
});

// Building Explorer
const buildingExplorer = new BuildingExplorer({
  view: view,
  layers: [buildingLayer],
});

const buildingExplorerExpand = new Expand({
  view,
  content: buildingExplorer,
  expandIconClass: 'esri-icon-layers',
  expandTooltip: 'Building Explorer',
});
view.ui.add(buildingExplorerExpand, 'top-right');

export const layerList = new LayerList({
  view: view,
  selectionEnabled: true,
  container: undefined,
  listItemCreatedFunction: (event) => {
    const item = event.item;
    if (item.layer.type !== 'group') {
      item.panel = {
        content: 'legend',
        open: true,
      };
    }

    item.title === 'Chainage' || item.title === 'Station Structures'
      ? (item.visible = false)
      : (item.visible = true);
  },
});

// Compass
var compass = new Compass({
  view: view,
});
view.ui.add(compass, 'top-right');

// Search
const sources = [
  {
    layer: pierNoLayer,
    searchFields: ['PIER'],
    displayField: 'PIER',
    exactMatch: false,
    outFields: ['PIER'],
    name: 'Pier No',
    zoomScale: 1000,
    placeholder: 'example: P-288',
  },
  {
    layer: chainageLayer,
    searchFields: ['KmSpot'],
    displayField: 'KmSpot',
    exactMatch: false,
    outFields: ['*'],
    zoomScale: 1000,
    name: 'Main KM',
    placeholder: 'example: 80+400',
  },
];

var searchWidget = new Search({
  view: view,
  locationEnabled: false,
  allPlaceholder: 'Chainage or pier no',
  includeDefaultSources: false,
  sources: sources,
});

const searchExpand = new Expand({
  view: view,
  content: searchWidget,
  expandIconClass: 'esri-icon-search',
  group: 'top-right',
});
view.ui.add(searchExpand, {
  position: 'top-right',
});
