import React,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import Data from './Data'

const Contact = () => {
  const[data,setData]=useState({name:" ", email:"", msg:""})

  const eventHandler=(e)=>{
    const{name,value}=e.target
    setData((preVal) => {
      return{
        ...preVal,
        [name]:value
    }
    })
  }
  const submitHandle=(event)=>{
    event.preventDefault()
    alert(`Name: ${data.name}, Email: ${data.email}, Mesajınız: ${data.msg}`)

  }
  return (
    <div className='container'>
    <div className='row'>
      <div className="col-12 text-center py-4 mb-4">
        <h1>İletişim</h1>
        <hr/>

      </div>
     
    </div>
    <div className='container'>
      <div className='row d-flex justify-content-center'>
      <div className="col-md-8">
      <form onSubmit={submitHandle}>
  <div className="form-group mb-4">
    <label  htmlFor="formGroupExampleInput">Ad Soyad : </label>
    <input type="text" className="form-control" id="formGroupExampleInput" name='name' onChange={eventHandler} value={data.name}/>
  </div>
  <div className="form-group mb-4">
    <label htmlFor="formGroupExampleInput2 ">E-mail : </label>
    <input type="text" className="form-control" id="formGroupExampleInput2"  name='email' onChange={eventHandler} value={data.email} />
  </div>
  <div className="form-group  mb-4">
    <label htmlFor="exampleFormControlTextarea1">Aşağıdaki alana metninizi yazabilirsiniz :</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='msg' onChange={eventHandler} value={data.msg}></textarea>
  </div>
  <button type="submit" className="btn btn-outline-primary">Submit</button>
</form>
        

      </div>
   
    


      </div>
   
    </div>
    </div>
  )
}

export default Contact