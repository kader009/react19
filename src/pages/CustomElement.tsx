import { useEffect, useRef } from 'react';

const CustomElement = () => {
  const custom = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (custom.current) {
      const customEle = document.createElement('I');
      customEle.textContent = 'I am a custom element';
      custom.current.appendChild(customEle);
    }
  }, []);
  return <div ref={custom}/>;
};

export default CustomElement;
