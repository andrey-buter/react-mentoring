import React from 'react';

import bgImage from '@/Assets/images/header-background.jpg';
import AddMovieButton from '@Components/AddMovieButton/AddMovieButton';
import AddWordButton from '@Components/AddWordButton/AddWordButton';
import LogoSc from '@Components/Logo/Logo';
import SearchBox from '@Components/SearchBox/SearchBox';
import WrapperSc from '@StyledComponents/Wrapper/Wrapper';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderSc = styled.div`
	background-image: url(${(props: {image: string}) => props.image});
	position: relative;
`;

const HeaderShadowSc = styled.div`
	background-image: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%);
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`;

const LogoSc2 = styled.div`
	position: absolute;
	left: 0;
	top: 20px;
`;

const HeaderWrapperSc = styled(WrapperSc)`
	display: flex;
	height: 70px;
	align-items: center;
	justify-content: center;
`;

const Header = () => {
	return <>
		<HeaderSc image={bgImage}>
			<HeaderShadowSc></HeaderShadowSc>
			<HeaderWrapperSc>
				<LogoSc2>
					<Link to='/'>
						<LogoSc />
					</Link>
				</LogoSc2>
				<AddWordButton />
				<AddMovieButton />
				<SearchBox />
			</HeaderWrapperSc>
		</HeaderSc>
	</>
}

export default Header;
