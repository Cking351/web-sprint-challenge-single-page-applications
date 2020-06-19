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
                        value={values.name}
                        name="name"
                        type="text"
                    />
                </label>
                <label>Special Instructions&nbsp;
                    <input
                        onChange={onInputChange}
                        value={values.instructions}
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
                  <label>&nbsp;Onion&nbsp;
                  <input 
                  name='onion'
                  type='checkbox'
                  onChange={onCheckboxChange}
                  checked={values.toppings.onion}
                  />
                  
                  </label>
                  <label>&nbsp;Peppers&nbsp;
                  <input 
                  name='peppers'
                  type='checkbox'
                  onChange={onCheckboxChange}
                  checked={values.toppings.peppers}
                  />
                  
                  </label>
                  <label>&nbsp;Extra Cheese&nbsp;
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