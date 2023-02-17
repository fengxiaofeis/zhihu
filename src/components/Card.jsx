import React from 'react'

export default function Card(props) {
  return (
    <div className={'bg-white border border-gray-200 m-2 rounded-sm shadow-md ' + props.className}>
        {props.children}
    </div>
  )
}

