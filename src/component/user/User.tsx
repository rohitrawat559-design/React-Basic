function User ( props) {
    console.log(props.name)
    return(
        <div>
            this is Student comonent, hii {props.name}
            the email is  {props.email}
        </div>
    )
}
export default User;
