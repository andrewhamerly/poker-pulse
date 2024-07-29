import PlayerSchedule from "./PlayerSchedule";
import PlayerPosts from "./PlayerPosts";
import './schedule-and-posts-section.css';

export default function ScheduleAndPostsSection() {
    return (
        <div className="schedule-posts">
            <PlayerSchedule />
            <PlayerPosts />
        </div>
    );
}