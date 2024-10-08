/*import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navlinks from './Navlinks';
import { graphcms, QUERY_SLUG_CATEGORIES } from '../Graphql/Queries';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    graphcms.request(QUERY_SLUG_CATEGORIES)
      .then(res => setCategories(res.categories))
      .catch(error => console.error("Error fetching categories:", error));
  }, []);

  return (
    <header>    <input type="checkbox" id="menu-btn" hidden />
      <nav>
        <Link to="/" className='logo'>WorldWunda</Link>
        <Navlinks categories={categories} />
        <label htmlFor='menu-btn'>
          <i className='fa-solid fa-bars'></i>
        </label>
      </nav>
    </header>
  );
};

export default Header;
*/
/*
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navlinks from './Navlinks';
import { graphcms, QUERY_SLUG_CATEGORIES } from '../Graphql/Queries';

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    graphcms.request(QUERY_SLUG_CATEGORIES)
      .then(res => setCategories(res.categories))
      .catch(error => console.error("Error fetching categories:", error));
  }, []);

  return (
    <header>
      <nav>
        <Link to="/" className='logo'>WorldWunda</Link>
        <Navlinks categories={categories} />
        <label htmlFor='menu-btn' >
          <i className='fa-solid fa-bars' onClick ={() => setOpen((prev) => !prev)}></i>
        </label>
        {

          open && (

            <div className="mobileLinks">
                <Navlinks categories={categories}/>
            </div>
        )
        }
      </nav>
    </header>
  );
};

export default Header;
*/ 
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navlinks from './Navlinks';
import { graphcms, QUERY_SLUG_CATEGORIES } from '../Graphql/Queries';

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    graphcms.request(QUERY_SLUG_CATEGORIES)
      .then(res => setCategories(res.categories))
      .catch(error => console.error("Error fetching categories:", error));
  }, []);

  return (
    <header>
      <nav>
        
        <Link to="/" className='logo'>WorldWunda</Link>
        <div className='large'>

          {/* Show Navlinks normally on larger screens */}
          <Navlinks categories={categories} />
        </div>

        {/* Menu toggle button */}
        <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'}`} onClick={() => setOpen((prev) => !prev)}></i>
        {/* Show Navlinks inside a mobile menu if open */}
        {open && (
          <div className="mobileLinks">
            <Navlinks categories={categories} />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

/*
import React from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_SLUG_CATEGORIES } from '../Graphql/Queries.jsx';



function Header() {
  const { loading, error, data } = useQuery(QUERY_SLUG_CATEGORIES);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error.message}</p>;
  // Check if data and data.categories exist
  if (!data || !data.categories) {

    return <p>No categories found.</p>;
  }else{
    console.log(data)
  }

  return (
    <ul>
      {data.categories.map((category) => (
        <li key={category.slug}>{category.name}</li>

      ))}
    </ul>
  );
}

export default Header;

*/
