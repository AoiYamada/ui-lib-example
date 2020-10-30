const li = (idx, targetId, isActive = false) => `
<li data-target="#${targetId}" data-slide-to="${idx}"${
  isActive ? ' class="active"' : ""
}>
</li>
`;

export const IndicatorBlock = (targetId, numberOfSlides) => `
    <ol class="carousel-indicators">
      ${Array.from({ length: numberOfSlides }, (dummy, idx) =>
        li(idx, targetId, idx === 0)
      )}
    </ol>
  `;
