'use client';
import { createContext, useContext, useState } from 'react';

const ViewContext = createContext();

export function ViewProvider({ children }) {
	const [currentView, setCurrentView] = useState('carousel');

	const handleViewChange = (newView) => {
		setCurrentView(newView);
	};

	return <ViewContext.Provider value={{ currentView, handleViewChange }}>{children}</ViewContext.Provider>;
}

export function useView() {
	const context = useContext(ViewContext);
	if (!context) {
		throw new Error('useView must be used within a ViewProvider');
	}
	return context;
}
