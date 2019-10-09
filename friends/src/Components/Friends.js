import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Friends extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get('/friends')
      .then(res =>  {
        this.setState({
          friends: res.data 
        })
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="secretpage">
        <h1>The Secret List</h1>
        <h3>Hurray! You can now see the secret friends.</h3>

        <br />
        <hr />
        <div>
          <h1>List of Friends</h1>
          {this.state.friends.map(x => {
            return (
              <div id={x.id} className="friend">
                <h1>{x.name}</h1>
                <h2>{x.age}</h2>
                <p>{x.email}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Friends;
