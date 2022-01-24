import { connectToDatabase } from "../util/mongodb";

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const users = await db.collection("users").find({}).limit(20).toArray();

  let res = await fetch("http://localhost:3000/api/test", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  res = await res.json();
  console.log("test");
  console.log(res);
  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
      res: res.data
    }
  };
}

export default function Posts({ users, res }) {
  console.log("OG CALL");
  console.log(users);
  console.log("API CALL");
  console.log(res);
  return (
    <div>
      <h1>Users</h1>
      <p>
        <small>(only retrieving 10)</small>
      </p>
      <ul>
        {users.map((user) => (
          <li>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
