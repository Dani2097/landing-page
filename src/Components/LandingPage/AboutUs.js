import { Typography } from '@material-ui/core'
import React from 'react'
export default function AboutUs () {
  return <div id={'about'}>
        <div>
            <Typography className={'about-content'}>
                DLG TEK è un progetto nato a Campobasso (Molise) nel 2019 da <strong>Francesco di
                Leva</strong> e <strong>Mario Giancola</strong> con l’obiettivo di realizzare prodotti informatici e
                tecnologici innovativi.</Typography>
            &nbsp;
            <Typography className={'about-content'}>
                Abbiamo collaborato con aziende italiane e internazionali maturando una significativa esperienza nella
                progettazione e implementazione di portali web, web app, di reti e sistemi server, di sistemi basati su
                tecnologie all’avanguardia come la blockchain. Forti del background tecnico e umano abbiamo deciso di
                fare un passo ulteriore investendo in una realtà imprenditoriale che fosse solo nostra, ponendo al
                servizio delle aziende le competenze e il know-how acquisiti negli anni.
            </Typography>
            &nbsp;
            <Typography>
                Il coraggio di osare e soprattutto di metterci in gioco in prima persona hanno dato il via a questa
                nuova avventura, ripartendo da una regione che rappresenta per noi una sfida stimolante per raggiungere
                traguardi ambiziosi e contribuire allo sviluppo del nostro territorio.
            </Typography>
        </div>
    </div>
}
