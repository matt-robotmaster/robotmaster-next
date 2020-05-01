import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import useTranslation from "../../hooks/useTranslation";

const modal = (props) => {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <>
        <img src={props.imgSrc} onClick={handleShow} alt='Application Image'/>

        <Modal
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'
            centered
            show={show}
            onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{t(props.title)}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{
            padding: '10px',
            height: '500px'}}>
            <iframe
                width="auto"
                height="auto"
                src={props.url}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }} />
          </Modal.Body>
        </Modal>
      </>
  );
};

export default modal;