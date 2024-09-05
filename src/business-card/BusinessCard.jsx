import React, { useState } from 'react'
import './business-card.css'
import QRCode from '../assets/business-card-qr-code-small.png'
import Logo from '../assets/logo/logo-large.png'

const BusinessCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
    <div className={`business-card ${isFlipped ? "flipped" : ""}`} onClick={handleClick}>
      <div className="business-card-inner">
        {/* Front of the card */}
        <div className="business-card-front">
            <div className="content">
                <h1>Majesty transport</h1>
                <p className='slogan'> Ensuring the safe journey of your loved ones! </p>
                <ul>
                    <li> School pickups/drop offs  </li>
                    <li> Taking your kids to weekend sports </li>
                    <li> Running month-end errands </li>
                </ul>
            </div>
            <div></div>
            <img src={Logo} alt="company logo" className='logo'/>
        </div>

        {/* Back of the card */}
        <div className="business-card-back">
          <img
            src={QRCode}
            alt="QR Code"
            className="qr-code-large"
          />
          <p> Scan to start a Whatsapp chat! </p>
        </div>
      </div>
    </div>
  );
}

export default BusinessCard