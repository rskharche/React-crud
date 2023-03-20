import React,{useState} from "react";
import{Button,Form} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import {v4 as uuid} from "uuid";
import {Link,useNavigate} from 'react-router-dom'


export default function Add() {

    const[name,setName]=useState(" ");
    const[age,setAge]=useState(" ");

    let history=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();    //hide data

        const ids=uuid();
        let uniqueId=ids.slice(0,8);   //gives first 9 digit

        let a=name;
       let b=age;

        Employees.push({id:uniqueId,Name:a, Age:b});
        history("/");

    }
  return (
    <div>
        <Form className="d-grid gap-2" style={{margin:"20px"}}>
            <Form.Group className="mb-3" controlId="formrname">
                <Form.Control type="text" placeholder="enter name" required onChange={(e)=> setName(e.target.value)}></Form.Control>
            </Form.Group>
            </Form>
            <Form className="d-grid gap-2" style={{margin:"20px"}}>
            <Form.Group className="mb-3" controlId="formrAge">
                <Form.Control type="text" placeholder="enter Age" required onChange={(e)=> setAge(e.target.value)}></Form.Control>
            </Form.Group>
            <Button onClick={(e)=>handleSubmit(e)} type="submit">Submit</Button>
        </Form>
    </div>
  )
}
