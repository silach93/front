import kursor from "./kursor.jpg"

function TaskOne4(props) {

    function BackClick() {
        window.location.assign('http://localhost:5173/taskOne/3');
    }
    function NextClick() {
        window.location.assign('http://localhost:5173/taskOne/game');
    }

    return (
        <>
            <div className='warp'>
                <div className='warp warp__taskone'>
                    <div className='card card__taskglobal'>
                        <div className='mainpage marginpage__task'>
                            <div className='card_warp1'>
                                <div className='card card__task'>
                                    <h1>{props.title}</h1>
                                    <div className='card__descr'>{props.descr}</div>
                                    <button onClick={BackClick()}>назад</button>
                                    <button onClick={NextClick()}>Далее</button>
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