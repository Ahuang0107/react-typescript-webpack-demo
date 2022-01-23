import './style.css';
import './style.scss';
import './style.less';

const customTitleWrap = document.createElement("div")
customTitleWrap.className = "custom-div"

const customTitle = document.createElement("h1")
customTitle.innerText = "welcome"
customTitle.className = 'custom-h1'

customTitleWrap.appendChild(customTitle)
document.body.appendChild(customTitleWrap)

const title = document.createElement("h1")
title.innerText = "welcome"
title.className = 'custom-h1'
document.body.appendChild(title)

const text = document.createElement("p")
text.innerText = "welcome"
text.className = 'custom-p'
document.body.appendChild(text)
