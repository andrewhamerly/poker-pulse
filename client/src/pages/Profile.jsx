import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileSection from "../components/Profile/Sections/ProfileSection";
import ScheduleAndPostsSection from "../components/Profile/Sections/PostsScheduleSection/ScheduleAndPostsSection";
import BottomSection from "../components/Profile/Sections/BottomSection";
import { Flex } from "@chakra-ui/react";
import Auth from '../utils/auth';
import { GET_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';

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

const { loading, data } = useQuery(GET_ME);
    
    return loading || (
        <Flex direction='column' w='100%'>
            <ProfileSection avatar={data?.me?.avatar || 'smiley face'} username={data?.me?.username || 'username'} pokerlevel={data?.me?.pokerlevel || 'lvl 0'} userBio={data?.me?.userBio || "You gotta know when to hold 'em and when to fold 'em."}/>
            <ScheduleAndPostsSection />
            <BottomSection />
        </Flex>
    )
}