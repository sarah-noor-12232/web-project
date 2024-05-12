import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from './IndexPage';
import LoginSignUp from './LoginSignup';
import Dashboard from './user-auth/vendor/dashboard';
import ListCar from './user-auth/vendor/list-cars/list-car';
import CustomerCatalogue from './user-auth/customer/Catalogue';
import ViewCayenneVendor from './user-auth/vendor/dashboard-cars/cayenne';
import EditCayenne from './user-auth/vendor/dashboard-cars/edit-cayenne';
import ViewCayenne from './user-auth/customer/details/ViewCayenne';
import ViewFerrari from './user-auth/customer/details/ViewFerrari';
import ViewCayman from './user-auth/customer/details/ViewCayman';
import ViewFord from './user-auth/customer/details/ViewFord';
import ViewMehran from './user-auth/customer/details/ViewMehran';
import ViewPorsche from './user-auth/customer/details/ViewPorsche';
import Featured from './user-auth/customer/Featured';
import Checkout from './user-auth/customer/details/Checkout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login-signup" element={<LoginSignUp />} />
        <Route path="/user-auth/vendor/dashboard" element={<Dashboard />} />
        <Route path="/user-auth/vendor/list-cars/list-car" element={<ListCar/>}/>
        <Route path="/user-auth/customer/Catalogue" element={<CustomerCatalogue/>}/>
        <Route path="/user-auth/vendor/dashboard-cars/cayenne" element={<ViewCayenneVendor/>}/>
        <Route path="/user-auth/vendor/dashboard-cars/edit-cayenne" element={<EditCayenne/>}/>
        <Route path="/user-auth/customer/details/ViewCayenne" element={<ViewCayenne/>}/>
        <Route path="/user-auth/customer/details/ViewFerrari" element={<ViewFerrari/>}/>
        <Route path="/user-auth/customer/details/ViewCayman" element={<ViewCayman/>}/>
        
        <Route path="/user-auth/customer/details/ViewFord" element={<ViewFord/>}/>
        <Route path="/user-auth/customer/details/ViewMehran" element={<ViewMehran/>}/>
        <Route path="/user-auth/customer/details/ViewPorsche" element={<ViewPorsche/>}/>
        <Route path="/user-auth/customer/Featured" element={<Featured/>}/>
        <Route path="/user-auth/customer/details/Checkout" element={<Checkout/>}/>
      </Routes>
    </Router>
  );
}

export default App;
