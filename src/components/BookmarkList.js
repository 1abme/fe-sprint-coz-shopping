import React, { useState, useEffect } from "react";
import Item from "./Item";
import { styled } from "styled-components";

const BookmarkListContainer = styled.div`
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



const BookmarkList = () => {
  const [bookmarkList, setBookmarkList] = useState([]);

  useEffect(() => {
    const storedBookmarkList = getStoredBookmarkList();
    setBookmarkList(storedBookmarkList);
  }, []);

  const getStoredBookmarkList = () => {
    const storedList = localStorage.getItem("bookmarkList");
    return storedList ? JSON.parse(storedList) : [];
  };

  return (
    <BookmarkListContainer>
      {bookmarkList
        .filter((product) => product && product.id) 
        .slice(0, 4)
        .map((product) => (
          <Item key={product.id} product={product} />
        ))}
    </BookmarkListContainer>
  );
};

export default BookmarkList;