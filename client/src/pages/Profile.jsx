import ProfileSection from "../components/Profile/ProfileSection";
import ScheduleAndPostsSection from "../components/Profile/ScheduleAndPostsSection";
import BottomSection from "../components/Profile/BottomSection";

export default function Profile(props) {
    return (
        <div>
            <ProfileSection />
            <ScheduleAndPostsSection />
            <BottomSection />
        </div>
    )
}