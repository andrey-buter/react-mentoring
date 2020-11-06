import styled from 'styled-components';

export const ModalWindowSc = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.7);
	z-index: 10;
`;

export const ModalContainerSc = styled.div`
	position: relative;
	padding: 54px 20px 20px;
	background-color: #232323;
`;

export const ModalCloseButtonSc = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	font-size: 20px;
	font-weight: bold;
	cursor: pointer;
`;

export const ModalTitleSc = styled.h3`
	margin-bottom: 20px;
`;
