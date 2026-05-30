import { Link } from '@tanstack/react-router'

export function NotFound() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-4">
			<h1 className="text-6xl font-bold text-gray-300">404</h1>
			<p className="text-lg text-gray-500">Страница не найдена</p>
			<Link
				to="/"
				className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors"
			>
				На главную
			</Link>
		</div>
	)
}
