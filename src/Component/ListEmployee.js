import { Link } from '@mui/material';
import React, { useEffect, useState } from 'react';
import EmployeeService from '../Services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployee = () => {
	const navigate = useNavigate();

	const [ employees, setEmployees ] = useState([]);

	useEffect(() => {
		getEmployees();
	}, []);

	const getEmployees = () => {
		EmployeeService.getAllEmployees()
			.then((res) => {
				setEmployees(res.data);
				console.log(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const deleteEmployee = (employeeId) => {
		console.log(employeeId);
		EmployeeService.deleteEmployeeByID(employeeId)
			.then((res) => {
				console.log('Employee Deleted', res);
				getEmployees();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="container">
			<h2 className="text-center">List Employees</h2>
			<a href="/add-employee" className="btn btn-secondary mb-2">
				Add Employee
			</a>
			<table className="table table-bordered table-striped">
				<th>Employee ID</th>
				<th>Employee FirstName</th>
				<th>Employee LastName</th>
				<th>Employee Email</th>
				<th>Actions</th>
				<tbody>
					{employees.map((employee) => (
						<tr key={employee.id}>
							<td>{employee.id}</td>
							<td>{employee.firstName}</td>
							<td>{employee.lastName}</td>
							<td>{employee.email}</td>
							<td>
								<button
									className="btn btn-secondary"
									onClick={(e) => {
										e.preventDefault();
										navigate(`/edit-employee/${employee.id}`);
									}}
								>
									Update
								</button>

								<button
									className="btn btn-danger m-2"
									onClick={(e) => {
										deleteEmployee(employee.id);
									}}
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ListEmployee;
