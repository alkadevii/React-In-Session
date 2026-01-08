// Functional component to display a list of users
function UserList() {

  // Array of user names
  const users = ["alka", "anu", "aru"];

  return (
    <div>
      {/* Heading for the list */}
      <h2>Users</h2>

      {/* Unordered list */}
      <ul>
        {/* Using map() to loop through users array */}
        {users.map((user, index) => (
          // Each list item must have a unique key
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

// Exporting the component for use in other files
export default UserList;
