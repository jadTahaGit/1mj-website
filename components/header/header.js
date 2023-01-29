/** @jsxImportSource theme-ui */
import React, { useRef, useEffect, useState } from 'react';
import { Container, Flex, Button, Link as A } from 'theme-ui';
import { keyframes } from '@emotion/react';
import Logo from '../logo';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';
import testimonialsMenuItems from './testimonial-header.data';
import { useMediaQuery } from 'react-responsive';
import { HeaderLink } from '../header-link';
import { ExternalLink } from '../external-link';
import HeaderCalendlyButton from '../calendly/header-calendly-button';
import HeaderCalendlyButtonMobile from '../calendly/header-calendly-button-mobile';

export default function Header ({ className, isTestimonialsPage }) {

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  const ref = useRef();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector("#content");
    setMount(true);
  }, ["#content"]);


  return (
    <DrawerProvider>
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Logo />
          <Flex as="nav" sx={styles.nav}>
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
          </Flex>

            {mount ?
              isMobile?
              <HeaderCalendlyButtonMobile content="Book Your Qualifying Call" selector="#content" />
              :
              <HeaderCalendlyButton content="Book Your Qualifying Call" selector="#content" />
            : null}

          <MobileDrawer isTestimonialsPage={isTestimonialsPage} />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: 'whiteText',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
    },
    '.mobile__btn': {
      flexShrink: 0,
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nav > a': {
        color: 'text',
        '&:hover': {
          color: 'primary',
        },
        '&.active': {
          color: 'primary',
        },
      },
    },
    '&.unSticky': {
      'nav > a': {
        color: 'whiteText',
        '&:hover': {
          color: 'primary',
        },
        '&.active': {
          color: 'primary',
        },
      },
    },
    '&.unStickyWhiteBG': {
      'nav > a': {
        color: 'text',
        '&:hover': {
          color: 'primary',
        },
        '&.active': {
          color: 'primary',
        },
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      textDecoration: 'none',
      fontSize: 2,
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'primary',
      },
      '&.active': {
        color: 'primary',
      },
    },
  },
};


