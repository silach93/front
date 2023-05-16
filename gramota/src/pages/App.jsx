import RoundBox from '../components/ui/roundBox'
import { text } from './text.data'

function App() {
  // function next(){

  // }

  return (
    <div>
      <div className='mainpage'>
        <div className='maintitle'>
          <h1 style={{ textAlign: 'center'}}>доҕᴘо пожᴀловᴀть!</h1>
          <h1 className={'title'}>Куᴘс: «повышᴇниᴇ интᴇᴘнᴇт-гᴘᴀмотности»</h1>
        </div>
        <div className={'container'}>
          <div className={'card-wrap'}>
            {
              text.length ? text.map(text =>
                <RoundBox key={text.id} text={text} />
              ) : <p>Ошибка</p>
            }
            <div className={'card'}>
              <h5 className={'card__title'}>Пᴇᴘᴇход к оҕучᴇнию</h5>
              <button className='mainbtn' onClick="next"></button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App