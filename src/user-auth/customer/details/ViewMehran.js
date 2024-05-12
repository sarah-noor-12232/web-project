import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../cat-style.css'; // Adjust path as necessary

const ViewMehran = () => {
    const [startDateTime, setStartDateTime] = useState('');
    const [endDateTime, setEndDateTime] = useState('');
    const [hours, setHours] = useState(0);
    const [totalCost, setTotalCost] = useState(0);

    const hourlyRate = 10000; // Hourly rate in PKR

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
            const hours = diff / 36e5; // Convert milliseconds to hours
            if (hours > 0) {
                setHours(hours);
                setTotalCost(hours * hourlyRate);
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
                <Link className="navbar-brand" to="/login_signup">Urban Drive</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/catalogue">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Featured Cars</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="container mt-5" >
                <div className="row" >
                
                    <div className="col-lg-4" >
                        <div className="card" style={{width:'300px', marginLeft: '-250px'}}>
                            <div className="card-body" >
                                <h5 className="card-title">Vendor Info</h5>
                                <p className="card-text">Vendor Name: John Doe</p>
                                <p className="card-text">Contact: vendor@example.com</p>
                            </div>
                        </div>
                        <div className="card"style={{width:'300px', height: '400px', marginLeft: '-250px'}}>
                            <img src="../../../images/mehru.jpg" className="card-img-top" alt="Car Image" />
                            <div className="card-body">
                                <h5 className="card-title">Mehran VXR</h5>
                                <p className="card-text" style={{ fontStyle: 'italic' }}>20,000 pkr</p>
                                <p className="card-info">Mileage: 50,000 km<br/>Year: 2014<br/>Location: Islamabad</p>
                                <div className="rating">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star unchecked"></span>
                                    <span className="fa fa-star unchecked"></span>
                                    <span className="fa fa-star unchecked"></span>
                                </div>        
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-8" style={{marginLeft: '-100px'}}>
                        <div className="card" style={{ width:'800px'}}>
                            <div className="form-group">
                                <label htmlFor="datetimestart" style={{ padding: '2px', textAlign:'left'}}>Select start date and time</label>
                                <input type="datetime-local" className="form-control" id="datetimestart" style={{ padding: '5px' }} />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="datetimeend" style={{ padding: '2px' , textAlign:'left'}}>Select end date and time</label>
                                <input type="datetime-local" className="form-control" id="datetimeend" style={{ padding: '5px' }} />
                            </div>

                            <div className="card" style={{ padding: '10px' }}>
    <div style={{ marginBottom: '10px' }}>
        <strong>Hourly rate of car:</strong> <span style={{ fontWeight: 'normal' }}>20,000 PKR</span>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
        <div><strong>Hours:</strong> <span id="output1">0</span></div>
        <div><strong>PKR:</strong> <span id="output2">0</span></div>
    </div>
</div>

                            <Link to="/payment/checkout" className="btn btn-primary" style={{marginTop:'10px', marginBottom:'20px', marginLeft:'10px'}}>Pay</Link>
                        </div>
                    </div> */}



<div className="col-lg-8" style={{marginLeft: '-100px'}}>
                        {/* Date and Time Selection */}
                         <div className="card" style={{ width:'800px'}}>
                            <div className="form-group">
                                <label htmlFor="datetimestart" style={{ padding: '2px', textAlign:'left'}}><strong>Select start date and time</strong></label>
                                <input type="datetime-local" className="form-control" id="datetimestart" value={startDateTime} onChange={handleStartChange} style={{ padding: '5px' }} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="datetimeend" style={{ padding: '2px' , textAlign:'left'}}><strong>Select end date and time</strong></label>
                                <input type="datetime-local" className="form-control" id="datetimeend" value={endDateTime} onChange={handleEndChange} />
                            </div> 
                            {/* Hourly Rate and Calculated Costs */}
                            <div className="card" style={{ padding: '10px', margin: '10px'}}>
                                <div style={{ marginBottom: '10px' }}>
                                    <strong>Hourly rate of car:</strong> <span>{hourlyRate} PKR</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                    <div><strong>Hours:</strong> <span>{hours.toFixed(2)}</span></div>
                                    <div><strong>PKR:</strong> <span>{totalCost.toFixed(2)}</span></div>
                                </div>
                            </div>
                            <Link to="/payment/checkout" className="btn btn-primary" style={{margin:'20px'}}>Pay</Link>
                        </div>
                    </div> 

                </div>
            </div>
        </div>
    );
};

export default ViewMehran;
