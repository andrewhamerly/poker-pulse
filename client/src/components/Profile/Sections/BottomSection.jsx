import { Flex, Heading, Link, Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

export default function BottomSection() {
    return (
        <Flex className="bottom-section" p={5} direction={{ base: 'column', md: 'row', lg: 'row' }} gap={5}>
            <Flex direction='column' justify='center' width={{base:'95%', md:'33%', lg:'33%'}} p={5} gap={5}>
                <Heading size='md' align='center'>Find Players</Heading>
                <Flex direction='row' gap={3}>
                    <InputGroup w='60%'>
                        <InputLeftElement pointerEvents='none'>
                            <Search2Icon />
                        </InputLeftElement>
                        <Input placeholder='Search...' size='m' border='1px' px={2} borderRadius={8} />
                    </InputGroup>
                    <Link href='#' w='40%' align='center'>
                        <Button bg='#2a3030' color='#f5f5f5' w='100%' _hover={{bg:'#646b6b'}}>Search</Button>
                    </Link>
                </Flex>
            </Flex>
            <Flex direction='column' width={{base:'95%', md:'33%', lg:'33%'}} p={5} gap={5} borderLeft={{base:'0', md:'2px', lg:'2px'}} borderRight={{base:'0', md:'2px', lg:'2px'}} borderTop={{base:'2px', md:'0', lg:'0'}} borderBottom={{base:'2px', md:'0', lg:'0'}} borderColor='#35654d'>
                <Heading size='md' align='center'>Player Feed</Heading>
                <Link href='#' w='100%' align='center'>
                    <Button bg='#2a3030' color='#f5f5f5' w={{base:'95%', md:'60%', lg:'50%'}} _hover={{bg:'#646b6b'}}>View Feed</Button>
                </Link>
            </Flex>
            <Flex direction='column' width={{base:'95%', md:'33%', lg:'33%'}} p={5} gap={5}>
                <Heading size='md' align='center'>Feature 3</Heading>
                <Link href='#' w='100%' align='center'>
                    <Button bg='#2a3030' color='#f5f5f5' w={{base:'95%', md:'60%', lg:'50%'}} _hover={{bg:'#646b6b'}}>Visit</Button>
                </Link>
            </Flex>
        </Flex>
    );
}