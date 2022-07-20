import React from 'react'

const Contact = ({first, last, imgUrl}) => {
  return (
    <>
        <ul className="list-group">
        <li className="list-group-item justify-content-between align-items-center">
           <img src={imgUrl} className="rounded-circle"/> &nbsp; &nbsp;
            {first} {last}
        </li>
        </ul>
    </>
  )
}

export default Contact