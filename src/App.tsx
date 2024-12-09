import UseDataFetch from './pages/useDataFetch';
import UseTransition from './pages/UseTransition';
import UseRef from './pages/useRef';
import CustomElement from './pages/CustomElement';
import UseFormStatus from './pages/UseFormStatus';
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
      <UseFormStatus/>
    </div>
  );
};

export default App;
