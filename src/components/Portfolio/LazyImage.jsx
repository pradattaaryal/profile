import React, { useEffect, useRef, useState } from 'react';

const LazyImage = React.memo(({ src, alt, className }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || visible) return;

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect(); // Properly disconnect
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [visible]);

  return (
    <img
      ref={ref}
      src={visible ? src : undefined}
      alt={alt}
      className={className}
      loading="lazy"
    />
  );
});

export default LazyImage;
