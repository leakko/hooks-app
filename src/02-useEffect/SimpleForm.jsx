import { useState, useEffect } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'marcos',
        email: 'marcos@google.com'
    })

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
      // console.log('Use Effect called!');
    }, [formState])
    

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}
        />

        <input 
            type="email"
            className="form-control mt-2"
            placeholder="fernando.google.com"
            name="email"
            value={email}
            onChange={onInputChange}
        />
        {
            username === 'marcos2' && <Message/>
        }
    </>
  )
}
