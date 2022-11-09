import { FcPhoneAndroid } from 'react-icons/fc';
import { BsFillPersonFill } from 'react-icons/bs';
import { RiDeleteBin5Line } from 'react-icons/ri';
import ReactTooltip from 'react-tooltip';

import s from './PhoneBookList.module.css';

const PhoneBookList = ({ contacts, ondeletePhoneBook }) => (
  <ul className={s.PhoneBookList__list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={s.PhoneBookList__item}>
        <div className={s.Contacts__name}>
          <BsFillPersonFill className={s.Form__icon} />

          {name}
        </div>
        <div className={s.Contacts__phone}>
          <FcPhoneAndroid className={s.Form__icon} />
          {number}
        </div>
        <div>
          <button
            data-tip="Do you want to delete this contact?"
            onClick={() => ondeletePhoneBook(id)}
            className={s.PhoneBookList__btn}
          >
            <ReactTooltip textColor="white" backgroundColor="#ff3333" />
            {/* Delete */}
            <RiDeleteBin5Line className={s.Form__icon} />
          </button>
        </div>
      </li>
    ))}
  </ul>
);

export default PhoneBookList;
