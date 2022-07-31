
import * as React from 'react';
import {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { fetchCountries } from './Api';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(),
  textAlign: 'center',
  marginTop:40,
  color: theme.palette.text.secondary,
  border:'1px solid black',
  paddingLeft:15
  
}));
export const CountriesStats = ({handleChange}) => {
  
  const [countries, setcountries] = useState([]);

  useEffect(() => {
    const fetchCoun = async () => {
      setcountries(await fetchCountries());
    };

    fetchCoun();
  }, [setcountries]);
 
  return (<>
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
       
      </Grid>
      <Grid item xs={12} md={4}>
      <Item>
        
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <label  style={{fontSize:"20px",marginLeft: '-14px',color:'#1976d2'}}>Select Country</label>
        <NativeSelect defaultValue="" onChange={(e) => handleChange(e.target.value)}>
        <option value="" >Worldwide</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
        
      </NativeSelect>
      </FormControl>
    </Box>
      </Item>
      
      </Grid>
      <Grid item xs={12} md={4}>
        
      </Grid>
      
    </Grid>



    
  </>);
}

// export const handleChange = (event) => {
//     // setcountries(e.target.value);
//    const selectedCountry =event;
//     if(event===undefined){
//      return event="pakistan"
//     }
//     else{

//       return selectedCountry;
//     }
//     // return selectedCountry;
//   };


