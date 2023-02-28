import { Box, Grid } from '@mui/material';
import Item from '../Item/Item';

function MenuItem() {
  return (
    <Box>
      <Grid container item>
        <Grid
          md={4}
          sm={6}
          xs={12}
          sx={{
            padding: '12px',
          }}
        >
          <Item img={'https://tekup.vn/wp-content/uploads/2022/09/image-1.png'} text={'TOI 3D Customize E-commerce'} />
        </Grid>
        <Grid
          md={4}
          sm={6}
          xs={12}
          sx={{
            padding: '12px',
          }}
        >
          <Item
            img={'https://tekup.vn/wp-content/uploads/2022/09/image.png'}
            text={'E-learning – Internal training platform'}
          />
        </Grid>
        <Grid
          md={4}
          sm={6}
          xs={12}
          sx={{
            padding: '12px',
          }}
        >
          <Item
            img={'https://tekup.vn/wp-content/uploads/2022/08/summer21-thumbnail.png'}
            text={'Summer 21 Cosmetic E-commerce Platform'}
          />
        </Grid>
        <Grid
          md={4}
          sm={6}
          xs={12}
          sx={{
            padding: '12px',
          }}
        >
          <Item
            img={'https://tekup.vn/wp-content/uploads/2022/08/kiva-thumbnail.png'}
            text={'Kiva – Ambition to digital transformation in the brokerage assiduity'}
          />
        </Grid>
        <Grid
          md={4}
          sm={6}
          xs={12}
          sx={{
            padding: '12px',
          }}
        >
          <Item
            img={'https://tekup.vn/wp-content/uploads/2022/08/boxgo-thumbnail.png'}
            text={'Boxgo – Professional Warehouse Management'}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default MenuItem;
