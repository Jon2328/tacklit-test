function DownwardHex(props: { score: number, clickFunc: Function}) {
  return (
  <div className={'hexagon-downward hexagon' + props.score} onClick={() => {props.clickFunc(props.score)}}>
    <div className='hexagon-downward-top'></div>
    <div className='hexagon-downward-body'>
      <p>{props.score}</p>
    </div>
    <div className='hexagon-downward-bot'></div>
  </div>
  )
}

export default DownwardHex
