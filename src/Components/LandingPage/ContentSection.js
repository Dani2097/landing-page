/* eslint-disable */
import React from 'react'
import { Typography } from '@material-ui/core'

export default function ContentSection (props) {

  return <div>
      {props.title && <Typography className={'section-title'} style={{textAlign:"center",fontWeight:"normal",marginTop:60,marginBottom:-40}}>{props.title}</Typography>}
      <div className={'content-section'} style={{ flexDirection: props.index % 2 === 0 && 'row-reverse', width: window.innerWidth < 860 && window.innerWidth - 40 }}>
      <div
            className={'section-img-container'}
            style={{ justifyContent: props.index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
            <img src={props.image} className={'image-section'} alt={'section'}/>
        </div>
        <div className={'section-description'}>
            <Typography className={'section-content'} style={{ textAlign: 'justify' }}>{props.content}</Typography>
        </div></div>
    </div>
}
