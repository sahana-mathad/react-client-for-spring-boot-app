import './App.css';
import FooterComponent from './Component/FooterComponent';
import HeaderComponent from './Component/HeaderComponent';
import ListEmployee from './Component/ListEmployee';
import AddEmployeeComponent from './Component/AddEmployeeComponent';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div>
			<Router>
				<HeaderComponent />
				<div className="container">
					<Routes>
						<Route exact path="/" Component={ListEmployee} />
						<Route path="/employees" Component={ListEmployee} />
						<Route path="/add-employee" Component={AddEmployeeComponent} />
						<Route path="/edit-employee/:id" Component={AddEmployeeComponent} />
					</Routes>
				</div>
				<FooterComponent />
			</Router>
		</div>
	);
}

export default App;
