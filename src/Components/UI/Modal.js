import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css"
const Modal = props =>{
    const Backdrop =props =>{
return <div className={classes.backdrop} onClick={props.onClose}/>
    }

    const ModalOverlay = props =>{
        return <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    }

    return <Fragment>
     {ReactDOM.createPortal(<Backdrop {...props}/>,document.getElementById('backdrop'))}
     {ReactDOM.createPortal(<ModalOverlay >{props.children}</ModalOverlay> , document.getElementById('modalOverlay'))}
    </Fragment>

}


export default Modal;