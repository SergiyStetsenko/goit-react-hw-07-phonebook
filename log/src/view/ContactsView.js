import { Component } from 'react';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../redux/contacts';
import  ContactForm  from '../components/ContactForm/ContactForm';

import Filter from '../components/Filter';
import ContactList from '../components/ContactList/ContactList';
import ContactListContainer from '../components/ContactList';


class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <>
        <h1 >Phonebook</h1>
        <ContactForm/>
        <h2 >Contacts</h2>
        <Filter/>
        {this.props.isLoadingContacts && <h1>Загружаем...</h1>}
        <ContactListContainer/>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
