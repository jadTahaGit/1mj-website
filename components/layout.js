/** @jsxImportSource theme-ui */
import React, { useRef, useEffect, useState } from 'react';
import Sticky from 'react-stickynode';
import Header from './header/header';
import Footer from './footer/footer';
import Subscribe from './subscribe/subscribe';

export default function Layout({ children, isLightBG, isTestimonialsPage }) {
  const [isSticky, setIsSticky] = useState(false);
  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };

  

  return (
    <React.Fragment>
      <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
      { isLightBG 
        ?
        <Header className={`${isSticky ? 'sticky' : 'unStickyWhiteBG'}`} isTestimonialsPage={isTestimonialsPage} />
        :
        <Header className={`${isSticky ? 'sticky' : 'unSticky'}`} isTestimonialsPage={isTestimonialsPage} />
      }   
      </Sticky>
      <main
        id="content"
        sx={{
          variant: 'layout.main',
        }}
      >
        {children}
      </main>
      {/*<Subscribe />*/}
      <Footer />
    </React.Fragment>
  );
}

const styles = {
  layout: {
    container: {
      maxWidth: [
        '100%',
        null,
        null,
        '780px',
        '1020px',
        '1200px',
        null,
        '1310px',
      ],
      px: [4, 6],
    },
    header: {
      color: '#02073E',
      fontWeight: 'normal',
      py: 3,
      position: 'absolute',
      width: '100%',
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    main: {},
  },
}