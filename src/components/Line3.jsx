import React from "react";


const Line3 = () => {
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
          width="280"
          height="106"
          fill="none"
          viewBox="0 0 280 106"
        >
          <path
            stroke="url(#paint0_linear_331_8267)"
            strokeDasharray="359.409"
            strokeDashoffset={strokeDashoffset}
            strokeWidth="5"
            d="M280 3H157c-13.255 0-24 10.745-24 24v52c0 13.255-10.745 24-24 24H0"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_331_8267"
              x1="0"
              x2="262.105"
              y1="103"
              y2="-31.797"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#714EFF" stopOpacity="0"></stop>
              <stop offset="0.33" stopColor="#8B6DF5"></stop>
              <stop offset="1" stopColor="#714EFF" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      );
}

export default Line3;