import { useEffect } from 'react';
import UseDataFetch from './pages/useDataFetch';
import UseTransition from './pages/UseTransition';
import UseRef from './pages/useRef';
import CustomElement from './pages/CustomElement';
const App = () => {
  useEffect(() => {
    document.title = 'Home page';
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
      <br />
      <br />
      <UseRef />
      <br />
      <br />
      <CustomElement/>
    </div>
  );
};

export default App;
