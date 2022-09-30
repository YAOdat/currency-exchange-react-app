import React, { useState, useEffect } from "react"
import './Form.css'


function Exchange() {

    const [result, setResult] = useState(0);
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');


    let fromSelectManager = (fromCurrency) => {
        setFrom(fromCurrency.target.value)
    }
    let toSelectManager = (toCurrency) => {
        setTo(toCurrency.target.value)
    }
    // from JOD:

    function JOD2USD(JOD) {
        setResult(JOD * 1.4093)
    }

    function JOD2TL(JOD) {
        setResult(JOD * 26.124)
    }

    function JOD2SAR(JOD) {
        setResult(JOD * 5.297)
    }

    // from USD:

    function USD2JOD(USD) {
        setResult(USD / 1.409)
    }

    function USD2SAR(USD) {
        setResult(USD * 3.758)
    }

    function USD2TL(USD) {
        setResult(USD * 18.539)
    }

    // from SAR:

    function SAR2JOD(SAR) {
        setResult(SAR * 0.189)
    }

    function SAR2USD(SAR) {
        setResult(SAR * 0.266)
    }

    function SAR2TL(SAR) {
        setResult(SAR * 4.935)
    }

    // from TL: 

    function TL2JOD(TL) {
        setResult(TL * 0.0383)
    }

    function TL2USD(TL) {
        setResult(TL * 0.0539)
    }

    function TL2SAR(TL) {
        setResult(TL * 0.2026)
    }


    let convert = (e) => {
        e.preventDefault()
        let enteredAmount = e.target[1].value;
        switch (from !== '') {
            case from === 'jod', to === 'usd':
                JOD2USD(enteredAmount);
                break;

            case from === 'jod', to === 'sar':
                JOD2SAR(enteredAmount);
                break;

            case from === 'jod', to === 'tl':
                JOD2TL(enteredAmount);
                break;

            case from === 'usd', to === 'jod':
                USD2JOD(enteredAmount);
                break;

            case from === 'usd', to === 'sar':
                USD2SAR(enteredAmount);
                break;

            case from === 'usd', to === 'tl':
                USD2TL(enteredAmount);
                break;

            case from === 'sar', to === 'jod':
                SAR2JOD(enteredAmount);
                break;

            case from === 'sar', to === 'usd':
                SAR2USD(enteredAmount);
                break;

            case from === 'sar', to === 'tl':
                SAR2TL(enteredAmount);
                break;

            case from === 'tl', to === 'jod':
                TL2JOD(enteredAmount);
                break;
            case from === 'tl', to === 'usd':
                TL2USD(enteredAmount);
                break;
            case from === 'tl', to === 'sar':
                TL2SAR(enteredAmount);
                break;

        }

    }

    return (
        <div className="main-wrapper">
            <form onSubmit={convert}>
                <div> 
                <div id="base_wrapper"> 

           
                <select id="fromCurrency" onChange={fromSelectManager}>
                    <option value='none'>Select Currency</option>
                    <option value='jod'>Jordanian Dinar</option>
                    <option value='tl'>Turkish Lira</option>
                    <option value='sar'>Saudi Riyal</option>
                    <option value='usd'>US Dollar </option>
                </select>
                <input type='number' id="amout" className="main-input" min="0" />
                </div>
             
                <div id="base_wrapper"> 

                <select id="toCurrency" onChange={toSelectManager}>
                    <option value='none'>Select Currency</option>
                    <option value='jod'>Jordanian Dinar</option>
                    <option value='tl'>Turkish Lira</option>
                    <option value='sar'>Saudi Riyal</option>
                    <option value='usd'>US Dollar </option>
                </select>
                <input type='number' id="amout" className="main-input" value={result} />
                </div>

                <button className="convert-button"> 
                <span></span>
      <span></span>
      <span></span>
      <span></span>
                Convert </button>
                </div>

            </form>

        </div>

    )


}



export default Exchange