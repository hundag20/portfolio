import React from 'react';
import { contact, section5Title, social } from '../../profile';

const Contact = () => {
  return (
    <div className='parallax'>
      <div data-aos='zoom-in-up'>
        <>
          <div
            className='git-head-div text-center mx-auto'
            style={{ width: '100%' }}
          >
            <h1 id='Contact' className='git-head'>
              {section5Title}
            </h1>
          </div>
        </>
      </div>
    </div>
  );
};

export default Contact;
