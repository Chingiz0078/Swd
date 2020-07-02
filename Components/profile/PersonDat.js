import React, { useState, useEffect, useReducer } from 'react';
import { getCookie } from '../login/loginReducer';

const PersonData=(props)=>{


if(props.countrues.length<2 ){ props.getCountrues()}

let countr=props.countrues.map(c=>{return(<option key={c.id} value={c.id}>{c.title}</option>)})
   

   
   
   return(<>
<div className=' p-4 mt-3 ' style={{background:'white', borderRadius:'5px'}}>
      <div className='border-bottom mb-2 '><p className="text-muted"> {props.t.PersonalInformation}</p></div> 
    <form >

  <div className="form-group row ">
    <label htmlFor="inputEmail3" className="col-sm-3 col-form-label text-md-right">UserID</label>
    
    <div className="col-sm-4">
      <input readOnly="readonly"  type="text" value={props.id} className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputEmail3" className="col-sm-3 col-form-label text-md-right">{props.t.Fullname}</label>
    <div className="col-sm-4">
      <input type="email" readOnly="readonly" name='fname' value={props.fullName} className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputEmail3" className="col-sm-3 col-form-label text-md-right">{props.t.Country}</label>
    <div className="col-sm-4">
      <select className="form-control" id="inputEmail3">

                    <option >{props.countru}</option>    
                   {countr}
                     </ select>
    </div>
  </div>
  <div className="form-group row">
    <div className="col-sm-3">
    </div>  <button type="button" className="btn btn-success 
    bg-success btn-sm ml-3 " style={{height:'40px', borderRadius:'5px'}}>
      { props.t.BtnSave}</button>
  </div>

 </form>
    </div> 
    </>
    )
}
export default PersonData