import { Typography } from '@material-ui/core'
import { RatingView } from 'react-simple-star-rating'
import moment from 'moment'
import React from 'react'
const data = {
  content: [{
    language: 'us',
    application_id: 'com.facebook.katana',
    version: '198.0.0.53.101',
    date: '2021-10-18T18:26:21Z',
    rating: 5,
    title: '',
    body: 'Più competitive di molti altri giochi lì fuori',
    id: 'gp:AOqpTOGf06pg2jkkAiE2JNQkAD6xwHjZybPWJstwhJd2AyK3nRZVKPbHLd8tQmYeBD-a8IlcaCpICKtEC4KdNA',
    author: {
      name: 'Christian Peluso',
      photo: 'https://play-lh.googleusercontent.com/a-/AOh14GgQgFzO23h5AC8kEgOfF5zteVgcGaL2O7b4wH3-G70=w96-h96-n-rw',
      profile: 'https://plus.google.com/113906383287740676958'
    },
    sort_score: {
      most_useful: 1542754836
    }
  }, {
    language: 'us',
    application_id: 'com.facebook.katana',
    version: '198.0.0.53.101',
    date: '2021-11-16T18:26:21Z',
    rating: 5,
    title: '',
    body: 'Gioco molto bello esteticamente e curato nei dettagli, i livelli avanzati non sono semplici il che porta a giocare diverse ore senza rendersene conto',
    id: 'gp:AOqpTOGf06pg2jkkAiE2JNQkAD6xwHjZybPWJstwhJd2AyK3nRZVKPbHLd8tQmYeBD-a8IlcaCpICKtEC4KdNA',
    author: {
      name: 'Danilo Sprovieri',
      photo: 'https://play-lh.googleusercontent.com/a-/AOh14GhhFaWTrrc7fy0aVP0-uDG6yhND2NaA8qH_N-LP=w96-h96-n-rw',
      profile: 'https://plus.google.com/113906383287740676958'
    },
    sort_score: {
      most_useful: 1542754836
    }
  }]
}
export default function Review (props) {
  if (!data?.content?.length > 0) return null
  return <div id={'review'}>
        <Typography className={'title'}>Le recensioni</Typography>
        <div className={'review-container'}>
        {data.content.map(e => (<div key={e.id} className={'review-content'}>
            <img src={e.author?.photo} className={'review-image'}/>
            <div className={'review-texts'}>
                <Typography className={'name'}>{e.author.name}</Typography>
                <div className={'flex'} style={{ alignItems: 'center' }}>
                    <RatingView ratingValue={e.rating}/>
                    &nbsp;
                    <Typography>{moment(e.date).format('DD/MM/yyyy')}</Typography>
                </div>
                <Typography>{e.body}</Typography>
            </div>
        </div>))}
        </div>
    </div>
}
