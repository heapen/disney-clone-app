import React from 'react'

const HeaderItems = ({name, Icon}) => {
  return (
    <div>
      <Icon/>
      <h2>{name}</h2>
    </div>
  )
}

export default HeaderItems
