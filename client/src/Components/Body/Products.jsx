import { Box, Center, Heading, Image, SimpleGrid, VStack } from '@chakra-ui/react'
import React from 'react'

const data = [
    {
        id: 1,
        name: "Shaft Support",
        image: "https://www.china-me.com/_nuxt/img/shaft_support.c8ef713.png",
        description: "Cost-effective, more than 6000 specifications and models"
    },
    {
        id: 2,
        name: "Shaft Support",
        image: "https://www.china-me.com/_nuxt/img/shaft_support.c8ef713.png",
        description: "Cost-effective, more than 6000 specifications and models"
    },
    {
        id: 3,
        name: "Shaft Support",
        image: "https://www.china-me.com/_nuxt/img/shaft_support.c8ef713.png",
        description: "Cost-effective, more than 6000 specifications and models"
    },
    {
        id: 4,
        name: "Shaft Support",
        image: "https://www.china-me.com/_nuxt/img/shaft_support.c8ef713.png",
        description: "Cost-effective, more than 6000 specifications and models"
    },
    {
        id: 5,
        name: "Shaft Support",
        image: "https://www.china-me.com/_nuxt/img/shaft_support.c8ef713.png",
        description: "Cost-effective, more than 6000 specifications and models"
    },
    {
        id: 6,
        name: "Shaft Support",
        image: "https://www.china-me.com/_nuxt/img/shaft_support.c8ef713.png",
        description: "Cost-effective, more than 6000 specifications and models"
    },
    {
        id: 7,
        name: "Shaft Support",
        image: "https://www.china-me.com/_nuxt/img/shaft_support.c8ef713.png",
        description: "Cost-effective, more than 6000 specifications and models"
    },
    {
        id: 8,
        name: "Shaft Support",
        image: "https://www.china-me.com/_nuxt/img/shaft_support.c8ef713.png",
        description: "Cost-effective, more than 6000 specifications and models"
    },
    {
        id: 9,
        name: "Shaft Support",
        image: "https://www.china-me.com/_nuxt/img/shaft_support.c8ef713.png",
        description: "Cost-effective, more than 6000 specifications and models"
    },
    {
        id: 10,
        name: "Shaft Support",
        image: "https://www.china-me.com/_nuxt/img/shaft_support.c8ef713.png",
        description: "Cost-effective, more than 6000 specifications and models"
    }
]


function Products() {
  return (
    <Box p={5} bg="whitesmoke">
    <Center>
        <Heading>RECOMMENDED PRODUCTS</Heading></Center>
    <SimpleGrid columns={5} w="80%" margin={'auto'}>
     {
        data && data.map((product) => (
            <VStack key={product.id} textAlign={'center'}>
                <Box><Image src={product.image} h="300px" w="400px" margin={'auto'}/></Box>
                <Box fontWeight="bold">{product.name}</Box>
                <Box>{product.description}</Box>
            </VStack>
        ))
     }   
    </SimpleGrid>
    </Box>
  )
}

export default Products