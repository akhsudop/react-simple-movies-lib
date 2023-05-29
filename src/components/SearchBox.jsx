import { Input } from "./SearchBox.styled";

export const SearchBox = ({ onSubmit }) => {
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <Input
        className="input"
        name="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies..."
      />
      <button>Search</button>
    </form>
  );
};
