import logo from './logo.svg';
import './App.css';
import {Text,Flex,Box,Spacer,Grid,HStack,VStack,Image, flatten,HR, color, Center,Stack} from "@chakra-ui/react"
import Address from './routes/allRoutes';
import Navbar from './navbar/navbar';
import {Login} from "./navbar/navbar"

function App() {
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
const month = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];

const m = new Date();
let name = month[m.getMonth()];

let x=(d.getDate());
let y=(d.getFullYear());



const manish={
  cursor:"Pointer"
}
















  return (
    <div className="App">
      <Box>
  
  <Flex  >
    <VStack  >
    <Text fontSize="15px" pl={3}  mt={2}>
   {day},{name},{x},{y}
   
    </Text>
    <Text>Please Login</Text>
    </VStack>
    <Spacer />
    <Box>
     
      <Image onClick={()=>window.location.assign('https://developer.mozilla.org/en-US/docs/Web/API/Location.reload')} style={{cursor:"pointer"}} src="https://www.outlookindia.com/images/home_new_v4/logo_outlook.svg" />
    <Center>
   <Flex style={manish}  gap={2} >
     <Text fontSize={12}  >
     <Login/>
     </Text>
     
     <Text fontSize={3} >SUBSCRIBE</Text>
   </Flex>
   </Center>
    </Box>
    <Spacer />
    <Box p={2} >

   <Flex  gap={2} >
   <Image  onClick={()=>window.location.assign('https://www.facebook.com/Outlookindia')}  style={manish} src='https://www.outlookindia.com/images/home_new_v4/facebook_top.svg'/>
   <Image  onClick={()=>window.location.assign('https://twitter.com/outlookindia/')}   style={manish} src='https://www.outlookindia.com/images/home_new_v4/twitter_top.svg' />
   <Image  onClick={()=>window.location.assign('https://www.instagram.com/accounts/login/?next=%2Foutlookindia%2F')}   style={manish} src="https://www.outlookindia.com/images/home_new_v4/instagram_top.svg" />
   <Image  onClick={()=>window.location.assign('https://www.youtube.com/user/OutlookMagazine')}   style={manish} src='https://www.outlookindia.com/images/home_new_v4/youtube_top.svg' />
   </Flex>
    </Box>
  </Flex>

</Box>
 <Navbar/>

 
   

  <hr style={{ border: "0.5px solid  #D3051F", 
   margin:"5px" }} ></hr>



<Address/>


    </div>
  );
}

export default App;
