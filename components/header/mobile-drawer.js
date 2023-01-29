import React, { useContext } from 'react';
import { Box } from 'theme-ui';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Drawer from '../drawer';
import { DrawerContext } from '../../contexts/drawer/drawer.context';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { HeaderLink } from '../header-link';
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaTiktok,
  FaYoutube
} from 'react-icons/fa';
import menuItems from './header.data';
import testimonialsMenuItems from './testimonial-header.data';
import { ExternalLink } from '../external-link';

const social = [
  {
    path: 'https://www.instagram.com/myupself/',
    icon: <FaInstagram color='#DA1212' />,
  },
  {
    path: 'https://twitter.com/myupself',
    icon: <FaTwitter color='#DA1212' />,
  },
  {
    path: 'https://www.linkedin.com/in/kaidezen/',
    icon: <FaLinkedin color='#DA1212' />,
  },
  {
    path: 'https://www.youtube.com/channel/UChOllFq36e8vnJVGsPaZiVg',
    icon: <FaYoutube color='#DA1212' />,
  },
];

const MobileDrawer = ({ isTestimonialsPage }) => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: 'TOGGLE',
    });
  }, [dispatch]);
  

  return (
    <Drawer
      width="320px"
      drawerHandler={
        <Box sx={styles.handler}>
          <IoMdMenu size="26px" />
        </Box>
      }
      open={state.isOpen}
      toggleHandler={toggleHandler}
      closeButton={<IoMdClose size="24px" color="#000000" />}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
      <Scrollbars autoHide>
        <Box sx={styles.content}>
          <Box sx={styles.menu}>
          {isTestimonialsPage
              ?
              testimonialsMenuItems.map(({ path, label }, i) => (
              <HeaderLink
                activeClass="active"
                to={i > 0 ? path : null}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
                isNotScrollable={i > 0 ? false : true}
                path={i == 0 ? '/' : null}
              >
                {label}
              </HeaderLink>
              ))
              :
              menuItems.map(({ path, label }, i) => (
              <HeaderLink
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
                isNotScrollable={true}
                path={i > 0 ? path : '/'}
              >
                {label}
              </HeaderLink>
              ))
            }
          </Box>

          <Box sx={styles.menuFooter}>
            <Box sx={styles.social}>
              {social.map(({ path, icon }, i) => (
                <Box as="span" key={i} sx={styles.social.icon}>
                  <ExternalLink path={path}>{icon}</ExternalLink>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Scrollbars>
    </Drawer>
  );
};

const styles = {
  handler: {
    color: 'primary',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',
    '&:hover': {
      cursor: 'pointer',
    },

    '@media screen and (min-width: 1024px)': {
      display: 'none',
    },
  },
  drawer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'accent',
  },

  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '25px',
    right: '30px',
    zIndex: '1',
    cursor: 'pointer',
  },

  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '100px',
    pb: '40px',
    px: '30px',
  },

  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    a: {
      textDecoration: 'none',
      color: 'text',
      fontSize: '16px',
      fontWeight: '500',
      py: '15px',
      cursor: 'pointer',
      borderBottom: '1px solid #EEEEEE',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'secondary',
      },
      '&.active': {
        color: 'secondary',
      },
    },
  },

  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto',
  },

  social: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'secondary',

    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'secondary',
      fontSize: 14,
      mr: '15px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mr: '0',
      },
      '&:link': {
        color: 'secondary',
      },
      '&:visited': {
        color: 'secondary',
      },
      '&:active': {
        color: 'secondary',
      },
      '&:hover': {
        color: 'secondary',
      },
    },
  },

  button: {
    color: 'white',
    fontSize: '14px',
    fw: '700',
    height: '45px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0',
  },
};

export default MobileDrawer;
