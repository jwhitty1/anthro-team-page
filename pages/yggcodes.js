import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import Nav from "../components/Layout/Nav";
import moment from "moment";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const element = (
  <FontAwesomeIcon icon={faTrashAlt} style={{ fontSize: "24px" }} />
);

let date = moment(Date.now()).format("LLLL");

export default function AddPost() {
  const [code, setCode] = useState("");
  const [content, setContentFromDb] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const { account } = useWeb3React();

  const handlePost = async (e) => {
    e.preventDefault();

    console.log("OMG handling your post!");
    // reset error and message
    setError("");
    setMessage("");

    // fields check
    if (!code) return setError("All fields are required");

    // post structure
    let codeData = {
      code,
      redeemed: false,
      redeemedBy: account,
      redeemedAt: date,
      createdAt: date
    };

    // save the post
    let response = await fetch("/api/yggcodes", {
      method: "POST",
      body: JSON.stringify(codeData)
    });

    // get the data
    let data = await response.json();

    if (data.success) {
      // reset the fields
      setCode("");
      // set the message
      getPosts();
      return setMessage(data.message);
    } else {
      // set the error
      return setError(data.message);
    }
  };

  const getPosts = async () => {
    console.log("Getting your data!");

    // reset error and message
    setError("");
    setMessage("");

    // get the posts
    let response = await fetch("/api/yggcodes", {
      method: "GET"
    });
    // get the data
    let data = await response.json();

    if (data.success) {
      // reset the fields and log the data
      console.log(data.message);
      setContentFromDb(data.message);
    } else {
      // set the error
      return setError(data.message);
    }
  };

  const deletePost = async (id) => {
    // e.preventDefault();
    console.log("Fuckin' up ur data!", id);

    // reset error and message
    setError("");
    setMessage("");

    // delete the post
    let response = await fetch("/api/yggcodes", {
      method: "DELETE",
      body: id
    });

    // get the data
    let data = await response.json();

    if (data.success) {
      // reset the fields and log the data
      console.log("DELETE MSG", data.message);
      getPosts();
    } else {
      // set the error
      return setError(data.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="w-full">
      <Nav />
      <div className="flex justify-center  mx-auto text-center">
        <form onSubmit={handlePost}>
          <div className="text-center border px-5 py-2 bg-th-accent-light rounded-lg m-5">
            {error ? (
              <div>
                <h3>{error}</h3>
              </div>
            ) : null}
            {message ? (
              <div className=" px-1 py-0.5 border rounded-lg">
                <h3>{message}</h3>
              </div>
            ) : null}
            <div className="mb-2">Enter Code (Manual)</div>
            <input
              type="text"
              name="code"
              onChange={(e) => setCode(e.target.value)}
              value={code}
              placeholder="Code"
            />

            <div className="">
              <button
                type="submit"
                className="px-3 py-1 border rounded mt-2 hover:bg-th-background"
              >
                Add Code
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* 
      <div className="w-full  flex mx-auto justify-center text-center">
        <div className="text-center border px-5 py-2 bg-th-accent-light rounded-lg m-5">
          Upload Code Array (Auto)
          <div className="">
            <button className="px-3 py-1 border rounded mt-2 hover:bg-th-background">
              Upload Codes
            </button>
          </div>
        </div>
      </div> */}

      <div className="w-full  flex mx-auto justify-center text-center">
        <div className="text-center border px-5 py-2 bg-th-accent-light rounded-lg m-5">
          Fetch Codes from DB
          <div className="">
            <button
              onClick={getPosts}
              className="px-3 py-1 border rounded mt-2 hover:bg-th-background"
            >
              Fetch!
            </button>
          </div>
        </div>
      </div>

      {/* // DIVIDER BETWEEN COMPONENTS // */}
      <div className="w-full flex flex-row flex-1 mx-auto justify-center text-center">
        <div className="text-center border px-5 py-2 bg-th-accent-light rounded-lg m-5">
          Codes in Database
          <div className="w-full">
            {content
              ? content.map((ele, i) => {
                  return (
                    <div
                      key={i}
                      className="flex flex-row justify-evenly items-center"
                    >
                      <div className="w-full text-left m-4 p-4">
                        <p>Code: {ele.code}</p>
                        <p>Id: {ele._id}</p>
                        <p>
                          Redeemed: {ele.redeemed === false ? "false" : "true"}
                        </p>
                        <p>Redeemed By: {ele.redeemedBy}</p>
                        <p>Redeemed At: {ele.redeemedAt}</p>
                        <p>Created At: {ele.createdAt}</p>
                        <br />
                        <hr className="w-1/2" />
                      </div>
                      <div>
                        <button onClick={() => deletePost(ele._id)}>
                          {element}
                        </button>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
      {/* // DIVIDER BETWEEN COMPONENTS // */}
    </div>
  );
}
