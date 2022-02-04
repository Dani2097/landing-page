import React, { useEffect, useLayoutEffect, useState } from 'react'
import ToolBar from './ToolBar'
import { Button, Typography } from '@material-ui/core'
import bg from '../../assets/bg.jpg'
import cardImage1 from '../../assets/CardsImages/1.png'
import cardImage2 from '../../assets/CardsImages/2.png'
import cardImage3 from '../../assets/CardsImages/3.png'
import cardImage4 from '../../assets/CardsImages/4.png'
import SingleCard from './SingleCard'
import ContentSection from './ContentSection'
import Technology from '../GeneralComponent/Technology'
import { lorem } from '../../assets/TechnologyLogo/IndexImages'
import SectionMobileSwitcher from './SectionMobileSwitcher'
import MobileContact from './MobileContact'
import { SendOutlined } from '@material-ui/icons'
import Project from '../GeneralComponent/Project'
import WorkFlow from '../GeneralComponent/WorkFlow'

export function useWindowSize () {
  const [size, setSize] = useState([0, 0])
  useLayoutEffect(() => {
    function updateSize () {
      setSize([window.innerWidth, window.innerHeight])
    }

    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])
  return size
}

const cardsData = [
  {
    image: cardImage3,
    id: 'commerce',
    cardTitle: 'E-commerce',
    cardText: 'Creazione di pagine web responsive e accattivanti '
  }, {
    image: cardImage2,
    id: 'web',
    cardTitle: 'Sviluppo pagine web',
    cardText: 'Progettazione e sviluppo di applicazioni per tutte le piattaforme'
  }, {
    image: cardImage4,
    id: 'mobile',
    cardTitle: 'Sviluppo app mobile',
    cardText: 'Sviluppo e manutenzione di server per la gestione del vostro prodotto'
  }, {
    image: cardImage1,
    id: 'server',
    cardTitle: 'Gestione server',
    cardText: 'Creazione e progettazione di applicazioni videoludiche'
  }
]
export default function Content () {
  const [selectedCard, setSelectedCard] = useState(0)
  const [width] = useWindowSize()
  useEffect(() => {
    let index = cardsData.findIndex(e => e.id === window.location.hash.slice(1, window.location.hash.length))
    if (index === -1)index = 0
    setSelectedCard(index)
  })
  return <div className={'content'}>
        <img src={bg} className={'content-image'} alt={'background'}/>
        <div style={{ height: 50 }}/>
        <ToolBar/>
        <div className={'content-container'}>
            <div className={'content-typography'}>
                <img
                    src={'https://dlgtek.com/static/media/DLG_TEK_SRLS.a4fb4ce0.png'}
                    alt={'logo'}
                    className={'logo-toolbar'}
                />
                &nbsp;
                <Typography className={'text-main'}>You have all the reason in the world to achieve your grandest dreams</Typography>
                <Typography className={'text-main'}> Imagination plus innovation equals realization</Typography>
                &nbsp;
                <Typography className={'text-main'}> <i>-Denis Waitley</i></Typography>
            </div>
            {/* <ContactUs/> */}
        </div>
        {width < 860 && <Button onClick={() =>
          document.getElementById('mobile-contact').scrollIntoView({ behavior: 'smooth', block: 'center' })
        } variant={'outlined'} color={'primary'}>Contact us &nbsp; <SendOutlined/></Button>}
        <div className={'landing-bg'}>
            <div className={'content-end'} id={'card-container'}>
                {cardsData.map((e, i) =>
                    <div key={'cards' + i} onClick={() => {
                      setSelectedCard(i)
                      window.location.hash = '#' + e.id
                    }} className={'card-container'}>
                        <SingleCard
                            setSelected={() => {
                              setSelectedCard(i)
                            }}
                            isSelected={i === selectedCard}
                            image={e.image}
                            cardText={e.cardText}
                            cardTitle={e.cardTitle}
                        /></div>
                )}
            </div>
            <div className={'blur'} style={{ width: 'auto', maxWidth: 1040, margin: 'auto' }}>
            {(width < 861) && <div className={'mobile-content'}>
                {cardsData.map((e, i) => (<SectionMobileSwitcher key={'switch' + i} index={i} element={e}/>))}
            </div>}
            <div className={'content-footer'}>
                {(selectedCard >= 0 && width > 860) &&
                <ContentSection
                    index={selectedCard}
                    image={cardsData[selectedCard].image}
                    content={cardsData[selectedCard].cardText + lorem}
                    title={cardsData[selectedCard].cardTitle}
                />}
            </div>
                {width > 860 && <Project selected={selectedCard}/>}
                {width > 860 && <Technology index={selectedCard}/>}
            </div>
            <WorkFlow/>
            {/* <AboutUs/> */}

            <MobileContact/>
        </div>
    </div>
}
