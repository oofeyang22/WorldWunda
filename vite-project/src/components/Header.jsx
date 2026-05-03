
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

