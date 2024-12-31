import { useEffect, useState } from 'react';

const Home = () => {
  const [name, Setname] = useState<string | null>(null);
  useEffect(() => {
    // Retrieve the stored name from localStorage
    const storedName = localStorage.getItem('name');
    if (storedName) {
      Setname(storedName);
    }
  }, []);

  return (
    <div className='min-h-screen w-full text-center'>
      <h1>Home Page for dashboard only</h1>

      <br />
      <br />
      <div>
        {name && (
          <p>
            Welcome to this site:{' '}
            <span className="text-blue-700 capitalize font-semibold">
              {name} 😉
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
