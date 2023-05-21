import RoundBox from '../../components/ui/roundBox';
import { text } from './text.data';
import { Link } from "react-router-dom";


function Home() {
    return (
        <>
            <div className='warp warp__home'>
                <div className='mainpage mainpage__home'>
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
                                    <Link className='btn active' to="/taskOne"/> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home