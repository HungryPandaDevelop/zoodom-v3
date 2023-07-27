import { useState } from 'react'

const Opisanie = ({ text }) => {
  const [showText, setShowText] = useState(false);
  const showAll = () => {
    setShowText(!showText);
  }
  let lengthText = text.length;

  return (
    <>
      <div>
        {lengthText > 100 ? showText ? text : text.slice(0, 100) + "..." : text}


      </div>
      {lengthText > 100 && (<span className='link' onClick={showAll}>{showText ? 'Скрыть' : 'Далее..'}</span>)}

    </>
  )
}

export default Opisanie
