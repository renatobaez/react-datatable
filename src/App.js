import './App.css';
import 'styled-components'
import React, {useState, useEffect} from 'react';
import DataTable, {createTheme} from 'react-data-table-component';

const App = () => {
  //1 - Configurar los hooks
  const [users, setUsers] = useState([])

  //2 - Función para mostrar los datos con fetch
  const URL = 'https://gorest.co.in/public/v2/users'
  const showData = async () =>{
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data);
    setUsers(data)
  }
  useEffect( ()=>{
    showData()
  },[])
  const columns = [
    {
      name: 'ID',
      selector: row => row.id
    },
    {
      name: 'NAME',
      selector: row => row.name
    },
    {
      name: 'EMAIL',
      selector: row => row.email
    }
  ]

  return (
    <div className="App">
      <h1>React DataTable</h1>
      <DataTable
        columns={columns}
        data={users}
        pagination
       // theme='custom'
      />
    </div>
  );
}

export default App;
