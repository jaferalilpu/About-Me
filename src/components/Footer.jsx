import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-tertiary py-10 mt-20 text-white text-center'>
      <div className='flex justify-center gap-8 mb-5'>
        <a href='https://www.instagram.com/jafer__ali_/' target='_blank' rel='noopener noreferrer'>
          <FaInstagram size={30} className='hover:text-pink-500'/>
        </a>
        <a href='https://x.com/skjaferali8' target='_blank' rel='noopener noreferrer'>
          <FaTwitter size={30} className='hover:text-blue-400'/>
        </a>
        <a href='https://www.linkedin.com/in/jafer-ali-shaik/' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin size={30} className='hover:text-blue-600'/>
        </a>
        <a href='https://github.com/jaferalilpu' target='_blank' rel='noopener noreferrer'>
          <FaGithub size={30} className='hover:text-gray-500'/>
        </a>
      </div>
      <p className='text-lg'>
  &copy; {new Date().getFullYear()} Shaik Jafer Ali. All rights reserved. Unauthorized use or duplication of this code or its parts without permission is strictly prohibited.
</p>

    </footer>
  );
};

export default Footer;
