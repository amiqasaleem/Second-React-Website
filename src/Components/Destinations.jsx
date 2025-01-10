import React from 'react';
import { Flex, Typography, Row, Col } from 'antd';
import { CardsTwo } from './CardsTwo';
import rome from '../assets/rome.png';
import london from '../assets/london.jpg';
import europe from '../assets/europe.png';

const { Title } = Typography;

export const Destinations = () => {
  return (
    <div style={{ padding: '2rem 0'}}>
      <Flex vertical justify="center" align="center" wrap>
        <Title level={5} style={{ color: '#5E6282' }}>
          Top Selling
        </Title>
        <Title level={1} style={{ color: '#14183E', fontFamily: 'Volkhov', marginBottom: '3rem' }}>
          Top Destinations
        </Title>

        <Row gutter={[16, 16]} justify="space-between" style={{margin:'auto'}} margin='2rem'>
          <Col xs={24} sm={12} md={8} lg={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <CardsTwo image2={rome} title2="Rome, Italy" description2="10 Days Trip" />
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <CardsTwo image2={london} title2="London, UK" description2="12 Days Trip" />
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <CardsTwo image2={europe} title2="Full Europe" description2="28 Days Trip" />
          </Col>
        </Row>
      </Flex>
    </div>
  );
};
