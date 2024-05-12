import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../cat-style.css'; // Adjust path as necessary

const ViewFerrari = () => {
    const [startDateTime, setStartDateTime] = useState('');
    const [endDateTime, setEndDateTime] = useState('');
    const [hours, setHours] = useState(0);
    const [totalCost, setTotalCost] = useState(0);

    const hourlyRate = 250000; // Hourly rate in PKR for Ferrari F40

    const carDetails = {
        id: 'ferrariF40',
        name: 'Ferrari F40',
        price: '250,000 pkr',
        mileage: '60,000 km',
        year: '2018',
        location: 'Lahore',
        imageUrl: '../../../images/ferariF40.webp',
        rating: 5,
        link: "/user-auth/customer/details/ViewFerrari",
        vendorName: "John Ferrari",
        contact: "ferrari@example.com"
    };

    const handleStartChange = (event) => {
        setStartDateTime(event.target.value);
        calculateHoursAndCost(event.target.value, endDateTime);
    };

    const handleEndChange = (event) => {
        setEndDateTime(event.target.value);
        calculateHoursAndCost(startDateTime, event.target.value);
    };

    const calculateHoursAndCost = (start, end) => {
        if (start && end) {
            const startDate = new Date(start);
            const endDate = new Date(end);
            const diff = endDate - startDate;
            const calculatedHours = diff / 36e5; // Convert milliseconds to hours
            if (calculatedHours > 0) {
                setHours(calculatedHours);
                setTotalCost(calculatedHours * hourlyRate);
            } else {
                setHours(0);
                setTotalCost(0);
            }
        }
    };

    return (
        <div>
            {/* Navigation Bar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">Urban Drive</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/user-auth/customer/Catalogue">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/user-auth/customer/Featured">Featured Cars</Link>
              </li>
            </ul>
          </div>
        </nav>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4">
                        {/* Vendor Card */}
                        <div className="card" style={{ width: '300px' }}>
                            <div className="card-body">
                                <h5 className="card-title">Vendor Info</h5>
                                <p className="card-text">Vendor Name: {carDetails.vendorName}</p>
                                <p className="card-text">Contact: {carDetails.contact}</p>
                            </div>
                        </div>
                        {/* Car Card */}
                        <div className="card" style={{ width: '300px', height: '400px' }}>
                            <img src={carDetails.imageUrl} className="card-img-top" alt="Car Image" />
                            <div className="card-body">
                                <h5 className="card-title">{carDetails.name}</h5>
                                <p className="card-text" style={{ fontStyle: 'italic' }}>{carDetails.price}</p>
                                <p className="card-info">Mileage: {carDetails.mileage}<br />Year: {carDetails.year}<br />Location: {carDetails.location}</p>
                                <div className="rating">
                                    {[...Array(carDetails.rating).keys()].map((_, i) => (
                                        <span key={i} className="fa fa-star checked"></span>
                                    ))}
                                </div>        
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        {/* Date and Time Selection */}
                        <div className="card" style={{ width: '800px' }}>
                            <div className="form-group">
                                <label htmlFor="datetimestart"><strong>Select start date and time</strong></label>
                                <input type="datetime-local" className="form-control" id="datetimestart" value={startDateTime} onChange={handleStartChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="datetimeend"><strong>Select end date and time</strong></label>
                                <input type="datetime-local" className="form-control" id="datetimeend" value={endDateTime} onChange={handleEndChange} />
                            </div>
                            {/* Hourly Rate and Calculated Costs */}
                            <div className="card" style={{ padding: '10px', margin: '10px' }}>
                                <div style={{ marginBottom: '10px' }}>
                                    <strong>Hourly rate of car:</strong> <span>{hourlyRate} PKR</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                    <div><strong>Hours:</strong> <span>{hours.toFixed(2)}</span></div>
                                    <div><strong>PKR:</strong> <span>{totalCost.toFixed(2)}</span></div>
                                </div>
                            </div>
                            <Link to={carDetails.link} className="btn btn-primary" style={{ margin: '20px' }}>Pay</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewFerrari;
