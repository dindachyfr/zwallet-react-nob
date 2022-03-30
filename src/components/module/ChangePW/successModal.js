import React from 'react'

const SuccessModal = ({navigate}) => {
    // console.log(UID, "adalah UID");
  return (
    <main class="con container-fluid d-flex flex-column p-0 justify-content-between">
    <div class="modal-pin bg-light w-25 h-25 p-3 d-flex flex-column justify-content-between">
        <div class="top-modal d-flex justify-content-between mt-2">
          <h4>Password has been successfully updated</h4>
          </div>
        <p class="text-secondary m-3">Click continue to proceed</p>

        <div class="button-wrapper w-100 d-flex justify-content-end pb-2">
          <button 
          class='continue-button'
          onClick={()=> navigate("/profile")}>Continue</button>
      </div>
    </div>  
  </main>
)
}

export default SuccessModal