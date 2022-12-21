import React from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

export default function SearchButton() {
  const navigate = useNavigate();
  const handleSearching = () => {
    navigate('/search');
  }
	return (
		<>
      <StyledButton onClick={handleSearching}>
				검색하기
      </StyledButton>
		</>
	);
}

const StyledButton = styled.button`
	display: inline-block;
	width: 181px;
	height: 44px;
	background-color: #5C6145;
	color: #FFFFFF;
  font-size: 14px;
  font-weight: 100;
`