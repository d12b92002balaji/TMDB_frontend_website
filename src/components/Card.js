import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import batman from '../assets/batman.jpeg';
import argrymen from '../assets/argrymen.jpeg';
import godfather from '../assets/godfather.jpeg';
import godfather2 from '../assets/godfather2.jpeg';
import listssh from '../assets/listssh.jpeg';
import lordsoftherings from '../assets/lordsoftherings.jpeg';
import pilife from '../assets/pilife.jpeg';
import plup from '../assets/plup.jpeg'
import thesank from '../assets/thesank.jpeg'
export default function RecipeReviewCard() {
  const num=[1,2,3,4,5,6,7,8,9];
  var i=0;
  var j=0;
  const movies =['The shawshank ','The god father','The Dark Knight','The god father 1','12 Argry men','schindler list', 'lords of the rings','plup fiction','life of pi']
  const moviesimg=[thesank,godfather,batman,godfather2,argrymen,listssh,lordsoftherings,plup,pilife]
  return (
    <div className='container'>
      <Grid container spacing={4}>
            {num.map((num) => (
              <Grid item key={num} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: '56.25%',
                    }}
                    image={moviesimg[j++]}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                       {movies[i++]}
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
    </div>
  )
  
}