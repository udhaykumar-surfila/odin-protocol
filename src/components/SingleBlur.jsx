function SingleBlur() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" opacity="0.4" viewBox="0 0 800 800">
      <defs>
        <filter
          id="bbblurry-filter"
          width="400%"
          height="400%"
          x="-100%"
          y="-100%"
          colorInterpolationFilters="sRGB"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
        >
          <feGaussianBlur
            x="0%"
            y="0%"
            in="SourceGraphic"
            result="blur"
            stdDeviation="69"
          ></feGaussianBlur>
        </filter>
      </defs>
      <g filter="url(#bbblurry-filter)">
        <ellipse
          cx="393.068"
          cy="421.163"
          fill="hsl(251, 100%, 65%)"
          rx="144"
          ry="146"
        ></ellipse>
      </g>
    </svg>
  );
}

export default SingleBlur;
