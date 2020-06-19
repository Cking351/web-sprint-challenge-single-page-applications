import React from 'react'

import './pizza.css'



export default function Pizza (props) {
    const {
        values,
        onSubmit,
        onInputChange,
        onCheckboxChange,
        disabled,
        errors,
      } = props

   return (
        <form className='container' onSubmit={onSubmit}>
          <div>
            <h2>Add Your Pizza</h2>
            <button disabled={disabled}>Submit</button>
          </div>
              <div className="inputs">
                <label>Name&nbsp;
                    <input
                        onChange={onInputChange}
                        name="name"
                        type="text"
                    />
                </label>
                <label>Special Instructions&nbsp;
                    <input
                        onChange={onInputChange}
                        name="instructions"
                        type="text"
                    />
                </label>

                

                <label>Choice of Size&nbsp;
                    <h4>{errors.size}</h4>
                    <select
                        onChange={onInputChange}
                        value={values.size}
                        name="size"
                    >
                        <option value="">-- Select a size --</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                        <option value="Extra Large">Extra Large</option>
                    </select>
                </label>
                <h4>Choice of Toppings</h4>
                <label>Pepperoni&nbsp;
                  <input 
                  name='pepperoni'
                  type='checkbox'
                  onChange={onCheckboxChange}
                  checked={values.toppings.pepperoni}
                  />
                  
                  </label>
                  <label>Onion&nbsp;
                  <input 
                  name='onion'
                  type='checkbox'
                  onChange={onCheckboxChange}
                  checked={values.toppings.onion}
                  />
                  
                  </label>
                  <label>Peppers&nbsp;
                  <input 
                  name='peppers'
                  type='checkbox'
                  onChange={onCheckboxChange}
                  checked={values.toppings.peppers}
                  />
                  
                  </label>
                  <label>Extra Cheese&nbsp;
                  <input 
                  name='extraCheese'
                  type='checkbox'
                  onChange={onCheckboxChange}
                  checked={values.toppings.extraCheese}
                  />
                  
                  </label>
            </div>
        </form>
      )
}