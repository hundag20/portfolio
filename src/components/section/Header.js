import React from 'react';
import HeaderButton from '../layouts/HeaderButton';
import { header } from '../../profile';
import { Icon, IconButton, SpeedDial, SpeedDialIcon, Tooltip } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const downloadCvHandler = () => {
  //download file
  const link = document.createElement('a');
  link.download = 'cv_0930586155.pdf';
  link.href = '/cv_0930586155.pdf';
  link.click();
}

const Header = () => {
  const scrollTo = () => {
    window.scrollTo({
      top: 100000,
      left: 0,
      behavior: 'smooth',
    });
  };

  const toggleDarkMode = (e) => {
    document.documentElement.classList.toggle('dark-mode');
    (document.querySelectorAll("*[id^=not-dark]")).forEach(el => el.classList.toggle('inverse-dark'));


    var x = document.getElementsByClassName('img-pro');
    for (let i = 0; i < x.length; i += 1) {
      x.item(i).classList.toggle('inverse-dark');
    }

    if (document.documentElement.classList.contains('dark-mode'))
      localStorage.setItem('mode', 'Dark');
    else localStorage.setItem('mode', 'Light');
  };

  return (
    <div>
      <div className='Header'>
        <h1>{`I'm ${header.name}`}</h1>
        <p className='line-1 anim-typewriter'>
          Welcome to my corner of the web...
        </p>

        <HeaderButton />
        <label className="switch">
          <input id="mode-switch" onClick={e => toggleDarkMode(e)} type="checkbox" />
          <span className="slider round"></span>
        </label>
        <SpeedDial id='not-dark-8' ariaLabel="SpeedDial basic example"
          sx={{ position: 'fixed', bottom: 16, right: 16, marginRight: 2 }}
          icon={<Tooltip title="Download CV">
            <IconButton onClick={downloadCvHandler} sx={{ fontFamily: "'Libre Baskerville', serif" }} size='large'>
              <strong>cv</strong>
            </IconButton>
          </Tooltip>} />
      </div>
    </div >
  );
};

export default Header;
