import React from 'react'

const DelModal = ({handleModal, handleDelPhone}) => {
    // console.log(UID, "adalah UID");
  return (
    <main class="con container-fluid d-flex flex-column p-0 justify-content-between">
    <div class="modal-pin bg-light w-25 h-25 p-3 d-flex flex-column justify-content-between">
        <div class="top-modal d-flex justify-content-between mt-2">
          <h4>Are you sure want to delete current phone number?</h4>
          <h3 
          class="close-modal" 
          onClick={handleModal}>x</h3>
          </div>
        <p class="text-secondary m-3">Click continue to proceed</p>

        <div class="button-wrapper w-100 d-flex justify-content-end pb-2">
          <button 
          class='continue-button'
          onClick={handleDelPhone}>Continue</button>
      </div>
    </div>  
  </main>
)
}

export default DelModal