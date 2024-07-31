import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Search = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  function handleSearch(e){
    e.preventDefault()
    //console.log(search)
    setSearch('')
    let value= search.trim().replace(/\s+/g, '-').toLocaleLowerCase();
    navigate(`/search/${value}`)
    //console.log(value)
  }
  return (
    <form className='search' onSubmit={handleSearch}>
        <input type="search" placeholder="search"
        required value={search} onChange={e => setSearch(e.target.value)}/>
        <button type="submit">
            <i className='fa fa-search'/>
        </button>
    </form>

  )
}

export default Search