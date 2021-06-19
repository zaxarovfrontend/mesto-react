import pencilImage from '../images/Karandashimage.svg'
import React from 'react';
import api from "../utils/api";


function Main(props) {
  const [userAvatar, setUserAvatar] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');

  React.useEffect(() => {
    Promise.all([
      api.getUserInfo(),
      api.getInitialCards(),

    ])
        .then(([userData]) => {
          setUserName(userData.name);
          setUserDescription(userData.about);
          setUserAvatar(userData.avatar);
        })
        .catch((err) => console.log(err))
  }, []);

  return (
    <main className="content">
    <section className="profile">
      <div className="profile__info-block">
      <img  onClick={props.onEditAvatar} src={pencilImage} className="profile__edit-button-avatar"/>
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
    
    <section className="cards"></section>

  </main>
  );
}

export default Main;