import LogoSc from '@Components/Logo/Logo';
import React from 'react';
import styled from 'styled-components';

const FooterSc = styled.div`
	background: #555;
	width: 100%;
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Footer = () =>
	<FooterSc>
		<LogoSc />
	</FooterSc>;

export default Footer;
