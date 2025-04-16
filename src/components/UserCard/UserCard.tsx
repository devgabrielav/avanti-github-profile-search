import { UserType } from "../../utils/githubFunctions";
import { Bio, BioNameDiv, Name, NotFoundDiv, NotFoundMessage, UserCardDiv, UserImage } from "./UserCardStyles";

type UserCardType = {
  user?: UserType;
}

function UserCard({user}: UserCardType) {
  return (
    <>
    {user ? (
      <UserCardDiv>
        <UserImage src={user.avatar_url} />
        <BioNameDiv>
          <Name>{ user.name }</Name>
          <Bio>{ user.bio }</Bio>
        </BioNameDiv>
      </UserCardDiv>
    ) : (
      <NotFoundDiv>
        <NotFoundMessage>
            Nenhum perfil foi encontrado com este nome de usuário.
            Tente novamente
        </NotFoundMessage>
      </NotFoundDiv>
    )}
    </>
  )

}

export default UserCard;