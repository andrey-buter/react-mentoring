import { closeModal } from '@/Store/Actions';
import React, { MouseEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import styled from 'styled-components';

const ModalWindowSc = styled.div`
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

const ModalContainerSc = styled.div`
	position: relative;
	padding: 54px 20px 20px;
	background-color: #232323;
`;

const ModalCloseButtonSc = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	font-size: 20px;
	font-weight: bold;
	cursor: pointer;
`;

const ModalTitleSc = styled.h3`
	margin-bottom: 20px;
`;

interface Props {
	children: React.ReactNode,
	title: string,
}

interface State {
	close: () => void;
}

const Modal = (props: Props & State) => {
	const modalRef = React.createRef<HTMLDivElement>();

	const close = (event: MouseEvent) => {
		if (modalRef.current === (event.target as HTMLDivElement)) {
			props.close();
		}
	}

	return <>
		<ModalWindowSc onClick={close} ref={modalRef}>
			<ModalContainerSc>
				<ModalCloseButtonSc onClick={props.close}>✕</ModalCloseButtonSc>
				{props.title ? <ModalTitleSc /> : null}
				{props.children}
			</ModalContainerSc>
		</ModalWindowSc>
	</>;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		close: () => dispatch(closeModal())
	}
}

export default connect(null, mapDispatchToProps)(Modal);
