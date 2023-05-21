import Klava from '../../components/ui/keyboard/index';

function InputTask() {

    return (
        <>
            <div className="warp warp__task">
                <div className='mainpage'>
                    <div className='card card__task'
                        style={{
                            height: '30vh'
                        }}>
                        <h1 className='card__title'>Правила задания</h1>
                        <a style={{
                            fontSize: '20px'
                        }}>
                            Сейчас мы научимся печатать.
                            Это одно из очень полезных умений,
                            когда ты можешь печатать смотря
                            на экран, не отвлекаясь на клавиатуру
                        </a>
                    </div>
                    <div>
                        <div>
                            
                        </div>
                            <div className='container-klava'>
                                <Klava />
                            </div>
                       
                    </div>
                </div>
            </div>
        </>
    )
}
export default InputTask;