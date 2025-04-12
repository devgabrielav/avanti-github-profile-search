import { UserType } from "../utils/githubFunctions";
import { Bio, BioNameDiv, Name, UserCardDiv, UserImage } from "./UserCardStyles";

type UserCardType = {
  user: UserType;
}

function UserCard({user}: UserCardType) {

  return (
    <UserCardDiv>
      <UserImage src={user.avatar_url} />
      <BioNameDiv>
        <Name>{ user.name }</Name>
        <Bio>{ user.bio }</Bio>
      </BioNameDiv>
    </UserCardDiv>
  )

}

export default UserCard;