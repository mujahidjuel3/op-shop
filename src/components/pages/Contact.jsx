import React from 'react';
import Nav from '../Nav';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa';
import Footer from '../Footer';

const Contact = () => {
  return (
    <div className='bg-gray-300 shadow'>
      <Nav />
      <div className='container grid grid-cols-1 sm:grid-cols-2 lg:pt-2 md:pt-2 pt-2'>
        <div className='md:pl-8 lg:pl-8 space-y-3 pl-8 px-4'>
          <h1 className='text-red-600 font-semibold font-serif text-2xl underline'>Contact Us</h1>
          <FaLocationArrow className='text-2xl text-blue-600' />
          <p> Mohammadpur, Dhaka, Bangladesh</p>
          <p>Mobile: +8801727983686</p>
          <p>E-mail: mujahidjuel056@gmail.com</p>
          <div className='flex pt-4 gap-8'>
            <a className='hover:scale-150 duration-300 text-2xl text-blue-600' href='https://www.facebook.com/mujahidjuel07?mibextid=ZbWKwL'><FaFacebook /></a>
            <a className='hover:scale-150 duration-300 text-2xl text-red-600' href='https://www.instagram.com/md_mujahid_juel?igsh=aHBkczVuNXp3Mjgx'><FaInstagram /></a>
            <a className='hover:scale-150 duration-300 text-2xl text-blue-600' href='https://www.linkedin.com/in/mujahid-juel-222913307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><FaLinkedin /></a>
            <a className='hover:scale-150 duration-300 text-2xl text-black' href='https://github.com/mujahidjuel3'><FaGithub /></a>
          </div>
        </div>

        <div className='pl-8 md:pl-0 lg:pl-0'>
          <h1 className='text-green-600 font-semibold font-serif text-2xl underline md:pt-0 lg:pt-0'>Location</h1>
          <div>
            <iframe
              title="Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.7870121119604!2d90.35986837410051!3d23.754973438603013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf5c691d88a9%3A0x5069b9d08531387f!2sKatasur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1715794460915!5m2!1sen!2sbd"
              width="550" // Set your preferred width
              height="250" // Set your preferred height
              style={{ border: 0 }} // Add any additional styling
              allowFullScreen // Allow fullscreen mode
              referrerPolicy="no-referrer-when-downgrade" // Specify referrer policy
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
