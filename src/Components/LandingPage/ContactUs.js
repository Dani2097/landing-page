import React, { useCallback, useEffect } from 'react'
import { Button, TextField, Typography } from '@material-ui/core'
import { SendOutlined } from '@material-ui/icons'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

export default function ContactUs (props) {
  const { executeRecaptcha } = useGoogleReCaptcha()

  // Create an event handler so you can call the verification on button click event or form submit
  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available')
    }

    const token = await executeRecaptcha('yourAction')
    console.log(token)
    // Do whatever you want with the token
  }, [])

  // You can use useEffect to trigger the verification as soon as the component being loaded
  useEffect(() => {
    handleReCaptchaVerify()
  }, [handleReCaptchaVerify])

  return <div className={'contact-card'}>

            <Typography className={'contact-title'}>CONTATTACI</Typography>
            <form>
                <TextField className={'contact-field'} label={'Nome'} name={'name'}/>
                <TextField className={'contact-field'} label={'Email'} name={'Email'}/>
                <TextField
                    className={'contact-field'}
                    multiline
                    rows={4}
                    label={'Messaggio'}
                    name={'Content'}
                />
                <Button variant={'outlined'} color={'primary'} className={'contact-button'}>Invia <SendOutlined
                    style={{ marginLeft: 4 }}/></Button>
            </form>
    </div>
}
