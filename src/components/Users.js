import React, { useEffect } from "react";
import { userList } from "../services/actions/userAction";
import { connect } from "react-redux";

const Users = ({ userList, loading, users, errors }) => {
  useEffect(() => {
    userList();
  }, []);

  return (
  <div>
     { loading ? <h3>Loading...</h3> : errors ? <h3>{errors}</h3> : <div>
          {
              users.map((user) =>{
                  return (
                    <div>
                      <h4>Title: {user.title}</h4>
                      <p>Description:{user.body}</p>
                    </div>
                  );
              })
          }
      </div>}
      </div>
  );
};

const mapStateToProp = (state) => ({
  loading: state.userReducer.loading,
  users: state.userReducer.users,
  errors: state.userReducer.errors,
});

export default connect(mapStateToProp, { userList })(Users);
