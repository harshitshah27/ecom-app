import axios from 'axios';
import {
  GET_ALL_STUDENT,
  GET_ALL_STUDENT_SUCCESS,
  GET_ALL_STUDENT_FAILURE,
  CREATE_STUDENT_SUCCESS,
} from '../types';

const fetchStudent = () => {
  return {
    type: GET_ALL_STUDENT,
  };
};

const fetchStudentSuccess = (students) => {
  return {
    type: GET_ALL_STUDENT_SUCCESS,
    payload: students,
  };
};
