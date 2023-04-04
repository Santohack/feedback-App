import { FaQuestion } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import React from 'react'

function FeedbackIcon() {
  return (
    <div className='about-link'>
        {/* <Link to={{
            
            pathname:'/about',
            search:'?santohack=11',
            hash:'#ff'
            }}>
                  <FaQuestion size= {30} />
        </Link> */}
        <Link to='/about'>
                  <FaQuestion size= {30} />
        </Link>

    </div>
  )
}

export default FeedbackIcon
