import axios from 'axios';

const EMPLOYEE_REST_API_URL = 'http://localhost:8080/api/employees';

class EmployeeService {
	getAllEmployees() {
		return axios.get(EMPLOYEE_REST_API_URL);
	}

	createEmployee(employee) {
		return axios.post(EMPLOYEE_REST_API_URL, employee);
	}

	getEmployeeByID(employeeID) {
		return axios.get(EMPLOYEE_REST_API_URL + '/' + employeeID);
	}

	updateEmployee(employee) {
		return axios.put(EMPLOYEE_REST_API_URL, employee);
	}

	deleteEmployeeByID(employeeID) {
		return axios.delete(EMPLOYEE_REST_API_URL + '/' + employeeID);
	}
}

export default new EmployeeService();
