import React from 'react';

function Main(props) {

  return (
    <main className="content">
    <section className="profile">
      <div className="profile__info-block">
      <button  onClick={props.onEditAvatar} className="profile__edit-button-avatar"></button >
      <img className="profile__avatar" src="#" alt="фото Кусто" />
        </div>
      <div className="profile__info">
        <div className="profile__webinfo">
          <h1 className="profile__title">Жак Ив Кусто</h1>
          <button onClick={props.onEditProfile} aria-label="profilebutton" type="button" className="profile__edit-button hover"></button>
        </div>
        <p className="profile__text">Исследователь океана</p>
      </div>
      <button onClick={props.onAddPlace}  type="button" className="profile__add-button hover"></button>
    </section>
    
    <section className="cards"></section>
    <div className="popup popup_type_edit-profile">
      <div className="popup__overlay"></div>
      <form name="form-container" className="popup__container popup__container_type_edit-profile" novalidate>
        <h2 className="popup__title">Редактировать профиль</h2>
        <input type="text" name="name" id="name-input" minlength="2"  maxlength="40" className="popup__input popup__input_type-name" placeholder="Имя" required />
        <span className="popup__error" id="name-input-error" ></span>
        <input type="text" name="job" minlength="2"  maxlength="200" id="job-input" className="popup__input popup__input_type-job" placeholder="Вид деятельности" required />
        <span className="popup__error" id="job-input-error" ></span>
        <button type="submit" className="popup__submit-button hover">Cохранить</button>
        <button type="button" className="popup__close-button popup__close-button_type_edit hover"></button>
      </form>
    </div>
    
    <div className="popup popup_type_add" >
      <div className="popup__overlay"></div>
      <form name="form-container" className="popup__container popup__container_add" novalidate>
        <h2 className="popup__title popup__title_style">Новое место</h2>
        <input type="text" name="title"  id="title-input" className="popup__input" minlength="2"  maxlength="30" placeholder="Название" required />
        <span className="popup__error" id="title-input-error" ></span>
        <input type="url" name="link"  id="link-input" className="popup__input" placeholder="Ссылка на картинку" required />
        <span className="popup__error" id="link-input-error"></span>
        <button type="submit" className="popup__submit-button popup__submit-button_style hover">Cоздать</button>
        <button type="button" className="popup__close-button popup__close-button_type_add hover"></button>
      </form>
    </div>
  
    <div className="popup popup_type_image">
      <div className="popup__overlay"></div>
      <figure className="popup__figure">
        <img src="#" className="popup__image" alt="фотография" />
        <figcaption className="popup__caption"></figcaption>
        <button type="button" className="popup__close-button popup__close-button_type_image hover"></button>
      </figure></div>

      <div className="popup popup_type_avatar-update">
        <div className="popup__overlay"></div>
        <form name="form-container" className="popup__container" novalidate>
          <h2 className="popup__title popup__title_type-update">Обновить аватар</h2>
          <input type="url" name="link" id="avatar-input" minlength="2" className="popup__input" placeholder="Ссылка на картинку" required />
          <span className="popup__error" id="avatar-input-error" ></span>
          <button type="submit" className="popup__submit-button hover">Cохранить</button>
          <button type="button" className="popup__close-button popup__close-button_type_edit hover"></button>
        </form>
      </div>
  
      <div className="popup popup_type_add-question">
        <div className="popup__overlay"></div>
        <form name="form-container" className="popup__container" novalidate>
          <h2 className="popup__title popup__title_type_question">Вы уверенны?</h2>
          <button type="submit" className="popup__submit-button hover">Да</button>
          <button type="button" className="popup__close-button popup__close-button_type_question hover"></button>
        </form>
      </div>
  </main>
  );
}

export default Main;