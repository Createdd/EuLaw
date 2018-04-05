type ChartDataType = {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}[];

interface ChartPropsType {
  data: ChartDataType;
}

export {
  ChartPropsType,
  ChartDataType,
};
