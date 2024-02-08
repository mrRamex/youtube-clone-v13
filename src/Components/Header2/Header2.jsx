import React from 'react'
import './Header.scss'
import { elements } from './header_elements'

const header2 = () => {
  return (
    <div className="second-header">
      <div className='scroll-wrapper'>
        <div className='second-header-items'>
          {elements.map((item) => (
              <div className='box' key={item.id}>
                  <p>{item.name}</p>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default header2