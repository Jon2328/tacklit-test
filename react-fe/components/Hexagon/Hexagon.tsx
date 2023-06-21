import './Hexagon.css'
import UpwardHex from './UpwardHex'
import DownwardHex from './DownwardHex'
import FullHex from './FullHex'
import { useDispatch } from 'react-redux';
import { userSelectScore } from '../../src/store/slice/feedback';


function Hexagon() {
  const dispatch = useDispatch()
  const downwardHexagon = [4, 3, 2, 1]
  const fullHexagon = [5]
  const upwardHexagon = [11, 10, 9, 8, 7, 6]

  function selectScore(score: number) {
    dispatch(userSelectScore(score))
  }
  
  return (
    <div>
      {upwardHexagon.map(hex => {
        return <UpwardHex key={hex} score={hex} clickFunc={selectScore}/>
      })}
      {fullHexagon.map(hex => {
        return <FullHex key={hex} score={hex} clickFunc={selectScore}/>
      })}
      {downwardHexagon.map(hex => {
        return <DownwardHex key={hex} score={hex} clickFunc={selectScore}/>
      })}
    </div>
  )
}



export default Hexagon
