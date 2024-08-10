/*import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navlinks = ({ categories }) => {
  const { pathname } = useLocation();
  return (
    <ul className='menu-lists'>
      <label htmlFor="menu-btn">
        <i className='fa-solid fa-xmark'></i>
      </label>
      <Link to="/">
        <li className={`${pathname === '/' ? 'active' : ''}`}>All</li>
      </Link>
      {
        categories?.map(category => (
          <Link key={category.slug} to={`/historicalsites/${category.slug}`}>
            <li className={`/historicalsites/${category.slug}` === pathname ? 'active' : ''}>
              {category.name}
            </li>
          </Link>
        ))
      }
    </ul>
  );
}

export default Navlinks;
*/
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navlinks = ({ categories }) => {
  const { pathname } = useLocation();

  return (
    <ul className='menu-lists'>
 
      {/* Home link */}
      <Link to="/">
        <li className={`${pathname === '/' ? 'active' : ''}`}>All</li>
      </Link>
      {/* Category links */}
      {categories?.map(category => (
        <Link key={category.slug} to={`/historicalsites/${category.slug}`}>
          <li className={`/historicalsites/${category.slug}` === pathname ? 'active' : ''}>
            {category.name}
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default Navlinks;

