import React from 'react'
import PropTypes from 'prop-types'

const RepoItem = ({repo}) => {
    return (
      
      <div className='card'>
          
          <span>
              {repo.name}
             
          <a href={repo.html_url} target = "_blank">
          <p className="badge badge-primary">Visit the repo</p></a></span>
            
    </div>
  )
}

RepoItem.propTypes = {
    repo:PropTypes.object.isRequired,
}
export default RepoItem
