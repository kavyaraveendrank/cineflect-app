import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faInfoCircle,faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className='footer bg-gray-900 text-white py-8'>
      <div className='container mx-auto px-4'>
 
        <div className='footer_icon flex justify-center space-x-4 mb-4'>
          <FontAwesomeIcon icon={faHome} className='text-white'/>
          <FontAwesomeIcon icon={faInfoCircle} className='text-white'/>
          <FontAwesomeIcon icon={faPhone} className='text-white'/>
          <FontAwesomeIcon icon={faEnvelope} className='text-white'/>
        </div>
        <ul className='flex flex-wrap justify-center text-sm space-x-6 md:space-x-10 mb-6'>
          <li>Audio Description</li>
          <li>Help Center</li>
          <li>Gift Cards</li>
          <li>Media Center</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Legal Notices</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
        </ul>

        <p className='text-center text-sm opacity-75'>
          © 1997-2023 Netflix, Inc.
        </p>
      </div>
    </div>
  );
}

export default Footer;