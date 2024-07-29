import { Avatar } from '@chakra-ui/react';

export default function ProfileSection(props) {
    return (
        <div className="profile-container">
            <div className="pic-user-level">
                <img src={props.userpic} alt="profile picture" />
                <h2>{props.username}</h2>
                <h3>{props.pokerlevel}</h3>
            </div>
            <p>{props.userbio}</p>
            <div className="buttons">
                <div className="youstake-link">
                    <h3>Youstake</h3>
                    <a href="https://youstake.com/" target="_blank">Visit</a>
                </div>
                <div className="hendon-link">
                    <h3>Hendon Mob</h3>
                    <a href="https://www.thehendonmob.com/" target="_blank">Visit</a>
                </div>
            </div>
        </div>
    )
}