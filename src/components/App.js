import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
// import ImagePopup from './ImagePopup';
import PopUpEditProfile from "./PopUpEditProfile";
import PopUpAddCard from "./PopUpAddCard";
import ProfileAvatar from "./ProfileAvatar";


function App() {
  const [isPopUpEditProfileOpen, setIsPopUpEditProfileOpen] = React.useState(false);
  const [isProfileAvatarPopupOpen,  setIsProfileAvatarPopupOpen] = React.useState(false);
  const [isPopUpAddCard, setIsPopUpAddCardPopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsPopUpEditProfileOpen(true);
  }

  function handleEditAvatarClick() {
    setIsProfileAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsPopUpAddCardPopupOpen(true);
  }

  function closeAllPopups() {
    setIsPopUpEditProfileOpen(false)
    setIsPopUpAddCardPopupOpen(false)
    setIsProfileAvatarPopupOpen(false)
  }

  return (

    <div className="page">
     <Header/>
     <Main
         onEditProfile={handleEditProfileClick}
         onAddPlace={handleAddPlaceClick}
         onEditAvatar={handleEditAvatarClick}
     />
     <Footer/>
      <PopUpEditProfile isOpen={isPopUpEditProfileOpen} onClose={closeAllPopups}/>
      <PopUpAddCard isOpen={isPopUpAddCard} onClose={closeAllPopups}/>
      <ProfileAvatar isOpen={isProfileAvatarPopupOpen} onClose={closeAllPopups}/>

    {/*<template className="card-template">*/}
    {/*  <article className="card">*/}
    {/*    <div className="card__group">*/}
    {/*      <img src="./images/Domdai.jpg" alt="Картинка Домбай" className="card__image" />*/}
    {/*      <button className="card__delete"></button>*/}
    {/*      <div className="card__group-container">*/}
    {/*        <h2 className="card__title">Домбай</h2>*/}
    {/*        <div className="card__like_group">*/}
    {/*        <button type="button" className="card__like-button"></button>*/}
    {/*          <span className="card__like-info">1</span>*/}
    {/*        </div>*/}
    {/*      </div>*/}
    {/*    </div>*/}
    {/*  </article>*/}
    {/*</template>*/}
    </div>
  )
}

export default App;
