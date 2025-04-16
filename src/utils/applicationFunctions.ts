import { UserType } from "./githubFunctions";
import { getUserByUsername } from "./githubFunctions";

type SearchUserType = {
  event: React.FormEvent<HTMLFormElement>;
  setShowUser: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  username: string;
  setUser: React.Dispatch<React.SetStateAction<UserType | undefined>>;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

export const searchUser = async (
  { event, setShowUser, setIsLoading, username, setUser, setUsername }: SearchUserType
) => {
  event.preventDefault();
  setShowUser(false);
  setIsLoading(true);
  const searchedUser = await getUserByUsername(username);
  
  setTimeout(async () => {
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
    setIsLoading(false);
  }, 2000);
}
