import kursor from "./kursor.jpg"
import Btn from "../../components/ui/Button";

function TaskOne4(props) {



    return (
        <>
            <div className='warp'>
                <div className='warp warp__task'>
                    <div className='card card__taskglobal'>
                        <div className='mainpage marginpage__task'>
                            <div className='card_warp1'>
                                <div className='card card__task'>
                                    <h1>{props.title}</h1>
                                    <div className='card__descr'>{props.descr}</div>
                                    <div style={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-between'
                                    }}>
                                    <Btn hf="/taskOne/3" descr="Назад"/>
                                    <Btn hf="/taskOne/game" descr="К игре"/>
                                    </div>
                                </div>
                            </div>
                            <div style={{ position: 'relative' }}>
                                <img src={kursor} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskOne4