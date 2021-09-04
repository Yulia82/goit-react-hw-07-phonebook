import { useState } from "react";
import { FormLabel, FormInput, FormStyle, BtnSubmit } from "./Form.styles";
import { MdPersonAdd } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { contactsOperations, selectors } from "redux/contacts";

export default function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();
  const contactsList = useSelector(selectors.getContactsList);

  const onSubmit = data => {
    if (
      contactsList.find(
        contact => data.name.toLowerCase() === contact.name.toLowerCase(),
      )
    ) {
      alert(`${data.name} is already in contacts`);
      return contactsList;
    }

    dispatch(
      contactsOperations.postContacts({ name: data.name, number: data.number }),
    );
  };

  function inputChange(evt) {
    const { name } = evt.target;

    switch (name) {
      case "name":
        setName(evt.target.value);
        break;
      case "number":
        setNumber(evt.target.value);
        break;
      default:
        break;
    }
  }

  function formSubmit(evt) {
    evt.preventDefault();
    onSubmit({ name, number });

    setName("");
    setNumber("");
  }

  return (
    <FormStyle onSubmit={formSubmit}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          value={name}
          onChange={inputChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </FormLabel>

      <FormLabel>
        Fhone number
        <FormInput
          type="tel"
          value={number}
          onChange={inputChange}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </FormLabel>

      <BtnSubmit type="submit">
        ADD CONTACT{" "}
        <MdPersonAdd size={26} color="#8919FA" style={{ marginLeft: 20 }} />
      </BtnSubmit>
    </FormStyle>
  );
}
