// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: 'Hunda',
};
const background = {
  // Options: Snow or Particle
  type: 'Particle',
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = 'About Me';
const about = {
  paragraph:
    'I\'m a full-stack dev primarily working on Javascript/Typescript. I am fairly comfortable with the modern web development ecosystem and I can see myself working in any kind of web based project.',
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: 'HTML5',
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    // svg: 'M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z',
    faClass: 'fab fa-html5',
  },
  {
    name: 'CSS3',
    // svg: '',
    faClass: 'fab fa-css3',
  },
  {
    name: 'Javascript',
    // svg: '',
    faClass: 'fab fa-js',
  },
  {
    name: 'SASS',
    // svg: '',
    faClass: 'fab fa-sass',
  },
  {
    name: 'Node',
    // svg: '',
    faClass: 'fab fa-node',
  },
  {
    name: 'Java',
    // svg: '',
    faClass: 'fab fa-java',
  },
  {
    name: 'SQL/No-SQL',
    // svg: '',
    faClass: 'fas fa-database',
  },
  {
    name: 'ReactJs',
    // svg: '',
    faClass: 'fab fa-react',
  },
  {
    name: 'Docker',
    // svg: '',
    faClass: 'fab fa-docker',
  },
  {
    name: 'CI/CD',
    viewBox: "0 -30 110 150",
    svg: 'm 38.6,52.6 c 0,-6.9 5.6,-12.5 12.5,-12.5 6.9,0 12.5,5.6 12.5,12.5 0,6.9 -5.6,12.5 -12.5,12.5 C 44.2,65.2 38.6,59.5 38.6,52.6 Z M 51.1,0 C 26.5,0 5.9,16.8 0.1,39.6 0.1,39.8 0,39.9 0,40.1 c 0,1.4 1.1,2.5 2.5,2.5 l 21.2,0 c 1,0 1.9,-0.6 2.3,-1.5 l 0,0 C 30.4,31.6 39.9,25 51.1,25 66.3,25 78.7,37.4 78.7,52.6 78.7,67.8 66.3,80.2 51.1,80.2 40,80.2 30.4,73.6 26,64.1 l 0,0 c -0.4,-0.9 -1.3,-1.5 -2.3,-1.5 l -21.2,0 c -1.4,0 -2.5,1.1 -2.5,2.5 0,0.2 0,0.3 0.1,0.5 5.8,22.8 26.4,39.6 51,39.6 29.1,0 52.7,-23.6 52.7,-52.7 C 103.8,23.5 80.2,0 51.1,0 Z"',
    // faClass: 'fas fa-undo',
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = 'Projects Available in the Public Domain';
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: 'project1',
    name: 'Tole Delivery',
    skills: ['HTML, CSS, JS'],
    url: 'https://toledelivery.com/',
  },
  {
    // Add image in './styles/images.css' in #project2
    id: 'project2',
    name: 'Hyab E-Commerce',
    skills: ['HTML, CSS, JS'],
    url: 'https://hyab-15046.web.app/',
  },
  {
    // Add image in './styles/images.css' in #project3
    id: 'project3',
    name: 'Milestone Marketing Agency',
    skills: ['HTML, CSS, JS'],
    url: 'http://etmilestone.com/',
  },
  {
    // Add image in './styles/images.css' in #project4
    id: 'project4',
    name: 'Telegram Ad Manager Bot',
    skills: ['HTML, CSS, JS'],
    url: 'https://github.com/kaustubhai',
  },

];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = 'Projects Deployed in Private Environments';
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: 'misc1',
    name: 'Asset Master',
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: 'misc2',
    name: 'Smart Attendance',
  },

];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = 'Find me @';
const contact = {
  pitch:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae.',
  copyright: 'Kaustubh Mishra',
  contactUrl: '',
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: 'https://github.com',
  facebook: 'https://facebook.com',
  // twitter: "https://twitter.com",
  instagram: 'https://instagram.com',
  linkedin: 'https://linkedin.com',
  resume: 'https://novoresume.com/',
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
