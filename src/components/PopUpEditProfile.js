import React from 'react';
import PopupWithForm from './PopupWithForm';

function PopUpEditProfile(props) {
    return(
  <PopupWithForm
      isOpen = {props.isOpen}
      onClose = {props.onClose}
      name = 'name'
      title = 'Редактировать профиль'
      buttonText='Сохранить'
   >
      <input type="text" name="name" className='popup__input' id="name-input" minLength="2"  maxLength="40"
             placeholder="Имя" required />
      <span className="popup__error" id="name-input-error"></span>
      <input type="text" name="job" minLength="2" maxLength="200" id="job-input"
             className="popup__input popup__input_type-job" placeholder="Вид деятельности" required/>
      <span className="popup__error" id="job-input-error"></span>
  </PopupWithForm>
    )
}
export default PopUpEditProfile;
