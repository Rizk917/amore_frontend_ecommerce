import React, { useState, useEffect } from "react";
import "./user.css";
import editImage from '../image/edit.png'
import deleteImage from '../image/delete.png'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function UserAdmin() {
  const [userslist,setUserslist]=useState([])
const [searchTerm, setSearchTerm] = useState("");

 useEffect(() => {
  getUserData();
  }, []);
  const [currentUser, setCurrentUser] = useState(null);
  const [showUser, setShowUser] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const handleShowUser = () => {
    setShowUser(!showUser);
  };
  const getUserData =()=>{
    axios
      .get("https://amore-backend.onrender.com/user")
      .then((response) => {
        setUserslist(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const handleDeleteUser = async (id) => {
    const url = `https://amore-backend.onrender.com/user/${id}`;
    try {
      await axios.delete(url);
  getUserData();
  toast.success(' user deleted successfully!', {
    position: toast.POSITION.TOP_RIGHT
});
      // setCategories(categories.filter(category => category._id !== id));
      // console.log("Product deleted successfully!");
    } catch (error) {
      toast.error('Error!', {
        position: toast.POSITION.TOP_RIGHT
    });
      console.log(error);
    }
  };

  return (
    <div className="home">
    <div className="container">
    <ToastContainer/>

    <div className="page_name">
      <h1 className="title_page_dashboard">users</h1>
    </div>
    <div className="table_container">
      <div className="search_table">
        <div className="search">
          <input
            placeholder="Search By User Name"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <table className="table">
          <thead className="head_table">
            <tr className="table_head_tr">
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              {/* <th>Update</th> */}
              <th>Delete</th>
            </tr>
          </thead>

          <tbody className="table_tbody">
            {userslist
              .filter((userlist) => {
                if (!searchTerm) {
                  return userlist;
                } else if (
                  userlist.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return userlist;
                } else {
                  return null;
                }
              })
              .map((userlist, key) => {
                return (
                  <tr className="table_tr" key={key}>
                    <td className="table_td">{userlist.name}</td>
                    <td className="table_td">{userlist.email}</td>
                    <td className="table_td">{userlist.role}</td>
                    <td className="table_td">
                      {/* <button
                        onClick={() => {
                          setShowUpdateForm(!showUpdateForm);
                          setCurrentUser(userlist);
                        }}
                      >
                        <img
                          src={editImage}
                          alt="edit"
                          className="edit"
                        />
                      </button>
                    </td>
                    <td className="table_td"> */}
                      <button
                        onClick={() => handleDeleteUser(userlist._id)}
                      >
                        <img
                          src={
                            deleteImage
                          }
                          alt="delete"
                          className="delete"
                        />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        </div>
      </div>
        </div>
      </div>
  );
}

export default UserAdmin;
