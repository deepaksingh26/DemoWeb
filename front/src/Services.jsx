import React from 'react'
import Card from './Card'
import Sdata from './Sdata'
export default function Services() {
  return (
    <>
    <div className="my-5">
      <h1 className='text-center'>Our Services</h1>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-8 mx-auto">
            <div className="row gy-4">
               {Sdata.map((value,idx)=>{
                 return <Card 
                 imgsrc={value.imgsrc}
                 title={value.title}
                 />
               })}
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
