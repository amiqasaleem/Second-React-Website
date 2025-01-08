import React from 'react'
import {Button, Flex, Divider} from 'antd'
import {Typography} from 'antd'
import { Col, Row } from 'antd';
import { CardsOne } from './cardsOne';

const { Text, Title } = Typography;
export const BookingSec = () => {
  return (
    <>
    <div style={{backgroundColor:'skyblue', height:'80vh', padding:'2rem'}}>
    <Flex horizontal gap='5rem' justify='center' align='center'>
        <Flex vertical>
            <Title level={5}>Easy and Fast</Title>
            <Title level={1}>Book your next trip 
            in 3 easy steps</Title>
            <div>
                <div>
                    <img src="" alt="" />
                    <div>
                        <Title level={5}>Choose Destination</Title>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </Text>
                    </div>
                </div>
                <div>
                    <img src="" alt="" />
                    <div>
                        <Title level={5}>Make Payment</Title>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </Text>
                    </div>
                </div>
                <div>
                    <img src="" alt="" />
                    <div>
                        <Title level={5}>Reach Airport on Selected Date</Title>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </Text>
                    </div>
                </div>
            </div>
        </Flex>
        <CardsOne/>
    </Flex>
    </div>
    </>
  )
}
