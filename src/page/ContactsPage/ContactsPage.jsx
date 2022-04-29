import { Phonebook, SecondTitle, Title, Box, Text, ButtonTheme } from './ContactsPage.styled';
import { useFetchContactsQuery } from 'redux/contacts/contactsSlice';
import { useState } from 'react';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from 'redux/store';

export function ContactsPage() {
  const { data: contacts } = useFetchContactsQuery();
  const [filter, setFilter] = useState('');
  const themes = useSelector(state => state.theme.value)

  const dispatch = useDispatch();

  return (
    <Box themeColor={themes}>
      <ButtonTheme type="button" onClick={() => dispatch(changeTheme())}>
        {themes ? <BsSunFill /> : <BsMoonStarsFill />}
      </ButtonTheme>
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
    </Box>
  );
}


