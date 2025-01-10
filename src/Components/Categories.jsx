import React from 'react';
import { Flex, Typography, Row, Col } from 'antd';
import { CardsOne } from './cardsOne';
import plane from '../assets/plane.png';
import satellite from '../assets/satellite.png';
import mic from '../assets/mic.png';
import setting from '../assets/setting.png';

const { Title } = Typography;

export const Categories = () => {
  return (
    <div style={{ padding: '2rem 0' }}>
      <Flex vertical justify="center" align="center" wrap style={{textAlign:'center'}}>
        <Title level={5} style={{ color: '#5E6282' }}>
          CATEGORY
        </Title>
        <Title level={1} style={{ color: '#14183E', fontFamily: 'Volkhov', marginBottom: '3rem' }}>
          We Offer Best Services
        </Title>

        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} md={8} lg={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CardsOne image={plane} title="Calculated Weather" description="Built Wicket longer admire do barton vanity itself do in it."/>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CardsOne image={satellite} title="Best Flights" description="Engrossed listening. Park gate sell they west hard for the." />
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CardsOne image={mic} title="Local Events" description="Barton vanity itself do in it. Preferred to men it engrossed listening." />
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CardsOne image={setting} title="Customization" description="We deliver outsourced aviation services for military customers" />
          </Col>
        </Row>
      </Flex>
    </div>
  );
};
