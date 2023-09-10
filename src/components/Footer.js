import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { red } from '@mui/material/colors';
export default function LabelBottomNavigation() {
  function Copyright() {
    return (
     
      <Typography variant="body2" color="text.secondary" align="center" >
            <hr></hr>
        <Link color="primary" href="https://mui.com/">
          Your Website
        </Link>{' '}
        <br></br>
        <Link color="primary">
        <LocationOnIcon></LocationOnIcon>
        Redhills ,chennai, tamil nadu.
        </Link>
        <br></br>
        <Link color="primary">
          <PhoneIcon></PhoneIcon>
          9789967983
        </Link>
        <br></br>
        <Link color="primary">
          <EmailIcon></EmailIcon>dheepanbalajicse@gmail.com
        </Link>
      </Typography>
      
    );
  }
  return (
    <Copyright/>
  );
}
