import React, { useState, useEffect } from "react";
// import Header from './Components/Header'
import Pizza from './Components/Pizza'
import Home from './Components/Home'
import { Switch, Route } from 'react-router-dom'
import * as yup from 'yup';
import axios from 'axios';
import formSchema from './Components/formSchema'

const App = () => {
  const axLink = 'https://reqres.in/api/users'


  const initialFormValues = {
    // Drop down menu //
    size: '',
    // Checklist //
    toppings: {
      pepperoni: false,
      onions: false,
      peppers: false,
      extraCheese: false,
    },
    // Name text //
    name: '',
    instructions: ''
  }

  const initialFormErrors = {
    name: '',
    size: '',
    instructions: ''
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

  return (
    <div>
      {/* <Header /> */}

      <Switch>
        <Route path='/pizza'>
        <Pizza
            values={formValues}
            onInputChange={onInputChange}
            onCheckboxChange={onCheckboxChange}
            onSubmit={onSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
          <Route path="/">
            <Home greeting='Interested in Pizza?'/>
          </Route>
      </Switch>
    </div>
  );
};
export default App;
