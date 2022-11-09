// 'use strict';
var app = {
  chars: [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'Andrii',
    'Oleksandr',
    'Valeria',
    'Pasha',
    'Daria',
    'Victoria',
    'Alex',
    'Vitaliy',
    'Volodymyr',
    'Oleksii',
  ],

  init: function () {
    app.container = document.createElement('div');
    app.container.className = 'animation-container';
    document.body.appendChild(app.container);
    /*інтервал між літерами (іменами)*/
    window.setInterval(app.add, 100);
  },

  add: function () {
    var element = document.createElement('span');
    app.container.appendChild(element);
    app.animate(element);
  },

  animate: function (element) {
    var character = app.chars[Math.floor(Math.random() * app.chars.length)];

    var duration = Math.floor(Math.random() * 10) + 1;
    var offset = Math.floor(Math.random() * (35 - duration * 2)) + 3;
    var size = 5 + (15 - duration);
    element.style.cssText =
      'right:' +
      offset +
      'vw; font-size:' +
      size +
      'px;animation-duration:' +
      duration +
      's';
    element.innerHTML = character;
    window.setTimeout(app.remove, duration * 1000, element);
  },

  remove: function (element) {
    element.parentNode.removeChild(element);
  },
};

document.addEventListener('DOMContentLoaded', app.init);
