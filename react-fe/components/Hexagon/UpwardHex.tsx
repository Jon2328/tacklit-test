function UpwardHex(props: { score: number, clickFunc: Function}) {
  return (
    <div className={'hexagon-upward hexagon' + props.score} onClick={() => {props.clickFunc(props.score)}}>
      <div className='hexagon-upward-top'></div>
      <div className='hexagon-upward-body'>
        <p>{props.score}</p>
      </div>
      <div className='hexagon-upward-bot'></div>
    </div>
  )
}

export default UpwardHex
