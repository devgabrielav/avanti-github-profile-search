export type UserType = {
  avatar_url: string;
  name: string;
  bio: string;
}

export type UserNotFound = {
  message: "Not Found",
  documentation_url: "https://docs.github.com/rest",
  status: "404";
}

export const getUserByUsername = async (username: string): Promise<UserType | UserNotFound> => {
  const githubRequest = await fetch(`https://api.github.com/users/${username}`);
  const data: UserType | UserNotFound = await githubRequest.json();
  
  return data;
}