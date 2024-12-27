import { useEffect, useState } from 'react';   
/**
 * Home component
 * 
 * This component represents the home page of the dashboard.
 * It retrieves the user's name from local storage and displays it.
 * 
 * @returns {JSX.Element} The rendered home page component.
 */

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
    <div>
      <h1>Home Page for dashboard only</h1>
      <p>this is awesome</p>

      <br />
      <br />
      <div>
        {name && (
          <p>
            Welcome to this site: <span className='text-blue-700 capitalize font-semibold'>{name} 😉</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
