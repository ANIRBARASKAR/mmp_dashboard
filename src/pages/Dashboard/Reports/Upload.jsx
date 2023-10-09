import React from 'react'

const Upload = () => {
  return <>
    <div className="container">
        <h5>CRBT 1 </h5>
        <div className="row">
            <div className="col-sm-6">
                <label htmlFor="">Title</label>
                <input type="text"  />
            </div>
            <div className="col-sm-6">
                <label htmlFor="">Start Time[hh:mm:ss]</label>
                <input type="time" />
            </div>
        </div>
    </div>
    <div className='text-center my-5' >
     <button type="button" class="btn btn-primary w-full">ADD CRBT</button> 
     </div>
    <hr />
    <div className="container">
        <div className='d-flex '>
        <h5>CRBT 2</h5>
        <button className='btn btn-light mx-3'>_Remove</button>
        </div>
        <div className="row">
            <div className="col-sm-6">
                <label htmlFor="">Title</label>
                <input type="text"  />
            </div>
            <div className="col-sm-6">
                <label htmlFor="">Start Time[hh:mm:ss]</label>
                <input type="time" />
            </div>
                    </div>
    </div>
    <div className='text-center my-5' >
     <button type="button" class="btn btn-primary w-full">ADD CRBT</button> 
     </div>

     <div className='text-center' >
     <button type="button" class="btn btn-primary w-full">ADD SONG</button> 
     </div>
     <p>Duplicate Album</p>
    <p></p>

   <div className='text-center '>
   <button type="button" class="btn btn-danger btn-lg rounded-pill">Upload Now <i class="bi bi-cloud-upload"></i></button>
   </div>
   
  </>
}

export default Upload
