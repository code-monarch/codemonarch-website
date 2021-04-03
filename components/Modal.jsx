import React from 'react';
import Link from "next/link";
import styles from "../styles/Modal.module.css";

const Modal = ({openModal, toggleModal}) => {
    return (
			<>
				<div className={openModal ? styles.modalWrapper : styles.modalClosed}>
					<div className={styles.flex}>
						{/*  Call */}
						<div className={`${styles.phoneNumber} ${styles.buttons}`}>
							<img className={styles.icon} src='/phone.png' alt='call us' />
							<a href='tel:+2349036075477'>Call</a>
						</div>

						<div
							onClick={toggleModal}
							className={`${styles.message} ${styles.buttons}`}>
							<img
								className={styles.icon}
								src='/message.png'
								alt='send us a message'
							/>
							<Link href='/#contact'>
								<a>Send us a message</a>
							</Link>
						</div>
						<div onClick={toggleModal} className={styles.close}>
							&times;
						</div>
					</div>
				</div>
			</>
		);
}

export default Modal
