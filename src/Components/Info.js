import React from 'react'

const Info = ({email, phone, cell}) => {
  return (
    <div style={{"margin-left":"65px"}}>
        Email : {email}<br/>
        Phone : {phone}<br/>
        Cell : {cell}
    </div>
  )
}

export default Info