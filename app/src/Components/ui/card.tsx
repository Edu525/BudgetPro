import * as React from 'react';

export const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<div style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16 }}>{children}</div>
);

export const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<div>{children}</div>
);

export const CardHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<div style={{ fontWeight: 'bold', marginBottom: 8 }}>{children}</div>
);

export const CardTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<h3 style={{ margin: 0 }}>{children}</h3>
);