import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Intro from './intro/Intro';
import Message from './message/Message';
import Gallery from './gallery/Gallery';
import Calendar from './calendar/Calendar';
import Location from './location/Location';
import Contact from './contact/Contact';
import Share from './share/Share';
import Footer from './footer/Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Intro />
    <Message />
    <Gallery />
    <Calendar />
    <Location />
    <Contact />
    <Share />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
