import React from 'react'
import { Card } from 'antd';

const { Meta } = Card;

export const CardsOne = ({image, title, description}) => {
  return (
    <>
    <Card hoverable style={{ width: 240, height:'auto' , padding:'1.5rem', textAlign:'center', display:'flex', justifyContent:'center', flexDirection:'column'}}>
        <img src={image} style={{padding:'3px', minHeight:'5vw', minWidth:'5rem'}}/>
        <Meta title={title} description={description}/>
    </Card>
    </>
  )
}
