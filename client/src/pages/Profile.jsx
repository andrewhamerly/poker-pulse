import ProfileSection from "../components/Profile/Sections/ProfileSection";
import ScheduleAndPostsSection from "../components/Profile/Sections/PostsScheduleSection/ScheduleAndPostsSection";
import BottomSection from "../components/Profile/Sections/BottomSection";

const user = {
    avatar: "",
    username: "username",
    pokerlevel: "lvl 1",
    userbio: "Insert bio here!"
}

export default function Profile() {
    return (
        <div className="profile">
            <ProfileSection avatar={user.avatar} username={user.username} pokerlevel={user.pokerlevel} userbio={user.userbio}/>
            <ScheduleAndPostsSection />
            <BottomSection />
        </div>
    )
}