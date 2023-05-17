import React from "react";
import ProductList from "../components/ProductList";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import Item from "../components/Item";
import { styled } from "styled-components";
import BookmarkList from "../components/BookmarkList";

const MainPageContainer = styled.div`
  margin: 24px 76px;
`
const ListSection = styled.section`
  display: flex;
  flex-direction: column;
`
const SectionTitle = styled.h2`
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  height: 38px;
  align-items: center;
  display: flex;
  margin-bottom: 12px;
`


const MainPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <MainPageContainer>
      <ListSection>
        <SectionTitle>상품 리스트</SectionTitle>
        <ProductList products={products} />
      </ListSection>
      <ListSection>
        <SectionTitle>북마크 리스트</SectionTitle>
        <BookmarkList />
      </ListSection>

    </MainPageContainer>
  );
};

export default MainPage;