import { BrowserRouter, Routes, Route } from 'react-router';
import App from '../App';
import About from '../pages/About';
import Home from '../pages/home/Home';
import Setting from '../pages/home/Setting';
import Login from '../pages/home/Login';

/**
 * AppRoutes component
 * 
 * This component sets up the routing for the application using React Router.
 * It defines the routes and their corresponding components.
 * 
 * @returns {JSX.Element} The rendered routes for the application.
 */

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="dashboard">
          <Route index element={<Home />} />
          <Route path="setting" element={<Setting />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
