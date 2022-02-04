import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {
  GoogleReCaptchaProvider
} from 'react-google-recaptcha-v3'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#6cbfe3',
      main: '#2daae1',
      dark: '#0f70b7'
    },
    secondary: {
      light: 'rgb(255,196,0)',
      main: '#000'
    }
  },
  typography: {
    useNextVariants: true
  }
})
ReactDOM.render(
    <React.StrictMode>
        <MuiThemeProvider theme={theme}>
            <GoogleReCaptchaProvider reCaptchaKey="6LeSPr4dAAAAAIMOGUtTxlkBi-E5OpMMT03H3Ovd">
                <App/>
            </GoogleReCaptchaProvider>
        </MuiThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
