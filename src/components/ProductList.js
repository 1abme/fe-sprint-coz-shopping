import React from "react";
import { useSelector} from "react-redux";
import Item from "./Item";
import { styled } from "styled-components";

const ProductListContainer = styled.div`
  display: flex;
  width: 70rem;
  max-width: 1128px;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 48rem) {
    flex-direction: column;
    gap: 1rem;
  }
`

const ProductList = () => {

  const products = useSelector((state) => state.product.products);

  return (
    <ProductListContainer>
      {products.slice(0, 4).map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;