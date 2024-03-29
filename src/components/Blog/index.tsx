import * as React from 'react';

import {
    Box,
    Heading,
    SimpleGrid,
    Text,
    useColorModeValue as mode,
} from '@chakra-ui/react';

import { BlogCard } from './BlogCard';
import { data } from './_data';

export const Blog = () => {
    return (
        <Box bg={mode('gray.50', 'inherit')} as="section" py="24">
            <Box
                maxW={{ base: 'xl', md: '2xl', lg: '7xl' }}
                mx="auto"
                px={{ base: '6', md: '8' }}
            >
                <Box textAlign="center" maxW="md" mx="auto">
                    <Heading
                        size="2xl"
                        fontWeight="extrabold"
                        letterSpacing="tight"
                    >
                        From the blog
                    </Heading>
                    <Text
                        mt="4"
                        fontSize="lg"
                        color={mode('gray.600', 'gray.400')}
                    >
                        Explore our blog for the latest news, articles, and
                        insights on industry trends, best practices, and more.
                    </Text>
                </Box>
                <SimpleGrid mt="14" columns={{ base: 1, lg: 3 }} spacing="14">
                    {data.map((item, index) => (
                        <BlogCard key={index} data={item} />
                    ))}
                </SimpleGrid>
            </Box>
        </Box>
    );
};
