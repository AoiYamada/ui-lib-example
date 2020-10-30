import { useEffect } from "@storybook/client-api";

export default {
  title: "YamadaSlider/Slider",
};

export const Slider = () => {
  useEffect(() => {
    const { Slider } = YamadaSlider;
    const $ele = document.getElementById("slider-example");
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
  });

  return `<div id="slider-example" style="width: 800px; height: 600;"></div>`;
};
