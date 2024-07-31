
import React from 'react'
//import { useParams } from 'react-router-dom'
import { QUERY_HISTORICAL_SITES_BY_CATEGORY} from '../Graphql/Queries'
import HistoricalSites from '../components/HistoricalSites'
import useQuerySite from '../Hooks/useQuerySite'
const SitesByCategory = () => {
  const {historicalsites, error } = useQuerySite({query: QUERY_HISTORICAL_SITES_BY_CATEGORY, limit: 2})

  if(error) return <h2>{error}</h2>
  return (
    <div><HistoricalSites historicalsites={historicalsites}/>
    </div>
  )
}

export default SitesByCategory