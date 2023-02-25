import React, { useState } from 'react';
import { contact, section5Title, social } from '../../profile';

let socials = [
  { name: 'gmail', link: 'mailto:hundaguluma@gmail.com' },
  { name: 'telegram', link: 'https://t.me/timshel' },
  { name: 'instagram', link: 'https://www.instagram.com/hunda____/' },
  { name: 'linkedin', link: 'https://www.linkedin.com/in/hundag20' },
  { name: 'github', link: 'https://github.com/hundag20' },
  { name: 'gitlab', link: 'https://gitlab.com/hundaguluma/' },
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
                <a href={el.link}>
                  <img
                    src={`${el.name}2.png`}
                    style={{
                      padding: 0,
                    }}
                  ></img>
                </a>
              </button>
            ))}
          </div>
        </>
      </div>
    </div>
  );
};

export default Contact;
