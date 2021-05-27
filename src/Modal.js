import React, { useEffect, useRef } from 'react';
import Styles from './Modal.module.css';

const Modal = ({ open, onClose }) => { 

    let modalRef = useRef();

    useEffect(() => {

        if(open){
            let handler = (event) => {
                if(!modalRef.current.contains(event.target)) {
                    onClose();
                }
            }

            document.addEventListener("mousedown", handler);
            

            return () => {
                document.removeEventListener("mousedown", handler);
            }
        }

    });

    if(!open) return null;

    return (
        <div className={Styles.overlay}>
            <div ref={modalRef} className={Styles.styleModal}>
                Modal
            </div>
        </div>
    );
}

export default Modal;