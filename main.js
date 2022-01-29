'use strict'
const DomElement = function (selector, height, width, bg, fontSize, text, position) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.text = text;
  this.position = position;
};

DomElement.prototype.create = function(){
  let elem;
  if(this.selector[0] === '.') {
    elem = document.createElement('div')
  }
  if(this.selector[0] === '#') {
    elem = document.createElement('p')
  }
  elem.tabIndex = 0;
  elem.classList.add(this.selector.substr(1))
  elem.style.cssText=`height:` + this.height + `;width:`+ this.width + `;background:` +  this.bg + `;font-size:` + this.fontSize + `;position:`+ this.position + `;`;
  elem.innerText = this.text;
  document.body.append(elem);
  let rectElem = elem.getBoundingClientRect();
    let x = rectElem.x + pageXOffset,
        y = rectElem.y + pageYOffset;

  window.addEventListener('keydown', e => {
    switch (e.keyCode) {
      case 37:
        x -= elem.offsetWidth;
          break;
      case 38:
        y -= elem.offsetHeight;
          break;
      case 39:
        //alert('вправо');
        x += elem.offsetWidth;
          break;
      case 40:
        y += elem.offsetHeight;
          break;
  }
    elem.style.left = x + "px";
    elem.style.top = y + "px";
  })
  
};

const domElement = new DomElement('#block', '100px', '100px', 'red', '12px', 'K.,jq текст', 'absolute');
document.addEventListener('DOMContentLoaded', function () {
domElement.create();
});
/*
    const elem = document.createElement('div')
    elem.classList.add('test')
    document.body.append(elem)
    elem.style.cssText=`position: absolute; height: 100px;width: 100px;background: green;`;
*/




