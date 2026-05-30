import { Link } from '@tanstack/react-router'

export function ErrorComponent({ error }: { error: Error }) {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-4">
			<h1 className="text-6xl font-bold text-red-400">Ошибка</h1>
			<p className="text-lg text-gray-500">Что-то пошло не так</p>
			{error?.message && (
				<pre className="max-w-xl rounded-lg bg-gray-100 p-4 text-sm text-gray-700">
					{error.message}
				</pre>
			)}
			<Link
				to="/"
				className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors"
			>
				На главную
			</Link>
		</div>
	)
}
