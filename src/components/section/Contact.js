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
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <button
              style={{
                padding: 0,
                border: 0,
                background: 'transparent',
                marginInline: 'auto',
                margin: 20,
                height: 'fit-content',
                width: 'fit-content',
              }}
            >
              <img
                src='/gmail.png'
                style={{
                  width: '3rem',
                  height: '2.5rem',
                  padding: 0,
                }}
              ></img>
            </button>
            <button
              style={{
                alignSelf: 'center',
                padding: 0,
                border: 0,
                background: 'transparent',
                marginInline: 'auto',
                margin: 20,
                height: 'fit-content',
                width: 'fit-content',
              }}
            >
              <img
                src='/telegram.svg'
                style={{
                  width: '3rem',
                  height: '3rem',
                  padding: 0,
                }}
              ></img>
            </button>
            <button
              style={{
                alignSelf: 'center',
                padding: 0,
                border: 0,
                background: 'transparent',
                marginInline: 'auto',
                margin: 20,
                height: 'fit-content',
                width: 'fit-content',
              }}
            >
              <img
                src='/linkedin.png'
                style={{
                  width: '3rem',
                  height: '3rem',
                  padding: 0,
                }}
              ></img>
            </button>
            <button
              style={{
                alignSelf: 'center',
                padding: 0,
                border: 0,
                background: 'transparent',
                marginInline: 'auto',
                margin: 20,
                height: 'fit-content',
                width: 'fit-content',
              }}
            >
              <img
                src='/insta.png'
                style={{
                  width: '3rem',
                  height: '3rem',
                  padding: 0,
                }}
              ></img>
            </button>
          </div>
        </>
      </div>
    </div>
  );
};

export default Contact;
