
import {Box, HStack,Grid,GridItem, VStack, Flex,Text,Spacer, Divider} from "@chakra-ui/react"

export default function Footer(){

    return <Box  >
    <Divider/>
    <HStack  bg="black" p={10}  >
       
       <HStack  w="80%" m="auto"  bg="black"  >
    
       


    
      <VStack bg="black" >
        <Text fontSize="xs" color="white" as="b" >Main Stories</Text>
      <Divider/>
        <Box    w="22"  ><Text  fontSize="1px" color="white" >Magiazine</Text></Box>
        <Box    w="22"  ><Text  fontSize="1px" color="white" >NATIONAL</Text></Box>
        <Box    w="22"  ><Text  fontSize="1px" color="white" >INTERNATIONAL</Text></Box>
        <Box    w="22"  ><Text  fontSize="1px" color="white" >BUSSINESS</Text></Box>
        <Box    w="22"  ><Text  fontSize="1px" color="white" >BOOK REVIEW</Text></Box>
        <Box    w="22"  ><Text  fontSize="1px" color="white" >THE NEWS</Text> </Box>
        <Box    w="22"  ><Text  fontSize="1px" color="white" >SPORTS</Text></Box>
        <Box    w="22"  ><Text  fontSize="1px" color="white" >ART & ENTERTAINMENT</Text></Box>
        <Box    w="22"  ><Text  fontSize="1px" color="white" >BUSSINESS</Text></Box>
      </VStack>
      <Spacer/>
      <VStack bg="black"  h="280px"  justifyContent="space-around"  >
        <Text fontSize="xs" as="b" color={"white"} >Traveller</Text>
        <Divider/>
        <Box  w="22" > <Text fontSize={"1px"} color="white"  > TRAVELOUGES </Text>  </Box>
        <Box  w="22" > <Text fontSize={"1px"} color="white"  > WEEKENDS BREAK </Text>  </Box>
        <Box  w="22" > <Text fontSize={"1px"} color="white"  >HOLIDAY WITH OT </Text>  </Box>
        <Box  w="22" > <Text fontSize={"1px"} color="white"  > PHOTO FEATURES </Text> </Box>
        <Box  w="22" > <Text fontSize={"1px"} color="white"  >HOTELS </Text>  </Box>
        <Box  w="22" > <Text fontSize={"1px"} color="white"  >GUIDESBOOK </Text>  </Box>
        
      </VStack>
      <Spacer/>
       
      <VStack bg="black"  h="285px"  justifyContent="space-around"  >
        <Text fontSize="xs" as="b" color={"white"} >Money</Text>
        <Divider/>
        <Box  w="22" > <Text fontSize={"1px"} color="white"  > MUTUAL FUNDS </Text>  </Box>
        <Box  w="22" > <Text fontSize={"1px"} color="white"  > INSURANCE </Text>  </Box>
        <Box  w="22" > <Text fontSize={"1px"} color="white"  >EQUITY </Text>  </Box>
        <Box  w="22" > <Text fontSize={"1px"} color="white"  > FIXED ASSET</Text> </Box>
        <Box  w="22" > <Text fontSize={"1px"} color="white"  >BANKING</Text>  </Box>
        <Box  w="22" > <Text fontSize={"1px"} color="white"  >ASK </Text>  </Box>
        
      </VStack>
      <Spacer/>
      <VStack bg="black"  h="285px"  justifyContent="space-around"  >
        <Text fontSize="xs" as="b" color={"white"} >Buissness</Text>
        <Divider/>
        <Box  w="22" > <Text fontSize={"1px"} color="white"  > THE BIG STORY</Text>  </Box>
        <Box  w="22" > <Text fontSize={"1px"} color="white"  > SPECIAL</Text>  </Box>
        <Box  w="22" > <Text fontSize={"1px"} color="white"  >PRESPECTIVE</Text>  </Box>
        <Box  w="22" > <Text fontSize={"1px"} color="white"  > PIX STORY</Text> </Box>
        <Box  w="22" > <Text fontSize={"1px"} color="white"  >ENTERPRISE</Text>  </Box>
        <Box  w="22" > <Text fontSize={"1px"} color="white"  >STRATERGY</Text>  </Box>
        
      </VStack>
      <Spacer/>
      <VStack bg="black"  h="285px"  justifyContent="space-around"  >
        <Text fontSize="xs" as="b" color={"white"} >Social Media</Text>
        <Divider/>
        <Box  w="22" > <Text fontSize={"1px"} color="white"  > FACEBOOK </Text>  </Box>
        <Box  w="22" > <Text fontSize={"1px"} color="white"  > TWITTER </Text>  </Box>
        <Box  w="22" > <Text fontSize={"1px"} color="white"  >INSTGRAM</Text>  </Box>
        <Box  w="22" > <Text fontSize={"1px"} color="white"  > YOUTUBE</Text> </Box>
        <Box  w="22" > <Text fontSize={"1px"} color="white"  >WHATSAPP</Text>  </Box>
        <Box  w="22" > <Text fontSize={"1px"} color="white"  >ASK </Text>  </Box>
        
      </VStack>
  
       </HStack>

    </HStack>
   
    
    </Box>
}