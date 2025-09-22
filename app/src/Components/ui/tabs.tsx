import * as React from 'react';

export const Tabs: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<div>{children}</div>
);

export const TabsList: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<div style={{ display: 'flex', gap: 8 }}>{children}</div>
);

export const TabsTrigger: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({ children, onClick }) => (
	<button type="button" onClick={onClick} style={{ padding: 8 }}>{children}</button>
);

export const TabsContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<div>{children}</div>
);