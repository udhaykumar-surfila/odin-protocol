import { useEffect, useRef } from 'react';

const CircleLight = () => {
    const circleRef = useRef(null);

    useEffect(() => {
        const animateCircle = () => {
            const circle = circleRef.current;
            const x = Math.random() * 400;
            const y = Math.random() * 400;
            const scale = Math.random() * 1.5;
            console.log(x, y, scale);
            circle.setAttribute('cx', x);
            circle.setAttribute('cy', y);
            circle.style.transform = `scale(${scale})`;
        };

        const interval = setInterval(animateCircle, 2000);

        return () => clearInterval(interval);
    }, []);

    return(
    <svg width="400" height="400" viewBox="0 0 400 400" className="svg-overlay">
        <circle ref={circleRef} className="circle-light" r="50" fill="white" />;
    </svg>
    );
};

export default CircleLight;
