import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

export default function Numbe (props) {
  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState(0)
  const [thirdNumber, setThirdNumber] = useState(0)
  function animateValue (objFunc, start, end, duration) {
    let startTimestamp = null
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      objFunc(progress * (end - start) + start)
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }
  useEffect(() => {
    animateValue(setFirstNumber, 0, 100, 6000)
    animateValue(setSecondNumber, 0, 30, 4000)
    animateValue(setThirdNumber, 0, 10, 5000)
  }, [])
  return <div id={'number-goal'}>
        <div className={'flex standard-container around'}>
            <div className={'single-number'}>
                <Typography className={'increasing'}>{firstNumber.toFixed(0)}%</Typography>
                <Typography className={'title white-center'}>Dei clienti soddisfatti</Typography>
            </div>
            <div className={'single-number'}>
                <Typography className={'increasing'}>{secondNumber.toFixed(0)}+</Typography>
                <Typography className={'title white-center'}>Tecnologie</Typography>
            </div>
            <div className={'single-number'}>
                <Typography className={'increasing'}>{thirdNumber.toFixed(0)}+</Typography>
                <Typography className={'title white-center'}>Partner</Typography>
            </div>
        </div>
    </div>
}
