import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmpployeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmpployeeFormReducer
})