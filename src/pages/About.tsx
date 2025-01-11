import { useEffect } from 'react';
import io from 'socket.io-client';

const About = () => { 
  const SOCKET_URL = 'http://localhost:5000';
  
  useEffect(() => {
    // Connect to the Socket.IO server
    const socket = io(SOCKET_URL);

    // Listen for server events (e.g., response)
    socket.on('response', (message) => {
      console.log('Server says:', message);
    });

    // Emit a message event to the server
    socket.emit('message', 'Hello from client!');

    // Cleanup on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <div className="text-center">
      About page on the route
      <h1>this is me you can not see me</h1>
    </div>
  );
};

export default About;
