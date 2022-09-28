import logo from './logo.svg';
import './App.css';
import {Text,Flex,Box,Spacer,Grid,HStack,VStack,Image} from "@chakra-ui/react"
import { useEffect, useState } from 'react';
import {Link, Navigate}from "react-router-dom"
import Address from './routes/allRoutes';
import {Navbar} from './link/RE';

function App() {
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
const month = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];

const m = new Date();
let name = month[m.getMonth()];

let x=(d.getDate());
let y=(d.getFullYear());



const facebook=()=>{
 
}

















  return (
    <div className="App">
      <Box>
  <Text>Flex and Spacer: Full width, equal Spacing</Text>
  <Flex>
    <Text fontSize="15px" pl={3} >
   {day},{name},{x},{y}
    </Text>
    <Spacer />
    <Box>
      <Image src="https://www.outlookindia.com/images/home_new_v4/logo_outlook.svg" />
    </Box>
    <Spacer />
    <Box p={2} >

   <Flex  gap={2} >
   <Image  onClick={facebook} src='https://www.outlookindia.com/images/home_new_v4/facebook_top.svg'/>
   <Image src='https://www.outlookindia.com/images/home_new_v4/twitter_top.svg' />
   <Image src="https://www.outlookindia.com/images/home_new_v4/instagram_top.svg" />
   <Image src='https://www.outlookindia.com/images/home_new_v4/youtube_top.svg' />
   </Flex>
    </Box>
  </Flex>

  
</Box>

<Navbar/>
    </div>
  );
}

export default App;
