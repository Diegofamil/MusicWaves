import React from 'react'
import $ from 'jquery'

export const Signup = () => {
  function closeModal(e) {
    console.log(e)
    // let el = e.target
    let parent = $(e.target).parents('.modal')
    $(parent).removeClass('show')
  }
return (
  <div className="modal" id="modal_signup">
      <div className="modalContainer">
        <div className='close' style={{flex:'2'}}>
            <p onClick={e=> closeModal(e)}>X</p>
        </div>
      <div  style={{flex:'2'}}>
        Bienvenido
      </div>
      <div  style={{flex:'2'}}>
        <input></input>
      </div>
      <div  style={{flex:'2'}}>
        <input></input>
      </div>
      <div  style={{flex:'2'}}>
        <button>Resgistrarse</button>
      </div>
      </div>

  </div>
)
}
