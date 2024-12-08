import { useState, useTransition } from 'react';

const UseTransition = () => {
  function UpdateName({}){

    const [name, SetName] = useState('');
    const [error, SetError] = useState(null);
    const [isPending, startTransition] = useTransition();
    console.log(name);
  
    const handleUpdate =() =>{
      startTransition(async () =>{
        const error = await
      })
    }
  }
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => SetName(e.target.value)}
        className="bg-green-500 rounded outline-none p-2"
      />
      <button type='submit' className="bg-black text-white rounded p-2">Update</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default UseTransition;
