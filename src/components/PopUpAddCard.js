import React from 'react';
import PopupWithForm from './PopupWithForm';


function PopUpAddCard(props) {
    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            name='name'
            title='Новое место'
            buttonText='Сохранить'
        >
            <input type="text" name="title" id="title-input" className="popup__input" minLength="2" maxLength="30"
                   placeholder="Название" required/>
            <span className="popup__error" id="title-input-error"></span>
            <input type="url" name="link" id="link-input" className="popup__input" placeholder="Ссылка на картинку"
                   required/>
            <span className="popup__error" id="link-input-error"></span>
        </PopupWithForm>
    )
}

export default PopUpAddCard;