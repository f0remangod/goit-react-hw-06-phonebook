import React from 'react';
// import initialValues from '../json/initialValues';
import { Filter } from 'components/PhonebookComponents/Filter/Filter';
import { ContactsList } from 'components/PhonebookComponents/ContactsList/ContactsList';
import { PhonebookForm } from 'components/PhonebookComponents/PhonebookForm/PhonebookForm';
import { Section } from 'components/Section/Section';
// import { useState } from 'react';
// import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  // const filter = useSelector(state => state.filter);

  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem('contacts')) || initialValues;
  // });

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <Section title="Add new contact">
        {/* <PhonebookForm></PhonebookForm> */}
        <PhonebookForm />
      </Section>

      {contacts.length > 0 && (
        <>
          <Section title="Filter contacts">
            <Filter></Filter>
          </Section>

          <Section title="Saved contacts">
            <ContactsList></ContactsList>
          </Section>
        </>
      )}
    </>
  );
};
