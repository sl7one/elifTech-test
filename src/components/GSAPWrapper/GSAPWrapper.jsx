import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export const GSAPWrapper = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { x: '-100%', opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'back.out' }
    );
  }, []);

  return <div ref={ref}>{children}</div>;
};
