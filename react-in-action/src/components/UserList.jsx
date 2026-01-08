function UserList(){
  const users= ["alka","anu","aru"];

  return(
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user,index) =>(
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;