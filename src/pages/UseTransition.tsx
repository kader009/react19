import { useState, useTransition } from 'react';

const UseTransition = () => {
  const [name, SetName] = useState('');
  const [error, SetError] = useState(null);
  const [isPending, startTransition] = useTransition()
  return (
    <div>
      <input type="text" className="bg-green-500 rounded outline-none p-2" />
      <button className="bg-black text-white rounded p-2">Submit</button>
    </div>
  );
};

export default UseTransition;
