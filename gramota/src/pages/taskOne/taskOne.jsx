import { Link } from "react-router-dom"
import mouse from "./mouse.png"

function TaskOne(props) {

    function NextClick(){
        window.location.assign('http://localhost:5173/taskOne/1');
    }

    return (
        <>
            <div className='warp'>
                <div className='warp warp__taskone'>
                    <div className='card card__taskglobal'>
                        <div className='mainpage marginpage__task'>
                            <div style={{ position: 'relative' }}>
                                <img src={mouse} />
                                <button className='btn mousebtn__lkm'></button>
                                <button className='btn mousebtn__pkm'></button>
                                <button className='btn mousebtn__ckm'></button>
                                <button className='btn mousebtn__four'></button>
                            </div>
                            <div className='card_warp1'>
                                <div className='card card__task'>
                                    <h1>{props.title}</h1>
                                    <div className='card__descr'>{props.descr}</div>
                                    <button className="btn active" onClick={NextClick}>Далее</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskOne