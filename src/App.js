import React, { useState, useEffect } from "react";
import './App.css'
import Pizza from './Components/Pizza'
import Home from './Components/Home'
import Create from './Components/Create'
import { Switch, Route, Link } from 'react-router-dom'
import * as yup from 'yup';
import axios from 'axios';
import formSchema from './Components/formSchema'

const App = () => {
  const axLink = 'https://reqres.in/api/users'


  const initialFormValues = {
    // Name text //
    name: '',
    // Drop down menu //
    size: '',
    // Checklist //
    toppings: {
      pepperoni: false,
      onion: false,
      peppers: false,
      extraCheese: false,
    },
    instructions: '',
  }

  const initialFormErrors = {
    name: '',
    size: ''
  }
  const initialPizza = []
  const initialDisabled = true


  // SET STATE // 
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [pizza, setPizza] = useState(initialPizza)
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)    

  const postNewPizza = newPizza => {
    axios.post(axLink, newPizza)
    .then(response => {
      setPizza([...pizza, response.data])
      console.log(response.data)
    })
    .catch(error => {
      console.log(error)
    })
    .finally(() => [
      setFormValues(initialFormValues)
    ])
  }

  const onInputChange = event => {
    const { name, value } = event.target
  

  yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0] 
        })
      })

    setFormValues({
      ...formValues,
      [name]: value 
    })
  }

  const onCheckboxChange = event => {
    
    const { name, checked } = event.target
  
    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: checked,
      }
    })
  }

  const onSubmit = event => {
    event.preventDefault()

    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size,
      instructions: formValues.instructions.trim(),
      toppings: Object.keys(formValues.toppings)
      .filter(topping => (formValues.toppings[topping] === true))
    }
    postNewPizza(newPizza)
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

  const linkStyle = {
    color: 'black',
  }

  return (
    <div>
      <header className="App-header">
        <h1>Lambda Eats</h1>
        <nav className='nav-links'>
          <Link style={linkStyle} to="/">Home</Link>
          <br></br>
          <Link style={linkStyle} className='navlink' to="/pizza">Order Form</Link>
        </nav>
      </header>
      <Switch>
        <Route path="/pizza">
        <Pizza
            values={formValues}
            onInputChange={onInputChange}
            onCheckboxChange={onCheckboxChange}
            onSubmit={onSubmit}
            disabled={disabled}
            errors={formErrors}
          />
          {
          pizza.map(item => {
            return (
              <Create key={item.id} details={item} />
            )
          })
        }
        </Route>
          <Route path="/">
            <Home greeting='Hungry?'/>
          </Route>
      </Switch>
    </div>
  );
};
export default App;
