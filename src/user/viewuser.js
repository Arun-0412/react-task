import store , { add_user, } from "./store";

function viewuser () {
    const res = store.getState();
    return (
        <div style={{padding:"20px"}}>
        <h1>User Details</h1>
        <p>First Name - {res.firstname}</p>
        <p>Last Name - {res.lastname}</p>
        <p>Email - {res.email}</p>
        <p>Date of Birth - {res.dateofbirth}</p>
        <p>Phone Number - {res.phone}</p>
        <p>Profile Photo - {res.image}</p>
          
        </div>
    )
}
export default viewuser;