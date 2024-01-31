import React from 'react'

const ModalContainerComponet = (props) => {
  return (
    <div>
        <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId">
          Launch
        </button>
        <div className="modal fade" id="modalId" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
          <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalTitleId">
                  {props?.title}
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                {props.Component}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" className="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ModalContainerComponet