import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../Services/EmployeeService';

const AddEmployeeComponent = () => {
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	const [ email, setEmail ] = useState('');
	const navigate = useNavigate();
	const { id } = useParams();

	const saveOrUpdateEmployee = (event) => {
		event.preventDefault();

		const employee = { firstName, lastName, email };
		if (id) {
			employee.id = id;
			console.log('In if statement', employee);
			EmployeeService.updateEmployee(employee)
				.then((res) => {
					console.log('updating the data:', res.data);
					navigate('/employees');
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
			EmployeeService.createEmployee(employee)
				.then((res) => {
					console.log(res.data);

					navigate('/employees');
				})
				.catch((error) => {
					console.log(error);
				});
			console.log(employee);
		}
	};

	useEffect(() => {
		EmployeeService.getEmployeeByID(id)
			.then((res) => {
				setFirstName(res.data.firstName);
				setLastName(res.data.lastName);
				setEmail(res.data.email);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const title = () => {
		if (id) {
			return <h2 className="text-center">Update Employee</h2>;
		} else {
			return <h2 className="text-center">Add Employee</h2>;
		}
	};

	return (
		<div>
			<br />
			<br />
			<div className="container">
				<div className="row">
					<div className="card col-md-6 offset-md-3">
						{title()}
						<div className="card-body">
							<form>
								<div className="form-group mb-2">
									<label className="form-label">First Name</label>
									<input
										type="text"
										placeholder="Enter the first name"
										name="firstName"
										className="form-control"
										value={firstName}
										onChange={(e) => setFirstName(e.target.value)}
									/>
									<label className="form-label">Last Name</label>
									<input
										type="text"
										placeholder="Enter the last name"
										name="lastName"
										className="form-control"
										value={lastName}
										onChange={(e) => setLastName(e.target.value)}
									/>
									<label className="form-label">Email</label>
									<input
										type="text"
										placeholder="Enter the email"
										name="email"
										className="form-control"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>
								<button className="btn btn-success" onClick={(e) => saveOrUpdateEmployee(e)}>
									Submit
								</button>
								<button
									className="btn btn-danger m-2"
									onClick={(e) => {
										e.preventDefault();
										navigate('/employees');
									}}
								>
									Cancel
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddEmployeeComponent;
