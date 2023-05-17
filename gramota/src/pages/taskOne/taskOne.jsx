import mouse from "./mouse.png"

function TaskOne(props) {
    
    return (
        <>
            <div className='warp warp__taskone'>
                <div className='mainpage'>
                    <div style={{position:'relative'}}>
                        <img src={mouse} />
                        <button className='btn mousebtn__lkm'></button>
                        <button className='btn mousebtn__pkm'></button>
                        <button className='btn mousebtn__ckm'></button>
                        <button className='btn mousebtn__four'></button>
                    </div>
                    <div className='card card__task'>
                        <h1>{props.title}</h1>
                        <div className='card__descr'>{props.descr}</div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default TaskOne