import React, { useState } from 'react';
import LogoutModal from './LogoutModal';

export default function Logout() {
	const [logoutModalOpen, setLogoutModalOpen] = useState(false);

	return (
		<>
			<div className="mt-5">
				<div className="bg-white border-t border-b border-solid border-divider-primary">
					<div className="flex items-center justify-center min-h-50 cursor-pointer" onClick={() => setLogoutModalOpen(true)}>Logout</div>
				</div>
			</div>
			<LogoutModal open={logoutModalOpen} setOpen={setLogoutModalOpen} />
		</>
	);
}
