export const Filter = ({ handleSearch }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" name="name" onChange={handleSearch} required />
    </label>
  );
};
