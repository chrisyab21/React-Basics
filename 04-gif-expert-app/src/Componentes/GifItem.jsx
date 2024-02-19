
import PropTypes from 'prop-types'
import React from 'react'

export const GifItem = ({title, id, url}) => {

  return (
   

   <div className='card'>

    <img src={url} alt={title}></img>
    <p>{title}</p>

   </div>

   
  )
}


GifItem.propTypes = {


   title: PropTypes.string.isRequired,
   url: PropTypes.string.isRequired

}


GifItem.defaultProps = {

  title: "Aqui va el titulo",
  url: "Aqui va la url"
}

