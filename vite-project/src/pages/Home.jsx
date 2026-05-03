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
