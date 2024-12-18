/* eslint-disable react/jsx-no-comment-textnodes */
import { useRef, useEffect, useState } from 'react';
import { map, view, basemaps, layerList, timeSlider, start } from './Scene';
import Select from 'react-select';
import './index.css';
import './App.css';
import '@esri/calcite-components/dist/components/calcite-shell';
import '@esri/calcite-components/dist/components/calcite-panel';
import '@esri/calcite-components/dist/components/calcite-list';
import '@esri/calcite-components/dist/components/calcite-list-item';
import '@esri/calcite-components/dist/components/calcite-shell-panel';
import '@esri/calcite-components/dist/components/calcite-action';
import '@esri/calcite-components/dist/components/calcite-button';
import '@esri/calcite-components/dist/components/calcite-switch';
import '@esri/calcite-components/dist/components/calcite-action-bar';
import '@esri/calcite-components/dist/components/calcite-tabs';
import '@esri/calcite-components/dist/calcite/calcite.css';
import {
  CalciteShell,
  CalciteShellPanel,
  CalciteActionBar,
  CalciteAction,
  CalciteSwitch,
  CalciteTabs,
  CalcitePanel,
  CalciteList,
  CalciteListItem,
  CalciteButton,
} from '@esri/calcite-components-react';
import Chart from './components/Chart';
import { dropdownData } from './dropdownData';
import {
  floorsLayer,
  stColumnLayer,
  stFoundationLayer,
  stFramingLayer,
  wallsLayer,
  columnsLayer,
  buildingLayer,
} from './layers';
import TimeSlider from './components/TimeSlider';
import { dateUpdate, zoomToLayer } from './Query';

function App() {
  const [asOfDate, setAsOfDate] = useState<undefined | any | unknown>(null);

  const mapDiv = useRef(null);
  const layerListDiv = useRef<HTMLDivElement | undefined | any>(null);

  // For Calcite Design
  const calcitePanelBasemaps = useRef<HTMLDivElement | undefined | any>(null);
  const [activeWidget, setActiveWidget] = useState<undefined | any | unknown>(null);
  const [nextWidget, setNextWidget] = useState<undefined | any | unknown>(null);

  // Calcite switch for see-through-ground
  const [underground, setUnderground] = useState<boolean>(false);

  const [buildingLayerLoaded, setBuildingLayerLoaded] = useState<any>();

  // For dropdown filter
  const [stationName, setStationName] = useState<null | any>(null);

  useEffect(() => {
    if (activeWidget) {
      const actionActiveWidget = document.querySelector(
        `[data-panel-id=${activeWidget}]`,
      ) as HTMLCalcitePanelElement;
      actionActiveWidget.hidden = true;
    }

    if (activeWidget === 'timeslider') {
      timeSlider.timeExtent.end = start;
      view.ui.remove(timeSlider);
      const queryExpression = 'Station = ' + stationName.value;

      stColumnLayer.definitionExpression = queryExpression;
      stFoundationLayer.definitionExpression = queryExpression;
      stFramingLayer.definitionExpression = queryExpression;
      columnsLayer.definitionExpression = queryExpression;
      floorsLayer.definitionExpression = queryExpression;
      wallsLayer.definitionExpression = queryExpression;
    }

    if (nextWidget !== activeWidget) {
      const actionNextWidget = document.querySelector(
        `[data-panel-id=${nextWidget}]`,
      ) as HTMLCalcitePanelElement;
      actionNextWidget.hidden = false;

      // Reset timeslider when closed
      if (nextWidget === 'timeslider') {
        view.ui.add(timeSlider, 'bottom-leading');
      }
    }
  });

  useEffect(() => {
    if (nextWidget === 'timeslider') {
      view.ui.remove(timeSlider);
    }
  }, [stationName]);

  useEffect(() => {
    buildingLayer.load().then(() => {
      setBuildingLayerLoaded(buildingLayer.loadStatus);
    });
  });

  const handleMunicipalityChange = (obj: any) => {
    setStationName(obj);
    zoomToLayer(stFramingLayer);
  };

  useEffect(() => {
    map.ground.opacity = underground === true ? 0.7 : 1;
    view.environment.atmosphereEnabled = false;
  }, [underground]);

  useEffect(() => {
    dateUpdate().then((response: any) => {
      setAsOfDate(response);
    });

    if (mapDiv.current) {
      map.ground.navigationConstraint = {
        type: 'none',
      };

      view.container = mapDiv.current;
      view.ui.components = [];
      view.ui.empty('top-left');
      basemaps.container = calcitePanelBasemaps.current;
      layerList.container = layerListDiv.current;
    }
  }, []);

  useEffect(() => {
    // Look around animation
    let abort: any = false;
    let center: any = null;
    const play = document.querySelector(`[id=play]`) as HTMLDivElement;
    const pause = document.querySelector(`[id=pause]`) as HTMLDivElement;

    view.when(() => {
      view.ui.add(play, 'top-right');
      view.ui.add(pause, 'top-right');
    });

    function rotate() {
      if (!view.interacting && !abort) {
        play.style.display = 'none';
        pause.style.display = 'block';
        center = center || view.center;
        view.goTo(
          {
            heading: view.camera.heading + 0.2,
            center,
          },
          { animate: false },
        );
        requestAnimationFrame(rotate);
      } else {
        abort = false;
        center = null;
        play.style.display = 'block';
        pause.style.display = 'none';
      }
    } // end
    play.onclick = rotate;
    pause.onclick = function () {
      abort = true;
    };
  }, []);

  // Style CSS
  const customstyles = {
    option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
      // const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isFocused ? '#999999' : isSelected ? '#2b2b2b' : '#2b2b2b',
        color: '#ffffff',
      };
    },

    control: (defaultStyles: any) => ({
      ...defaultStyles,
      backgroundColor: '#2b2b2b',
      borderColor: '#949494',
      color: '#ffffff',
      width: '10rem',
      touchUi: false,
    }),
    singleValue: (defaultStyles: any) => ({ ...defaultStyles, color: '#fff' }),
  };

  return (
    <>
      <CalciteShell>
        <CalciteTabs slot="panel-end" layout="center" scale="l">
          {buildingLayerLoaded === 'loaded' ? (
            <Chart station={!stationName ? '' : stationName.name} />
          ) : (
            <div></div>
          )}
        </CalciteTabs>
        <header
          slot="header"
          id="header-title"
          style={{
            display: 'flex',
            width: '100%',
            height: '70px',
            padding: '0 1rem',
            borderStyle: 'solid',
            borderWidth: 1,
          }}
        >
          <img
            src="https://EijiGorilla.github.io/Symbols/Projec_Logo/DOTr_Logo_v2.png"
            alt="DOTr Logo"
            height={'55px'}
            width={'55px'}
            style={{ marginBottom: 'auto', marginTop: 'auto' }}
          />
          <b className="headerTitle">N2 STATION STRUCTURE</b>
          <div className="date">{!asOfDate ? '' : 'As of ' + asOfDate}</div>

          <div className="dropdownFilterLayout">
            <b style={{ color: 'white', fontSize: '1rem', margin: 'auto', paddingRight: '3%' }}>
              Station
            </b>
            <Select
              placeholder="Select Station"
              value={stationName}
              options={dropdownData}
              onChange={handleMunicipalityChange}
              getOptionLabel={(x: any) => x.name}
              styles={customstyles}
            />
          </div>

          <img
            src="https://EijiGorilla.github.io/Symbols/Projec_Logo/GCR LOGO.png"
            alt="GCR Logo"
            height={'50px'}
            width={'70px'}
            style={{
              marginBottom: 'auto',
              marginTop: 'auto',
              marginLeft: 'auto',
              marginRight: '3%',
            }}
          />
        </header>
        {/* Calcite Action Panel */}
        <CalciteShellPanel
          width-scale="1"
          slot="panel-start"
          position="start"
          id="left-shell-panel"
          displayMode="dock"
        >
          <CalciteActionBar slot="action-bar">
            <CalciteAction
              data-action-id="layers"
              icon="layers"
              text="Layers"
              id="layers"
              //textEnabled={true}
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="basemaps"
              icon="basemap"
              text="Basemaps"
              id="basemaps"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="timeslider"
              icon="clock"
              text="Timeslider"
              id="timeslider"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="information"
              icon="information"
              text="Information"
              id="information"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>
          </CalciteActionBar>

          <CalcitePanel
            heading="Layers"
            height-scale="l"
            width-scale="l"
            data-panel-id="layers"
            style={{ width: '18vw' }}
            hidden
          >
            <div id="layers-container" ref={layerListDiv}></div>
          </CalcitePanel>

          <CalcitePanel
            heading="Basemaps"
            height-scale="l"
            data-panel-id="basemaps"
            style={{ width: '18vw' }}
            hidden
          >
            <div id="basemap-container" ref={calcitePanelBasemaps}></div>
          </CalcitePanel>

          <CalcitePanel
            class="timeslider-panel"
            height-scale="s"
            data-panel-id="timeslider"
            hidden
          ></CalcitePanel>

          <CalcitePanel heading="Description" data-panel-id="information" hidden>
            {nextWidget === 'information' ? (
              <div className="informationDiv">
                <ul>
                  <li>
                    You can <b>filter station structures</b> by stations using a dropdown list in
                    the header panel.
                  </li>
                  <br />
                  <li>
                    You can view either <b>Complete</b> or <b>Incomplete</b> progress on individual
                    structural components over the map. Please click it in the chart series.
                    <br />
                    <li>
                      To reset the chart filtering, please double-lick the{' '}
                      <b>'Reset Chart Filter'</b> button.
                    </li>
                  </li>
                  <br />

                  <li>
                    Click/unclick widgets icon for viewing Layer list, Legend, and Basemaps in the
                    action panel.
                  </li>
                </ul>
              </div>
            ) : (
              <div className="informationDiv" hidden></div>
            )}
          </CalcitePanel>
        </CalciteShellPanel>
        <div
          className="groundSwitchDiv"
          style={{
            position: 'fixed',
            zIndex: 1,
            bottom: 10,
            right: '23%',
            color: 'white',
            backgroundColor: '#2b2b2b',
            paddingLeft: 5,
            paddingRight: 5,
            paddingTop: 4,
            paddingBottom: 4,
          }}
        >
          Ground: {''}
          On{' '}
          <CalciteSwitch
            onCalciteSwitchChange={(event: any) => setUnderground(event.target.checked)}
          ></CalciteSwitch>{' '}
          Off
        </div>

        <CalciteButton iconEnd="play" id="play"></CalciteButton>
        <CalciteButton iconEnd="pause" id="pause" style={{ display: 'none' }}></CalciteButton>

        <div className="mapDiv" ref={mapDiv}></div>
        {/* time slider widget */}
        {nextWidget === 'timeslider' && nextWidget !== activeWidget ? (
          <TimeSlider station={!stationName ? '' : stationName.name} />
        ) : (
          ''
        )}
      </CalciteShell>
    </>
  );
}

export default App;
