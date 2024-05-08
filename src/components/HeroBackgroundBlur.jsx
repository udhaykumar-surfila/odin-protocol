
const HeroBackgroundBlur = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
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
            stdDeviation="114"
          ></feGaussianBlur>
        </filter>
      </defs>
      <g filter="url(#bbblurry-filter)">
        <ellipse
          cx="384.998"
          cy="377.531"
          fill="hsla(311, 72%, 56%, 0.40)"
          rx="220"
          ry="187"
        ></ellipse>
      </g>
    </svg>
    );
}


export default HeroBackgroundBlur;