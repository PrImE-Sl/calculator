import React from 'react';

const Buttons = ({ onClick }) => {

    const clickHandler = (e) => {
        onClick(e.target.name)
    }
    return (
        <div className="button fs-3 fww" >

            <button name="(" onClick={clickHandler} className="btn btn-info mx-1  marginB">(</button>
            <button name=")" onClick={clickHandler} className="btn btn-info me-1 marginB">)</button>
            <button name="CE" onClick={clickHandler} className="btn btn-info me-1 marginB">CE</button>
            <button name="C" onClick={clickHandler} className="btn btn-danger marginB">C</button><br />

            <button name="1" onClick={clickHandler} className="btn btn-outline-secondary mx-1 marginB">1</button>
            <button name="2" onClick={clickHandler} className="btn btn-outline-secondary me-1 marginB">2</button>
            <button name="3" onClick={clickHandler} className="btn btn-outline-secondary me-1 marginB">3</button>
            <button name="+" onClick={clickHandler} className="btn btn-info marginB">+</button><br />

            <button name="4" onClick={clickHandler} className="btn btn-outline-secondary mx-1 marginB">4</button>
            <button name="5" onClick={clickHandler} className="btn btn-outline-secondary me-1 marginB">5</button>
            <button name="6" onClick={clickHandler} className="btn btn-outline-secondary me-1 marginB">6</button>
            <button name="-" onClick={clickHandler} className="btn btn-info marginB">-</button><br />

            <button name="7" onClick={clickHandler} className="btn btn-outline-secondary mx-1 marginB">7</button>
            <button name="8" onClick={clickHandler} className="btn btn-outline-secondary me-1 marginB">8</button>
            <button name="9" onClick={clickHandler} className="btn btn-outline-secondary me-1 marginB">9</button>
            <button name="*" onClick={clickHandler} className="btn btn-info marginB">x</button><br />

            <button name="0" onClick={clickHandler} className="btn btn-outline-secondary mx-1 ">0</button>
            <button name="." onClick={clickHandler} className="btn btn-info me-1 ">.</button>
            <button name="=" onClick={clickHandler} className="btn btn-primary me-1 ">=</button>
            <button name="/" onClick={clickHandler} className="btn btn-info ">÷</button><br />
        </div>
    );
}

export default Buttons
