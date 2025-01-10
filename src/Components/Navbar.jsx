import React from 'react';
import { Button, Typography, Row, Col } from 'antd';
import jadoo from '../assets/jadoo.png';

const { Text } = Typography;

export const Navbar = () => {
  return (
    <div style={{ margin: '10px', height: '10vh', paddingTop: '1rem' }}>
      <Row justify="space-between" align="middle">
        <Col>
          <img src={jadoo} alt="logo" style={{ maxWidth: '100%', height: 'auto', marginLeft:'2rem' }} />
        </Col>
        <Col>
          <Row gutter={16}>
            <Col><Text strong>Destinations</Text></Col>
            <Col><Text strong>Hotels</Text></Col>
            <Col><Text strong>Flights</Text></Col>
            <Col><Text strong>Bookings</Text></Col>
            <Col><Text strong>Login</Text></Col>
            <Col><Button type="primary">Sign Up</Button></Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
