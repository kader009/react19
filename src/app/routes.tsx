import { BrowserRouter, Routes, Route } from 'react-router';
import App from '../App';
import About from '../pages/About';
import Home from '../pages/home/Home';
import Setting from '../pages/home/Setting';


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="dashboard">
          <Route index element={<Home />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
