import React from 'react'

const Reports = () => {
  return <>
  <div className="container">   
          <h3 className='text-uppercase text-center mb-5'>Upload Content</h3>     
    <div className="row">
      <div className="col-sm-4">
       <div className='d-flex align-items-center m-2 gap-4'>
       <label htmlFor="" className=''>Label</label>
       <button type="button" class="btn btn-secondary btn-sm rounded-pill w-50 ">Add New</button>
       </div>
        <input type="text" style={{height:"35px"}} className='' />
      </div>
      <div className="col-sm-4">
        <label htmlFor="">Title</label>
        <input type="text" />
      </div>
      <div className="col-sm-4">
        <label htmlFor="">UPC</label>
        <input type="text" />
      </div>
    </div>
    <div className="row">
      <div className="col-sm-4">
        <label htmlFor="releaseDate">Date of release</label>
        <input type="date" id='releaseDate' min="2023-01-01" max="2023-12-31" />
      </div>
      <div className="col-sm-4">
        <label htmlFor="liveDate">Go Live Date</label>
        <input type="date" id='liveDate' min="2023-01-01" max="2023-12-31"  />
      </div>
      <div className="col-sm-4">
        <label htmlFor="">Content Type</label>
        <input type="text" />
      </div>
    </div>
    <div className="row my-3">
       <label htmlFor="">Inlay/Album Art</label>
       <label htmlFor="">Upload inlay having name "Album Title(.jpg/.png)"</label>
       <input type="file" className='border text-center' accept=".png, .jpg, .jpeg" />
    </div>
  </div>
  <hr />

  <h4>SONG 1</h4>
  <hr />
  <div className="container">
    <div className="row">
      <div className="col-sm-3">
        <label htmlFor="title">Title</label>
        <input type="text" id='title' className=''/>
      </div>
      <div className="col-sm-3">
      <label htmlFor="isrc">ISRC</label>
        <input type="text" id='isrc' className=''/>
      </div>
      <div className="col-sm-3">
      <label htmlFor="language">Language</label>
        <input type="text" id='language' className=''/>
      </div>
      <div className="col-sm-3">
      <label htmlFor="date">Go Live Date</label>
        <input type="text" id='date' className=''/>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-3">
        <label htmlFor="genre">Genre</label>
        <input type="text" id='genre' className=''/>
      </div>
      <div className="col-sm-3">
      <label htmlFor="sub">Sub Genre</label>
        <input type="text" id='sub' className=''/>
      </div>
      <div className="col-sm-3">
      <label htmlFor="mood">Mood</label>
        <input type="text" id='mood' className=''/>
      </div>
      <div className="col-sm-3">
      <label htmlFor="desc">Description</label>
        <input type="text" id='desc' className=''/>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-3">
        <label htmlFor="singer">Singer</label>
        <input type="text" id='singer' className=''/>
      </div>
      <div className="col-sm-3">
      <label htmlFor="compo">Composer</label>
        <input type="text" id='compo' className=''/>
      </div>
      <div className="col-sm-3">
      <label htmlFor="mood">Director</label>
        <input type="text" id='mood' className=''/>
      </div>
      <div className="col-sm-3">
      <label htmlFor="pro">Producer</label>
        <input type="text" id='pro' className=''/>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-3">
        <label htmlFor="star">Star Cast</label>
        <input type="text" id='star' className=''/>
      </div>
      <div className="col-sm-3">
      <label htmlFor="ly">Lyricist</label>
        <input type="text" id='ly' className=''/>
      </div>
      <div className="col-sm-3">
      <label htmlFor="is">Is explicite</label>
        <div class="form-check">
          <input class="form-check-input form-control" type="checkbox" value="" id="is" />
        </div>
      </div>
      
    </div>
    <div className="row my-3">
       <label htmlFor="">Audio File (.wav)</label>
       <span>FileName Should be Track + (.wav)Track ISRC + (.wav)</span>
      <input type="file"  accept=".wav,.mp3" />
    </div>
  </div>
  </>
}

export default Reports
