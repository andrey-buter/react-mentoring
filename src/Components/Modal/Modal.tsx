import { closeModal } from '@/Store/Actions';
import React, { MouseEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ModalCloseButtonSc, ModalContainerSc, ModalTitleSc, ModalWindowSc } from './styled-components';

interface Props {
	children: React.ReactNode,
	title?: string,
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
				{props.title ? <ModalTitleSc>{props.title}</ModalTitleSc> : null}
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

export {
	Modal
}

export default connect(null, mapDispatchToProps)(Modal);
