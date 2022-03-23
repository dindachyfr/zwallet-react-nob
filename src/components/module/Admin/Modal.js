import React from 'react'

const Modal = ({handleModal, uid, handleDelUser}) => {
    // console.log(UID, "adalah UID");
  return (
    <main class="con container-fluid d-flex flex-column p-0 justify-content-between">
    <div class="modal-pin bg-light w-25 h-50 p-3 m-3 d-flex flex-column justify-content-between">
        <div class="top-modal d-flex justify-content-between m-3">
          <h4>Are you sure want to delete this user?</h4>
          <h3 
          class="close-modal" 
          onClick={handleModal}>x</h3>
          </div>
        <p class="text-secondary m-3">Click continue to proceed</p>

        <div class="button-wrapper w-100 d-flex justify-content-end pb-5">
          <button 
          class='continue-button'
          onClick={()=>handleDelUser(uid)}>Continue</button>
      </div>
    </div>  
  </main>
)
}

export default Modal