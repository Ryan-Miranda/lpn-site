import React from 'react'

import Home from '../pages/home/Home'
import About from '../pages/about/About'

import Typography from '@material-ui/core/Typography';

export default function Main({pageNum, setPage}) {

    switch(pageNum) {
    
        case 0:
          return <Home setPage={setPage}></Home>
          
        case 1:
          return <About></About>

        case 2:
          return (
            <Typography variant="h1">C Suite</Typography>
          )

        case 3:
          return (
              <Typography variant="h1">Our Organizations</Typography>
          )

        case 4:
          return (
              <Typography variant="h1">Careers</Typography>
          )

        case 5:
          return (
            <Typography variant="h1">Rush Video!</Typography>
          )

        case 6:
          return (
            <Typography variant="h1">Why LPN?</Typography>
          )

        case 7:
          return (
            <Typography variant="h1">Double tap for like!</Typography>
          )

        case 8:
          return (
            <Typography variant="h1">Plug our socials</Typography>
          )
    
        default:
          return (
            <Typography variant="h1">so many tings</Typography>
          )
    }
}