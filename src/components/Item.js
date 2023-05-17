import React from "react";
import { styled } from "styled-components";
import Bookmark from "./Bookmark";

const ProductContainer = styled.div`
  width: 264px;
  height: 264px;
  display: flex;
  flex-direction: column;
`
const ProductImg = styled.img`
  width: 264px;
  height: 210px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`
const ProductTextRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .title {
    font-weight: 800;
    font-size: 16px;
  }

  .discount {
    color: #452CDD;
  }
`
const ProductInfo = styled.span`
  display: flex;
  align-items: center;
  height: 24px;
`



const Item = ({ product }) => {
  switch (product.type) {
    case "Product":
      return (
        <ProductContainer>
          <ProductImg src={product.image_url} alt={product.title} />
          <Bookmark />
          <ProductTextRow>
            <ProductInfo className="title">{product.title}</ProductInfo>
            <ProductInfo className="title discount">{product.discountPercentage}%</ProductInfo>
          </ProductTextRow>
          <ProductTextRow>
            <ProductInfo />
            <ProductInfo>{product.price}원</ProductInfo>
          </ProductTextRow>
        </ProductContainer>
      )
    case "Category":
      return (
        <ProductContainer>
          <ProductImg src={product.image_url} alt={product.title} />
          <Bookmark />
          <ProductTextRow>
            <ProductInfo className="title">#{product.title}</ProductInfo>
          </ProductTextRow>
        </ProductContainer>
      )
    case "Exhibition":
      return (
        <ProductContainer>
          <ProductImg src={product.image_url} alt={product.title} />
          <Bookmark />
          <ProductTextRow>
            <ProductInfo className="title">{product.title}</ProductInfo>
          </ProductTextRow>
          <ProductTextRow>
            <ProductInfo>{product.sub_title}</ProductInfo>
          </ProductTextRow>
        </ProductContainer>
      )
    case "Brand":
      return (
        <ProductContainer>
          <ProductImg src={product.brand_image_url} alt={product.titlebrand_name} />
          <Bookmark />
          <ProductTextRow>
            <ProductInfo className="title">{product.brand_name}</ProductInfo>
            <ProductInfo className="title">관심고객수</ProductInfo>
          </ProductTextRow>
          <ProductTextRow>
            <ProductInfo />
            <ProductInfo>{product.follower}</ProductInfo>
          </ProductTextRow>
        </ProductContainer>
      )
  }
};

export default Item;