import React from 'react'
import video from '../../assets/gameAssets/Abyss Rings.mp4'
import { Button, Typography, useTheme } from '@material-ui/core'

export default function VideoHead (props) {
  const theme = useTheme()
  return <div className={'video-container'} style={{ background: '#2faecc' }}>
        <video src={video} playsInline controls={false} className={'video-abyss'} autoPlay disablePictureInPicture muted
               loop/>
        <div>

            <div className={'overlay'}>
                {/* <img src={overlay} className={"img-overlay"}/> */}
                <div className={'abyss-text'}>
                    <Typography className={'title RBimportant'}>
                        Abyss rings
                    </Typography>
                    <Typography className={'content'} style={{ background: 'transparent' }}>
                        Divertiti e batti ogni record impilando gli anelli colorati nel minor tempo possibile
                    </Typography>
                    <div style={{ marginTop: 20 }}>
                        <Button variant={'outlined'}
                                onClick={() => {
                                  window.open('https://play.google.com/store/apps/details?id=com.DLGTEK.WaterSplashRings3D')
                                }}
                                style={{
                                  color: theme.palette.secondary.light,
                                  borderColor: theme.palette.secondary.light
                                }}>
                            Scarica ora
                        </Button>
                        <Button
                            onClick={() => {
                              document.getElementById('abyss-content').scrollIntoView({ behavior: 'smooth' })
                            }}
                            style={{ marginLeft: 20 }}
                            variant={'contained'}
                            color={'primary'}>
                            Scopri di più
                        </Button>
                    </div>
                </div>
            </div>
            <div className={'overlay2'}>
                {/* <img src={overlay} className={"img-overlay"}/> */}
            </div>
        </div>
    </div>
}
