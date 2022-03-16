import style from './App.module.css';

function App() {
	const tasks = [
		{ id: 1, title: 'Membuat Komponen', complete: true },
		{ id: 2, title: 'Membuat State', complete: true },
		{ id: 3, title: 'Membuat Lifecycle', complete: false },
		{ id: 4, title: 'Membuat Props', complete: false },
		{ id: 5, title: 'Membuat Props dan State', complete: true },
		{ id: 6, title: 'Membuat Komponen dengan Class', complete: false },
		{ id: 7, title: 'Membuat Komponen dengan Function', complete: true },
	];

	return (
		<div>
			<div className={style.appNav}>To Do App</div>
			<ul>
				{tasks.map((task) => (
					<li key={task.id} className={`${style.list} ${task.complete && style.true}`}>
						{task.title}
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
