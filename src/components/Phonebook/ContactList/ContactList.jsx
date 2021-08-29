import s from "./ContactList.module.css";
import { Component } from "react";
import PropTypes from "prop-types";

class ContactList extends Component {

  static propTypes = {
    listToRender: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
    onDeleteItem: PropTypes.func.isRequired,
  };

  render() {
    const { listToRender, onDeleteItem } = this.props;

    return (
      <ul className={s.list}>
        {listToRender.map(({ name, number, id }) => {
          return (
            <li key={id} className={s.item}>
              {name}: {number}
              <button type="button" onClick={() => onDeleteItem(id)} className={s.btn}>
                delete contact
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ContactList;
