import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

const BookmarkButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.1));
  z-index: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin: 12px;
  padding: 0;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Bookmark = ({ productId }) => {
  const [isBookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    const bookmarkList = getStoredBookmarkList();
    setBookmarked(bookmarkList.has(productId));
  }, []);

  const getStoredBookmarkList = () => {
    const storedList = localStorage.getItem("bookmarkList");
    return storedList ? new Set(JSON.parse(storedList)) : new Set();
  };

  const updateBookmarkList = (bookmarkList) => {
    localStorage.setItem("bookmarkList", JSON.stringify([...bookmarkList]));
  };

  const handleBookmarkClick = () => {
    const bookmarkList = getStoredBookmarkList();
    const newBookmarkStatus = !isBookmarked;

    if (newBookmarkStatus) {
      bookmarkList.add(productId);
    } else {
      bookmarkList.delete(productId);
    }

    setBookmarked(newBookmarkStatus);
    updateBookmarkList(bookmarkList);
  };

  return (
    <BookmarkButton onClick={handleBookmarkClick}>
      <img
        src={isBookmarked ? "../bookmarkOn.svg" : "../bookmarkOff.svg"}
        alt="Bookmark Icon"
      />
    </BookmarkButton>
  );
};

export default Bookmark;