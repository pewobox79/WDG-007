import React, {useEffect, useState} from 'react';

export default function ObjectState(){

    const [member, setMember]= useState({});
    const [memberList, setMemberList] = useState([]);

    /* function handleChange(event){
        
        const name = event.target.name;
        const value = event.target.value;

        console.log(name, value)


    } */

    function handleChange({target}){
        const {name, value} = target;
        setMember(prevValue => ({ ...prevValue, [name]: value}));
    }

    console.log(member);

    function addMember(e){
        //schaltet natürliches verhalten des form buttons aus....
        e.preventDefault();
        setMemberList(prev=>[...prev, member])
    
    }

    console.log(memberList);

    
    const memberShip = memberList.map((member, index)=>{
            return <div key={index}>{member.firstname}</div>
        })
       

    


    
 
return(
    <div>
    <h1>Membership</h1>

    <form>
        <input type="text" name="firstname" placeholder="Firstname" onChange={handleChange}/>
        <input type="text" name="lastname" placeholder="Lastname" onChange={handleChange}/>
        <input type="text" name="country" placeholder="Country" onChange={handleChange}/>
        <button onClick={addMember}>Sign Up</button>
    </form>

    <div>
        {memberShip ? <h1>no member</h1>: memberShip}
    </div>
    </div>
)
}