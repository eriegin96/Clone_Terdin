import React, { useState } from 'react';
import DeleteModal from './DeleteModal';

export default function DeleteAccount() {
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);

	return (
		<>
			<div className="mt-5">
				<div className="bg-white border-t border-b border-solid border-divider-primary">
					<div
						className="flex items-center justify-center min-h-50 cursor-pointer"
						onClick={() => setDeleteModalOpen(true)}
					>
						Delete Account
					</div>
				</div>
			</div>
			<DeleteModal open={deleteModalOpen} setOpen={setDeleteModalOpen} />
		</>
	);
}
