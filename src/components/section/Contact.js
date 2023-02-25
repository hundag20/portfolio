import React, { useState } from 'react';
import { contact, section5Title, social } from '../../profile';

const socials = [
  'gmail',
  'telegram',
  'instagram',
  'linkedin',
  'github',
  'gitlab',
];

const Contact = () => {
  const [flexDir, setFlexDir] = useState('column');
  const isOverflown = (element) => {
    console.log(`element`, element);
    return (
      element.scrollHeight > element.clientHeight ||
      element.scrollWidth > element.clientWidth
    );
  };
  const onLoadFunc = (e) => {
    const dir = isOverflown(e) ? 'column' : 'row';
    setFlexDir(dir);
  };
  return (
    <div className='parallax' onLoad={onLoadFunc}>
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
            className='socials-div'
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {socials.map((el) => (
              <button
                style={{
                  padding: 0,
                  border: 0,
                  background: 'transparent',
                  marginInline: 'auto',
                  margin: 20,
                }}
              >
                <img
                  src={`${el}2.png`}
                  style={{
                    padding: 0,
                  }}
                ></img>
              </button>
            ))}
          </div>
        </>
      </div>
    </div>
  );
};

export default Contact;
