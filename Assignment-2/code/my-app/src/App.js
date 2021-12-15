import './App.css';

function App(props) {
  
  const {employee}=props;
  console.log(props)
  
    
return(
  <div className="App">
    <br/>
    <img className ="logo1" alt="face" src={employee.profileImg}/>
    <h1 className= "empname">{employee.name}</h1>
    <p className="common1">Location</p>
    <p className="common2">{employee.location}</p>
    <p className="common1">Blood Group</p>
    <p className="common2">{employee.bloodGroup}</p>
    <p className="common1">Age</p>
    <p className="common2">{employee.age}</p>
  </div>
)
}



export default App;
