import './Feedback.css'
import Hexagon from '../../components/Hexagon/Hexagon'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { userSelectScore, setIsSubmitted } from '../../src/store/slice/feedback';

function Feedback() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const selectedScore = useSelector((state: any) => state.feedbackSlice.selectedScore)
  const isSubmitted = useSelector((state: any) => state.feedbackSlice.isSubmitted)
  async function submitScore() {
    if (selectedScore) {
      try {
        await axios.post('http://localhost:3000/feedback/score', {
          score: selectedScore
        })
        dispatch(userSelectScore(null))
        dispatch(setIsSubmitted(true))
      } catch(err) {
        console.log(err)
      }
    }

  }

  return (
    <>
      <div className='feedback-layout'>
        <div className='feedback-container'>
          <div className='rate-desc-container'>
            <p>Awesome</p>
            <p>Good</p>
            <p>Ok</p>
            <p>Not great</p>
            <p>Terrible</p>
          </div>
          <div className='hexagon-container'>
            <Hexagon/>
          </div>
          <div className='chosen-container'>
          {selectedScore?
           <div className={'avatar-container' +  ' pick' + selectedScore}>
              <div className='avatar-side-tick'></div>
              <div className='avatar-border'>
                <img className='avatar' src='/images/cartoon_avatar.png'></img>
              </div>
            </div> 
          : <></>}
            
          </div>
        </div>
        <div className='button-container'>
          <button className={(selectedScore? '' : 'disabled') + (isSubmitted? ' submitted': '')} onClick={submitScore}>{isSubmitted? 'Submitted' : 'Submit'}</button>
          <button onClick={() => navigate('./result')}>Generate Report</button>
        </div>
      </div>
    </>
  )
}

export default Feedback
