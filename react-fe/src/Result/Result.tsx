import { useState, useLayoutEffect } from 'react'
import './Result.css'
import Chart from '../../components/Chart/Chart.tsx'

function Result() {
  const [count, setCount] = useState(0)
  const [feedback, setFeedback] = useState([{ score: 11 }, { score: 5 }, { score: 7 }, { score: 7 }, { score: 10 }, { score: 11 }, { score: 5 }, { score: 7 }, { score: 7 }, { score: 10 }])
  const [mean, setMean] = useState(0)
  const [max, setMax] = useState(0)
  const [min, setMin] = useState(0)
  const [sd, setSd] = useState(0)

  useLayoutEffect(() => {
    let sum = 0
    let tempMax = feedback[0].score
    let tempMin = feedback[0].score
    feedback.forEach(({ score }) => {
      sum += score
      if (score > tempMax) {
        tempMax = score
      }

      if (score < tempMin) {
        tempMin = score
      }
    })

    const meanVal = sum / feedback.length
    setMax(tempMax)
    setMin(tempMin)
    setMean(meanVal)
    const sdVal = Math.sqrt(feedback.map(({ score }) => Math.pow(score - meanVal, 2)).reduce((a, b) => a + b) / feedback.length)
    setSd(Math.round( sdVal * 10 + Number.EPSILON ) / 10)
  }, []);




  return (
    <>
      <div className='result-container'>
        <div className='chart-container'>
          <Chart data={feedback} />
        </div>
        <div className='analysis-container'>
          <p>Key trend data</p>
          <ul className="analysis-pointer">
            <li>
              <p className='analysis-title'>Trend in period since last session</p>
              <p className='analysis-desc'>Across {feedback.length} check-ins the overall feeling score is {mean}, with a low of {min}, high of {max} and standard deviation of {sd}</p>
            </li>
            <li>
              <p className='analysis-title'>Trend vs overall</p>
              <p className='analysis-desc'>The Overall trend is slightly negative. with a decline of {sd} seen across the {feedback.length} check-ins.</p>
            </li>
          </ul>
        </div>
      </div>
      
    </>
  )
}

export default Result
