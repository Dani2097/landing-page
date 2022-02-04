import React from 'react'
import VideoHead from './VideoHead'
import AbyssContent from './AbyssContent'
import './AbyssBg.css'
import { Button, Typography, useTheme } from '@material-ui/core'

export default function Abyss () {
  const theme = useTheme()
  return <div className={'abyss-main-container'} style={{ overflow: 'hidden' }}>
        <div style={{ position: 'relative' }}>
            <div style={{ height: 40, background: 'rgb(47, 174, 204)' }}/>
            <div style={{ height: 40, background: 'rgb(47, 174, 204)' }}/>
            <VideoHead/>
        </div>

        <div className={'mobile-banner'}>
            <Typography className={'title'}>
                Abyss rings
            </Typography>
            <Typography className={'content'} style={{ background: 'transparent' }}>
                Divertiti e batti ogni record impilando gli anelli colorati nel minor tempo possibile
            </Typography>
            <div style={{ marginTop: 20 }}>
                <Button
                    // component={"link"}
                    // href={"https://play.google.com/store/apps/details?id=com.caschi"}
                    onClick={() => { window.open('https://play.google.com/store/apps/details?id=com.DLGTEK.WaterSplashRings3D') }}
                    variant={'outlined'}
                        style={{
                          color: theme.palette.secondary.light,
                          borderColor: theme.palette.secondary.light
                        }}>
                    Scarica ora
                </Button>
                <Button style={{ marginLeft: 20 }} variant={'contained'}
                        onClick={() => { document.getElementById('abyss-content').scrollIntoView({ behavior: 'smooth' }) }}
                        color={'primary'}>
                    Scopri di più
                </Button>
            </div>
        </div>
        <AbyssContent/>
    </div>
}
