import { useEffect, useRef } from 'react';

const CustomElement = () => {
  const custom = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const customEle = document.createElement('I am custom element');
    custom.current.appendChild(customEle);
  }, []);
  return <div ref={custom}></div>;
};

export default CustomElement;
