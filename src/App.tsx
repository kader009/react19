import UseDataFetch from './pages/useDataFetch';
import UseTransition from './pages/UseTransition';
import UseRef from './pages/useRef';
import CustomElement from './pages/CustomElement';
import UseFormStatus from './pages/UseFormStatus';
import { Link } from 'react-router';

const App = () => {
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
      <CustomElement />
      <br />
      <br />
      <UseFormStatus />
      <br />
      <span className="text-blue-700 capitalize text-semibold">
        <Link to={'/dashboard/setting'}>dashboard</Link>
      </span>
    </div>
  );
};

export default App;
