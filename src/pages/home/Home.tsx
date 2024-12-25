import { useEffect, useState } from "react";

const Home = () => { 
  const [name, Setname] = useState<string | null>(null)
  useEffect(() => {
    // Retrieve the stored name from localStorage
    const storedName = localStorage.getItem('name');
    if (storedName) {
      Setname(storedName);
    }
  }, []);

  return <div className="text-blue-600 font-semibold capitalize">Home Page for dashboard only
  
  <br />
  <br />
  <div>
          {name && <p>Welcome {name}</p>}
        </div>
  </div>; 
};

export default Home;
