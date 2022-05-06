import { Phonebook, SecondTitle, Title, Text, } from './ContactsPage.styled';
import { useFetchContactsQuery } from 'redux/contacts/contactsSlice';
import { useState } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export default function ContactsPage() {
  const { data: contacts } = useFetchContactsQuery();
  const [filter, setFilter] = useState('');

  return (
    
      <Phonebook>
        <Title>Phonebook</Title>
        <ContactForm />

        {contacts && contacts.length > 0 ? (
          <>
            <SecondTitle>Contacts</SecondTitle>
            <Filter onChange={setFilter} value={filter} />
            <ContactList normalizedFilter={filter} />
          </>
        ) : (
          <Text>No contacts add</Text>
        )}
      </Phonebook>
    
  );
}


