import s from "./ContactForm.module.css";
import { Component } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

class ContactFrom extends Component {
  state = {
    name: "",
    number: "",
  };

  static propTypes = {
    getDataFunc: PropTypes.func.isRequired,
  };

  inputHandler = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.reset();
    this.props.getDataFunc(this.state);
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    const { inputHandler, submitHandler } = this;
    return (
      <form className={s.form} onSubmit={submitHandler}>
        <label className={s.label}>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={inputHandler}
            className={s.input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={s.label}>
          Number:
          <input
            type="tel"
            name="number"
            onChange={inputHandler}
            value={number}
            className={s.input}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactFrom;
