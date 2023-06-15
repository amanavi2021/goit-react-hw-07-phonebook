import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ConstactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import  { fetchContacts } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selectors';
import { Container, PhonebookTitle, ContactsTitle } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(()=> {
    dispatch(fetchContacts());
  },[dispatch]);


  return (
    <Container> 
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      {isLoading && !error &&  <b>Request in progress...</b>}
      <ContactList />
    </Container>
  );
}




