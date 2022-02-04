/* eslint-disable react/prop-types,no-unused-vars */
// noinspection ES6UnusedImports

import {
  phpLogo,
  pythonLogo,
  mysqlLogo,
  mongoLogo,
  reactLogo,
  hibernateLogo,
  awsLogo,
  springLogo,
  ciLogo,
  nodeLogo,
  expressLogo,
  cssLogo,
  jsLogo,
  htmlLogo,
  rnLogo,
  magentoLogo,
  prestashopLogo,
  wordpressLogo,
  androidLogo,
  ionicLogo,
  angularLogo,
  iosLogo,
  cordovaLogo,
  unityLogo,
  ueLogo,
  godotLogo,
  curaLogo,
  sketchLogo,
  blenderLogo,
  wooLogo
} from '../../assets/TechnologyLogo/IndexImages'
import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
const commerceLogos = [prestashopLogo, reactLogo, wordpressLogo, magentoLogo, wooLogo]
const webLogos = [cssLogo, jsLogo, htmlLogo, reactLogo, wordpressLogo, angularLogo, ionicLogo]
const mobileLogos = [ionicLogo, angularLogo, rnLogo, androidLogo, iosLogo, cordovaLogo, unityLogo]
const backendLogos = [hibernateLogo, awsLogo, springLogo, mysqlLogo, mongoLogo, ciLogo, nodeLogo, expressLogo, phpLogo, pythonLogo]
const allLogos = [commerceLogos, webLogos, mobileLogos, backendLogos]

export default function Technology (props) {
  const imgToRender = allLogos[props.index || 0]
  const [slice, setSlice] = useState(0)
  useEffect(() => {
    if (imgToRender.length % 6 !== 0 && imgToRender.length > 6) {
      let index = 6
      let found = false
      while (index > 0 && !found) {
        if (imgToRender.length % index === 0) {
          found = true
        } else { index-- }
      }
      if (index !== 1) {
        setSlice(index)
      } else setSlice(4)
      console.log('change view ', index, found)
    } else setSlice(imgToRender.length)
  }, [imgToRender.length])
  useEffect(() => {
    if (window.innerWidth < 900) {
      setSlice(0)
    }
  }, [window.innerWidth])
  return <div id={'technology'}>
        <div style={{ marginBottom: slice > 1 && -40 }}>
            {!props.noTitle && <Typography>Tecnologie di riferimento </Typography>}
                <div className={'technology-container'}
                     style={{ width: window.innerWidth < 860 && window.innerWidth - 40 }}>
                  {imgToRender.map((e, i) => <div key={'img' + i} style={{ width: slice > 1 ? (1020 - (20 * slice)) / slice : 150, display: 'flex', justifyContent: 'center', marginBottom: slice > 1 && 40 }}><img src={e} className={'technology-image'} alt={'tecLogo'}/></div>)}
                </div>
        </div>
    </div>
}
