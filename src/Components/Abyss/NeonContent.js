/* eslint-disable react/no-unescaped-entities */
import Icon from '@material-ui/core/Icon'
import { Typography } from '@material-ui/core'
import React from 'react'
export default function NeonContent (props) {
  return <div id={'neon'}>
        <Typography className={'title white-center'}>Inizia a giocare</Typography>
        <div className={'neon-container'}>
            <div>
                <Icon className={'neon-logo rotate90'}>change_history</Icon>
                <div className={'neon-text'}>
                    <Typography className={'white-center'}>Scarica l'app sul playstore</Typography>
                </div>
            </div>
            <div>
                <Icon className={'neon-logo fa fa-google neon-color1'}></Icon>
                <div className={'neon-text'}>
                    <Typography className={'white-center'}>Effettua l'accesso con il tuo account google</Typography>
                </div>
            </div>
            <div>
                <Icon className="material-icons-outlined neon-logo neon-color2">sports_esports</Icon>
                <div className={'neon-text'}>
                    <Typography className={'white-center'}>Divertiti giocando con le diverse modalità</Typography>
                </div>
            </div>
            <div>
                <Icon className="material-icons-outlined neon-logo neon-color3">emoji_events</Icon>
                <div className={'neon-text'}>
                    <Typography className={'white-center'}>Scala le classifiche e competi con i tuoi amici</Typography>
                </div>
            </div>
        </div>
    </div>
}
