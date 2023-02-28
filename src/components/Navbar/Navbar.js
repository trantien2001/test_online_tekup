import clsx from 'clsx';
import { Box, Link } from '@mui/material';
import styles from './Navbar.module.scss';

function Navbar() {
  return (
    <Box sx={{ marginBottom: '60px' }}>
      <Link className={clsx(styles.item, styles.navbarActive)}>All</Link>
      <Link className={styles.item}>Manpower Supply</Link>
      <Link className={styles.item}>Mobile App/Websites</Link>
      <Link className={styles.item}>UI/UX Design</Link>
    </Box>
  );
}

export default Navbar;
