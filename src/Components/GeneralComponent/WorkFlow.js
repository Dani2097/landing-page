import React, { useRef } from 'react'
import { Typography } from '@material-ui/core'
import Xarrow, { Xwrapper } from 'react-xarrows'
import wfFirst from '../../assets/Workflow/1WF.png'
import wfSecond from '../../assets/Workflow/2WF.png'
import wfThird from '../../assets/Workflow/3WF.png'
import wfFourth from '../../assets/Workflow/4WF.png'

export default function WorkFlow (props) {
  const firstCircle = useRef()
  const secondCircle = useRef()
  const thirdCircle = useRef()
  const fourthCircle = useRef()
  return <div className={'world-map'} style={{
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    overflowX: 'hidden',
    paddingBottom: 0
  }}>
      <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', background: 'rgba(0, 39, 58, 0.98) none repeat scroll 0% 0%', paddingTop: 50 }}>
        {/* <img src={imgBG}/> */}
        <Xwrapper>
            <div style={{ position: 'relative' }} className={'workflow-container'}>
                <div ref={firstCircle} className={'circle-workflow first'}>
                    <Typography>1</Typography>
                </div>
                <div className={'workflow-text first'}>
                    <Typography className={'title'}>Consulenza personalizzata</Typography>
                    <Typography>
                        Consulenza personalizzata caratterizzata da un ascolto attento e successiva analisi del cliente
                    </Typography>
                </div>
                <img src={wfFirst} className={'workflow-image first'}/>
                <div ref={secondCircle} className={'circle-workflow second'}>
                    <Typography>2</Typography>
                </div>
                <div className={'workflow-text second'}>
                    <Typography className={'title'}>Progettazione e realizzazione</Typography>
                    <Typography>
                        Progettazione del prodotto/servizio individuando la soluzione
                        più idonea attraverso lo scambio e il confronto continuo con il
                        cliente
                    </Typography>
                </div>
                <img src={wfSecond} className={'workflow-image second'}/>
                <div ref={thirdCircle} className={'circle-workflow third'}>
                    <Typography>3</Typography>
                </div>
                <div className={'workflow-text third'}>
                    <Typography className={'title'}>IMPLEMENTAZIONE DEL PROGETTO</Typography>
                    <Typography>
                        Realizzazione per step con aggiornamento costante del
                        cliente, con l’attuazione di test approfonditi durante lo sviluppo
                        e a prodotto ultimato
                    </Typography>
                </div>
                <img src={wfThird} className={'workflow-image third'}/>
                <div ref={fourthCircle} className={'circle-workflow fourth'}>
                    <Typography>4</Typography>
                </div>
                <div className={'workflow-text fourth'}>
                    <Typography className={'title'}>SERVIZI POST CONSEGNA</Typography>
                    <Typography>
                        Servizi post consegna che comprendono l’implementazione di
                        nuove funzionalità, l’assistenza post vendita, l’amministrazione
                        e la gestione dei servizi e dei sistemi informatici
                    </Typography>
                </div>
                <img src={wfFourth} className={'workflow-image fourth'}/>
                <Xarrow start={firstCircle} end={secondCircle}
                        startAnchor={'bottom'}
                        endAnchor={'top'}
                        curveness={1.1}
                        color={'white'}
                        showHead={false}
                        strokeWidth={1}
                        path={'smooth'}/>
                <Xarrow start={secondCircle} end={thirdCircle}
                        startAnchor={'bottom'}
                        endAnchor={'top'}
                        curveness={1.1}
                        color={'white'}
                        showHead={false}
                        strokeWidth={1}
                        path={'smooth'}/>
                <Xarrow start={thirdCircle} end={fourthCircle}
                        startAnchor={'bottom'}
                        endAnchor={'top'}
                        curveness={1.1}
                        color={'white'}
                        showHead={false}
                        strokeWidth={1}
                        path={'smooth'}/>

            </div>
        </Xwrapper>
    </div>
  </div>
}
