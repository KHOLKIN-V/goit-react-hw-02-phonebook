import PropTypes from "prop-types";
import cs from "./ContactItem.module.css";

const ContactItem = ({ name, number, onDelete }) => {
  return (
    <>
      {name}: {number}
      <button
        className={cs.btnDeleteContact}
        type="button"
        name="delete"
        onClick={onDelete}
      >
        DELETE
      </button>
    </>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
