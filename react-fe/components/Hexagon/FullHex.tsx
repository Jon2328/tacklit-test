import React from 'react'

function FullHex(props: { score: number, clickFunc: Function}) {
  return (
    <div className={'hexagon-full hexagon' + props.score} onClick={() => {props.clickFunc(props.score)}}>
      <div className='hexagon-full-top'></div>
      <div className='hexagon-full-body'>
        <p>{props.score}</p>
      </div>
      <div className='hexagon-full-bot'></div>
    </div>
  )
}

export default FullHex
