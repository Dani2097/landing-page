import React from 'react'
import bg from '../../assets/bg-contact.jpg'
import Footer from '../About/Footer'

export default function MobileContact () {
  return <div id={'mobile-contact'} style={{ padding: 0 }}>
      <img src={bg} style={{ position: 'absolute' }} alt={'back'}/>
      <div style={{ display: 'flex', justifyContent: 'center', background: '#0005', width: '100%', height: '100%', padding: 80 }}>

        <div style={{ margin: 'auto' }} className={'contact2-container'}>
            <Footer/>
        </div>
      </div>
    </div>
}
