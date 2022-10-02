
import {Box,Divider,Image,Text,Center, Flex,Heading} from "@chakra-ui/react"
import { Link } from "react-router-dom"
export default function Outlook(){
    let time =new Date()
 let hour=time.getHours()
let min= time.getMinutes()
 
 

  let h=hour>="12"?"pm":"am"
  let last=`${hour}:${min} ${h}`
 
   
   return (
       
          


    
  <Flex flexDirection="column" border="red" >
  <Box ml="30vh" w="900px"  border={"1px solid red"} mt="10"    >
    <Image p="1" src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1664689648.webp" />
    
  </Box>
<Box ml="40vh" w="300px" mt="1"  border="grey" >
    <Divider  mt="5" />
    <Text>Dussehra celebrations in India     -Getty Images
</Text>
</Box>
<Box>
    <Text fontSize='5xl'w="900px" ml="30vh">Painterly Traditions Of The Ramayana In Folk And Tribal Art</Text>
</Box>
<Box pt="2" width="400px" ml="30vh"   >
    <Text  ><Link color='teal.500' href='#' >ORNELLA D'SOUZA</Link>/last updated at {last} </Text>
</Box>
<Flex  mt="2" w="900px" ml="30vh" h="100" >
    <Box     w="450px"  ><Text mt="2" >Looking into simpler, naïve, and rustic art interpretations of Ramayana and the importance of Ram in these traditions.</Text></Box>
    <Box  w="450px"  >
        <li  >'Ravan Was The First Aviator': How Sri Lanka Sees The Ramayan</li>
        <li  >Ramayan In Kerala: Living Through Folk Traditions</li>
    </Box>
    
</Flex>
<Divider/>

<Flex ml="30vh" mt="2" width="900px"  >
    
    <Box width="450px" >
        <Image src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1664505599.webp" />
        <Text pr="200" mt="2" >FOLK MUSIC</Text>
        <Heading>Ram As Purabiya’s Own Family Man</Heading>
        <Text color="red" ><Link  >NIRALA BIDESIA</Link>/ last updated at{last}</Text>
        <Text pb="2">In the traditional folk world of the region, Ram is popular as bridegroom and Ram as groom or son-in-law takes precedence over Ram the victor</Text>
        
        <li>Growing Up With Ram And His Epic Story</li>
   </Box>

   <Divider orientation="vertical" p="2" color="red" />
  <Box w="450px" >
<Text fontSize="sm" >HOPE</Text>
<Text fontSize="xl" >Striking An Optimistic Note In Times Of Hate, Distrust</Text>
<Box pr="100" >
<Text fontSize="xs" >MOHAMMAD SAJJAD /last updated {last}</Text>
</Box>
<Flex gap="2" >
    <Box  ><Text mt="2" >A Muslim scholar reminisces his growing up in a sleepy town in Bihar and how its secular fabric changed after loud-mouthed Hindu fanatic leaders landed there</Text></Box>
    <Box mt="2"  ><Image h="full" src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1664424379.webp"/>
     
    </Box>
    
</Flex>

<Box mt="2" bg="#F4F5F4" >
   
<Text >BENGAL RENAISSANCE</Text>
<Flex pt="2" >
    
    <Text fontSize="lg" as="b" >Bengal's Tryst With Alternative Readings Of The Ramayana
    SNIGDHENDU BHATTACHARYA/ last updated{last}
    </Text>
    
<Box><Text>Michael Madhusudan Dutt, Rabindranath Tagore, Sukumar Ray and the Bengal Renaissance's encounters with Ram</Text></Box>

   </Flex>
</Box>
  </Box>
  
</Flex>

<Box     m="6vh" ><Image w="full" h="full" src="https://imgnew.outlookindia.com/uploadimage/library/free_files/jpg/ChaloR_2022_09_30_071600.jpg" /></Box>


<Divider/>


<Text pr="150vh" as="b" color="red" fontSize="3xl" >BUSINESS & MONEY</Text>
<Box w="190vh" m="auto"   >
<Flex  >
    <Box  >
        <Image  src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1664688056.webp" />

       <Box><Text>Suzlon Energy Ltd. founder and chairman Tulsi Tanti</Text></Box>
       <Heading>Suzlon Energy Chairman Tulsi Tanti Passes Away</Heading>

       <Flex pt="2" >
        <Box w="63vh" ><Text>Tanti spearheaded the wind revolution in India with the founding of Suzlon Energy in 1995</Text></Box>
        <Box  ><Text as="b" >Global Factors, Macroeconomic Data To Drive Markets In Holiday-Shortened Week Ahead: Analysts</Text>
        <Divider mt="2" mb="2" />
        <Text  as="b" >All You Need To Need To Know About 5G Telecom Services Launched By PM Narendra Modi</Text>
        </Box>
        
       </Flex>
    </Box>
    <Box  w="full"fullborder="1px solid red" >
        <Heading>Inflation May Fall To 5.2% Next Fiscal On Normal Rains: RBI Report</Heading>
        <Box mt="2" >
            <Flex>
                <Box><Text>RBI expects retail inflation to come under control at 5.2 per cent in the next financial year beginning April, down from 6.7 per cent it has forecast for the current year1 </Text>
                <Text color="red" >PRESS TRUST OF INDIA/last updated on {last}</Text></Box>
                <Box><Image src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/Inflation_1655638441.webp" />
               </Box>
             
            </Flex>
            <Divider   />
            <Box mt="9" ml="3" >
                <Flex>
                    <Box h="100" >
                        <Image w="80" src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1647924126.webp" />
                        
                    </Box>
                    <Box pl="2" ><Text fontSize="xl" >Additional Excise Duty Of Rs 2/Litre On Petrol Put Off By One Month; Diesel By Six Months</Text></Box>
                    
                </Flex>
                <Flex   >
                    <Box h="100"  >
                        <Image w="80"  src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/Jobs_1657882244.webp" />
                        
                    </Box>
                    <Box pl="2" ><Text fontSize="xl" >India's Unemployment Rate Drops To 6.43% In September: CMIE</Text></Box>
                    
                </Flex>
                <Flex mt="5">
                    <Box   >
                        <Image w="80" src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1651482951.webp" />
                        
                    </Box>
                    <Box pl="2" ><Text fontSize="xl" >Tata Motors Total Domestic Sales Jump 44% To 80,633 Units In September</Text></Box>
                    
                </Flex>
              
            </Box>
           
        </Box>

    </Box>
    <Box bg="#F6F6F7" p="2" ml="5"  border="1px solid red" w="full"fullborder="1px solid red" >
        <Box pr="200" ><Heading color="red" size="lg" >PREMIUM</Heading>
        <Text pr="10" pt="2" fontSize="xl" color="red" >Lead Story</Text></Box>
        <Image p="4" src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1662093902.webp" />
        <Heading mr="80"  as='h2' size='xl'  >Coal Killer</Heading>
        <Text w="30" fontSize="2xl" pt="2" >How it is Indians Vs Indians in the race for a green country</Text>
      
      <Flex pt="2" >
        <Box w="50%"  ><Text color="red" >Lead Story</Text>
         <Text pt="2" >'There Should Be A Package For Coal-Bearing States'</Text>
 <Text pt="2" color="red" >Outlook Money</Text>
 <Text fontSize="lg" pt="2" >5 Smart Financial Habits You Should Have</Text>

        </Box>
        <Box w="50%"  ><Text color="red" >Outlook Money</Text>
        <Text pt="2">24 Smart Money Moves</Text>
        
        <Image pt="3" src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1662536966.webp" /></Box>
      </Flex>
    </Box>     
</Flex> 
</Box>
<Divider pt="2" />

<Heading pr="150vh" as="b" color="red" fontSize="3xl"  >WEB 3.0/CRYPTO/METAVERSE</Heading>
<Box  p="2"  w="170vh" m="auto" mt="3" >
    <Flex justifyContent="space-evenly"  >
        <Box  m="2" w="52vh" ><Image src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_2/NFT_1662696458.webp" />
         <Text w="20" fontSize="10" pt="2" >Outlook Money</Text>
         <Divider mt="2" />
         <Heading>Will NFT Market Rebound From A Deep Contraction? Here’s What Experts Say</Heading>
        <Text pt="2" >Amid negative sentiments in the crypto market, the NFT creators and other industry stakeholders are hopeful of a positive comeback.</Text>
         <Text color="red" >HARSH KUMAR/ last updated at{last} </Text>
        </Box>
        <Box m="2" w="52vh" ><Image src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_2/IMAGE_1664596908.webp" />
        <Text w="20" fontSize="10" pt="2" >Outlook Money</Text>
        <Divider mt="2" />
       
        <Heading>Crypto Prices Today: Bitcoin, Ethereum Rise, Quant (QNT) Top Gainer, Solana Down 3%</Heading>

        <Text pt="2" >Bitcoin (BTC) was up by 0.11 per cent, Ethereum (ETH) rose 0.17 per cent, and Solana was down  Quant (QNT) was the top gainer with 5.95 per cent gains.</Text>
        <Text color="red" >Outlook Team / last updated at{last}</Text>
       </Box>
        <Box m="2" w="52vh"  ><Image src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_2/IMAGE_1659234842.webp" />
        <Text w="20" fontSize="10" pt="2" >Outlook Money</Text>
        <Divider mt="2" />
       
        <Heading>Why Are Governments Showing Interest in CBDCs? Possible Ways Digital Coins Can Help You</Heading>

        <Text pt="2" >With more and more governments showing interest in central bank digital coins (CBDCs), we explore how these coins might impact your life and whether the technology is viable..</Text>
        <Text color="red" >Outlook Team / last updated at{last}</Text>
        
        
        </Box>
        <Box m="2" w="52vh"  ><Image src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_2/IMAGE_1649853789.webp" />
        <Text w="20" fontSize="10" pt="2" >Outlook Money</Text>
        <Divider mt="2" />
       
       <Heading>Latest Crypto News: ED Freezes Cryptocurrencies Worth Rs 47.64 Lakh under illegal actions</Heading>

       <Text pt="2" >The Enforcement Directorate has frozen cryptocurrencies worth Rs 47.64 lakh under the Prevention of Money Laundering Act following an investigation into a mobile gaming application</Text>
       <Text color="red" >Outlook Team / last updated at{last}</Text>
        
        </Box>
        
    </Flex> 
</Box>
 
</Flex>
     )
}