export const ContactList = ({ contacts, deleteUser }) => {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => (
        <li key={id}>
          {name}: {number}
          <button type="button" onClick={() => deleteUser(id)}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
};
