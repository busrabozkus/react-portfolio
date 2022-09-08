import React from 'react'
import Data from './Data'

const Service = () => {
  const card = (props) => {
    return (
      <div className='col-md-4 mb-5 pb-5'>
        <div className="card text-center py-5" key={props.id}>
          <img className="card-img-top mx-auto p-2" src={props.img} alt={props.title} />
          <div className="card-body">
            <h5>{props.title}</h5>
            <p className="card-text">{props.desc}</p>
          </div>
        </div>

      </div>)
  }
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center py-4 mb-5'>
            <h1>Projeler</h1>
            <hr />

          </div>

        </div>
        <div className='row' >
          {Data.map(card)}

        </div>

      </div>


    </div>
  )
}

export default Service