import React from 'react'

function ImageLink({link, width, text, br}) {
  return (
    <a href="#">
      <img style={{width: width, borderRadius: br}} src={link} alt={text} />
    </a>
  )
}

export default ImageLink