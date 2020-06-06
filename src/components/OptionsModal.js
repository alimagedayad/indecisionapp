import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) =>
    (

    <Modal
        isOpen={!!props.option}
        contentLabel={'Option Model'}
        onRequestClose={props.hide}
        ariaHideApp={false}
        closeTimeoutMS={150}
        className='modal'
    >
        <h3 className='modal__title'>Selected Option</h3>
        {props.option && <p className='modal__body'>{props.option}</p>}
        <button className='r-button' onClick={props.hide} >Okay</button>
    </Modal>

    );

export default OptionModal;