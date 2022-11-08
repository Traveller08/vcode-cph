import React from 'react'
import Button from 'react-bootstrap/Button'
import './Contest_css.css'
const ContestCard = (props) => {
     const getVirtualURL=(data)=>{
      // console.log(data)
        return `https://codeforces.com/contestRegistration/${data.id}/virtual/true`;
     }
     const getURL=(data)=>{
      return `https://codeforces.com/contest/${data.id}`;
   }
  return (
    <>
     <tr>
        <td className='tl'>{props.data.name}</td>
        <td>
            <Button href={getVirtualURL(props.data)}>Start virtual</Button>
        </td>
        <td>
            <Button href={getURL(props.data)} >Solve</Button>
        </td>
     </tr>
    </>
  )
}

export default ContestCard