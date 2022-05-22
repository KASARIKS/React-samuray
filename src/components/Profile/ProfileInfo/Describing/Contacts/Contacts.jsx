import React from 'react'

// Show user contacts
const Contacts = ({
    contacts,
}) => {
    const contactNamesValues = []
    //console.clear()
    for (let key in contacts) {
        if (contacts[key]) {
            contactNamesValues.push({
                value: contacts[key],
                name: key
            })
        }
    }
    return (
        <div>
            {contactNamesValues.map((el, index) => <p key={index}>{el.name}: {el.value}</p> )}
        </div>
    )
}

export default Contacts