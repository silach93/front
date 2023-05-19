

function Registr() {

    return (
        <>
            <div className='warp warp__taskone'>
                <div className='mainpage mainpage__task'>
                    <div className='card card__reg'>
                        <div style={{ padding: '0 10%' }}>
                            <div>
                                <label>логин:</label>
                                <input></input>
                            </div>
                            <div>
                                <label>фамилия:</label>
                                <input></input>
                            </div>
                            <div>
                                <label>имя:</label>
                                <input></input>
                            </div>
                            <div>
                                <label>отчество:</label>
                                <input></input>
                            </div>
                            <div>
                                <label>пароль:</label>
                                <input></input>
                            </div>
                            <div>
                                <label>повтор пароля:</label>
                                <input></input>
                            </div>
                            <button className='btn btn__regpage'>
                                Зарегестрироваться
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registr