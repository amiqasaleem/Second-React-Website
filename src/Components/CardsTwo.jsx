import React from 'react'
import { Card } from 'antd';

const { Meta } = Card;

export const CardsTwo = ({image2, title2, description2}) => {
  return (
    <>
    <Card hoverable style={{ width: 240, height:'auto'}} cover={<img alt="example" src={image2} />}>
        {/* <img src={image2} style={{width:'15vw', }}/> */}
        <Meta title={title2} description={description2}/>
    </Card>
    </>
  )
}
