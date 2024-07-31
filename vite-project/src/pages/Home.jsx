import React from 'react'
import { QUERY_HISTORICAL_SITES} from '../Graphql/Queries'
import HistoricalSites from '../components/HistoricalSites'
import useQuerySite from '../Hooks/useQuerySite'
const Home = () => {
  const { historicalsites, error } = useQuerySite({query: QUERY_HISTORICAL_SITES})

  if(error) return <h2>{error}</h2>
  return (
    <div>
      <HistoricalSites historicalsites={historicalsites}/>
    </div>
  )
}

export default Home
/*
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { graphcms, QUERY_HISTORICAL_SITES_BY_CATEGORY} from '../Graphql/Queries'
import HistoricalSites from '../components/HistoricalSites'
const SitesCategory = () => {
  const { slug } = useParams()
  const [historicalsites, setHistoricalSites] = useState([])
  useEffect(() =>{
    graphcms.request(QUERY_HISTORICAL_SITES_BY_CATEGORY, { slug })
    .then(res => setHistoricalSites(res.historicalsites))
  }, [slug])
  return (
    <div><HistoricalSites historicalsites={historicalsites}/></div>
  )
}

export default SitesCategory*/