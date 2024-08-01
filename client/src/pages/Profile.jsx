import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileSection from "../components/Profile/Sections/ProfileSection";
import ScheduleAndPostsSection from "../components/Profile/Sections/PostsScheduleSection/ScheduleAndPostsSection";
import BottomSection from "../components/Profile/Sections/BottomSection";
import { Flex } from "@chakra-ui/react";
import Auth from '../utils/auth';

const user = {
    avatar: "",
    username: "username",
    pokerlevel: "lvl 1",
    userbio: "Insert bio here!"
}

export default function Profile() {
    // UNCOMMENT OUT LINES 18-32 FOR JWT AUTH WHEN APP IS FINISHED - ANDREW
//     const navigate = useNavigate();

//   useEffect(() => {
//     const token = Auth.getToken();

//     if (!token) {
//       navigate('/signup');
//     }
//     }, [navigate]);

//     const token = Auth.getToken();

//     if (!token) {
//         return null;
//     }
    
    return (
        <Flex direction='column' w='100%'>
            <ProfileSection avatar={user.avatar} username={user.username} pokerlevel={user.pokerlevel} userbio={user.userbio}/>
            <ScheduleAndPostsSection />
            <BottomSection />
        </Flex>
    )
}