import { useState, useTransition } from 'react';

const UseTransition = () => {
  const [name, SetName] = useState<string>('');
  const [error, SetError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const UpdateName = async (name: string): Promise<string | null> => {
    return name.length < 3 ? 'name must a 3 character long' : null;
  };
  
  const handleUpdate = () => {
    startTransition(async () => {
      const errors = await UpdateName(name);
      if (errors) {
        SetError(error);
        return;
      }
    });
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => SetName(e.target.value)}
        className="bg-green-500 rounded outline-none p-2"
      />
      <button
        onSubmit={handleUpdate}
        disabled={isPending}
        type="submit"
        className="bg-black text-white rounded p-2"
      >
        Update
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default UseTransition;
