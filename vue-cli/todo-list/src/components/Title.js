import styled, { keyframes } from "vue-styled-components";

export const Title = styled.h1`
	color: red;

	&:hover {
		color:blue;
	}

	@media screen and (max-width:600px) {
		font-size:10px;
	}
`;

const anim = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(180deg)
	}
`;

export const box = styled.div`
	height: 150px;
	width: 150px;
	background-color:blue;
	animation: ${anim} 2s linear infinite;
`;