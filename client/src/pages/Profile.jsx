import ProfileSection from "../components/Profile/ProfileSection";
import ScheduleAndPostsSection from "../components/Profile/ScheduleAndPostsSection";
import BottomSection from "../components/Profile/BottomSection";

const user = {
    userpic: "",
    username: "",
    pokerlevel: "",
    userbio: ""
}

export default function Profile() {
    return (
        <div>
            <ProfileSection userpic={user.userpic} username={user.username} pokerlevel={user.pokerlevel} userbio={user.userbio}/>
            <ScheduleAndPostsSection />
            <BottomSection />
        </div>
    )
}