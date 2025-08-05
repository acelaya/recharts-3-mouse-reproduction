import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './App.css';
import type { CategoricalChartFunc } from 'recharts/types/chart/types';

const data = [
  { name: 'a', value: 100 },
  { name: 'b', value: 200 },
  { name: 'c', value: 300 },
  { name: 'd', value: 150 },
  { name: 'e', value: 385 },
  { name: 'f', value: 300 },
  { name: 'g', value: 50 }
];

export default function App({ onMouseDown }: { onMouseDown?: CategoricalChartFunc }) {
  return (
    <div className="card" data-testid="foo">
      <LineChart width={800} height={400} data={data} onMouseDown={onMouseDown}>
        <XAxis dataKey="name" />
        <YAxis dataKey="value" />
        <Tooltip />
        <CartesianGrid strokeOpacity={0.1} />
        <Line dataKey="value" />
      </LineChart>
    </div>
  )
};
