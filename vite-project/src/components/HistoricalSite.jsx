import React from 'react'

const HistoricalSite = ({historicalsite}) => {


  return (
    <article>
        <h2 className='site'>{historicalsite.site}</h2>
        <div class ="center">
          <img src={historicalsite.coverImage.url} alt='weird' />
        </div>

        <div className='published-time'>
            <i className='far fa-clock'></i>
            <span>{new Date(historicalsite.updatedAt).toDateString()}</span>
        </div>
        <div className='content' dangerouslySetInnerHTML={{__html: historicalsite.content.html}}/>
    </article>
  )
}

export default HistoricalSite