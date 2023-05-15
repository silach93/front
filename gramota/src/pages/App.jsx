import RoundBox from '../components/ui/roundBox'
import { text } from './text.data'
import './App.css'

function App() {
  return (
    <>
      <div style={{ backgroundColor: '#a2dac6aa' }}>Куᴘс: «повышᴇниᴇ интᴇᴘнᴇт-гᴘᴀмотности»</div>
      <div style={{ display: 'flex' }}>
        {
          text.length ? text.map(text =>
            <RoundBox key={text.id} text={text} />
          ) : <p>Ошибка</p>
        }
      </div>
    </>
  )
}

export default App