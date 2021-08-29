import s from "./Phonebook.module.css";
import { Component } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";

class Phonebook extends Component {
  state = {
    contacts: this.props.contacts,
    filter: this.props.filter,
  };

  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
    filter: PropTypes.string,
  }

  componentDidMount() {

    const storageTodos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(storageTodos);
    if(parsedTodos && parsedTodos.length > 0) {
      return  this.setState({contacts: parsedTodos})
    } 

  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.contacts !== this.state.contacts) {
      localStorage.setItem('todos', JSON.stringify(this.state.contacts))
    }
  }

  getDataFromContactForm = (data) => {
    const names = this.state.contacts.map((el) => el.name);
    if (names.filter((name) => name === data.name).length > 0) {
      return alert(`You've already added this contact to your list!`);
    }
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, { ...data, id: shortid.generate() }],
    }));
  };

  getDataFromFilter = (e) => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  deleteHandler = (idToDelete) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((el) => el.id !== idToDelete),
    }));
  };

  render() {
    const { getDataFromContactForm, getDataFromFilter, deleteHandler } = this;
    const { contacts, filter } = this.state;
    const loweredFilter = filter.toLowerCase();
    const listForRender = contacts.filter((el) =>
      el.name.toLowerCase().includes(loweredFilter)
    );

    return (
      <section className={s.section}>
        <h1>Phonebook</h1>
        <ContactForm getDataFunc={getDataFromContactForm} />

        <h2>Contacts</h2>
        <Filter value={filter} onInputChange={getDataFromFilter} />
        <ContactList
          listToRender={listForRender}
          onDeleteItem={deleteHandler}
        />
      </section>
    );
  }
}

export default Phonebook;
