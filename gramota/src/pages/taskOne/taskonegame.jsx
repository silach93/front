import Board from '../../components/ui/Board/index.jsx'

function TaskGameOne() {

    return (
        <>

            <div className='warp warp__game1'>
                <div className='card__game'>
                    <h1>
                        пᴘᴀвилᴀ игᴘы
                    </h1>
                    <p className='gamedecr'>
                        На экране поле с шариками.
                        Необходимо найти шарик другого цвета,
                        навести на него курсор и кликнуть по
                        нему левой кнопкой мыши.
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