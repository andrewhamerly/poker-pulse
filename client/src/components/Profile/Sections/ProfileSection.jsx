import React from 'react';
import {
    Avatar,
    Button,
    Link,
    Flex,
    Heading,
    Text,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Textarea,
    Tooltip,
    FormControl
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import youstakelogo from '../../../assets/logos/youstakelogo.svg';
import hendonmoblogo from '../../../assets/logos/hendonmoblogo.svg';
// import { UPDATE_USER } from '../../../utils/mutations';

export default function ProfileSection(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    const [value, setValue] = React.useState('');
    const handleChange = (event) => { setValue(event.target.value) }
    // const [updateUser, { error, data }] = useMutation(UPDATE_USER);
    async function saveAndClose() {
        window.alert(value)
        try {
            const { data } = await updateUser({
                variables: { userBio: value },
            });
            onClose()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Flex direction={{ base: 'column', md: 'row', lg: 'row' }} align='center' w='100%' p={5} gap={5} bg='#f5f5f5'>
            <Flex direction='column' w='20%' align='center' justify='center'>
                <Avatar name={props.username} src={props.avatar} size='2xl' />
                <Heading size='2x1'>{props.username}</Heading>
                <Heading size='2x1'>{props.pokerlevel}</Heading>
            </Flex>
            <Flex direction='column' w={{ base: '95%', md: '40%', lg: '40%' }} h={{ base: '40vw', md: '20vw', lg: '15vw' }} bg='#e3e3e3' borderRadius='25'>
                <Text fontSize='lg' align='center' h='85%' justify='center' >{props.userBio}</Text>
                <Tooltip hasArrow label='Edit Bio' bg='#2a3030' color='#f5f5f5'>
                    <Button onClick={onOpen} alignSelf='flex-end' bg='#2a3030' borderRadius='25' color='#f5f5f5' w='10%' h='15%' _hover={{ bg: '#646b6b' }}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </Button>
                </Tooltip>
                <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Update Bio</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <FormControl>
                                <Heading size='sm' pt={2}>Bio</Heading>
                                <Textarea ref={initialRef} size='sm' placeholder='Write your bio here...' value={value} onChange={handleChange} />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button bg='#2a3030' color='#f5f5f5' _hover={{ bg: '#646b6b' }} mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button variant='ghost' _hover={{ bg: '#c4c4c4' }} onClick={saveAndClose}>Update</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Flex>
            <Flex direction='row' w={{ base: '95%', md: '40%', lg: '40%' }} align='center' justify='space-between' gap='3'>
                <Flex direction='column' align='center' justify='center' h={{ base: '40vw', md: '20vw', lg: '15vw' }} w={{ base: '75%', md: '49%', lg: '49%' }} bgGradient='radial(#454c4c, #2a3030)' borderRadius={25} >
                    <Text color='#f5f5f5'>YouStake</Text>
                    <Image src={youstakelogo} alt='you stake logo' w={55} m={3} />
                    <Link href='https://youstake.com/' w='100%' align='center'>
                        <Button bg='#f5f5f5' w='50%' h={{ base: '8vw', md: '4vw', lg: '3vw' }} _hover={{ bg: '#c4c4c4' }}>Visit</Button>
                    </Link>
                </Flex>
                <Flex direction='column' align='center' justify='center' h={{ base: '40vw', md: '20vw', lg: '15vw' }} w={{ base: '75%', md: '49%', lg: '49%' }} bgGradient='radial(#454c4c, #2a3030)' borderColor='#454c4c' borderRadius={25}>
                    <Text color='#f5f5f5'>Hendon Mob</Text>
                    <Image src={hendonmoblogo} alt='hendon mob logo' w={50} m={3} />
                    <Link href='https://www.thehendonmob.com/' w='100%' align='center'>
                        <Button bg='#f5f5f5' w='50%' h={{ base: '8vw', md: '4vw', lg: '3vw' }} _hover={{ bg: '#c4c4c4' }}>Visit</Button>
                    </Link>
                </Flex>
            </Flex>
        </Flex>
    )
}