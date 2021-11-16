import React from "react";
import "./LargePhotoModal.scss"


const LargePhotoModal = ({ 
    modalActive, 
    setModalActive, 
    photo 
}) => {
    return (
        <div className={modalActive ? "large_photo_modal__mask large_photo_modal__active" : "large_photo_modal__mask"} onClick={() => setModalActive(false)}>
            <div className="large_photo_modal__content" onClick={e => e.stopPropagation()}>
                <img src={photo} alt="..." />
            </div>
        </div>
    )
}

export default LargePhotoModal;