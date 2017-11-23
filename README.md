# Hide Most Visited Pages Reloaded
This extension removes the Most Visited website links from the default New Tab page in Chrome.

## History

<strike>You can find it on the Google Web Store:</strike>
<strike>[Hide Most Visited Pages Reloaded][1]</strike>

### Not available on the store anymore
I pulled the extension from the store (with more than 100000 active user installations at the time),
because I received more E-Mails than Santa, but mine were full of hatred and false accusations and
it wasn't worth the hassle anymore.

![](https://apps.walialu.com/super-evil-new-tab/chrome-webstore-hide-most-visited-pages-reloaded-99000-users.png)

I'll leave this here for legacy reasons

## Current development status

I'm currently using [this build](https://git.superevilmegaco.com/google-chrome/super-evil-new-tab) of mine with the following config:

```css
html, body {
    background-color: #272b30;
    color: #fff;
    width: 100%;
    height: 100%;
    text-align: center;
    overflow: hidden;
}

@import url(https://fonts.googleapis.com/css?family=Montserrat+Alternates:400,700);

.container {
  overflow: hidden;
  height: 150px;
  width: 500px;
  padding-top: 30px;
  display: inline-block;
  position: relative;
  top: 150px;
}

.letter {
  display: inline-block;
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 140px;
  color: #3c3c3c;
  -webkit-text-stroke: 0px #282828;
  position: relative;
  z-index: 1;
  top: 0px;
  line-height: 120px;
  top: 0px;
  margin-right: -10px;
  -webkit-transform: translate3d(0, 150px, 0);
  -moz-transform: translate3d(0, 150px, 0);
  -ms-transform: translate3d(0, 150px, 0);
  transform: translate3d(0, 150px, 0);
}

.G:after {
  content: "G";
  font-size: 140px;
  color: #4285f4;
}

.g:after {
  content: "g";
  font-size: 140px;
  color: #4285f4;
}

.o:after {
  content: "o";
  font-size: 140px;
  color: #ea4335;
}

.o:nth-of-type(3):after {
  color: #fbbc05;
}

.l:after {
  content: "l";
  font-size: 140px;
  color: #34a853;
}

.e:after {
  content: "e";
  font-size: 140px;
  color: #ea4335;
}

.G:after, .o:after, .g:after, .e:after, .l:after {
  position: absolute;
  left: 0;
  top: 0px;
  -webkit-transition: all 1s;
  -moz-transition: all 1s;
  -ms-transition: all 1s;
  transition: all 1s;
  opacity: 1;
  z-index: 100;
}

.letter:nth-child(1) {
  animation-delay: 1.1s;
  -webkit-animation-delay: 1.1s;
}
.letter:nth-child(1):after {
  animation-delay: 2.7s;
  -webkit-animation-delay: 2.7s;
}

.letter:nth-child(2) {
  animation-delay: 1.2s;
  -webkit-animation-delay: 1.2s;
}
.letter:nth-child(2):after {
  animation-delay: 2.9s;
  -webkit-animation-delay: 2.9s;
}

.letter:nth-child(3) {
  animation-delay: 1.3s;
  -webkit-animation-delay: 1.3s;
}
.letter:nth-child(3):after {
  animation-delay: 3.1s;
  -webkit-animation-delay: 3.1s;
}

.letter:nth-child(4) {
  animation-delay: 1.4s;
  -webkit-animation-delay: 1.4s;
}
.letter:nth-child(4):after {
  animation-delay: 3.3s;
  -webkit-animation-delay: 3.3s;
}

.letter:nth-child(5) {
  animation-delay: 1.5s;
  -webkit-animation-delay: 1.5s;
}
.letter:nth-child(5):after {
  animation-delay: 3.5s;
  -webkit-animation-delay: 3.5s;
}

.letter:nth-child(6) {
  animation-delay: 1.6s;
  -webkit-animation-delay: 1.6s;
}
.letter:nth-child(6):after {
  animation-delay: 3.7s;
  -webkit-animation-delay: 3.7s;
}

.letter:nth-child(7) {
  animation-delay: 1.7s;
  -webkit-animation-delay: 1.7s;
}
.letter:nth-child(7):after {
  animation-delay: 3.9s;
  -webkit-animation-delay: 3.9s;
}

.letter {
  -webkit-animation: show 0.3s 4s 1 ease-out forwards;
  -moz-animation: show 0.3s 4s 1 ease-out forwards;
  -o-animation: show 0.3s 4s 1 ease-out forwards;
  animation: show 0.3s 4s 1 ease-out forwards;
}

.letter:after {
  -webkit-animation: up 1s 1 ease-out forwards;
  -moz-animation: up 1s 1 ease-out forwards;
  -o-animation: up 1s 1 ease-out forwards;
  animation: up 1s 1 ease-out forwards;
}

@keyframes show {
  100% {
    -webkit-transform: translate3d(0, 0px, 0);
    -moz-transform: translate3d(0, 0px, 0);
    -ms-transform: translate3d(0, 0px, 0);
    transform: translate3d(0, 0px, 0);
  }
}
@keyframes up {
  30% {
    -webkit-transform: translate3d(0, -7px, 0);
    -moz-transform: translate3d(0, -7px, 0);
    -ms-transform: translate3d(0, -7px, 0);
    transform: translate3d(0, -7px, 0);
  }
  60% {
    -webkit-transform: translate3d(0, -4px, 0);
    -moz-transform: translate3d(0, -4px, 0);
    -ms-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);
  }
  80% {
    -webkit-transform: translate3d(0, -7px, 0);
    -moz-transform: translate3d(0, -7px, 0);
    -ms-transform: translate3d(0, -7px, 0);
    transform: translate3d(0, -7px, 0);
  }
  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    -moz-transform: translate3d(0, -5px, 0);
    -ms-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }
  100% {
    -webkit-transform: translate3d(0, -7px, 0);
    -moz-transform: translate3d(0, -7px, 0);
    -ms-transform: translate3d(0, -7px, 0);
    transform: translate3d(0, -7px, 0);
  }
}
@-webkit-keyframes show {
  100% {
    -webkit-transform: translate3d(0, 0px, 0);
    -moz-transform: translate3d(0, 0px, 0);
    -ms-transform: translate3d(0, 0px, 0);
    transform: translate3d(0, 0px, 0);
  }
}
@-webkit-keyframes up {
  30% {
    -webkit-transform: translate3d(0, -7px, 0);
    -moz-transform: translate3d(0, -7px, 0);
    -ms-transform: translate3d(0, -7px, 0);
    transform: translate3d(0, -7px, 0);
  }
  60% {
    -webkit-transform: translate3d(0, -4px, 0);
    -moz-transform: translate3d(0, -4px, 0);
    -ms-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);
  }
  80% {
    -webkit-transform: translate3d(0, -7px, 0);
    -moz-transform: translate3d(0, -7px, 0);
    -ms-transform: translate3d(0, -7px, 0);
    transform: translate3d(0, -7px, 0);
  }
  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    -moz-transform: translate3d(0, -5px, 0);
    -ms-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }
  100% {
    -webkit-transform: translate3d(0, -7px, 0);
    -moz-transform: translate3d(0, -7px, 0);
    -ms-transform: translate3d(0, -7px, 0);
    transform: translate3d(0, -7px, 0);
  }
}
```

```javascript
var html = `<div class="container">
  <div class="G letter">G</div>
  <div class="o letter">o</div>
  <div class="o letter">o</div>
  <div class="g letter">g</div>
  <div class="l letter">l</div>
  <div class="e letter">e</div>
</div>`;

document.body.innerHTML = document.body.innerHTML + html;
```

I'm very happy with this configuration,
because it perfectly suits my dark [GNOME](https://www.gnome.org/) theme.

I'm planning to include a file-upload (synced with the Chrome profile),
so I easily upload and use any media on my new tab page (across all devices).

The current development branch is available to a limited set of users (invite only) via the store.

## Contributors

[Christian Esperar][2]

[1]: https://chrome.google.com/webstore/detail/hide-most-visited-pages-r/dhphmpoekpoecdbjeionimpiceigkeil?hl=en "Hide Most Visited Pages on the Google Chrome Web Store"
[2]: https://twitter.com/ChristEsperar "Christian Esperar on Twitter"

