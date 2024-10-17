import React, { useState } from 'react';

const AddEmployeeComponent = () => {
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	const [ email, setEmail ] = useState('');

	const setEmployee = (event) => {
		event.preventDefault();

		const employee = { firstName, lastName, email };
		console.log(employee);
	};

	return (
		<div>
			<br />
			<br />
			<div className="container">
				<div className="row">
					<div className="card col-md-6 offset-md-3">
						<h2 className="text-center">Add Employee</h2>
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
								<button className="btn btn-success" onClick={(e) => setEmployee(e)}>
									Submit
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
