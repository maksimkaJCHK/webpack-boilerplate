import React from 'react'

export default bName = (name) -> <b>{ name.substr(0, 1).toUpperCase() }{ name.substr(1).toLowerCase() }</b>
