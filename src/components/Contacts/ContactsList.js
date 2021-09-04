import { ItemContact, BtnDelete } from "./ContactsList.styles";
import { MdDelete } from "react-icons/md";
import { RiUser3Line } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { contactsOperations, selectors } from "redux/contacts";

export default function ContactsList() {
  const contactList = useSelector(selectors.getFilterContacts);
  const status = useSelector(selectors.getStatus);
  const error = useSelector(selectors.getError);
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  const onDelete = idContact =>
    dispatch(contactsOperations.deleteContacts(idContact));

  if (status === "idle") {
    return null;
  }

  if (status === "rejected") {
    return <p>{`${error}`}</p>;
  }

  if (status === "resolved") {
    if (contactList.length === 0) {
      return <p>В телефонной книге нет контактов</p>;
    } else {
      return (
        <ul>
          {contactList.map(contact => (
            <ItemContact key={contact.id}>
              <div>
                <RiUser3Line size={14} style={{ marginRight: 10 }} />
                {contact.name}: {contact.number}
              </div>
              <BtnDelete type="submit" onClick={() => onDelete(contact.id)}>
                delete
                <MdDelete
                  size={16}
                  color="#8919FA"
                  style={{ marginLeft: 10 }}
                />
              </BtnDelete>
            </ItemContact>
          ))}
        </ul>
      );
    }
  }

  // ---------------------------------------------------------
  // return (
  //       <ul>
  //         {contactList.length > 0 && contactList.map(contact => (
  //              <ItemContact key={contact.id}>
  //               <div>
  //                 <RiUser3Line size={14} style={{ marginRight: 10 }} />
  //                 {contact.name}: {contact.number}
  //               </div>
  //               <BtnDelete type="submit" onClick={() => onDelete(contact.id)}>
  //                 delete
  //                 <MdDelete size={16} color="#8919FA" style={{ marginLeft: 10 }} />
  //               </BtnDelete>
  //             </ItemContact>
  //           ))
  //         }
  //       </ul>
  // )
}

// -------------------------------
// import PropTypes from "prop-types";
// import { ItemContact, BtnDelete } from "./ContactsList.styles";
// import { MdDelete } from "react-icons/md";
// import { RiUser3Line } from "react-icons/ri";
// import { connect } from "react-redux";
// import * as actions from "../../redux/actions";

// const ContactsList = ({ contactList, onDelete }) => {
//   return (
//     <ul>
//       {contactList.map(contact => (
//         <ItemContact key={contact.id}>
//           <div>
//             <RiUser3Line size={14} style={{ marginRight: 10 }} />
//             {contact.name}: {contact.number}
//           </div>
//           <BtnDelete type="submit" onClick={() => onDelete(contact.id)}>
//             delete
//             <MdDelete size={16} color="#8919FA" style={{ marginLeft: 10 }} />
//           </BtnDelete>
//         </ItemContact>
//       ))}
//     </ul>
//   );
// };

// const filterContacts = (allContacts, filter) => {
//   const filterLowerCase = filter.toLowerCase();

//   const contactsFilter = allContacts.filter(contact =>
//     contact.name.toLowerCase().includes(filterLowerCase),
//   );

//   return contactsFilter;
// };

// const mapStateToProps = state => {
//   const contactsFilter = filterContacts(state.contacts, state.filter);

//   return { contactList: contactsFilter };
// };

// const mapDispatchToProps = dispatch => ({
//   onDelete: idContact => dispatch(actions.onDeleteContact(idContact)),
// });

// ContactsList.propTypes = {
//   contactList: PropTypes.array.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
