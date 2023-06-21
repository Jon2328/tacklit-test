import { useState } from 'react'
import './Feedback.css'
import Hexagon from '../../components/Hexagon/Hexagon'
import { useDispatch, useSelector } from 'react-redux';

function Feedback() {
  const selectedScore = useSelector((state: any) => state.feedbackSlice.selectedScore)

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
          <button className={selectedScore? '' : 'disabled'}>Submit</button>
          <button>Generate Report</button>
        </div>
      </div>
    </>
  )
}

export default Feedback
