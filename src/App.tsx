import { useState } from "react";
import { getUserByUsername, UserType } from "./utils/githubFunctions";
import UserCard from "./components/UserCard";
import { Dots, ElementsSection, MainTag,
          LeftCircle, RightCircle, Button,
          Form, ButtonImg, Input, 
          TitleDiv,
          GithubLogo,
          Title,
          GithubTitle} from "./styles";

function App() {
  const [username, setUsername] = useState<string>('');
  const [user, setUser] = useState<UserType | undefined>();
  const [showUser, setShowUser] = useState<boolean>(false);

  const searchUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowUser(false);
    const searchedUser = await getUserByUsername(username);

    if ('avatar_url' in searchedUser) {
      const userFound: UserType = {
        avatar_url: searchedUser.avatar_url,
        bio: searchedUser.bio ? searchedUser.bio : `${searchedUser.name ? searchedUser.name : username} não adicionou uma bio.`,
        name: searchedUser.name ? searchedUser.name : `${username} não adicionou um nome.`
      }
      setUser(userFound);
    } else {
      setUser(undefined);
    }
    setShowUser(true);
    setUsername('');
  }

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
        <Form onSubmit={ searchUser }>
            <Input
              type="text"
              value={ username }
              onChange={ (event) => setUsername(event.target.value) }
              placeholder="Digite um usuário do Github"
              />
            <Button>
              <ButtonImg src="/src/assets/magnifying.png" alt="" style={ { width: '25px', height: '25px' } } />
            </Button>
        </Form>
        { showUser && (
          <UserCard user={user} />
        )}
      </ElementsSection>
    </MainTag>
  )
}

export default App;