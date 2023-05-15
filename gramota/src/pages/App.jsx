import RoundBox from '../components/ui/roundBox'
import { text } from './text.data'

function App() {
  return (
    <div className={'container'}>
      <h1 className={'title'}>Куᴘс: «повышᴇниᴇ интᴇᴘнᴇт-гᴘᴀмотности»</h1>
      <div className={'card-wrap'}>
        {
          text.length ? text.map(text =>
            <RoundBox key={text.id} text={text} />
          ) : <p>Ошибка</p>
        }
      </div>
      
    </div>
  )
}

export default App