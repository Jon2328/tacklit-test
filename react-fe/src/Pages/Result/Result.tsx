import { useState, useEffect } from 'react'
import './Result.css'
import Chart from '../../../components/Chart/Chart.tsx'
import { useDispatch, useSelector } from 'react-redux';
import { getFeedbackList, setIsSubmitted } from '../../store/slice/feedback.ts';
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function Result() {
  const feedbackList = useSelector((state: any) => state.feedbackSlice.feedbackList)
  const navigate = useNavigate()
  const dispatch = useDispatch<any>()
  const [mean, setMean] = useState(0)
  const [max, setMax] = useState(0)
  const [min, setMin] = useState(0)
  const [sd, setSd] = useState(0)
  const [isReset, setIsReset] = useState(false)
  
  useEffect(() => {
    let sum = 0
    let tempMax = feedbackList[0]
    let tempMin = feedbackList[0]
    feedbackList.forEach((score: number) => {
      sum += score
      if (score > tempMax) {
        tempMax = score
      }

      if (score < tempMin) {
        tempMin = score
      }
    })

    const meanVal = sum / feedbackList.length
    setMax(tempMax)
    setMin(tempMin)
    setMean(Math.round( meanVal * 10 + Number.EPSILON ) / 10)
    const sdVal = Math.sqrt(feedbackList.map(( score: number) => Math.pow(score - meanVal, 2)).reduce((a: number, b: number) => a + b, 0) / feedbackList.length)
    setSd(Math.round( sdVal * 10 + Number.EPSILON ) / 10)
  }, [feedbackList]);

  useEffect(() => {
    dispatch(getFeedbackList())
  }, [])

  async function resetData () {
    try {
      await axios.delete('http://localhost:3000/feedback/reset-score')
      dispatch(getFeedbackList())
      setIsReset(true)
      setTimeout(() => {
        setIsReset(false)
      }, 5000);
    } catch(err) {
      console.log(err)
    }
  }

  function navigateToFeedback () {
    dispatch(setIsSubmitted(false))
    navigate('/')
  }

  return (
    <>
      <div className='result-container'>
        <div className='chart-container'>
          <Chart data={feedbackList} />
        </div>
        <div className='analysis-container'>
          <p>Key trend data</p>
          <ul className="analysis-pointer">
            <li>
              <p className='analysis-title'>Trend in period since last session</p>
              <p className='analysis-desc'>Across {feedbackList.length} check-ins the overall feeling score is {mean}, with a low of {min}, high of {max} and standard deviation of {sd}</p>
            </li>
            <li>
              <p className='analysis-title'>Trend vs overall</p>
              <p className='analysis-desc'>The Overall trend is slightly negative. with a decline of 0.0 seen across the {feedbackList.length} check-ins.</p>
            </li>
          </ul>
          <button onClick={navigateToFeedback}>Back</button>
          <button className={'reset-button' + (isReset? ' reset' : '')} onClick={resetData}>Reset Data</button>
        </div>
        
      </div>
      
    </>
  )
}

export default Result
