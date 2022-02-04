/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import {
  Facebook,
  Gamepad,
  HomeRounded,
  Instagram,
  LinkedIn,
  Menu,
  People
} from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logoDLG.png'
import { useWindowSize } from '../LandingPage/Content'
import { IconButton } from '@material-ui/core'
import DrawerMobile from './DrawerMobile'
export default function MainHeader (props) {
  const [width] = useWindowSize()
  const history = useLocation()
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return <div className={'main-header'} style={{ background: location.pathname === '/' && 'unset' }}>
        <DrawerMobile open={open} close={() => setOpen(false)}/>
        <div className={'header-text-container'}>
            {width <= 720 && <IconButton onClick={() => setOpen(true)} className={'drawerIcon'} >
            <Menu style={{ position: 'absolute', color: 'white' }} />
            </IconButton>}
            {width <= 720 && <div style={{ width: 0 }}/>}
            {history.pathname !== '/' && <img className={'logo-image'} src={logo} style={{ height: 50, width: 'auto', marginBottom: 0 }}/>}
            {width > 720 && <div/>}
            <div className={'navBar'}>

                <Link to={'/'}>
                    <HomeRounded/>&nbsp; Home
                </Link>
                <Link to={'/about'}>
                    <People/>&nbsp;Chi siamo
                </Link>
                <Link to={'/abyss'}>
                    <Gamepad/>&nbsp;Abyss Rings
                </Link>
            </div>
            <div className={'header-text self-end'}>
                <Link to={'https://www.facebook.com/dlgtek/'}>
                    <Facebook/>
                </Link>
                <Link to={'https://www.instagram.com/dlgtek_official/'}>
                    <Instagram/>
                </Link>
                <Link to={'https://it.linkedin.com/company/dlgtek'}>
                    <LinkedIn/>
                </Link>
            </div>
        </div>
    </div>
}
