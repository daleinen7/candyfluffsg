import React from 'react';
import {Link} from 'gatsby'

export default function Header() {
  return(
    <div>
      <h1>Logo</h1>
      <p>Sub</p>
      <ul>
          <li>
              <Link to='/'>Home</Link>
          </li>
          <li>
              <Link to='/shop'>Shop</Link>
          </li>
          <li>
              <Link to='/necahual'>Necahual</Link>
          </li>
      </ul>
    </div>
  )
}