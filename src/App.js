import { useCallback, useEffect, useState, useMemo, useRef } from 'react';
import Bro from './bro';
import Six from './Six';
export default function App() {

  const [number, setNumber] = useState(0)
  const [name, setName] = useState("lili")
  const curRef = useRef(null)
  const curRef2 = useRef("2")
  useEffect(() => {
    console.log(curRef.current)
  }, [])
  useEffect(()=>{
    console.log("hello");
  })
  function toUpdate(){
    setNumber(number + 1); 
    setNumber(number + 2);
    setName("wuyz")
  }
  return(
    <div ref={curRef} >
      <p>{number}</p>
      <p>{name}</p>
      <span ref={curRef2}></span>
      <button onClick={() => { 
        toUpdate() }} >number++</button>
    </div>)
}
