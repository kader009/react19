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
      <h1>Home Page for dashboard only for who want to watch</h1>

      <br />
      <br />
      <div>
        {name && (
          <p>
            Welcome to this site awesome: 
            <span className="text-blue-700 capitalize font-semibold ms-1">
              {name} 😉
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
