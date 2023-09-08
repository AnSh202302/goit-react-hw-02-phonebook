export const Filter = ({ filter, handleSearch }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={filter} onChange={handleSearch} required />
    </label>
  );
};
