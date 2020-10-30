const ImageItem = ({ src = "", alt = "" }, isActive = false) => `
<div class="carousel-item${isActive ? " active" : ""}">
  <img class="d-block w-100" src="${src}" alt="${alt}">
</div>
`;

export const CarouselBlock = (targetId, ImagesInfo) => `
<div class="carousel-inner">
  ${ImagesInfo.map((ImageInfo, idx) => ImageItem(ImageInfo, idx === 0))}
</div>
<a class="carousel-control-prev" href="#${targetId}" role="button" data-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#${targetId}" role="button" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>
`;
