/* eslint-disable react/prop-types */
import AboutUs2 from './AboutUs2'
import AboutContent from './AboutContent'
import Vision from './Vision'
import { Typography } from '@material-ui/core'
import React from 'react'
import MobileContact from '../LandingPage/MobileContact'

export default function About (props) {
  return <div id={'about-page'} style={{ minHeight: 1000 }}>
        {/* <div style={{ height: 80, background: '#014262' }}/> */}
        <div className={'about-main'} style={{ width: '100%' }}>
            <AboutUs2/>
            <div id={'bg2'}>
                <AboutContent/>
                <Vision/>
                {window.innerWidth > 500 &&
                <Quotation quote={'“...Migliorare e perfezionarsi per poter sognare in grande...“'}
                           author={'Francesco di leva'} type={'Co-founder'}/>}
                {window.innerWidth < 501 && <Quotation
                    quote={'“Personalizzazione, affidabilità e garanzia delle soluzioni, volte a soddisfare anche le esigenze più complesse...“'}
                    author={'Mario Giancola'} type={'Co-Founder & Project Manager'}/>
                }
                <MobileContact/>
            </div>
        </div>
    </div>
}

export function Quotation (props) {
  return <div className={'quotation ' + props.class }>
        <div style={{ padding: 50, flexDirection: 'column' }} className={'standard-container'}>
            <Typography style={{ fontSize: 25, fontStyle: 'italic', textAlign: 'center' }}>
                {props.quote}
            </Typography>
            <div className={'quot-author'} style={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              justifyContent: 'center',
              width: 200
            }}>
                <Typography><strong>- {props.author}</strong></Typography>
                <Typography style={{ fontSize: 10 }}>&nbsp;&nbsp;&nbsp;{props.type}</Typography>
            </div>
        </div>
    </div>
}
