import React from 'react'

const LogoutModal= ({handleModal, handleLogout}) => {
    // console.log(UID, "adalah UID");
  return (
    <main class="con container-fluid d-flex flex-column p-0 justify-content-between">
    <div class="modal-pin bg-light w-25 p-3 m-3 d-flex flex-column">
        <div class="top-modal d-flex justify-content-between m-3">
          <h4>Are you sure want to logout?</h4>
          <h3 
          class="close-modal" 
          onClick={handleModal}>x</h3>
          </div>
        <p class="text-secondary m-3">Click continue to proceed</p>

        <div class="button-wrapper w-100 d-flex justify-content-end pb-3">
          <button 
          class='continue-button'
          onClick={handleLogout}>Continue</button>
      </div>
    </div>  
  </main>
)
}

export default LogoutModal