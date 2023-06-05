export const ContactList = ({ filterContacts, onClick }) => {
    return(
        <ul >
      {filterContacts?.map(({id, name, number }) => {
        return (
          <li  key={id}>
            <span >{name}: </span>
            <span >{number}</span>
            <button
              type="button"
              onClick={() => onClick(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
    )
}