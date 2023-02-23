import { useCallback, useEffect, useState } from 'react';

export default function Six() {
  const [bro, setBro] = useState("女");
 
  useEffect(()=>{
    console.log(bro)
  })
  return (
    <div>
      <p>{bro}</p>
    </div>
  );
}
