/* eslint-disable react/no-unescaped-entities */
import { Button, TextField, Typography } from '@material-ui/core'
import { Facebook, Instagram, LinkedIn, SendOutlined } from '@material-ui/icons'
import React from 'react'
import Join from '../../assets/About/join.png'

export default function Footer (props) {
  return <div id={'about-footer'}>
        <div className={'standard-container'} style={{ padding: 20 }}>
            <Contact2/>
            <div style={{
              flex: 1,
              marginLeft: 10,
              paddingLeft: 10,
              background: 'rgba(255, 255, 255, 0.7) none repeat scroll 0% 0%',
              backdropFilter: 'blur(6px)'
            }} className={'contact-card secondo'}>
                <Typography className={'title'}>Lascia il tuo curriculum</Typography>
                <div style={{ textAlign: 'left', display: 'flex', alignItems: 'start' }}>
                    <div className={'child-p-10'}>
                        <Typography>La DlgTek sta assumendo!</Typography>
                        <Typography>Invia un' email con il tuo curriculum a </Typography>
                        <a href={'mailto:info@dlgtek.com'}>info@dlgtek.com</a>
                        <div className={'header-text self-end footer-icon'}>
                            <Typography>O inviacelo sui social</Typography>
                            <a target={'_blank'} href={'https://www.facebook.com/dlgtek/'} rel="noreferrer">
                                <Facebook/>
                            </a>
                            <a target={'_blank'} href={'https://www.instagram.com/dlgtek_official/'} rel="noreferrer">
                                <Instagram/>
                            </a>
                            <a target={'_blank'} href={'https://it.linkedin.com/company/dlgtek'} rel="noreferrer">
                                <LinkedIn/>
                            </a>
                        </div>
                        <Typography>Verrà contattato il prima possibile</Typography>
                    </div>
                    <img src={Join} style={{ background: 'none', boxShadow: 'none', margin: 0, width: 180, objectPosition: '14px -14px' }}/>

                </div>
            </div>

      </div>
    </div>
}
export function Contact2 (props) {
  return <div className={'contact-card'} style={{
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    background: 'rgba(255, 255, 255, 0.7) none repeat scroll 0% 0%',
    backdropFilter: 'blur(6px)'
  }}>
        <Typography className={'title'}>Rimani in contatto</Typography>
        <div className={'contact-about'}>
            <TextField style={{ flex: 1, marginRight: 8 }} variant={'outlined'} label={'Nome'}/>
            <TextField style={{ flex: 1 }} label={'Email'} variant={'outlined'}/>
        </div>
        <TextField style={{ width: '100%', marginTop: 8 }} label={'Messaggio'} multiline rows={4}
                   variant={'outlined'}/>
        <Button style={{ marginTop: 8, alignSelf: 'flex-end' }} variant={'contained'}
                color={'primary'}>Invia&nbsp; <SendOutlined/></Button>
    </div>
}
