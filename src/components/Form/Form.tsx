import { Form, Input, Button, ButtonImg } from "./FormStyles";
import { searchUser } from "../../utils/applicationFunctions";
import { UserType } from "../../utils/githubFunctions";

type FormElementType = {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setShowUser: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<UserType | undefined>>;
}

function FormElement({
  username, setUsername, setShowUser, setIsLoading, setUser
}: FormElementType) {
  return (
    <Form onSubmit={ (event: React.FormEvent<HTMLFormElement>) => {
        searchUser({ event, username, setUsername, setShowUser, setIsLoading, setUser})
        }}>
        <Input
          type="text"
          value={ username }
          onChange={ (event) => setUsername(event.target.value) }
          placeholder="Digite um usuário do Github"
          />
        <Button>
          <ButtonImg src="/src/assets/magnifying.png" alt="Imagem de uma lupa." style={ { width: '25px', height: '25px' } } />
        </Button>
    </Form>
  )
}

export default FormElement;