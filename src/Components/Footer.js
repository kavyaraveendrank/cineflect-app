import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faInfoCircle,faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className='bg-black text-white text-sm py-8 pt-32'>
      <div className='container mx-auto px-4'>
 
        <div className='flex justify-center space-x-4 mb-4 opacity-75'>
          <FontAwesomeIcon icon={faHome} className='text-white'/>
          <FontAwesomeIcon icon={faInfoCircle} className='text-white'/>
          <FontAwesomeIcon icon={faPhone} className='text-white'/>
          <FontAwesomeIcon icon={faEnvelope} className='text-white'/>
        </div>
        <ul className='flex flex-wrap justify-center items-center text-sm space-x-6 md:space-x-10 mb-6 opacity-75'>
  <li className='hover:text-white cursor-pointer'>Audio Description</li>
  <li className='hover:text-white cursor-pointer'>Help Center</li>
  <li className='hover:text-white cursor-pointer'>Gift Cards</li>
  <li className='hover:text-white cursor-pointer'>Media Center</li>
  <li className='hover:text-white cursor-pointer'>Investor Relations</li>
  <li className='hover:text-white cursor-pointer'>Jobs</li>
  <li className='hover:text-white cursor-pointer'>Terms of Use</li>
  <li className='hover:text-white cursor-pointer'>Privacy</li>
  <li className='hover:text-white cursor-pointer'>Legal Notices</li>
  <li className='hover:text-white cursor-pointer'>Cookie Preferences</li>
  <li className='hover:text-white cursor-pointer'>Corporate Information</li>
  <li className='hover:text-white cursor-pointer'>Contact Us</li>
</ul>

        <p className='text-center text-sm opacity-75'>
          © 1997-2023 Cineflect, Inc.
        </p>
      </div>
    </div>
  );
}

export default Footer;