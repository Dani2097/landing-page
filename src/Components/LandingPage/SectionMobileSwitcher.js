/* eslint-disable react/prop-types */
import ContentSection from './ContentSection'
import React, { useEffect, useRef, useState } from 'react'
import { lorem } from '../../assets/TechnologyLogo/IndexImages'
import Technology from '../GeneralComponent/Technology'
import { Button, Typography } from '@material-ui/core'
import Project from '../GeneralComponent/Project'

export default function SectionMobileSwitcher (props) {
  const [active, setActive] = useState(0)
  const [frontSection, setFrontSection] = useState(0)
  const [backSection, setBackSection] = useState(0)
  const [activeSection, setActiveSection] = useState(null)
  const [minWidth, setMinWidth] = useState(null)
  const front = useRef()
  const back = useRef()
  const handleClick = (index) => {
    if (front.current?.className.indexOf('notShow') > -1) {
      front.current.className = 'front-div show'
      back.current.className = 'front-div notShow'
      setFrontSection(index)
      setActiveSection('front')
    } else {
      front.current.className = 'front-div notShow'
      back.current.className = 'front-div show'
      setBackSection(index)
      setActiveSection('back')
    }
    setActive(index)
  }
  useEffect(() => {
    if (activeSection === 'front') {
      setMinWidth(front?.current?.clientHeight)
    } else {
      setMinWidth(back?.current?.clientHeight)
    }
  }, [activeSection, frontSection, backSection])
  if (!activeSection && front.current) {
    setActiveSection('front')
  }

  function descriptionSection (i, e) {
    return <ContentSection
            index={i}
            image={props.element.image}
            content={props.element.cardText + lorem}
            // title={props.element.cardTitle}
        />
  }

  function techSection (i) {
    return <Technology noTitle index={i}/>
  }

  function productSection () {
    return <Project selected={props.index} noTitle/>
  }

  function returnSection (index) {
    const sections = [descriptionSection(props.index, props.element), techSection(props.index), productSection()]
    return sections[index]
  }

  console.log(front.current?.clientHeight)
  return <div className={'mobile-switcher'} style={{ zIndex: 1, position: 'relative' }}>
        <Typography className={'section-title'}>{props.element.cardTitle}</Typography>
        <div className={'switcher-button'}>
            <Button className={'mr-8'} color={active === 0 ? 'primary' : 'secondary'} onClick={() => handleClick(0)}
                    variant={'outlined'}>Descrizione</Button>
            <Button className={'mr-8'} color={active === 1 ? 'primary' : 'secondary'} onClick={() => handleClick(1)}
                    variant={'outlined'}>Tecnologie</Button>
            <Button color={active === 2 ? 'primary' : 'secondary'} onClick={() => handleClick(2)}
                    variant={'outlined'}>Progetti</Button>
        </div>
        <div className={'switcher-content'} style={{ minHeight: minWidth || 360 }}>
            <div ref={front} className={'front-div show'}>
                {returnSection(frontSection)}
            </div>
            <div ref={back} className={'back-div notShow'}>
                {returnSection(backSection)}
            </div>
        </div>

    </div>
}
