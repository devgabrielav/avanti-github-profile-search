export type UserType = {
  avatar_url: string;
  name: string;
  bio: string;
}

export const getUserByUsername = async (username: string): Promise<UserType> => {
  const githubRequest = await fetch(`https://api.github.com/users/${username}`);
  const { avatar_url, bio, name } = await githubRequest.json();

  const userFound: UserType = {
    avatar_url,
    bio: bio ? bio : `${name ? name : username} não adicionou uma bio.`,
    name: name ? name : `${username} não adicionou um nome.`
  }

  return userFound;
}