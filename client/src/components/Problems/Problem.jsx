import React from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/esm/Button'
import { useState } from 'react'
import Tags from './Tags'
import axios from 'axios'
import ProblemCard from '../problemCard/ProblemCard'
const Problem = () => {
    const [problemDetails,setProblemDetails]=useState({
        rating:"",
        tags:""
    });
    const [problemList,setProblemList]=useState([]);
    const handleSelect =(event)=>{
        setProblemDetails({...problemDetails,tags:event.target.value})
        // console.log(problemDetails)
    }
    const handleSelectRating =(event)=>{
        setProblemDetails({...problemDetails,rating:event.target.value})
        // console.log(problemDetails)
    }
    function selectValid(data){
        let rating=0;
        if(problemDetails.rating!=='')rating=parseInt(problemDetails.rating);
        
        return (rating===0 || data.rating===rating);
    }
    const handleSubmit=async(event)=>{
        event.preventDefault();
        const result= await axios.get(
            `https://codeforces.com/api/problemset.problems?tags=${problemDetails.tags}`
        );
        // console.log(result.data.result.problems);
        setProblemList(result.data.result.problems.filter(selectValid));
        // console.log(valid_result);

    }

  return (
     <>
     <div className='w-50'>
      <InputGroup >
        <Form.Control
          placeholder="Rating"
          aria-label="Rating"
          value={problemDetails.rating}
          onChange={handleSelectRating}
        />
     
      <Form.Select  value={problemDetails.tags} onChange={handleSelect}>
        {Tags.map((tag)=>(<option values={tag.value}>{tag.label}</option>))}
        </Form.Select>
        <Button variant="outline-secondary" onClick={handleSubmit}>  Apply   </Button>
      </InputGroup>
       </div>
       <div className='problem-container'>
        {problemList.map((problem)=>(<ProblemCard data={problem}/>))}
       </div>
       
       

     </>
  )
}

export default Problem