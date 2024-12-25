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
    <div>
      <h1>Home Page for dashboard only</h1>

      <br />
      <br />
      <div>{name && <p>Welcome {name}</p>}</div>
    </div>
  );
};

export default Home;
