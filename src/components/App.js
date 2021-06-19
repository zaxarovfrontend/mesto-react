import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopUpEditProfile from "./PopUpEditProfile";
import PopUpAddCard from "./PopUpAddCard";
import ProfileAvatar from "./ProfileAvatar";


function App() {

    const [selectedCard, setSelectedCard] = React.useState(null);
  const [isPopUpEditProfileOpen, setIsPopUpEditProfileOpen] = React.useState(false);
  const [isProfileAvatarPopupOpen,  setIsProfileAvatarPopupOpen] = React.useState(false);
  const [isPopUpAddCard, setIsPopUpAddCardPopupOpen] = React.useState(false);

  function handleCardClick(card) {
      setSelectedCard(card)
  }

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
      setSelectedCard(null)
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
         onCardClick = {handleCardClick}
     />
     <Footer/>
        <ImagePopup card={selectedCard !== null && selectedCard} onClose={closeAllPopups} />
      <PopUpEditProfile isOpen={isPopUpEditProfileOpen} onClose={closeAllPopups}/>
      <PopUpAddCard isOpen={isPopUpAddCard} onClose={closeAllPopups}/>
      <ProfileAvatar isOpen={isProfileAvatarPopupOpen} onClose={closeAllPopups}/>

    </div>
  )
}

export default App;
