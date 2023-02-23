import { useCallback, useEffect, useState } from 'react';

export default function Bro() {
  const [bro, setBro] = useState("男");
 
  useEffect(()=>{
    console.log(bro)
  })
  return (
    <div>
      <p>{bro}</p>
    </div>
  );
}
