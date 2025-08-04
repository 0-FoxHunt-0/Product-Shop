import React, { useEffect } from "react";
import { Container, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import { useProductStore } from "../store/product";
import { Link } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";

export const HomePage = () => {
  const { fetchProducts } = useProductStore();
  const products = useProductStore((state) => state.products);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
          textAlign={"center"}
        >
          Current Products 🚀
        </Text>

        {products.length === 0 && (
          <Text
            fontSize="xl"
            textAlign="center"
            fontWeight="bold"
            color="gray.500"
          >
            No products found{" "}
            <span role="img" aria-label="sad">
              😢
            </span>{" "}
            <Link to="/create">
              <Text
                color="blue.500"
                _hover={{ textDecoration: "underline" }}
                as="span"
              >
                Create a product
              </Text>
            </Link>
          </Text>
        )}

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w={"full"}>
          {products.map((product) => (
            <ProductCard key={product.id || product._id} product={product} />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};
