import React from "react";
import { useSelector, useDispatch} from 'react-redux'
import UserSignUpForm from "./UserSignUpForm";
import UserLogInForm from "./UserLogInForm";


import styles from '../../styles/User.module.css'
import { toggleForm, toggleFormType } from "../../features/user/userSlice";


const UserForm = () => {
    const dispatch = useDispatch();
    const { showForm, formType } = useSelector(({ user }) => user);
  
    const closeForm = () => dispatch(toggleForm(false));
    const toggleCurrentFormType = (type) => dispatch(toggleFormType(type));
  
    return showForm ? (
      <>
        <div className={styles.overlay} onClick={closeForm} />
        {formType === "signup" ? (
          <UserSignUpForm
            toggleCurrentFormType={toggleCurrentFormType}
            closeForm={closeForm}
          />
        ) : (
          <UserLogInForm
            toggleCurrentFormType={toggleCurrentFormType}
            closeForm={closeForm}
          />
        )}
      </>
    ) : (
      <></>
    );
  };

export default UserForm;