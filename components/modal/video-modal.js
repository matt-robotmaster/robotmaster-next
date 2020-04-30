import React from "react";

const modal = (props) => {
  return (
      <div className="video-modal">
        <div
            className="modal fade"
            id={props.videoId}
            tabIndex={-1}
            role="dialog"
            aria-hidden={true}>
          <div
              className="modal-dialog"
              style={{
                position: 'relative',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '60%',
              }}>
            <div
                className="modal-content"
                style={{
                  padding: '1%',
                }}>
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden={true}>
                  X
                </button>
                <strong className="modal-title" id={'label' + props.videoId}>
                  {props.videoTitle}
                </strong>
              </div>
              <div
                  className="modal-body text-center"
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: 0,
                    paddingBottom: '56.25%',
                  }}>
                <iframe
                    width="100%"
                    height="auto"
                    src={props.videoUrl}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                    }} />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default modal;