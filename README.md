# UI Library Webpack Example

Demo how to make a UI lib with plain html, js and bootstrap

## Usage

add `./dist/yamada-slider.js` to html's head

```javascript
const { Slider } = YamadaSlider;
const $ele = document.getElementById("targetId");
const imageInfos = [
  {
    src: "TestA.jpg",
    alt: "First",
  },
  {
    src: "TestB.jpg",
    alt: "Second",
  },
  {
    src: "TestC.jpg",
    alt: "Third",
  },
];

Slider($ele, imageInfos);
```

## Dev Setup

```sh
yarn
```

## Storybook Preview

```
yarn storybook
```

then go to http://localhost:6006/?path=/story/yamadaslider-slider--slider
