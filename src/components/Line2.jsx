import React from "react";


const Line2 = () => {
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
          width="288"
          height="240"
          fill="none"
          viewBox="0 0 288 240"
        >
          <path
            stroke="url(#paint0_linear_331_8268)"
            strokeDasharray="501.409"
            strokeDashoffset={strokeDashoffset}
            strokeWidth="5"
            d="M285 0v102c0 13.255-10.745 24-24 24H27c-13.255 0-24 10.745-24 24v90"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_331_8268"
              x1="3"
              x2="46.348"
              y1="240"
              y2="-37.306"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#714EFF" stopOpacity="0"></stop>
              <stop offset="0.659" stopColor="#8B6DF5"></stop>
              <stop offset="1" stopColor="#714EFF" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      );
}

export default Line2;