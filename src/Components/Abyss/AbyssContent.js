/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Home from '../../assets/gameAssets/abyss home.jpg'
import play from '../../assets/gameAssets/abyss-play.jpg'
import modes from '../../assets/gameAssets/3gameMode.gif'
import levels from '../../assets/gameAssets/levels.gif'
import { Typography } from '@material-ui/core'
import { lorem } from '../../assets/TechnologyLogo/IndexImages'
import NeonContent from './NeonContent'
import Review from './Review'
import red from '../../assets/Fishes/RedFish.png'
import pipe1 from '../../assets/Fishes/pipe.png'
import yellow from '../../assets/Fishes/YellowFish.png'
import blue from '../../assets/Fishes/BlueFish.png'
import blueGring from '../../assets/Fishes/bgre.png'
import blueRring from '../../assets/Fishes/rb.png'
import redRing from '../../assets/Fishes/red.png'
import manyFish from '../../assets/Fishes/ManyFish.png'
import pipe2 from '../../assets/Fishes/pipeRB.png'

export default function AbyssContent (props) {
  function section (image, isLeft, title, content) {
    if (window.innerWidth < 390) {
      return <div className={'abyss-section mobile ' + (isLeft ? 'left' : 'right')}>

            <div>
                <div className={'abyss-section-text ' + (isLeft ? 'left' : 'right')} style={{ marginTop: 50 }}>
                    <Typography className={'title'}>{title}</Typography>
                </div>
                <div className={'abyss-mobile'}>
                    <img src={image}/>
                    <Typography className={'abyss-section-content  ' + (isLeft ? 'left' : 'right')}>
                        {content}
                    </Typography>
                </div>
            </div>
        </div>
    }
    return <div className={'abyss-section ' + (isLeft ? 'left' : 'right')}>
            <div className={'abyss-img-container'}>
                <img src={image}/>
            </div>
            <div className={'abyss-section-text ' + (isLeft ? 'left' : 'right')} style={{ marginTop: 50 }}>
                <Typography className={'title'}>{title}</Typography>
                <Typography className={'abyss-section-content  ' + (isLeft ? 'left' : 'right')}>
                    {content}
                </Typography>
            </div>

        </div>
  }

  return <div style={{ position: 'relative' }}>
    <div id={'abyss-content'}>
        <img src={red} className={'first-fish'}/>
        <img src={pipe1} className={'pipe1'}/>

        {section(play, true, 'User Friendly', 'Grafica estremamente semplice e molto accattivante ' + lorem)}
        <img src={yellow} className={'second-fish'}/>
        <img src={red} className={'second-fish smaller'}/>
        <img src={blueGring} className={'bgRing'} style={{ paddingRight: 100, marginTop: 50, transform: 'rotate(-14deg)' }}/>
        <img src={blueRring} className={'brRing'} style={{ paddingRight: 100, marginTop: 50, transform: 'rotate(-14deg)' }}/>
        <img src={redRing} className={'brRing red'} style={{ paddingRight: 100, marginTop: 50, transform: 'rotate(-14deg)' }}/>
        {section(modes, false, 'Tre modalita', <p style={{ margin: 0 }}>Classica: ideata per i più nostaligici e i casual gamer, ricorda molto
            il gioco da cui è ispirato quest' applicazione,
            Waterfull ring toss;<br/> Arcade:per i giocatori più competitivi, cerca di fare più punti possibili nel tempo
            limite e scala le classifichnpe mondiali del gioco;<br/> Storia: modalità con
            diversi livelli con difficoltà crescente per i giocatori a cui piacciono le sfide</p>)}
        {section(levels, true, 'Tanti livelli', 'Ci sono oltre 26 livelli nella modalità storia! ognuno di' +
            ' difficoltà crescente con ostacoli particolari e unici, evita i piranha e supera gli ostacoli per riuscire ad impilare tutti gli anelli' +
            ' ma ricorda unendo anelli dello stesso colore otterrai più punti per poter ricevere tutte le stelle premio, supera tutti i livelli prima dei tui amici e fai vedere ai piranha di che pasta sei fatto!')}
        <img src={blue} className={'second-fish blue-fish'}/>
        <img src={blue} className={'second-fish smaller right-fish'} style={{ paddingTop: 180, transform: 'rotate(-14deg)', width: 50 }}/>
        <img src={blue} className={'second-fish smaller right-fish'} style={{ transform: 'rotate(-10deg)' }}/>
        <img src={yellow} className={'second-fish smaller right-fish'} style={{ paddingRight: 100, marginTop: 50, transform: 'rotate(-14deg)' }}/>
        <img src={pipe2} className={'pipe2'}/>
        {section(Home, false, 'Three Game mode', 'Con tre modalità di gioco il divertimento è assicurato ' + lorem)}
        <img src={manyFish} className={'many-fish'}/>
        <NeonContent/>
        <Review/>
    </div>
    </div>
}
