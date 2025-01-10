import React from 'react';
import { Button, Typography, Row, Col } from 'antd';
import { CardsOne } from './cardsOne';
import booking from '../assets/booking.jpg'

const { Text, Title } = Typography;

export const BookingSec = () => {
  return (
    <div style={{padding: '2rem 0', margin:'2rem', minHeight:'80vh'}}>
      <Row gutter={[16, 16]} justify="space-around" align="middle">
        <Col xs={24} sm={12} md={8} lg={6}>
          <Title level={4} style={{ color: '#5E6282' }}>Easy and Fast</Title>
          <Title level={1} style={{fontFamily: 'Volkhov', color: '#14183E'}}>Book your next trip in 3 easy steps</Title>
          <div>
            <div>
              <Title level={5}>Choose Destination</Title>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</Text>
            </div>
            <div>
              <Title level={5}>Make Payment</Title>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</Text>
            </div>
            <div>
              <Title level={5}>Reach Airport on Selected Date</Title>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</Text>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CardsOne image={booking} title="Calculated Weather" description="Built Wicket longer admire do barton vanity itself do in it." />
        </Col>
      </Row>
    </div>
  );
};
