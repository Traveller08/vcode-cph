import React from 'react'
import './ProblemCard.css'
const ProblemCard = (props) => {
  // console.log("problem data:",props)
  return (
   <>
    <div class="problem-card ">
  <div class="problem-name">{props.data.name}</div>
  <div class="problem-rating">{props.data.rating}</div>
  <div class="problem-tags">
    <ul className='tag-list'>
    {props.data.tags.map((tag)=>(
      <li>
        <span>{tag}</span>
      </li>
    ))}
    </ul>
  </div>
  <button class="psolve ptr" id={props.url} onclick="solveMe(this)">Solve</button>
</div>
   
   </>
  )
}

export default ProblemCard