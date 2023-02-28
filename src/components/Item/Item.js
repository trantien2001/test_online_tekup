import { KeyboardArrowRight } from '@mui/icons-material';
import { Box } from '@mui/material';
import styles from './Item.module.scss';
function Item({ img, text }) {
  return (
    <Box
      sx={{
        position: 'relative',
        '&:hover': {
          cursor: 'pointer',
          transform: 'translate(0,-3px)!important',
          boxShadow: '0 .125rem .375rem rgba(0,0,0,.05),0 .625rem 1.5rem rgba(0,0,0,.15)!important',
          transition: 'all .6s cubic-bezier(.165,.84,.44,1)',
        },
      }}
    >
      <a>
        <img src={img} className={styles.img} />
        <Box className={styles.text}>
          <h5 style={{ margin: 0, display: 'flex', alignItems: 'center' }}>{text}</h5>
          <KeyboardArrowRight />
        </Box>
      </a>
    </Box>
  );
}

export default Item;
