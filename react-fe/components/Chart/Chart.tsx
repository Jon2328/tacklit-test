import './Chart.css'
import {
  LineChart,Legend, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'

function Chart(props: {data: Array<number>}) {
  const formattedScore = props.data.map(score => { return { score } })
  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
      <LineChart width={375} height={250} data={formattedScore}
        margin={{ top: 20, right: 30, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="score" stroke="#8884d8" />
      </LineChart>
      </ResponsiveContainer>
    </>
  )
}

export default Chart
