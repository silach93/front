import Board from '../../components/ui/Board/index.jsx'

function TaskGameOne(props) {

    return (
        <>

            <div className='warp warp__game1'>
                <div className='card__game'>
                    <h1>
                        {props.title}
                    </h1>
                    <p className='gamedecr'>
                        {props.descr}
                    </p>
                </div>
                <div className='pagegame'>
                    <div className='card_wrap1'>
                        <Board />
                    </div>
                </div>
            </div>
        </>
    )
}
export default TaskGameOne