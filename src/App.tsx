import { useEffect } from 'react';
import UseDataFetch from './pages/useDataFetch';
import UseTransition from './pages/UseTransition';
const App = () => {
  useEffect(() => {
    document.title = 'home page';
    return () => {
      document.title = 'product';
    };
  }, []);
  return (
    <div>
      <UseDataFetch />
      <br />
      <br />
      <UseTransition />
    </div>
  );
};

export default App;
