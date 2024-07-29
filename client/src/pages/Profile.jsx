import ProfileSection from "../components/Profile/Sections/ProfileSection";
import ScheduleAndPostsSection from "../components/Profile/Sections/PostsSchedules/ScheduleAndPostsSection";
import BottomSection from "../components/Profile/Sections/BottomSection";

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