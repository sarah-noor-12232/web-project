import React, { useEffect, useState } from 'react';
import './index-style.css'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const IndexPage = () => {
  const [zoomLevel, setZoomLevel] = useState(110);
  const [zoomDirection, setZoomDirection] = useState(0.3);

  useEffect(() => {
    const zoomInterval = setInterval(() => {
      let newZoomLevel = zoomLevel + zoomDirection;
      if (newZoomLevel >= 120 || newZoomLevel <= 100) {
        setZoomDirection(zoomDirection * -1);
      }
      setZoomLevel(newZoomLevel);
    }, 100);

    return () => clearInterval(zoomInterval);
  }, [zoomLevel, zoomDirection]);

  const backgroundStyle = {
    backgroundSize: `${zoomLevel}%`,
    backgroundPosition: `${((window.innerWidth * zoomLevel / 100) - window.innerWidth) / -2}px ${((window.innerHeight * zoomLevel / 100) - window.innerHeight) / -2}px`
  };

  let navigate = useNavigate(); // Hook to access the navigate instance

  const navigateToLoginSignup = () => {
    navigate('/login-signup'); // Directly use navigate to change the route
  };
  

  return (
    <div>
      <div id="background" style={backgroundStyle}></div>
      <div className="container d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh', marginTop: '30px', width: '1000px', marginLeft: '220px' }}>
        <header>Welcome to Urban Drive Rentals</header>
        <div style={{ paddingTop: '20px', marginTop:'50px' }}>
          <button className="btn btn-primary next_btn" style={{ fontSize: '1.0em', marginLeft:'80px', marginTop: '10px' }} onClick={navigateToLoginSignup}>Login / Signup</button>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
