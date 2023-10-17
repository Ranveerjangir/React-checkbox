import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function checkbox() {
  const [click, setClick] = useState([]);
  const [leftData, setleftData] = useState([{id:"checkbox1",value:"checkbox1"},{id:"checkbox2" ,value:"checkbox2"}])

  const handleChange = (e) => {
    if (e.target.checked === true) {
      setClick([
    ...click,
        {id: e.target.id, value:e.target.value}
      ]);
    }
    
  else {
      setClick(click.filter((task) => {
        return task !== e.target.id;
      })
      )
    }
  }
 
  const button= () => {
    setleftData([...leftData, ...click])
    setrightData(rightData.filter((task) =>{
      return !click.some((item) => item.id === task.id)
    }))
    setClick([])
  }

  return (

    <>
        <button onClick={button}>change</button>
        <div className='box'>
          <ul>
            {
              leftData.map((item, index) => {
                return (
                    <li key={item.id}>
                    <input type="checkbox" id={item.id} value={item.value} onChange={handleChange} />
                    {item.value}
                    </li>
                     )
              })}
          </ul>
        </div>
    </>
  )
}
export default checkbox
