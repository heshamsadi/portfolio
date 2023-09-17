import { useState, useEffect } from 'react'
import ContactList from './ContactList'
import './ContactsApp.css'


function ContactsApp(props){
    
    const [contacts, setContacts] = useState([]);
    const [inputs, setInputs] = useState([{name:"firstname", value:""},{name:"lastname", value:""}])


    useEffect(()=>{
        fetchContacts()
      console.log("fetched contacts")
    }, [])
  
    
    const fetchContacts = () => {
      fetch('http://localhost:5001/contacts')
        .then((response) => response.json())
        .then((data) => {
          setContacts(data);
        });
    }
  
    
    const handleAddContacts = ()=>{
      let newContact = inputs.every((input)=>input.value) ? inputs.map((input)=>input.value) : false
  
      if(newContact){
        fetch('http://localhost:5001/addContact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({first_name: newContact[0] ,last_name: newContact[1]}),
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.message); // Log the response message
          fetchContacts();
        })
        .catch((error) => {
          console.error('Error adding contact:', error);
        });
      }else{
        console.log("empty contact")
      }
    }
    
    
    const handleInput = (e)=>{
      setInputs(inputs.map((input)=>input.name === e.target.className ? {name: input.name, value: e.target.value} : input ))
    }
  


    return (
    <>
    <div className="app">
        {inputs.map((input)=>{
        return <input key={input.name} className={input.name} value={input.value} onChange={(e)=>handleInput(e)} />
        })}
        <button onClick={handleAddContacts}>Add Contact</button>
        <br/>
        <button onClick={fetchContacts}>Get Contacts</button>

        <ContactList contacts={contacts} fetchContacts={fetchContacts}/>
    </div>
    </>)
    
}

export default ContactsApp;