import React, { Component } from 'react';
import './Footer.css';

function Footer() {
    return (
      <footer className="footer text-center">
        Dalila App © { new Date().getFullYear() }
      </footer>
    );
}
  
export default Footer;