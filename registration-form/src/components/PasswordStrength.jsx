export default function passwordStrength(password) {
    if(!password){
        return (<></>);
    }
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    if (password.length < 8) {
        return (<div className="passwordStrength-weak">Weak</div>);
    }
    if (hasUpper && hasLower && hasNumber ) {
        return <div className="passwordStrength-strong">Strong</div>;
    }
    return <div className="passwordStrength-medium">Moderate</div>;
}