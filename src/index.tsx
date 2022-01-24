import * as React from "react";
import {render} from "react-dom";
import './style.css';
import './style.scss';
import './style.less';
import './font.css';
import {CssImageTest} from "./component";

// test comments
console.log("start");

render(
    <>
        <div className="custom-div">
            <h1 className="custom-h1">welcome</h1>
        </div>
        <h1 className="custom-h1">welcome</h1>
        <p className="custom-p">welcome</p>
        <CssImageTest/>
    </>,
    document.getElementById("react-page")
);
