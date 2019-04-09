'use strict';

const on = function(event, elem, callback, capture) {
  if (typeof elem === 'function') {
    capture = callback;
    callback = elem;
    elem = window;
  }
  capture = capture ? true : false;
  elem = typeof elem === 'string' ? document.querySelector(elem) : elem;
  if (!elem) return;
  elem.addEventListener(event, callback, capture);
};

const off = function(event, elem, callback, capture) {
  if (typeof elem === 'function') {
    capture = callback;
    callback = elem;
    elem = window;
  }
  capture = capture ? true : false;
  elem = typeof elem === 'string' ? document.querySelector(elem) : elem;
  if (!elem) return;
  elem.removeEventListener(event, callback, capture);
};

const callback = () => {
  const el = document.getElementById('ac-wrapper'),
    // device element
    device = document.getElementById('ac-device'),
    // the device image wrapper
    trigger = document.getElementById('trigger'),
    grid = document.getElementById('ac-grid'),
    // the screens
    screens = grid.querySelectorAll('a'),
    // the device screen title
    screenTitle = document.getElementById('ac-title'),
    // navigation arrows
    navPrev = document.getElementById('navPrev'),
    navNext = document.getElementById('navNext'),
    // total number of screens
    screensCount = screens.length,
    // csstransitions support
    support = true;

  // current screen´s element index
  let current = 0,
    // if navigating is in process
    animating = false,
    // the device screen image
    screenImg = device.querySelector('img');

  const init = () => {
    // show grid
    on('click', trigger, showGrid);
    // when a grid´s screen is clicked, show the respective image on the device
    for (let i of screens) {
      on('click', i, () => showScreen(i));
    }
    // navigate
    on('click', navPrev, () => navigate('prev'));
    on('click', navNext, () => navigate('next'));
  };

  const showGrid = () => {
    el.classList.add('ac-gridview');

    const hideOnClickOutside = element => {
      const outsideClickListener = event => {
        if (!element.contains(event.target)) {
          showScreen();
          removeClickListener();
        }
      };
      const removeClickListener = () => {
        document.removeEventListener('click', outsideClickListener);
      };

      document.addEventListener('click', outsideClickListener);
    };

    hideOnClickOutside(el);
  };

  const showScreen = screen => {
    el.classList.remove('ac-gridview');
    if (screen) {
      // update current
      current = [...screens].indexOf(screen);

      // update image and title on the device
      screenImg['src'] = screen.querySelector('img')['src'];

      screenTitle['text'] = screen.querySelector('span')['text'];
    }
  };

  const navigate = direction => {
    if (animating) {
      return false;
    }
    animating = true;

    if (direction === 'next') {
      current = current < screensCount - 1 ? ++current : 0;
    } else if (direction === 'prev') {
      current = current > 0 ? --current : screensCount - 1;
    }
    // next screen to show
    let nextScreen = screens[current];

    if (support) {
      // append new image to the device
      let nextScreenImg = document.createElement('img');
      nextScreenImg['src'] = nextScreen.querySelector('img')['src'];
      nextScreenImg.style.transition = 'all 0.5s ease';
      nextScreenImg.style.opacity = 0;
      nextScreenImg.style.transform =
        direction === 'next' ? 'scale(0.9)' : 'translateY(100px)';

      if (nextScreenImg) {
        screenImg = device.querySelector('img');
        trigger.insertBefore(nextScreenImg, screenImg);
      }

      // update title
      screenTitle['text'] = nextScreen.querySelector('span')['text'];

      setTimeout(() => {
        // current image fades out / new image fades in
        screenImg.style.opacity = 0;
        screenImg.style.transform =
          direction === 'next' ? 'translateY(100px)' : 'scale(0.9)';
        on('transitionend', screenImg, () => {
          screenImg.remove();
        });

        nextScreenImg.style.opacity = 1;
        nextScreenImg.style.transform =
          direction === 'next' ? 'scale(1)' : 'translateY(0px)';
        on('transitionend', nextScreenImg, () => {
          animating = false;
          off('transitionend', screenImg);
        });
      }, 25);
    } else {
      // update image and title on the device
      screenImg['src'] = nextScreen.querySelector('img')['src'];
      screenTitle['text'] = nextScreen.querySelector('span')['text'];
      animating = false;
    }
  };
  console.log('exe');
  init();
};

setTimeout(callback, 2000);
