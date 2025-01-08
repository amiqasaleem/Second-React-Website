import React from 'react'
import {Flex} from 'antd'
import {Typography} from 'antd'
import { CardsTwo } from './CardsTwo';
import { Col, Row } from 'antd';
import rome from '../assets/rome.png'
import london from '../assets/london.jpg'
import europe from '../assets/europe.png'

const {Title } = Typography;

export const Destinations = () => {
  return (
    <>
    <div style={{height:'100vh'}}>
    <Flex vertical justify='center' align='center' wrap>
        <Title level={5} style={{color:'#5E6282'}}>Top Selling</Title>
        <Title level={1} style={{color:'#14183E', fontFamily: "Volkhov", marginBottom:'5vw'}}>Top Destinations</Title>
        <Row >
        <Flex gap='8rem' wrap justify='space-around'>
            <Col span={8} xs={24} lg={4} md={8} sm={24}>
            <CardsTwo image2={rome} title2='Rome, Italy' description2='10 Days Trip'/>
            </Col>
            <Col span={8} xs={24} lg={4} md={8} sm={24}>
            <CardsTwo image2={london} title2='London, UK' description2='12 Days Trip'/>
            </Col>
            <Col span={8} xs={24} lg={4} md={8} sm={24}>
            <CardsTwo image2={europe} title2='Full Europe' description2='28 Days Trip'/>
            </Col>
        </Flex>
        </Row>
    </Flex>
    </div>
    </>
  )
}
