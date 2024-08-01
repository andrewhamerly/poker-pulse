import {
    Avatar,
    Button,
    Link,
    Flex,
    Heading,
    Text,
    Image
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import youstakelogo from '../../../assets/logos/youstakelogo.svg';
import hendonmoblogo from '../../../assets/logos/hendonmoblogo.svg';

export default function ProfileSection(props) {
    return (
        <Flex direction='row' w='100%' p={5} gap={5} bg='#f5f5f5'>
            <Flex direction='column' w='20%' align='center' justify='center'>
                <Avatar name={props.username} src={props.avatar} size='2xl' />
                <Heading size='2x1'>{props.username}</Heading>
                <Heading size='2x1'>{props.pokerlevel}</Heading>
            </Flex>
            <Flex direction='column' w='40%'>
                <Text fontSize='lg' align='center' h='85%' justify='center' >{props.userbio}</Text>
                <Button alignSelf='flex-end' bg='#2a3030' color='#f5f5f5' w='10%' h='15%' _hover={{ bg: '#646b6b' }}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </Button>
            </Flex>
            <Flex direction='row' w='40%' align='center' justify='space-between'>
                <Flex direction='column' align='center' justify='center' h='100%' w='49%' bgGradient='radial(#454c4c, #2a3030)' borderRadius={25}>
                    <Text color='#f5f5f5'>YouStake</Text>
                    <Image src={youstakelogo} alt='you stake logo' w={55} m={3} />
                    <Link href='https://youstake.com/' w='100%' align='center'>
                        <Button bg='#f5f5f5' w='60%' _hover={{ bg: '#c4c4c4' }}>Visit</Button>
                    </Link>
                </Flex>
                <Flex direction='column' align='center' justify='center' h='100%' w='49%' bgGradient='radial(#454c4c, #2a3030)' borderColor='#454c4c' borderRadius={25}>
                    <Text color='#f5f5f5'>Hendon Mob</Text>
                    <Image src={hendonmoblogo} alt='hendon mob logo' w={50} m={3} />
                    <Link href='https://www.thehendonmob.com/' w='100%' align='center'>
                        <Button bg='#f5f5f5' w='60%' _hover={{ bg: '#c4c4c4' }}>Visit</Button>
                    </Link>
                </Flex>
            </Flex>
        </Flex>
    )
}