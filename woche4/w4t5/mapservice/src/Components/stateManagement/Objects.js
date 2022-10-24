import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Objects() {

    const [person, setPerson] = useState({});
    const [memberList, setMemberList] = useState([])
    console.log(person)

    function handleChange({ target }) {
        const { name, value } = target;
    
        setPerson((prevPerson) => ({ ...prevPerson, [name]: value, uuid: uuidv4()} ));
    }

    function addNewMember(e){
        e.preventDefault();
        setMemberList(prev=>[...prev, person])

    }

console.log(person) 
console.log(memberList)



function removeMember(e){
    e.preventDefault();
    const selectedUuid = e.target.id
    setMemberList(prev => 
       prev.filter(member =>{
        return member.uuid !== selectedUuid
       })
    )
    
}

const myMemberList = memberList.map((member)=>{
    return <div key={member.uuid} id={member.uuid} onClick={removeMember}>{member.firstname} {member.lastname}</div>
})

    return (
        <div>


            <form>

                <input type="text" placeholder="firstname" name="firstname" onChange={handleChange}/>
                <input type="text" placeholder="lastname" name="lastname"onChange={handleChange}/>
                <input type="text" placeholder="age" name="age" onChange={handleChange}/>
                <button onClick={addNewMember}>add member</button>
            </form>

<h3>my members</h3>

{myMemberList.length <1 ? <h1>no member</h1>: myMemberList}
        </div>
    )
}