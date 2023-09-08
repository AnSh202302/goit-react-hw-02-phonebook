export const ContactList = ({ filter, contacts, deleteUser }) => {
  return (
    <ul>
      {(filter ?? contacts).map(({ name, id, number }) => (
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
