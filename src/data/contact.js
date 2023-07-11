import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// import { faGamepad } from '@fortawesome/fontawesome-common-types';

// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/kornosky',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.instagram.com/undeadknight11/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/christopherkornosky',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:christopher.kornosky@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
  // {
  //   link: 'https://undeadknight11.itch.io/',
  //   label: 'Itch.io',
  //   icon: faGamepad,
  // },
];

export default data;
