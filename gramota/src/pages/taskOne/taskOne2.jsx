import mouse from "./mouse.png"
import Btn from "../../components/ui/Button";

function TaskOne2(props) {

    function BackClick(){
        window.location.assign('http://localhost:5173/taskOne/1');
    }
    function NextClick(){
        window.location.assign('http://localhost:5173/taskOne/3');
    }

    return (
        <>
            <div className='warp'>
                <div className='warp warp__task'>
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
                                    <Btn hf="/taskOne/1" descr="Назад"/>
                                    <Btn hf="/taskOne/3" descr="Далее"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskOne2