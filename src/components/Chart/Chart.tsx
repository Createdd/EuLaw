import * as React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

import { ChartPropsType } from './types';
import { ChartStyle } from './styles';

const Chart: React.StatelessComponent<ChartPropsType> = (
  props: ChartPropsType
) => (
  <ChartStyle>
    <LineChart
      width={600}
      height={300}
      data={props.data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  </ChartStyle>
);

export { Chart };
