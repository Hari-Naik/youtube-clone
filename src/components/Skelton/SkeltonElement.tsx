import React from 'react'

import './index.css'

type propType = {
	type:string
}

const SkeltonElement = ({ type }:propType) => {
	const classes = `skelton ${type}`
  return (
	<div className={classes}></div>
  )
}

export default SkeltonElement