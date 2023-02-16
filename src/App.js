import "./App.css";
import Create from "./components/create/Create";
import Read from "./components/read/Read.jsx";

function App() {
	return (
		<div className="main">
			<div>
				<h1>React CRUD operations</h1>
			</div>
			<div>
				<Create />
			</div>

			<div>
				<Read />
			</div>
		</div>
	);
}

export default App;
