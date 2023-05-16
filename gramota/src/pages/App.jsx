import RoundBox from '../components/ui/roundBox'
import { text } from './text.data'
import {BroserRouter as Router, Switch, Route, Link} from "react-router-dom"
import taskOne from '../components/screens/taskOne'

function App() {

  return (
    <>
      <div className='mainpage'>
        <div className='maintitle'>
          <h1 style={{ textAlign: 'center' }}>доҕᴘо пожᴀловᴀть!</h1>
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
              <a href="/taskOne">
                <button className='mainbtn' ></button>
              </a>
            </div>
          </div>

        </div>
      </div>
      <Router>
        <Switch>
          <Route exact path="/" component={taskOne} />
        </Switch>
      </Router>
    </>
  )
}

export default App