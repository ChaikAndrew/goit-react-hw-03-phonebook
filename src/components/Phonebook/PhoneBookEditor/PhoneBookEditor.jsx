import { Component } from 'react';
import s from './PhoneBookEditor.module.css';

class PhoneBookEditor extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChangeName = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handleChangeNumber = e => {
    this.setState({ number: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const nameValue = name.trim();
    const numberValue = number.trim();
    this.props.onSubmit(nameValue, numberValue);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.PhoneBook__form}>
        <p className={s.Name__editor}>Name</p>
        <input
          className={s.Form__input}
          onChange={this.handleChangeName}
          placeholder="Andrii Chaika"
          required
        ></input>
        <p className={s.Namber__editor}>Number</p>
        <input
          className={s.Form__input}
          onChange={this.handleChangeNumber}
          type="tel"
          name="number"
          placeholder="+38(050)555-55-55"
          pattern="\+?[0-9\s\-\(\)]+"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        ></input>
        <button type="submit" className={s.PhoneBookList__btn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default PhoneBookEditor;
