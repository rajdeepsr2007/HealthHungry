import Image from "../UI/Images";
const User = (props) => {
    const {user} = props;
    return(
        <div style={{
            display : 'flex',
            justifyContent : 'flex-start',
            alignItems : 'center',
            margin : '0 2rem 0 0'
        }} >
            <Image
            style={{ borderRadius : '50%' , margin : '0 1rem 0 0' }}
            src='https://images.squarespace-cdn.com/content/v1/54b7b93ce4b0a3e130d5d232/1519987020970-8IQ7F6Z61LLBCX85A65S/icon.png?format=1000w'
            height='50rem'
            width='50rem'
            />
            <span>
                {user.username}
            </span>
        </div>
    )
}
export default User;