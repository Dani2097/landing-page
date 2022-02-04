import { List, ListItem, Typography } from '@material-ui/core'
import mission from '../../assets/About/mission.png'
import missionM from '../../assets/About/missionmobile.png'
import React from 'react'
import { Quotation } from './About'
import { useWindowSize } from '../LandingPage/Content'
import { CheckCircleOutline } from '@material-ui/icons'

export default function Mission () {
  const [width] = useWindowSize()
  if (width < 501) {
    return <div style={{ background: 'white' }}>
            <Quotation class={'mobile-first-quote'} quote={'“...Migliorare e perfezionarsi per poter sognare in grande...“'} author={'Francesco di leva'} type={'Co-founder'}/>
            <img src={missionM} className={'mission-mobile-img'}/>
            <div className={'justify'} style={{ padding: 12 }}>
                <Typography className={'title center'}>Mission aziendale</Typography>
                <List className={'about-list'}>
                    <ListItem> <CheckCircleOutline style={{ color: '#149314' }}/>&nbsp;<Typography>Dedizione </Typography></ListItem>
                    <ListItem> <CheckCircleOutline style={{ color: '#149314' }}/>&nbsp;<Typography> Passione </Typography></ListItem>
                    <ListItem> <CheckCircleOutline style={{ color: '#149314' }}/>&nbsp;<Typography> Qualità </Typography></ListItem>
                    <ListItem> <CheckCircleOutline style={{ color: '#149314' }}/>&nbsp;<Typography> Integrità </Typography></ListItem>
                    <ListItem> <CheckCircleOutline style={{ color: '#149314' }}/>&nbsp;<Typography> Efficienza </Typography></ListItem>
                    <ListItem> <CheckCircleOutline style={{ color: '#149314' }}/>&nbsp;<Typography> Professionalità </Typography></ListItem>
                    <ListItem> <CheckCircleOutline style={{ color: '#149314' }}/>&nbsp;<Typography> Affidabilità </Typography></ListItem>
                    <ListItem> <CheckCircleOutline style={{ color: '#149314' }}/>&nbsp;<Typography> Empatia </Typography></ListItem>
                </List>
                <div>
                    <Typography>
                        Seguendo questi solidi principi progettiamo e realizziamo soluzioni e servizi innovativi orientati
                        alle Aziende, PA e ai professionisti che desiderano ottimizzare i processi produttivi e gestionali,
                        ideare e creare nuovi prodotti tecnologici e potenziare la propria competitività sul mercato,
                        abbattendo tempi e costi. Il tutto attraverso l’apporto di un team di professionisti esperti ed
                        appassionati di tecnologia.
                    </Typography>
                    <Typography>Vestire i panni del cliente è per noi prioritario così da comprenderne a fondo i
                        desideri e le
                        necessità, guidandolo al meglio attraverso l’anticipazione, la personalizzazione e la scalabilità
                        delle
                        soluzioni.
                    </Typography>
                    <Typography>Realizzare una soddisfacente customer experience ed instaurare un rapporto che duri nel
                        tempo rappresenta uno dei nostri obiettivi fondamentali.
                    </Typography>
                </div>
            </div>
        </div>
  }
  return <div id={'mission'}>
        <div className={'flex standard-container items-center'}>
            <img src={mission}/>
            <div className={'justify'}>
                <Typography className={'title center'}>Mission aziendale</Typography>
                <List className={'about-list'}>
                    <ListItem> <CheckCircleOutline style={{ color: '#149314' }}/>&nbsp;<Typography>Dedizione </Typography></ListItem>
                    <ListItem> <CheckCircleOutline style={{ color: '#149314' }}/>&nbsp;<Typography> Passione </Typography></ListItem>
                    <ListItem> <CheckCircleOutline style={{ color: '#149314' }}/>&nbsp;<Typography> Qualità </Typography></ListItem>
                    <ListItem> <CheckCircleOutline style={{ color: '#149314' }}/>&nbsp;<Typography> Integrità </Typography></ListItem>
                    <ListItem> <CheckCircleOutline style={{ color: '#149314' }}/>&nbsp;<Typography> Efficienza </Typography></ListItem>
                    <ListItem> <CheckCircleOutline style={{ color: '#149314' }}/>&nbsp;<Typography> Professionalità </Typography></ListItem>
                    <ListItem> <CheckCircleOutline style={{ color: '#149314' }}/>&nbsp;<Typography> Affidabilità </Typography></ListItem>
                    <ListItem> <CheckCircleOutline style={{ color: '#149314' }}/>&nbsp;<Typography> Empatia </Typography></ListItem>
                </List>
                <div>
                <Typography>
                    Seguendo questi solidi principi progettiamo e realizziamo soluzioni e servizi innovativi orientati
                    alle Aziende, PA e ai professionisti che desiderano ottimizzare i processi produttivi e gestionali,
                    ideare e creare nuovi prodotti tecnologici e potenziare la propria competitività sul mercato,
                    abbattendo tempi e costi. Il tutto attraverso l’apporto di un team di professionisti esperti ed
                    appassionati di tecnologia.
                </Typography>
                <Typography>Vestire i panni del cliente è per noi prioritario così da comprenderne a fondo i
                    desideri e le
                    necessità, guidandolo al meglio attraverso l’anticipazione, la personalizzazione e la scalabilità
                    delle
                    soluzioni.
                </Typography>
                <Typography>Realizzare una soddisfacente customer experience ed instaurare un rapporto che duri nel
                    tempo rappresenta uno dei nostri obiettivi fondamentali.
                </Typography>
            </div>
            </div>
        </div>
        <Quotation quote={'“Personalizzazione, affidabilità e garanzia delle soluzioni, volte a soddisfare anche le esigenze più complesse...“'} author={'Mario Giancola'} type={'Co-Founder & Project Manager'}/>
    </div>
}
