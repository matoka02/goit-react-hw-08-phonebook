import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ id, name, number, handleDelete }) => (
	<li 
	className={css.contactListItem}
	>
		<p>{name}: {number}</p>		
		<button 
			type="submit"
			className={css.contactListItemBtn}
			onClick={() => handleDelete(id)}
		>
		Delete
	</button>
</li>
);

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired,
};

