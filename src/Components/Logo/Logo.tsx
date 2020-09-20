import Logo from '@/Assets/images/logo.svg';
import styled from 'styled-components';

// webpack using https://react-svgr.com/docs/webpack/
// svg type see https://github.com/gregberge/svgr/issues/38

// see https://spectrum.chat/styled-components/help/can-i-simply-add-some-style-to-existed-components~ee1bfaee-2b5c-4d62-b8de-7e62874bb289

const LogoSc = styled(Logo)`
width: 110px;
	height: 30px;
	fill: red;
`;

export default LogoSc;
