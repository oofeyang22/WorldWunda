
import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { graphcms} from '../Graphql/Queries'
//import HistoricalSites from '../components/HistoricalSites'
import { useMyContext } from '../context/Store'
const useQuerySite = ({query, limit = 6}) => {
  const { slug } = useParams()
  const {search, pathname} = useLocation()
  const page= Number(new URLSearchParams(search).get('page')) || 1;
  const skip = (page - 1) * limit
  const [historicalsites, setHistoricalSites] = useState([])
  const [error, setError] = useState(null)
  const {setLoading, setTotalPage} = useMyContext()
  useEffect(() =>{
    setTotalPage(1)
  }, [pathname])
  useEffect(() =>{
    setLoading(true)
    graphcms.request(query, {slug, limit, skip})
    .then(res => {
        const count = res?.countConnection?.aggregate?.count || 0
        setTotalPage(Math.ceil(count / limit))
        setHistoricalSites(res.historicalsites)
        setError(null)
    })
    .catch(error =>{
        setTotalPage(1)
        setError(error.message)
        setHistoricalSites([])
    })
    .finally(() => setLoading(false))
  }, [query, slug, limit, skip])
  return (
    {historicalsites, error}
  )
}

export default useQuerySite;
