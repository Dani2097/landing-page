/* eslint-disable react/prop-types */
import { Typography } from '@material-ui/core'
import React from 'react'

export default function SingleCard (props) {
  return <div onClick={() => {
    props.setSelected()
    document.getElementById('card-container').scrollIntoView({ block: 'start', behavior: 'smooth' })
  }} className={'single-card'}
                style={{ marginTop: props.isSelected && 50 }}>
        <img src={props.image} alt={'card-logo'}/>
        <Typography className={'card-title'}>
            {props.cardTitle}
        </Typography>
        <Typography>
            {props.cardText}
        </Typography>
    </div>
}
