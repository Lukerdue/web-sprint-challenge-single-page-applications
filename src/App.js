import React, { useEffect, useState } from "react";
import PizzaForm from './components/pizzaForm';
import Home from './components/home';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import schema from './schema';
import * as yup from 'yup';

const initialValues = {
  name: "",
  size: "",
  sauce: "",
  toppings:[]
}
const initialErrors = {
  name: "",
  size: "",
  sauce: "",
  extra: "",
}
const App = () => {
  //-----------------setting up state-----------------
  const [pizza, setPizza] = useState(initialValues)
  const [errors, setErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(true)

  //--------------------form handlers-----------------
  function changeHandler(evt){
    const name = evt.target.name;
    const value = evt.target.value;

    if(evt.target.type==="checkbox"){
      if(pizza.toppings.includes(name)){
        return
      }
      else{
        setPizza({...pizza, toppings:[...pizza.toppings, name]})
      }
    }//end checkbox handler
    else{
       //---yup Form validation---------
    yup.reach(schema, name)
      .validate(value)
      .then(valid=>{
        setErrors({
          ...errors,
          [name]:""
        })
        
      })
      .catch(err=>{
        setErrors({...errors, [name]: err.errors[0]})
        
      })//end yup validation


      setPizza({...pizza, [name]: value})
    }//end regular input handler
  }//end change handler

  function submit(evt){
    evt.preventDefault();

    axios.post("https://reqres.in/api/users", pizza)
      .then(res=>{
        console.log(res);
        setPizza(initialValues)
      })
      .catch(drama=>{
        console.log(drama);
      })
  }//end submit

  //useEffect----------------------------------
  useEffect(()=>{
    schema.isValid(pizza).then(valid=>{
      setDisabled(!valid);
    });
  },[pizza])

  return (
    <div className="app">
      <h1>Lambda Eats</h1>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/pizza">
          <PizzaForm disabled={disabled} changeHandler={changeHandler} values={pizza} submit={submit} errors={errors}/>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
