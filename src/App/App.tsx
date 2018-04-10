import * as React from 'react';

import { AppStateType } from './types';
import { AppStyle, HeaderStyle } from './styles';

import ExampleCase from '../exampleData/exampleCase';
import Chart, { ChartDataType } from '../Chart';
import TextField from '../TextField';
import DecisionResults from '../DecisionResults';

const logo = require('../logo.svg');
const data: ChartDataType = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }
];

const results = '1000';

/* tslint:disable no-any */
class App extends React.Component<any, AppStateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentUser: 'Paste example case here'
    };
  }
  render(): JSX.Element {
    return (
      <AppStyle>
        <HeaderStyle>
          <img src={logo} alt="logo" />
          <h1>Welcome to EU Fundamentals Crunch</h1>
        </HeaderStyle>
        <h2>{this.state.currentUser}</h2>
        <TextField />
        <DecisionResults results={results}/>
        <Chart data={data} />
        <h2>Example Case:</h2>
        <p>{ExampleCase.text}</p>
      </AppStyle>
    );
  }
}

export { App };
