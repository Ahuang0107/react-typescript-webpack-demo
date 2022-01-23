import * as React from "react";
import {render} from "react-dom";
import './style.css';
import './style.scss';
import './style.less';

render(
    <>
        <div className="custom-div">
            <h1 className="custom-h1">welcome</h1>
        </div>
        <h1 className="custom-h1">welcome</h1>
        <p className="custom-p">welcome</p>
    </>,
    document.getElementById("react-page")
)
