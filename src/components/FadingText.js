import React from 'react';
import { useSpring, animated } from 'react-spring';

const FadingText = () => {
  const styles = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: '#ffaaee', fontSize: '25px', marginTop: '80px' },
      {
        opacity: 0,
        color: 'rgb(14,26,19)',
        fontSize: '25px',
        marginTop: '80px',
      },
    ],
    from: { opacity: 0, color: 'red', fontSize: '25px', marginTop: '80px' },
  });
  // ...
  return <animated.div style={styles}>I will fade in and out</animated.div>;
};

export default FadingText;
