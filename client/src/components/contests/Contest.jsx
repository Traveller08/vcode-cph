import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/esm/Button'
import Contests from './Contests'
import ContestCard from './ContestCard'
import './Contest_css.css'
import axios  from 'axios'
const Contest = () => {
    const [contestDetails,setContestDetails]=useState('');
    const [contestList,setContestList]=useState([]);
    const handleSelect=(event)=>{
        event.preventDefault();
        setContestDetails(event.target.value);
    }
    function selectValid(contest){
        return contest.name.includes(contestDetails);
    }
    const handleSubmit=async(event)=>{
        event.preventDefault();
        if(contestDetails==="Select contest"){
            return;
        }else if(contestDetails==='Gym'){
            const allGymContests=await axios.get(`https://codeforces.com/api/contest.list?gym=true`);
            setContestList(allGymContests.data.result);
        }else{  
            const allContest=await axios.get(`https://codeforces.com/api/contest.list?gym=false`);
            if(contestDetails==="All contests")setContestList(allContest.data.result)
            else setContestList(allContest.data.result.filter(selectValid));  
        }
    }
  return (
    <>
    <div className='w-20'>
      <InputGroup >
      <Form.Select  value={contestDetails} onChange={handleSelect}>
        {Contests.map((tag,index)=>(<option values={tag.value}>{tag.label}</option>))}
        </Form.Select>
        <Button variant="outline-secondary" onClick={handleSubmit}>  Apply   </Button>
      </InputGroup>
       </div>
       <div className="contest-data nv-font">
         <table id="contest-table">
              {contestList.map((contest,index)=>(<ContestCard data={contest}/>))}
         </table>
     </div>   
    </>
  )
}

export default Contest