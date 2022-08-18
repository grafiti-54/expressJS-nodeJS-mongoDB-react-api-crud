import React, { useEffect } from "react";
import InputGroup from "../components/InputGroup";
import RowDetails from "../components/RowDetails";
import axios from "axios";


function Home() {
  // initialiser la liste des utilisateurs
  
  
  //---------------------------------------------------------------
  // const [users, setUsers] = React.useState([]);
  // useEffect( async() =>{
  //     await axios.get('http://localhost:3700/api/users')
  //     .then(res=>{
  //         console.log(res)
  //         setUsers(res.data)
  //     })
  // })
  

//-------------------------------------------------------------------------

  //  const [users, setUsers] = React.useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     await axios.get('http://localhost:3700/api/users')
  //     .then(res=>{
  //       //console.log(res.data)})
  //       setUsers(res.data)})
  //   }
  //   fetchData();
  // }, []); 


//-------------------------------------------------------------------------------------

  const [users, setUsers] = React.useState([]);
  const myFunction = () => {
    axios
      //.get("/api/users/")
      .get("http://localhost:3700/api/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      // .catch((err) => {
      //   console.log(err);
      // });
  };


  //-------------------------------------------------------------------------------------


  useEffect(async () => {
    myFunction();
  }, []);

  return (
    <div className="row p-4">
      <div className="mt-4">
        <h2>Crud Users</h2>
      </div>
      <div className="col-12 col-lg-4">
        <form>
          <InputGroup label="Email" type="text" name="Email" />
          <InputGroup label="Prénom" type="text" name="Lastname" />
          <InputGroup label="Nom" type="text" name="Firstname" />
          <InputGroup label="Age" type="text" name="age" />
          <button className="btn btn-primary" type="submit">
            Add user
          </button>
        </form>
      </div>
      <div className="col-12 col-lg-7">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Prénom</th>
              <th scope="col">Nom</th>
              <th scope="col">Age</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(({Email, Lastname, Firstname, Age, _id}) =>(
                <RowDetails 
                Email={Email} 
                Lastname={Lastname} 
                Firstname={Firstname} 
                Age={Age} 
                Id={_id}   />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
