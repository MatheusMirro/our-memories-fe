import { useState, useEffect } from "react";
import { Wrapper, Input, Results } from "./style";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (term: string) => {
    try {
      if (term.trim() !== "") {
        const response = await fetch(
          `http://localhost:8080/api/users/search?searchTerm=${term}`
        );
        const data = await response.json();
        setSearchResults(data.users);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  };

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  const handleUserClick = (username: string) => {
    navigate(`/${username}`);
    setSearchTerm("");

    // Recarrega a página para limpar possíveis erros persistentes
    window.location.reload();
  };

  return (
    <Wrapper>
      <Input
        name="fsrch"
        id="fsrch"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SearchIcon
        style={{ position: "absolute", marginLeft: "-30px", cursor: "pointer" }}
      />
      {searchResults.length > 0 && (
        <Results>
          {searchResults.map((username) => (
            <p key={username} onClick={() => handleUserClick(username)}>
              {username}
            </p>
          ))}
        </Results>
      )}
    </Wrapper>
  );
}

export default SearchBar;
