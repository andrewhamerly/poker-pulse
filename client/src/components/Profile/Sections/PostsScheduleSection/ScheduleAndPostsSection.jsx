import { Flex } from '@chakra-ui/react';
import PlayerSchedule from "./PlayerSchedule";
import PlayerPosts from "./PlayerPosts";

export default function ScheduleAndPostsSection() {
    return (
        <Flex direction='row' align='center' justify='space-evenly' w='100%' bgGradient='linear(to-b, #2a4d3b, #35654d)' p={5}>
            <PlayerSchedule />
            <PlayerPosts />
        </Flex>
    );
}