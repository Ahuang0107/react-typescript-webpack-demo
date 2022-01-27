import * as React from "react";
import {render} from "react-dom";
import './style.css';
import './style.scss';
import './style.less';
import './font.css';
import {CssImageTest, JsImageTest} from "./component";

// test comments
console.log("start");

render(
    <>
        <div className="custom-div">
            <h1 className="custom-h1">welcome</h1>
        </div>
        <h1 className="custom-h1">welcome</h1>
        <p className="custom-p">你好，世界</p>
        <CssImageTest/>
        <JsImageTest/>
    </>,
    document.getElementById("react-page")
);
