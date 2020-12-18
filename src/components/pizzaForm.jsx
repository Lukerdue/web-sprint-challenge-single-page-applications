import React from 'react';

function PizzaForm(props){

    return(
        <div>
            <div className="errors">
                <p>{props.errors.name}</p>
                <p>{props.errors.size}</p>
                <p>{props.errors.sauce}</p>
            </div>
        <form>
            <input type="text" name="name" onChange={props.changeHandler} value={props.values.name} placeholder="Your Name"/>
            <select name="size" onChange={props.onChange} value={props.values.size}>
                <option defaultValue="">Pick your size</option>
                <option value="personal">Personal (8")</option>
                <option value="small">Small (12")</option>
                <option value="medium">Medium (16")</option>
                <option value="large">Larage (18")</option>
                <option value="party">Party (24")</option>
            </select>
            <label><input type="radio" name="sauce" value="marinara" onChange={props.changeHandler}/>Classic Italian Marinara</label>
            <label><input type="radio" name="sauce" value="hot" onChange={props.changeHandler}/>Spicy Red Hot</label>
            <label><input type="radio" name="sauce" value="alfredo" onChange={props.changeHandler}/>Creamy White Alfredo</label>
            <div className="checkboxes">
                <label><input type="checkbox" name="pepperoni" checked={props.values.pepperoni} onChange={props.changeHandler}/>Pepperoni</label>
                <label><input type="checkbox" name="sausage" checked={props.values.sausage} onChange={props.changeHandler}/>Italian Sausage</label>
                <label><input type="checkbox" name="mushrooms" checked={props.values.mushrooms} onChange={props.changeHandler} />Mushrooms</label>
                <label><input type="checkbox" name="bacon" checked={props.values.bacon} onChange={props.changeHandler}/>Bacon</label>
            </div>
            <br/><br/>
            <button onClick={props.submit} className="submit">Order!</button>
        </form>
        </div>
    )
}
export default PizzaForm;