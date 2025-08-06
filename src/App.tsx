import { Line, LineChart } from 'recharts';
import type { LineProps } from 'recharts';
import './App.css';

const data = [
  { name: 'a', value: 100 },
  { name: 'b', value: 200 },
  { name: 'c', value: 300 },
  { name: 'd', value: 150 },
  { name: 'e', value: 385 },
  { name: 'f', value: 300 },
  { name: 'g', value: 50 }
];

export default function App({ onMouseDown }: { onMouseDown?: LineProps['onMouseDown'] }) {
  return (
    <div className="card" data-testid="foo">
      <LineChart width={800} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line dataKey="value" onMouseDown={onMouseDown} />
      </LineChart>
    </div>
  )
};
