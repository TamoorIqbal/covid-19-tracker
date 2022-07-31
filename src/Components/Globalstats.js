
import * as React from 'react';
import { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


import Grid from '@mui/material/Grid';


export function Globalstats({data:{confirmed, recovered, deaths, lastUpdate}}) {
  // const data =props.data;
  if(!confirmed){
    return 'Loading...'
}

  // console.log(data.confirmed);
  // console.log(data.deaths);
  // console.log(data.recovered);
  // console.log(data.lastUpdate)

  // const [confirmed, setconfirmed] = useState({});
  // const [deaths, setdeaths] = useState({});
  // const [recovered, setrecovered] = useState({});
  // const [update, setupdate] = useState('');

  // setconfirmed(data.confirmed);
  // setdeaths(data.deaths)
  // setrecovered(data.recovered)
  // setupdate(data.lastUpdate)
  
  return (<>

    <Grid container spacing={2}  >
      <Grid item md={1.5} >

      </Grid>
      <Grid item xs={12} md={3} mt={10}  >

        <Card  >
          <CardContent style={{ border: "3px solid blue" }} >
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
              ACTIVE
            </Typography>
            <Typography variant="h5" color="blue" component="div">
              {confirmed.value}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {new Date(lastUpdate).toString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases from COVID-19.
              <br />

            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={3} mt={10}>

        <Card >
          <CardContent style={{ border: "3px solid green" }}>
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
              RECOVERED
            </Typography>
            <Typography variant="h5" color="green" component="div">
              {recovered.value}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {new Date(lastUpdate).toString()}
            </Typography>
            <Typography variant="body2">
              Number of recoveries from COVID-19.
              <br />

            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={3} mt={10}>

        <Card >
          <CardContent style={{ border: "3px solid red" }}>
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
              DEATHS
            </Typography>
            <Typography variant="h5" color="red" component="div">
              {deaths.value}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {new Date(lastUpdate).toString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths caused by COVID-19.
              <br />

            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item md={1.5}>

      </Grid>


    </Grid>

  </>);
}



