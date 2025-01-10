import React from 'react';
import { Button, Typography, Row, Col, Image } from 'antd';
import HeaderImg from '../assets/Header.png';
import { CaretRightOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const style = {
  padding: '1rem 2.5rem',
  paddingLeft: '3rem',
};

export const Header = () => {
  return (
    <div style={{ minHeight: '90vh' }}>
      <Row gutter={16}>
        <Col xs={24} lg={12}>
          <div style={style}>
            <Title level={4} style={{ color: '#DF6951', textTransform: 'uppercase' }}>
              Best Destinations around the world
            </Title>
            <Title className="main-heading" style={{ fontFamily: 'Volkhov', fontSize: '4rem', fontWeight: 'bold', color: '#181E4B' }}>
              Travel, enjoy and live a new and full life
            </Title>
            <Text strong style={{ lineHeight: '2rem', fontSize: '1.2rem', marginTop: '1rem', marginBottom: '2rem' }}>
              Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
            </Text>
            <div>
              <Button style={{ backgroundColor: '#F1A501', border: 'none' }}>Find out more</Button>
              <Button style={{ border: 'none', padding: '1rem' }} icon={<CaretRightOutlined />}>Play Demo</Button>
            </div>
          </div>
        </Col>
        <Col xs={24} lg={12} style={{ textAlign: 'center' }}>
          <Image width="100%" src={HeaderImg} preview={false} />
        </Col>
      </Row>
    </div>
  );
};
