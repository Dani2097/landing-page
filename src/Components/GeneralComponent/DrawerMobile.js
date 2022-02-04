/* eslint-disable react/prop-types */
import { Drawer, Typography } from '@material-ui/core'
import logo from '../../assets/logoDLG.png'
import React from 'react'
import { Facebook, Gamepad, Home, Instagram, LinkedIn, Mail, People, PinDrop } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'

export default function DrawerMobile (props) {
  const location = useLocation()
  console.log(location.pathname)
  return <Drawer open={props.open} onClose={() => props.close()}>
        <div className={'drawer'}>
            <div>
                <img className={'logo-image-drawer'} src={logo} style={{ height: 50, width: 'auto' }}/>
                <div className={'circle circle1'}/>
                <div className={'circle circle2'}/>
                <div className={'circle circle3'}/>
            </div>
            <div style={{ position: 'relative', width: '100%', zIndex: 2 }}>
                <Link to={'/'} onClick={props.close}
                      className={'drawer-item ' + (location.pathname === '/' && 'active')}>
                    <Home/>
                    <div style={{ width: 20 }}/>
                    <Typography>Home</Typography>
                </Link>
                <Link to={'about'} onClick={props.close}
                      className={'drawer-item ' + (location.pathname === '/about' && 'active')}>
                    <People/>
                    <div style={{ width: 20 }}/>
                    <Typography>Chi siamo</Typography>
                </Link>
                <Link to={'abyss'} onClick={props.close}
                      className={'drawer-item ' + (location.pathname === '/abyss' && 'active')}>
                    <Gamepad/>
                    <div style={{ width: 20 }}/>
                    <Typography>Abyss Rings</Typography>
                </Link>
            </div>
            <div className={'divider'}></div>
            <div style={{ height: 20 }}></div>
            <div className={'drawer-company'}>
                <Typography className={'drawer-section-header'}>SEGUICI SUI SOCIAL</Typography>
                <div className={'drawer-social'}>
                    <a href={'https://www.facebook.com/dlgtek/'} target={'_blank'} rel="noreferrer">
                        <Facebook/>
                    </a>
                    <a href={'https://www.instagram.com/dlgtek_official/'} target={'_blank'} rel="noreferrer">
                        <Instagram/>
                    </a>
                    <a href={'https://it.linkedin.com/company/dlgtek'} target={'_blank'} rel="noreferrer">
                        <LinkedIn/>
                    </a>
                </div>
                &nbsp;
                <Typography className={'drawer-section-header'}>INFORMAZIONI AZIENDA</Typography>
                <Typography style={{ color: 'white', display: 'flex', alignItems: 'center', fontSize: 13, marginBottom: 6, marginTop: 10 }}> &nbsp;DLG TEK S.R.L.S.</Typography>
                <Typography style={{ color: 'white', display: 'flex', alignItems: 'center', fontSize: 13, marginBottom: 6 }}> &nbsp;P.IVA 01828210706</Typography>
                <a href={'mailto:info@dlgtek.com'} style={{ textDecoration: 'none' }}> <Typography
                    style={{ color: 'white', fontSize: 13, display: 'flex', alignItems: 'center', marginBottom: 6 }}><Mail/> &nbsp;info@dlgtek.com</Typography>
                </a>
                <Typography style={{ color: 'white', fontSize: 13, display: 'flex', alignItems: 'center', marginTop: -20 }}> <PinDrop/> &nbsp;Campobasso, Molise, Italia</Typography>
            </div>
        </div>
    </Drawer>
}
