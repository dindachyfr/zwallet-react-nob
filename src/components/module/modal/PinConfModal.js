import React from 'react'
import './pin-modal.css'

const PinConfModal = () => {
    return (
        <main class="con container-fluid d-flex flex-column p-0 justify-content-between">
        <div class="modal-pin bg-light w-25 h-50 p-3 m-3">
            <div class="top-modal d-flex justify-content-between m-3">
              <h4>Enter PIN to Transfer</h4>
              <h3 class="close-modal">x</h3>
              </div>
            <p class="text-secondary m-3">Enter your 6 digits PIN to  confirm the transaction</p>
  
            <div class="button-wrapper w-100 d-flex justify-content-end">
              <button class='continue-button'>Continue</button>
          </div>
        </div>  
      </main>
      )
}

export default PinConfModal
