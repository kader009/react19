import { use } from 'react';

async function fetchData() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  if (!response.ok) throw new Error('something went wrong');

  return response.json();
}

const data = fetchData();

const UseDataFetch = () => {
  const users = use(data);
  return (
    <div className="flex justify-center items-center">
      {users.map((user) => (
        <div key={user.id}>
          <h1 className="bg-black text-white m-2 p-1 rounded">{user.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default UseDataFetch;
