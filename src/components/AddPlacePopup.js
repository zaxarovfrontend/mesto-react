import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
 const [name, setName] = React.useState('')
 const [link, setLink] = React.useState('')
}

function changeName(e) {
  setName(e.target.value)
}

function changeLink(e) {
    setLink(e.target.value)
}

function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
        name:name,
        link:link,
    })
}

return(
    <PopupWithForm>
      name

    </PopupWithForm>


)

