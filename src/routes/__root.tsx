/// <reference types="vite/client" />
import type { ReactNode } from 'react'
import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
} from '@tanstack/react-router'
import { ErrorComponent } from '../components/ErrorComponent'

import appCss from '../app.css?url'

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: 'utf-8',
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				title: 'TanStack Start Starter',
			},
		],
		links: [
			{ rel: 'stylesheet', href: appCss },
			{ rel: 'icon', href: '/favicon.svg' },
		],
	}),
	component: RootComponent,
	errorComponent: ErrorComponent,
})

function RootComponent() {
	return (
		<RootDocument>
			<Outlet />
		</RootDocument>
	)
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html>
			<head>
				<HeadContent />
			</head>
			<body cz-shortcut-listen="true">
				{children}
				<Scripts />
			</body>
		</html>
	)
}
