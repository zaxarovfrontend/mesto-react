import React from 'react';
import api from "../utils/api";

function Main(props) {
  const [userAvatar, setUserAvatar] = React.useState('');
  const [userName, setuserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');

  React.useEffect(() => {
    Promise.all([
      api.editUserData(),
      api.addCard()
    ])
        .then(([userData]) => {
          setuserName(userData.name);
          setUserDescription(userData.about);
          setUserAvatar(userData.avatar);
        })
        .catch((err) => console.log(err))
  }, []);

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

  </main>
  );
}

export default Main;