import Klava from '../../components/ui/keyboard/index';

function InputTask() {

    return (
        <>
            <div className="warp warp_task">
                <div className='card'>
                    <h1 className='card__title'>Правила задания</h1>
                    <a></a>
                </div>
                <div className='container-klava'>
                    <Klava />
                </div>
            </div>
        </>
    )
}
export default InputTask;