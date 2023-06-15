import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import PropTypes from 'prop-types';
import { DeleteBtn } from './ContactListItem.styled';

export const ContactListItem = ({ contact }) => {
    const dispatch = useDispatch();
    const { name, phone, id } = contact;
    const handleDelete = () => dispatch(deleteContact(id));
    return (
        <li>
            <span>{name}</span>: <span>{phone}</span>   
             <DeleteBtn 
             type='button' 
             className='ContactList_btn'
             onClick={handleDelete}
             >Delete</DeleteBtn>   
        </li>
    )
};

ContactListItem.propTypes = {
    contact: PropTypes.shape({
        name:PropTypes.string.isRequired,
        phone:PropTypes.string.isRequired
    })
 
}



