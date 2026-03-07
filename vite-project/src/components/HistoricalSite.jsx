import React from 'react'

const HistoricalSite = ({historicalsite}) => {


  return (
    <article>

        <div class ="center">
          <img src={historicalsite.coverImage.url} alt='weird' />
        </div>

        <div className='published-time'>
          <h2 style={{color: "white"}}>{historicalsite.site}</h2>
        </div>
        <div className='content' dangerouslySetInnerHTML={{__html: historicalsite.content.html}}/>
    </article>
  )
}

export default HistoricalSite