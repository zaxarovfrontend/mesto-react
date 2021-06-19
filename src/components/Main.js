import React from 'react';
import api from "../utils/api";
import Card from "./Card";
import pencilImage from '../images/Karandashimage.svg'

function Main(props) {
  const [userAvatar, setUserAvatar] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([
      api.getUserInfo(),
      api.getInitialCards(),
    ])
        .then(([userData, cards]) => {
          setUserName(userData.name);
          setUserDescription(userData.about);
          setUserAvatar(userData.avatar);
          setCards(cards);
        })
        .catch((err) => console.log(err))
  }, []);

  return (
    <main className="content">
    <section className="profile">
      <div className="profile__info-block">
      <img  onClick={props.onEditAvatar} alt='аватар' src={pencilImage} className="profile__edit-button-avatar"/>
      <img className="profile__avatar" src={userAvatar} alt="фото Кусто" />
        </div>
      <div className="profile__info">
        <div className="profile__webinfo">
          <h1 className="profile__title">{userName}</h1>
          <button onClick={props.onEditProfile} aria-label="profilebutton" type="button" className="profile__edit-button hover"></button>
        </div>
        <p className="profile__text">{userDescription}</p>
      </div>
      <button onClick={props.onAddPlace}  type="button" className="profile__add-button hover"></button>
    </section>

    <section className="cards">
          {cards.map((card => (
              <Card
                  onCardClick={props.onCardClick}
                  key={card._id}
                  card={card}
              />
          )))
          }
    </section>

  </main>
  );
}

export default Main;