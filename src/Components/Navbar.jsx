import React from 'react'
import {Button, Flex} from 'antd'
import {Typography} from 'antd'
import jadoo from '../assets/jadoo.png'

const { Text } = Typography;
export const Navbar = () => {
  return (
    <>
    <div style={{margin:'10px', height:'10vh', paddingTop:'1rem'}}>
     <Flex gap={50} align='center' justify='space-between' style={{marginLeft:'5vw'}}>
        <img src={jadoo}/>
        <Flex gap={50} align='center' justify='space-between'>
          <Text strong>Destinations</Text>
          <Text strong>Hotels</Text>
          <Text strong>Flights</Text>
          <Text strong>Bookings</Text>
          <Text strong>Login</Text>
          <Button outlined>Sign Up</Button>
        </Flex>
     </Flex>
     </div>
    </>
  )
}
