import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

interface FormData {
  email: string;
  password: string;
}

interface DecodedToken {
  userId: string;
  name: string;
  email: string;
}

const Login = () => {
  const navigate = useNavigate();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const [name, Setname] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve the stored name from localStorage
    const storedName = localStorage.getItem('name');
    if (storedName) {
      Setname(storedName);
    }
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .post(`http://localhost:5000/api/user/login`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true, // Include credentials in the request (useful for cookies if needed)
      })
      .then((response) => {
        console.log('Response:', response.data);

        // Assuming the token is in response.data.token
        const { token } = response.data;
        localStorage.setItem('token', token); // Store the new token in local storage

        const decodedToken = jwtDecode<DecodedToken>(token);
        console.log('User Details:', decodedToken);
        console.log('Email:', decodedToken.email);
        console.log('Name:', decodedToken.name);
        // Setname(decodedToken.name)
        localStorage.setItem('name', decodedToken.name);

        navigate('/');
      })
      .catch((error) => {
        console.error('Error:', error.message);
      });

    console.log('Form Data:', formData);
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
              onChange={handleChange}
              value={formData.email}
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
              onChange={handleChange}
              value={formData.password}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
        <div>{name && <p>Welcome {name}</p>}</div>
      </div>
    </div>
  );
};

export default Login;
