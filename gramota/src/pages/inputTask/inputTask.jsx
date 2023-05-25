import { useEffect, useRef, useState } from "react";
import Keyboard from "react-simple-keyboard";
import russian from "simple-keyboard-layouts/build/layouts/russian";

import "react-simple-keyboard/build/css/index.css";

const useCountTime = (point) => {


    const [timeCount, setTimeCount] = useState(0);
    const [timeout, _setTimeOut] = useState()

    countTime = () => {
        setTimeCount((prev) => prev + 1);
    }

    const runTimer = () => {
        if(timeCount === 20) return
        const timer = setTimeout(() => {
            if (props.text.length === input.length && timeCount <= 15) {
                setPoint(point + 30);
                //clearInterval(t);
                // if(point === 100){}
            }
            console.log(timeCount);
            countTime();
        }, 1000)
        _setTimeOut(timer)
    }

    useEffect(
        () => {
            runTimer()
        },
        [timeCount]);
}


export default function InputTask(props) {
    const [input, setInput] = useState("");
    const [layout, setLayout] = useState("");
    const keyboard = useRef();


    const charArray = props.text.split('');
    let [Lettercount, setLettercount] = useState(0);
    const [point, setPoint] = useState(0);


    const handleShift = () => {
        const newLayoutName = layout === "default" ? "shift" : "default";
        setLayout(newLayoutName);
    };

    const onKeyPress = button => {
        console.log("Button pressed", button);

        if (button === "{shift}" || button === "{lock}") handleShift();
    };



    const onChangeInput = event => {
        const input = event.target.value;
        if (charArray[Lettercount] === input.substr(input.length - 1)) {
            setPoint(point + 1)
            setLettercount(Lettercount + 1);
            setInput(input);
            console.log(input, Lettercount)
            return Lettercount;
        }
        if (point > 0) setPoint(point - 1)
        return Lettercount;
    };



    return (
        <>
            <div className="warp warp__task">
                <div className='mainpage'>
                    <div className='card card__two'>
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
                            <div style={{ padding: '15px', width: '850px' }}>
                                <input type="text" value={props.text}
                                    className="input__textklava"
                                    readOnly={true}
                                />
                                <input
                                    className="input__klava"
                                    value={input}
                                    placeholder={"Нажмите на поле чтобы начать"}
                                    onChange={onChangeInput}
                                    onFocus={useCountTime}
                                />
                                <Keyboard
                                    keyboardRef={r => (keyboard.current = r)}
                                    layoutName={layout}
                                    onKeyPress={onKeyPress}
                                    {...russian}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
