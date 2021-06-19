import React from 'react';
import PopupWithForm from './PopupWithForm';


function ProfileAvatar(props) {
    return(
        <PopupWithForm
            isOpen = {props.isOpen}
            onClose = {props.onClose}
            name = 'link'
            title = 'Обновить аватар'
            buttonText ='Сохранить'
        >
                <input type="url" name="link" id="avatar-input" minLength="2" className="popup__input"
                       placeholder="Ссылка на картинку" required/>
                <span className="popup__error" id="avatar-input-error"></span>

        </PopupWithForm>
    )
}

export default ProfileAvatar;