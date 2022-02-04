/* eslint-disable react/prop-types */
import React from 'react'
import absel from '../../assets/project-logo/abseel.png'
import leduran from '../../assets/project-logo/leduran.png'
import euklid from '../../assets/project-logo/euclid.png'
import amilcare from '../../assets/project-logo/amilcare.gif'
import pianoweb from '../../assets/project-logo/pianoweb.png'
import quaternion from '../../assets/project-logo/quaternion.png'
import laborvetro from '../../assets/project-logo/laborvetro.png'
import abselWeb from '../../assets/project-logo/absel-site.png'
import amilcareWeb from '../../assets/project-logo/amilcareBack.png'
import abyss from '../../assets/project-logo/abyss.png'
import abyssBack from '../../assets/gameAssets/3gameMode.gif'
import leduranBack from '../../assets/project-logo/leduranBack.png'
import osbeBack from '../../assets/project-logo/pianowebBack.jpg'
import psLogo from '../../assets/ps.png'
import apLogo from '../../assets/appStore.png'
import { Link, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import { CheckCircleOutline } from '@material-ui/icons'

const projects = {
  commerce: [
    {
      image: absel,
      descriptions: ['Progettazione e realizzazione sito e-commerce del settore moda'],
      link: 'https://abse-el.it',
      backImage: abselWeb,
      backCover: true,
      linkname: 'Visita il sito'
    },
    {
      image: leduran,
      descriptions: ['Realizzazione sito web basato su CMS Wordpress', 'Implementazione plugin Woocommerce per la gestione del catalogo prodotti'],
      link: 'https://www.leduran.com',
      backImage: leduranBack,
      backCover: true,
      linkname: 'Visita il sito'
    }

  ],
  server: [
    {
      image: laborvetro,
      descriptions: [
        'Riprogettazione e implementazione rete aziendale.',
        'Configurazione sistemi di backup dati',
        'Manutenzione sistemi informatici aziendali'
      ]
    },
    {
      image: euklid,
      descriptions: [
        'Realizzazione sistema per la memorizzazione di segnali sulla blockchain di Bitcoin.',
        'Progettazione, realizzazione e manutenzione server web.'
      ]
    },
    {
      image: amilcare,
      descriptions: [' Realizzazione, gestione e manutenzione infrastruttura server.']
    },
    {
      image: pianoweb,
      descriptions: ['Realizzazione di endpoint ad-hoc per l\'interfacciamento tra appicazione e wordpress'],
      link: 'https://play.google.com/store/apps/details?id=com.caschi',
      linkname: 'Applicazione android'
      // backImage: osbeBack
    },
    {
      image: quaternion,
      descriptions: [
        'Configurazione e messa in sicurezza della rete aziendale.',
        'Realizzazione di software per l’automazione di processi aziendali successivamente installati su server Linux e Windows appositamente configurati e gestiti quotidianamente dal team DLG TEK.',
        'Sviluppo in C# di un sistema di interfacciamento con un noto broker di trading per l’esecuzione di operazioni a mercato'
      ]
    }
  ],
  mobile: [
    {
      image: amilcare,
      descriptions: ['Sviluppo app mobile & web di controllo del dispositivo', 'Progettazione dispositivo IoT / Stampa 3D'],
      backImage: amilcareWeb,
      linkname: 'Applicazione android'
    },
    {
      image: pianoweb,
      descriptions: ['Realizzazione app OSBE Helmets Club per piattaforme Android e iOS.', 'Realizzazione di endpoint ad-hoc per l\'interfacciamento tra appicazione e wordpress'],
      link: 'https://play.google.com/store/apps/details?id=com.caschi',
      linkname: 'Applicazione android',
      backImage: osbeBack,
      appleLink: 'https://apps.apple.com/in/app/osbe-italy/id1584381216'
    },
    {
      image: abyss,
      descriptions: [
        'Design, progettazione, sviluppo e realizzazione dell\'applicazione videoludica Abyss rings',
        'Progettazione dei modelli 3D utilizzati dall\' applicazione',
        'Sviluppo delle interfaccie per la comunicazione client server'
      ],
      link: 'https://play.google.com/store/apps/details?id=com.DLGTEK.WaterSplashRings3D',
      linkname: 'Applicazione android',
      backImage: abyssBack
    }
  ],
  web: [
    {
      image: euklid,
      descriptions: [
        'Progettazione, realizzazione e manutenzione piattaforma web per la creazione e la gestione ordini di trading, reporting e statistiche.',
        'Realizzazione sistema di controllo avanzato piattaforma con alert automatici.'
      ]
    }
  ]
}
const type = ['commerce', 'web', 'mobile', 'server']
export default function Project (props) {
  const selectedType = type[props.selected]
  const styleApp = { display: 'flex', borderRadius: '50%', width: 42, height: 42, justifyContent: 'center', alignItems: 'center', marginBottom: -30 }
  return (
        <div>
            <div className={'project-container'}>
                {!props.noTitle && <Typography className={'title'}>Lavori realizzati </Typography>}
                <div className={'flex'} style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
                    {projects[selectedType]?.map(e => (
                        <div key={e.descriptions} className={'single-product'}>
                            <div className={e.backImage ? 'frontCard' : ''}>
                                <img src={e.image} alt={'logo'} className={'project-image'}/>
                                <List style={{ minHeight: 100 }}>
                                    {e.descriptions.map(el => <ListItem key={el}>
                                      <CheckCircleOutline style={{ color: '#149314' }}/>
                                        &nbsp;<ListItemText>{el}</ListItemText></ListItem>)}
                                    {e.link && <div target={'_blank'} href={e.link} style={{ width: 1, height: 20 }}>{}</div>}
                                </List>

                            </div>
                            <div className={'backCard'} style={{ display: e.backImage ? '' : 'none' }}>
                                {e.backImage &&
                                (<a href={e.link} className={ e.linkname === 'Applicazione android' ? 'appLink' : ''} target={'_blank'} rel="noreferrer">
                                  <img src={e.backImage} className={ e.linkname === 'Applicazione android' ? 'appLogo' : ''} style={{ objectFit: e.backCover && 'cover' }} alt={'sito'}/>
                                </a>)
                                }
                            </div>
                            {e.link && <Link target={'_blank'} style={ e.linkname === 'Applicazione android' ? { ...styleApp, transform: e.appleLink && 'translateX(-100%)' } : { }} className={'absolute-view ' + (e.linkname === 'Applicazione android' && ' storeLink')} href={e.link}>{
                              e.linkname !== 'Applicazione android'
                                ? (e.linkname || e.link)
                                : <img src={psLogo} style={{ width: 32, height: 32, alignSelf: 'center', justifySelf: 'center', marginLeft: 4 }}/>}</Link>}
                          {e.appleLink && <Link target={'_blank'} style={{ ...styleApp, ...{ transform: e.appleLink && 'translateX(10%)' } }} className={'absolute-view storeLink'} href={e.appleLink}>{

                            <img src={apLogo} className={'storeImage'} style={{ width: 32, height: 32, alignSelf: 'center', justifySelf: 'center' }}/>}</Link>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
  )
}
