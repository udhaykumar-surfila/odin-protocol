import React from "react";


const Line1 = () => {
    const[strokeDashoffset, setStrokeDashoffset] = React.useState(500);

    React.useEffect(() => {
        const interval = setInterval(() => {

            setStrokeDashoffset((prevValue) => {
                if(prevValue == 0) {
                    clearInterval(interval);
                    return 0;
                }
                return prevValue - 1;
            });
        }, 2);

        return () => clearInterval(interval);
    }, []);

    return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="126"
          height="478"
          fill="none"
          viewBox="0 0 126 478"
        >
          <path
            stroke="url(#paint0_linear_331_8269)"
            strokeDasharray="577.409"
            strokeDashoffset={strokeDashoffset}
            strokeWidth="5"
            d="M123 0v226.95c0 13.255-10.745 24-24 24H27c-13.255 0-24 10.745-24 24V478"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_331_8269"
              x1="3"
              x2="272.627"
              y1="478"
              y2="109.472"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#714EFF" stopOpacity="0"></stop>
              <stop offset="0.801" stopColor="#8B6DF5"></stop>
              <stop offset="1" stopColor="#714EFF" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      );
}

export default Line1;