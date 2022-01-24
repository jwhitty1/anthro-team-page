import { useEffect, useState } from "react";

export default function Home({ posts }) {
  const [postsState, setPostsState] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPostsState(posts);
  }, [posts]);

  let submitForm = async (e) => {
    let res = await fetch("http://localhost:3000/api/test", {
      method: "POST",
      body: JSON.stringify({
        email: "title",
        name: "content"
      })
    });
    res = await res.json();
  };

  return (
    <div className="container">
      <div onClick={submitForm}>TEST</div>
      <div>
        <h1>Users</h1>
        <p>
          <small>(only retrieving 10)</small>
        </p>
        <ul>
          {posts.map((user) => (
            <li>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  let res = await fetch("http://localhost:3000/api/test", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  res = await res.json();

  return {
    props: { posts: res.data }
  };
}
