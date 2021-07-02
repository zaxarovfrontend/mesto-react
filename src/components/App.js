import React from 'react';
import '../index.css';
import api from '../utils/api';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopUpEditProfile from "./PopUpEditProfile";
import PopUpAddCard from "./PopUpAddCard";
import ProfileAvatar from "./ProfileAvatar";
import {CurrentUserContext} from "../contexts/currentUserContext";

function App() {
    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([])
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [isPopUpEditProfileOpen, setIsPopUpEditProfileOpen] = React.useState(false);
    const [isProfileAvatarPopupOpen, setIsProfileAvatarPopupOpen] = React.useState(false);
    const [isPopUpAddCardOpen, setIsPopUpAddCardPopupOpen] = React.useState(false);

    //запрос данных пользователя
    React.useEffect(() => {
    api.getUserInfo()
        .then((data) => {
            setCurrentUser(data)
        })
        .catch((err) => console.log(err))

},[])

    //запрос карточек
    React.useEffect(() => {
        api.getInitialCards()
            .then((data) => {
                setCards(data)
            })
            .catch((err) => console.log(err))

    },[])




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

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch((err) => {
            console.log(err)
        })
    }






    return (
        <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
            <Header/>
            <Main
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
                cards={cards}
                onCardLike = {handleCardLike}
            />
            <Footer/>
            <ImagePopup card={selectedCard !== null && selectedCard} onClose={closeAllPopups}/>
            <PopUpEditProfile isOpen={isPopUpEditProfileOpen} onClose={closeAllPopups}/>
            <PopUpAddCard isOpen={isPopUpAddCardOpen} onClose={closeAllPopups}/>
            <ProfileAvatar isOpen={isProfileAvatarPopupOpen} onClose={closeAllPopups}/>
        </div>
        </CurrentUserContext.Provider>
    )
}

export default App;
