import { Avatar, Button, Link, Flex, Heading, Text } from '@chakra-ui/react';

export default function ProfileSection(props) {
    return (
        <Flex direction='row' w='100%' p={5} gap={5} bg='#f5f5f5'>
            <Flex direction='column' w='20%' align='center' justify='center'>
                <Avatar name={props.username} src={props.avatar} size='2xl'/>
                <Heading size='2x1'>{props.username}</Heading>
                <Heading size='2x1'>{props.pokerlevel}</Heading>
            </Flex>
            <Text fontSize='lg' w='40%' align='center' justify='center'>{props.userbio}</Text>
            <Flex direction='row' w='40%' align='center' justify='space-between'>
                <Flex direction='column' align='center' justify='space-evenly' h='100%' w='49%' bgGradient='radial(#454c4c, #2a3030)' borderRadius={25}>
                    <Text color='#f5f5f5'>YouStake</Text>
                    <Link href='https://youstake.com/' w='100%' align='center'>
                        <Button bg='#f5f5f5' w='60%'>Visit</Button>
                    </Link>
                </Flex>
                <Flex direction='column' align='center' justify='space-evenly' h='100%' w='49%' bgGradient='radial(#454c4c, #2a3030)' borderColor='#454c4c' borderRadius={25}>
                    <Text color='#f5f5f5'>Hendon Mob</Text>
                    <Link href='https://www.thehendonmob.com/' w='100%' align='center'>
                        <Button bg='#f5f5f5' w='60%'>Visit</Button>
                    </Link>
                </Flex>
            </Flex>
        </Flex>
    )
}