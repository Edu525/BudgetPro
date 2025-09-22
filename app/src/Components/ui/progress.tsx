import * as React from 'react';

export interface ProgressProps {
	value: number;
	max?: number;
}

export const Progress: React.FC<ProgressProps> = ({ value, max = 100 }) => (
	<progress value={value} max={max} style={{ width: '100%' }} />
);