import { Flex, Heading, Button, Link } from '@chakra-ui/react';
// import Schedule from '';

export default function PlayerSchedule() {
    return (
        <Flex direction='column' w={{base:'95%', md:'40%', lg:'40%'}} align='center' justify='center' bg='#2a3030' borderRadius={25} p={5}>
            <Heading size='md' color='#f5f5f5' mb={3}>Player Schedule</Heading>
            {/* <Schedule /> */}
            <Link href='/schedule' w='100%' align='center'>
                <Button bg='#f5f5f5' w={{base:'95%', md:'70%', lg:'60%'}} mt={3} _hover={{bg:'#c4c4c4'}}>Customize Schedule</Button>
            </Link>
        </Flex>
    );
}