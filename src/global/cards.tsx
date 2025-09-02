import type * as React from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import {  Box, IconButton } from "@mui/material";

export interface CardProps {
	count: number;
	header: string;
	subheading?: string;
	icon?: React.JSX.Element;
}

export function ClientCards({ count, header,subheading,icon }: CardProps): React.JSX.Element {
	return (
		<Card>
			<Stack spacing={1} sx={{ p: 2,justifyContent:'space-between' }} direction="row" >
				<Stack direction="column" spacing={2} sx={{  }}>
					<Typography color="text.secondary" variant="body2" align="left">
						{header}
					</Typography>
					{/* <Avatar sx={{ bgcolor: "transparent" }}>
						<Box
							sx={{
								animation: "pulse ease 750ms infinite",
								borderRadius: "50%",
								p: "4px",
								"@keyframes pulse": {
									"0%": { boxShadow: "none" },
									"100%": { boxShadow: "0px 0px 0px 6px rgba(240, 68, 56, 0.1)" },
								},
							}}
						>
							<Box
								sx={{ bgcolor: "var(--mui-palette-error-main)", borderRadius: "50%", height: "18px", width: "18px" }}
							/>
						</Box>
					</Avatar> */}
					<Typography variant="h5" align="left" sx={{ fontWeight: 600}}>{count}</Typography>
					{subheading && (
						<SubheadingWithIcon subheading={subheading}/>
					)}
				</Stack>
				{icon && (<Typography variant="h5" align="right">
					<IconButton>{icon}</IconButton>
				</Typography>)}
			</Stack>
		</Card>
	);
}
interface SubheadingProps {
	subheading?: string;
}

const SubheadingWithIcon = ({ subheading }: SubheadingProps) => {
	if (!subheading) return null;

	// Regex to check for +number or -number
	const match = subheading.match(/([+-]\d+)/);

	let IconComponent = null;
	if (match) {
		IconComponent = match[1].startsWith('+') ? TrendingUpIcon : TrendingDownIcon;
	}

	return (
		<Typography color="text.secondary" variant="body2" component="div">
			<Box display="flex" alignItems="center" gap={0.5}>
				{IconComponent && <IconComponent fontSize="small" />}
				<span>{subheading}</span>
			</Box>
		</Typography>
	);
};

export default SubheadingWithIcon;
