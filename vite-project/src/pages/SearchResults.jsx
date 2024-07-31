
import React from 'react'
//import { useParams } from 'react-router-dom'
import { QUERY_SEARCH_SITES} from '../Graphql/Queries'
import HistoricalSites from '../components/HistoricalSites'
import useQuerySite from '../Hooks/useQuerySite'
const SearchResults = () => {
  const { historicalsites, error } = useQuerySite({query: QUERY_SEARCH_SITES, limit: 5})

    if(error) return <h2>{error}</h2>
    return (
      <div><HistoricalSites historicalsites={historicalsites}/>
      </div>
    )
}

export default SearchResults