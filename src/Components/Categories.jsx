import React from 'react'
import {Flex} from 'antd'
import {Typography} from 'antd'
import { CardsOne } from './cardsOne';
import { Col, Row } from 'antd';

import plane from '../assets/plane.png'
import satellite from '../assets/satellite.png'
import mic from '../assets/mic.png'
import setting from '../assets/setting.png'

const {Title } = Typography;

export const Categories = () => {
  return (
    <>
    <div style={{height:'80vh'}}>
    <Flex vertical justify='center' align='center' wrap>
        <Title level={5} style={{color:'#5E6282'}}>CATEGORY</Title>
        <Title level={1} style={{color:'#14183E', fontFamily: "Volkhov", marginBottom:'5vw'}}>We Offer Best Services</Title>
        <Row >
        <Flex gap='3rem' wrap justify='space-around'>
            <Col span={6} xs={24} lg={4} md={8} sm={24}>
            <CardsOne image={plane} title='Calculated Weather' description='Built Wicket longer admire do barton vanity itself do in it.'/>
            </Col>
            <Col span={6} xs={24} lg={4} md={8} sm={24}>
            <CardsOne image={satellite} title='Best Flights' description='Engrossed listening. Park gate sell they west hard for the.'/>
            </Col>
            <Col span={6} xs={24} lg={4} md={8} sm={24}>
            <CardsOne image={mic} title='Local Events' description='Barton vanity itself do in it. Preferd to men it engrossed listening. '/>
            </Col>
            <Col span={6} xs={24} lg={4} md={8} sm={24}>
            <CardsOne image={setting} title='Customization' description='We deliver outsourced aviation services for military customers'/>
            </Col>
        </Flex>
        </Row>
    </Flex>
    </div>
    </>
  )
}
