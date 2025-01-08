// import Title from 'antd/es/typography/Title'
import '../App.css'
import React from 'react'
import {Button, Flex} from 'antd'
import {Typography} from 'antd'
import { Image } from 'antd';
import HeaderImg from '../assets/Header.png'
import {CaretRightOutlined} from '@ant-design/icons'

import { Col, Row } from 'antd';
const { Text, Title } = Typography;

const style = {
    padding: '1rem 2.5rem',
    paddingLeft:'5rem',
}

export const Header = () => {
    
  return (
    <>
        <div className='Header' style={{height:'90vh'}}>
            <Flex>
                <Row>
                    <Col span={12} lg={12} md={12} sm={24} xs={24}>
                        <Flex vertical style={style} gap='large'>
                            <div >
                                <Title level={4} style={{position:'relative', top:'3rem', color:'#DF6951', textTransform:'upperCase'}} >Best Destinations around the world</Title>
                                <Title className='main-heading'  style={{
                                    fontFamily: "Volkhov",
                                    fontSize: '4rem',  
                                    fontWeight: 'bold',
                                    color: '#181E4B'
                                    }}>Travel, enjoy and live a new and full life</Title>
                                <Text strong style={{lineHeight:'2rem', fontSize:'1.2rem', marginTop:'1rem', marginBottom:'2rem'}}>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</Text>                       
                            </div>
                            <div>
                                <Flex gap='10px'>
                                <Button style={{backgroundColor:'#F1A501', border:'none'}}>Find out more</Button>
                                <Button style={{border:'none', padding:'1rem'}} icon={<CaretRightOutlined/>}>Play Demo</Button>
                                </Flex>
                            </div>
                        </Flex>
                    </Col>
                    <Col span={12} lg={12} md={12} sm={24} xs={24}>
                        <div style={{textAlign:'center'}}>
                        <Image width={600} src={HeaderImg}/>
                        </div>
                    </Col>
                </Row>                                                                             
            </Flex>
        </div>
    </>
  )
}
