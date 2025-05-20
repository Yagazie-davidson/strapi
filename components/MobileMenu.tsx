import React from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Menu } from "lucide-react";

const MobileMenu = () => {
	return (
		<div>
			<Dialog>
				<DialogTrigger>
					<div className="bg-white shadow-md p-2 rounded-sm">
						<Menu color={"#000"} strokeWidth={2} size={24} />
					</div>
				</DialogTrigger>
				<DialogContent className="absolute top-10 right-0 mt-12 mr-2">
					<DialogHeader>
						<DialogTitle>Are you absolutely sure?</DialogTitle>
						<DialogDescription>
							This action cannot be undone. This will permanently delete your
							account and remove your data from our servers.
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default MobileMenu;
