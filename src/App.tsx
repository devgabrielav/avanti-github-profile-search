import { useState } from "react";
import { UserType } from "./utils/githubFunctions";
import UserCard from "./components/UserCard/UserCard";
import { Dots, ElementsSection, MainTag, LeftCircle, RightCircle, 
        TitleDiv, GithubLogo, Title, GithubTitle} from "./styles";
import Loading from "./components/Loading/Loading";
import FormElement from "./components/Form/Form";

function App() {
  const [username, setUsername] = useState<string>('');
  const [user, setUser] = useState<UserType | undefined>();
  const [showUser, setShowUser] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <MainTag>
      <Dots src="/src/assets/dots.png" alt="Imagem de pontos decorativos." />
      <LeftCircle></LeftCircle>
      <RightCircle></RightCircle>
      <ElementsSection>
        <TitleDiv>
          <GithubLogo src="/src/assets/github-logo.png" />
          <Title>Perfil</Title>
          <GithubTitle src="/src/assets/github.png" />
        </TitleDiv>
        <FormElement 
          setShowUser={setShowUser}
          setIsLoading={setIsLoading}
          setUser={setUser}
          username={username}
          setUsername={setUsername}
        />
        { isLoading && (
          <Loading />
        ) }
        { showUser && (
          <UserCard user={user} />
        )}
      </ElementsSection>
    </MainTag>
  )
}

export default App;