


import {Box,Divider,Image,Text,Center, Flex,Heading} from "@chakra-ui/react"
import { Link } from "react-router-dom"
export function Home(){
 
    
 let time =new Date()
 let hour=time.getHours()
let min= time.getMinutes()
 //console.log(hour>=12?"am":"pm",min);
 let h=hour>="12"?"pm":"am"
 let last=`${hour}:${min} ${h}`
 

<<<<<<< HEAD
  let h=hour>="12"?"pm":"am"
  let last=`${hour}:${min} ${h}`
=======

>>>>>>> b7cfc565320993f95e3d0ed04eb9789bf9331a07
 

    return(<>
    
 
  
     
    </>)
}