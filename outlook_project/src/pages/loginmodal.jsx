import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,Input,Text
  } from '@chakra-ui/react'


import { useState } from 'react'
import { useEffect } from 'react'




 


export default function Modalfn(){
  const [count,setcount]=useState(0)
  const [status,setstatus]=useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [token,setToken]=useState("")
    useEffect(()=>{
       onOpen()
     
       
     
    },[token])


   
    const [logindetail,setlogindetail]=useState({
        email:"",
        password:""
    })
    const handelchange=(e)=>{
        setlogindetail((prev)=>({
            ...logindetail,
            [e.target.name]:e.target.value
        }))
    }

     function getdata(){
      setcount(count+1)
      console.log(count);

     
        fetch(`https://reqres.in/api/login`,{
            method:"POST",
            body:JSON.stringify(logindetail),
            headers:{
                "content-type":"application/json"
            }
        }).then((res)=>res.json()).then((result)=>{
            setToken(result);
        })
    }
   
    
    return (<>
   
<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Login</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
        <Text>Enter Email</Text>
        <Input onChange={handelchange} name="email" value={logindetail.email} ></Input>
        <Text>Enter password</Text>
        <Input type="password"  onChange={handelchange}  name="password" value={logindetail.password}></Input>
      
    </ModalBody>

    <ModalFooter>

    <Button colorScheme='blue' mr={3} onClick={getdata} >
         Login
      </Button>

      <Button colorScheme='blue' mr={3} onClick={onClose}>
        Close
      </Button>
   
     
    </ModalFooter>
  </ModalContent>
</Modal>
    

    </>)
}
