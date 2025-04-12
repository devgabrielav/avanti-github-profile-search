import { useState } from "react";
import { getUserByUsername, UserType } from "./utils/githubFunctions";
import UserCard from "./components/UserCard";
import { Dots, ElementsSection, MainTag } from "./styles";

function App() {
  const [username, setUsername] = useState<string>('');
  const [user, setUser] = useState<UserType>({
    avatar_url: '',
    bio: '',
    name: ''
  });
  const [showUser, setShowUser] = useState<boolean>(false);

  const searchUser = async () => {
    const searchedUser = await getUserByUsername(username);
    setUser(searchedUser);
    setShowUser(true);
  }

  return (
    <MainTag>
      <Dots src="/src/assets/dots.png" alt="Imagem de pontos decorativos." />
      <ElementsSection>
        <input type="text" onChange={ (event) => setUsername(event.target.value) } />
        <button onClick={ searchUser }>Buscar</button>
        { showUser && (
          <UserCard user={user} />
        )}
      </ElementsSection>
    </MainTag>
  )
}

export default App;