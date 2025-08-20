import { useActionState, useEffect, useState } from "react";
import passwordStrength from './PasswordStrength'

import '../App.css';

function submitForm(prevState, formData) {
    const name = formData.get("name");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    let errors = {};
    if (!name)
        errors.name = "Name is required";
    if (!password)
        errors.password = "Password is required"
    else if (password.length < 8) {
        errors.password = "Password should have atleast 8 characters"
    }
    else {
        if (password !== confirmPassword) {
            errors.confirmPassword = "Password is not matching"
        }
    }
    if (Object.keys(errors).length > 0) {
        return { success: false, errors };
    }
    return { success: true, errors: {} };
}
export default function FormRegistration() {
    function setFunction(event, setValue) {
        setValue(event.target.value);
    }
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [state, formAction, isPending] = useActionState(submitForm, { success: false, errors: {} })
    useEffect(()=>{
        if(state.success)
        {
            setName("");
            setPassword("");
            setConfirmPassword("");
        }
    },[state.success]);
    return (
        <>
            {
                state.success ?
                    (
                        <h1 className="submited">
                            Form is submited
                        </h1>
                    )
                    :
                    (
                        <>
                            <h2>FORM REGISTRATION</h2>
                            <form action={formAction }>
                                <div>
                                    <label htmlFor="name">Name </label>
                                <input type="text"
                                    name="name"
                                    value={name}
                                    placeholder="Enter Your Name"
                                    onChange={(e) => { setFunction(e, setName) }}
                                ></input> <br />
                                {state.errors.name && (
                                    <div className="error-message">{state.errors.name}</div>)}

                                </div>
                                <div>
                                    <label htmlFor="name">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    placeholder="Enter Your Password"
                                    onChange={(e) => { setFunction(e, setPassword) }}
                                ></input><br />
                                <div>{passwordStrength(password)}</div>
                                {state.errors.password && (
                                    <div className="error-message">{state.errors.password}</div>)}
                                </div>
                                <div>
                                    <label htmlFor="name">Confirm Password</label>
                                <input type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setFunction(e, setConfirmPassword)}
                                ></input><br />
                                {state.errors.confirmPassword && (
                                    <div className="error-message">{state.errors.confirmPassword}</div>)}
                                </div>
                                <button type="submit" disabled={isPending}>
                                    {isPending ? "Submitting..." : "Submit"}
                                </button>
                                <div>{state.success}</div>
                            </form>
                        </>
                    )
            }
        </>);
}