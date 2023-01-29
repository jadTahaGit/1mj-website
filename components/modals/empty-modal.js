/** @jsxImportSource theme-ui */
import React, { useRef, useEffect, useState }  from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player/youtube'
import { AiOutlineClose } from 'react-icons/ai'

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)


export default function EmptyModal({ selector, open, onClose, children, key }) {

  const ref = useRef();
    const [mount, setMount] = useState(false);
  
    useEffect(() => {
      ref.current = document.querySelector(selector);
      setMount(true);
    }, [selector]);

  if (!open) return null

  return mount ? ReactDOM.createPortal(
    <div key={key}>
      <div onClick={onClose} sx={styles.overlayStyles} />
      <div sx={styles.modalStyles}>
        <button sx={styles.closeButton} onClick={onClose}><AiOutlineClose /></button>
        {children}
      </div>
    </div>,
    document.querySelector(selector)
  ) : null;
}

const styles = {
  overlayStyles: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 2000,
  },
  modalStyles: {
    position: 'fixed',
    width: '90%',
    maxWidth: '80vw',
    height: ['25%', '40%', '45%', '55%', '75%', '90%'],
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    //marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0px',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    zIndex: 2000,
  },
  buttonWrapper: {
    position: 'relative',
    zIndex: 1,
  },
  otherContent: {
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'red',
    padding: '10px',
  },
  closeButton: {
    position: 'absolute',
    right: '-35px',
    top: '-30px',
    color: 'whiteText',
    backgroundColor: 'transparent',
    border: '0',
    fontSize: '30px',
    cursor: 'pointer',
  }

}