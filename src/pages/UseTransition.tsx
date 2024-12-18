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
      SetError(null);
      console.log(`name updated:`, name);
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
        onClick={handleUpdate}
        disabled={isPending}
        type="button"
        className="bg-black text-white rounded p-2"
      >
        {isPending ? 'Updating..' : 'Update'}
      </button>
      {error && <p className='text-red-600'>{error}</p>}
    </div>
  );
};

export default UseTransition;
