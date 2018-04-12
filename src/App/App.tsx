import * as React from 'react';
var nlp = require('compromise');

import { AppStateType } from './types';
import { AppStyle, HeaderStyle } from './styles';

import ExampleCase from '../data/exampleData/exampleCase';
import Chart, { ChartDataType } from '../components/Chart';
import TextField from '../components/TextField';
import DecisionResults from '../components/DecisionResults';
import TextAnalytics from '../components/TextAnalytics';

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

const doc = nlp(ExampleCase.text);
console.log(
  doc
    .topics()
    .slice(0, 4)
    .out('frequency')
);

/* tslint:disable no-any */
class App extends React.Component<any, AppStateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentCase: 'Paste example case here'
    };
  }

  getValueHandler = (text: string) => {
    console.error(text);
    this.setState({
      currentCase: text
    });
  }

  render(): JSX.Element {
    return (
      <AppStyle>
        <HeaderStyle>
          <img src={logo} alt="logo" />
          <h1>Welcome to EU Fundamentals Crunch</h1>
        </HeaderStyle>
        <h2>Paste example case here</h2>
        <TextField getValue={this.getValueHandler} />
        <TextAnalytics text={this.state.currentCase}/>
        <h2>Example Case:</h2>‚
        <p>{ExampleCase.text}</p>
        <DecisionResults results={results} />
        <Chart data={data} />
      </AppStyle>
    );
  }
}

export { App };
