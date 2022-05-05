import * as React from 'react';
import { render } from 'react-dom';
import './style.css';
import './style.scss';
import './style.less';
import './font.css';
import { Provider } from 'react-redux';
import { Counter, CssImageTest, JsImageTest } from './component';
import { store } from './store';

// test comments
// eslint-disable-next-line no-console
console.log('start');

render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="custom-div">
        <h1 className="custom-h1">welcome</h1>
      </div>
      <h1 className="custom-h1">welcome</h1>
      <p className="custom-p">你好，世界</p>
      <CssImageTest />
      <JsImageTest />
      <Counter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('react-page'),
);
