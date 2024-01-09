import { timeSlider } from '../Scene';
import {
  floorsLayer,
  stColumnLayer,
  stFoundationLayer,
  stFramingLayer,
  wallsLayer,
  columnsLayer,
} from '../layers';
import '../App.css';
import { dropdownData } from '../dropdownData';

const TimeSlider = (props: any) => {
  timeSlider.watch('timeExtent', (timeExtent: any) => {
    const find = dropdownData.find((emp: any) => emp.name === props.station);
    const stationValue = find?.value;

    // Query and Filter
    const dateFilterExpression =
      "target_date <= date'" +
      timeExtent.end.getFullYear() +
      '-' +
      (timeExtent.end.getMonth() + 1) +
      '-' +
      timeExtent.end.getDate() +
      "'";
    const queryExpression = 'Station = ' + stationValue + ' AND ' + dateFilterExpression;

    stColumnLayer.definitionExpression = queryExpression;
    stFoundationLayer.definitionExpression = queryExpression;
    stFramingLayer.definitionExpression = queryExpression;
    columnsLayer.definitionExpression = queryExpression;
    floorsLayer.definitionExpression = queryExpression;
    wallsLayer.definitionExpression = queryExpression;
  });

  return <></>;
};

export default TimeSlider;
