import { Flex, Heading } from '@chakra-ui/react';
// import Schedule from '';

export default function PlayerSchedule() {
    return (
        <Flex direction='column' w='40%' align='center' justify='center' bg='#2a3030' borderRadius={25} p={5}>
            <Heading size='md' color='#f5f5f5'>Player Schedule</Heading>
            {/* <Schedule /> */}
        </Flex>
    );
}