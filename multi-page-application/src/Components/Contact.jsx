import { useEffect, useState } from "react";
export default function Contact() {
    const [state, setState] = useState({ name: "", email: "", success: false });
    function handleChange(e) {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    /* in routes, when we change , the child elements get mounted.
    useEffect(()=>{
        setState({...state,success:false});
    },[]);*/
    function handleSubmit(e) {
        e.preventDefault();
        setState({ name: "", email: "", success: true });
        setTimeout(()=>setState({ name: "", email: "", success: false }),3000);
    }
    return (<>
        <div className="component">
            <h2>Contact </h2>
            {!state.success ?
                (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" >Enter Your Name</label>
                        <input type="text" value={state.name}
                            name="name"
                            placeholder="vinay" required
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="mail" >Enter Your Email</label>
                        <input type="email" value={state.email}
                            name="email"
                            placeholder="vinay@gmail.com" required
                            onChange={handleChange}
                        ></input>
                    </div>
                    <button type="submit">SUBMIT</button>
                </form>) :
                (<div>FORM IS SUBMITTED</div>)
            }
        </div>
    </>
    );
}