import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function ObjectState() {

    const [member, setMember] = useState({});
    const [memberList, setMemberList] = useState([]);

    /* function handleChange(event){
        
        const name = event.target.name;
        const value = event.target.value;

        console.log(name, value)


    } */

    useEffect(()=>{

        console.log("hallo effekt")

    },[memberList])


    function handleChange({ target }) {
        const { name, value } = target;
        setMember(prevValue => ({ ...prevValue, [name]: value, uuid: uuidv4() }));
    }

    console.log(member);

    function addMember(e) {
        //schaltet natürliches verhalten des form buttons aus....
        e.preventDefault();
        setMemberList(prev => [...prev, member])

    }

    console.log(memberList);

    function removeMember(event) {
        const selectedUuid = event.target.id;
        setMemberList(prev => prev.filter(member => {
            return member.uuid !== selectedUuid
        }))



    }

    const memberShip = memberList.map((member) => {
        return <div key={member.uuid} id={member.uuid} onClick={removeMember}>{member.firstname} {member.lastname} from {member.country}</div>
    });



    return (
        <div>
            <h1>Membership</h1>

            <form>
                <input type="text" name="firstname" placeholder="Firstname" onChange={handleChange} />
                <input type="text" name="lastname" placeholder="Lastname" onChange={handleChange} />
                <input type="text" name="country" placeholder="Country" onChange={handleChange} />
                <button onClick={addMember}>Sign Up</button>
            </form>

            <div>
                {memberShip.length < 1 ? <h1>no member</h1> : memberShip}
            </div>
        </div>
    )
}