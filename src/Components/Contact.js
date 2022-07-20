import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import Info from './Info';

const Contact = ({first, last, imgUrl, email, phone, cell}) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    if (clicked === true) {
      setClicked(false);
    }
    else {
      setClicked(true);
    }
  }
  return (
    <>
        <ul className="list-group">
        <li className="list-group-item justify-content-between align-items-center">
           <a onClick={handleClick} className="anchor"><img src={imgUrl} className="rounded-circle" alt="..."/> &nbsp; &nbsp;
            {first} {last}</a>
            {clicked && <Info email={email} phone={phone} cell={cell}/>}
        </li>
        </ul>
    </>
  )
}

export default Contact