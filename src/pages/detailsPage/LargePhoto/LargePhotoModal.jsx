import React from "react";
import "./LargePhotoModal.scss"


const LargePhotoModal = ({ 
    modalActive, 
    setModalActive, 
    photo 
}) => {
    return (
        <div className={modalActive ? "large-photo__mask large-photo__active" : "large-photo__mask"} onClick={() => setModalActive(false)}>
            <div className="large-photo__content" onClick={e => e.stopPropagation()}>
                <img src={photo} alt="..." />
            </div>
        </div>
    )
}

export default LargePhotoModal;