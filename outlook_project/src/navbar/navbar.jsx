
import { Flex ,Box,Text} from "@chakra-ui/react"
import {Link} from "react-router-dom"


 
function Login (){
  return(<Link to="/login" >Login</Link>)
}
export {Login}


export default function Navbar(){
const arr=[
    {path:"/",name:"HOME"},
    {path:"/outlook",name:"OUTLOOK"},
    {path:"/bussiness",name:"BUSSINESS"},
    {path:"/money",name:"MONEY"},
    {path:"/cryptocorner",name:"CRYTOCORNER"},
    {path:"/travel",name:"TRAVEL"},
    {path:"/sports",name:"SPORTS"},
    {path:"/entertainment",name:"ETERTAINMENT"},
    {path:"/photo",name:"PHOTO"},
    {path:"/magzine",name:"MAGAZINE"},
    {path:"/health",name:"HEALTH"},
    {path:"/startup",name:"STARTUP"},
    {path:"/other",name:"OTHER"},
    
    
]

    return (<>
    
     
    <Flex gap={1} width="80%" m="auto"   >
      {
        arr.map((elm)=>
            <Box key={elm.path}  w="80%" >
                <Text fontSize="sm" as={"b"}  >
            <Link  to={elm.path} >{elm.name}</Link>
            </Text>
            </Box>
        )
      }
      </Flex>
   
    </>)
}