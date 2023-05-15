// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
 import { useMemo } from 'react'
import './App.css'
import RoundBox from '../components/ui/roundbox.jsx'
import { text } from './text.data'



function App() {
  // const [count, setCount] = useState(0)
   const Render = useMemo(() => text.filter(),[]);
  
  return (
    <>
    <div style={{backgroundColor: '#a2dac6aa'}}>Куᴘс: «повышᴇниᴇ интᴇᴘнᴇт-гᴘᴀмотности»</div>
    <div style={{display: 'flex'}}>
    {Render.length ? Render.map(text =>
    <RoundBox key={text.id} text={text} /> 
     ) : <p>Ошибка</p>//console.error(error)
    } 
    </div>


    
      {/* <div >
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
