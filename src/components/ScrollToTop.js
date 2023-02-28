import { useState } from 'react';

import { KeyboardArrowUp } from '@mui/icons-material';
import { Box } from '@mui/material';

function ScrollToTop() {
  const [opacity, setOpacity] = useState(0);

  const toggleopacity = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 80) {
      setOpacity(1);
    } else {
      setOpacity(0);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  window.addEventListener('scroll', toggleopacity);

  return (
    <Box
      onClick={scrollToTop}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '38px',
        height: '38px',
        opacity: opacity,
        position: 'fixed',
        bottom: '55px',
        left: '20px',
        color: '#fff',
        cursor: 'pointer',
        borderRadius: '100%',
        border: 'none',
        backgroundColor: 'rgba(0,0,0,.2)',
        transition: 'visibility 0s linear 2.2s, opacity .6s linear',
        '&:hover': {
          backgroundColor: '#e0bd08',
          color: '#212529',
          transform: 'translate(0,-6px)',
        },
      }}
    >
      <KeyboardArrowUp />
    </Box>
  );
}

export default ScrollToTop;
