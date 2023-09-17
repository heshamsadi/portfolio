function ContactList(props){
    let handleDelete = (e)=>{
        let idToDelete = e.target.getAttribute('data-id')
        fetch('http://localhost:5001/deleteContact/'+idToDelete , {
            method: 'DELETE',
        })

        props.fetchContacts()
    }

    return <ul className="contactsContainer">
    {props.contacts.map((contact)=>{
        return <li key={contact.id} data-id={contact.id}>
            <label>{contact.first_name} {contact.last_name}</label><button data-id={contact.id} onClick={(e)=>handleDelete(e)} className="deleteBtn">Delete</button>
        </li>
    })}
    </ul>
}

export default ContactList;