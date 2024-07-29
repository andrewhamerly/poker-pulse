export default function ProfileSection(props) {
    return (
        <div className="profile-container">
            <div className="pic-user-level">
                <img src={props.userpic} alt="profile picture" />
                <p>{props.username}</p>
                <p>{props.pokerlevel}</p>
            </div>
            <p>{props.userbio}</p>
            <div className="buttons">
                <div className="youstake-link">
                    <p>Youstake</p>
                    <a href="https://youstake.com/" target="_blank">Visit</a>
                </div>
                <div className="hendon-link">
                    <p>Hendon Mob</p>
                    <a href="https://www.thehendonmob.com/" target="_blank">Visit</a>
                </div>
            </div>
        </div>
    )
}