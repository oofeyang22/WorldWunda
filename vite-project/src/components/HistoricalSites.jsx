  import React from 'react';
  import { Link } from 'react-router-dom';
  
  const HistoricalSites = ({ historicalsites }) => {
    return (
      <div className='sites-container'>
        {
          historicalsites?.map(historicalsite => (
            <div className="sites-box" key={historicalsite.id}>
              <div className='sites-img'>
                <Link to={`/article/${historicalsite.slug}`}>
                  <img src={historicalsite.coverImage.url} alt='weird' />
                </Link>

              </div>
              <div className='sites-text'>
                <div className='category-time'>
                  {
                    historicalsite.categories?.map(category => (
                      <Link
                        to={`/historicalsites/${category.slug}`}
                        key={category.id}
                        className='category'
                        //style={{ background: category.color.hex }}
                        style={{background: 'white'}}
                      >
                        {category.name}
                      </Link>
                    ))
                  }
                  <span className='published-time'>
                    {new Date(historicalsite.updatedAt).toDateString()}
                  </span>
                </div>
                <Link to={`/article/${historicalsite.slug}`}>
                  <h3>{historicalsite.site}</h3>
                </Link>
                <p className='excerpt'>{historicalsite.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    );
  }

  export default HistoricalSites;
