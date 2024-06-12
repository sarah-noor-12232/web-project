import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CataloguePage() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/v1/cars')
      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    
    <div>
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

      <div className="search-container1">
      <div className="group">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <SearchIcon/>
        <input
          className="input"
          type="search"
          placeholder="Search..."
          value={search}
          onChange={handleSearchChange}
        />
        
      </div>

      
    </div>

    <div className="paste-button" >
          <button className="button" onClick={toggleDropdown}>
              {selectedLocation} <FontAwesomeIcon icon={faChevronDown} />
          </button>
          {showDropdown && (
              <div className="dropdown-content">
                <a href="#" onClick={() => selectLocation('Choose Location')}>Choose Location</a>
                  <a href="#" onClick={() => selectLocation('Islamabad / Rawalpindi')}>Islamabad / Rawalpindi</a>
                  <a href="#" onClick={() => selectLocation('Lahore')}>Lahore</a>
                  <a href="#" onClick={() => selectLocation('Karachi')}>Karachi</a>
              </div>
          )}
      </div>

    <div className="date-button start-date" >
              <DatePicker
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  className="form-control"
                  placeholderText="Start Date"  
                  dateFormat="MMMM d, yyyy" 
              />
          </div>
          <div className="date-button end-date">
              <DatePicker
                  selected={endDate}
                  onChange={date => setEndDate(date)}
                  className="form-control"
                  placeholderText="End Date"  
                  dateFormat="MMMM d, yyyy"  
              />
          </div>

          <div className="container mt-5">
          <div className="card-container">
    {filteredCars.map((car, index) => (
      <div key={index} className="car-card">
        <img src={car.image} alt="Car Image" className="car-img" />
        <div className="card-body">
          <h5 className="card-title">{car.name}</h5>
          <p className="card-text">{car.price}</p>
          <p>{car.mileage} - {car.year}</p>
          <p>Location: {car.location}</p>
          <div className="rating">{renderStars(car.rating)}</div>
          <Link to={car.link} className="btn btn-primary">View Details</Link>
        </div>
      </div>
    ))}
  </div>
</div>




      <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>About Us</h3>
            <p>We are Urban Drive, a car rental company specializing in providing high-quality rental cars for every occasion. With a wide range of vehicles and flexible rental options, we aim to make your travel experience comfortable and convenient.</p>
          </div>
          <div className="col-md-6">
          <h3>Contact Us</h3>
            <div className="main">
              <div className="up">
              <button className="card1">
<svg viewBox="0 0 30 30" width="30px" height="30px" fillRule="nonzero" className="instagram">
  <g fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10">
    <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"/>
  </g>
</svg>
</button>


<button className="card2">
  <svg viewBox="0 0 48 48" width="30px" height="30px" className="twitter">
    <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
  </svg>
</button>
              </div>
              <div className="down">
              <button className="card3">
<svg viewBox="0 0 30 30" width="30px" height="30px" className="google">
  <path d="M6 12C6 15.3137 8.68629 18 12 18C14.6124 18 16.8349 16.3304 17.6586 14H12V10H21.8047V14H21.8C20.8734 18.5645 16.8379 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.445 2 18.4831 3.742 20.2815 6.39318L17.0039 8.68815C15.9296 7.06812 14.0895 6 12 6C8.68629 6 6 8.68629 6 12Z"/>
</svg>
</button>

<button className="card4">
<svg viewBox="0 0 24 24" width="30px" height="30px" className="whatsapp">
  <path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.255-1.377a9.916 9.916 0 0 0 4.737 1.206h.005c5.46 0 9.908-4.448 9.913-9.913A9.872 9.872 0 0 0 19 4.908h.001ZM11.992 20.15A8.216 8.216 0 0 1 7.797 19l-.3-.18-3.117.818.833-3.041-.196-.314a8.2 8.2 0 0 1-1.258-4.381c0-4.533 3.696-8.23 8.239-8.23a8.2 8.2 0 0 1 5.825 2.413 8.196 8.196 0 0 1 2.41 5.825c-.006 4.55-3.702 8.24-8.24 8.24Zm4.52-6.167c-.247-.124-1.463-.723-1.692-.808-.228-.08-.394-.123-.556.124-.166.246-.641.808-.784.969-.143.166-.29.185-.537.062-.247-.125-1.045-.385-1.99-1.23-.738-.657-1.232-1.47-1.38-1.716-.142-.247-.013-.38.11-.504.11-.11.247-.29.37-.432.126-.143.167-.248.248-.413.082-.167.043-.31-.018-.433-.063-.124-.557-1.345-.765-1.838-.2-.486-.404-.419-.557-.425-.142-.009-.309-.009-.475-.009a.911.911 0 0 0-.661.31c-.228.247-.864.845-.864 2.067 0 1.22.888 2.395 1.013 2.56.122.167 1.742 2.666 4.229 3.74.587.257 1.05.408 1.41.523.595.19 1.13.162 1.558.1.475-.072 1.464-.6 1.673-1.178.205-.58.205-1.075.142-1.18-.061-.104-.227-.165-.475-.29Z"/>
</svg>
</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>

);
}

export default CataloguePage;