import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeForm from '../components/EmployeeForm';

function EmployeeRegistration() {
  const navigate = useNavigate();

  return (
    <div>
        <div className='mt-12'>
            <EmployeeForm/>
        </div>
    </div>
  )
}

export default EmployeeRegistration