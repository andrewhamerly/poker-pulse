import { Flex, Heading, Link, Button, extendTheme } from '@chakra-ui/react';
import './bottom-section.css'

export default function BottomSection() {
    return (
        <Flex className="bottom-section" p={5}>
            <Flex direction='column' width='33.33%' p={5} gap={5}>
                <Heading size='md' align='center'>Find Other Players</Heading>
                <Link href='#' w='100%' align='center'>
                    <Button bg='#2a3030' color='#f5f5f5' w='50%' className='bottom-buttons'>Find Other Players</Button>
                </Link>
            </Flex>
            <Flex direction='column' width='33.33%' p={5} gap={5}>
                <Heading size='md' align='center'>Feature 2</Heading>
                <Link href='#' w='100%' align='center'>
                    <Button bg='#2a3030' color='#f5f5f5' w='50%' className='bottom-buttons'>Visit</Button>
                </Link>
            </Flex>
            <Flex direction='column' width='33.33%' p={5} gap={5}>
                <Heading size='md' align='center'>Feature 3</Heading>
                <Link href='#' w='100%' align='center'>
                    <Button bg='#2a3030' color='#f5f5f5' w='50%' className='bottom-buttons'>Visit</Button>
                </Link>
            </Flex>
        </Flex>
    );
}