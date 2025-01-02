import PropTypes from 'prop-types';
import { ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactListItem = ({ id, name, number, handleDelete }) => {
  // console.log(id);
  return (
    <ListItem
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '8px 16px',
        borderBottom: '1px solid #ddd',
      }}
    >
      <ListItemText
        primary={name}
        secondary={`Phone: ${number}`}
        sx={{ flexGrow: 1 }}
      />
      <IconButton
        edge="end"
        color="error"
        onClick={() => handleDelete(id)}
        aria-label="delete"
      >
        <DeleteIcon />
      </IconButton>
    </ListItem>
  )
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
