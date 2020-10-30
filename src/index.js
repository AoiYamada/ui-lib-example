import { v4 as uuid } from "uuid";
import { IndicatorBlock } from "./components/IndicatorBlock";
import { CarouselBlock } from "./components/CarouselBlock";

export const Slider = ($ele, imageInfos) => {
  let targetId = $ele.id;

  if (!targetId) {
    targetId = uuid();
    $ele.id = targetId;
  }

  $ele.setAttribute("class", "carousel slide");
  $ele.setAttribute("data-ride", "carousel");

  $ele.innerHTML = `
    ${IndicatorBlock(targetId, imageInfos.length)}
    ${CarouselBlock(targetId, imageInfos)}
  `;
};
