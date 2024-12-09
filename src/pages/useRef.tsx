import { useEffect, useRef } from 'react';

const UseRef = () => {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.select();
    }
  }, []);
  return (
    <div>
      <input
        type="text"
        ref={ref}
        className="bg-yellow-500 p-2 rounded outline-none"
      />
    </div>
  );
};

export default UseRef;
