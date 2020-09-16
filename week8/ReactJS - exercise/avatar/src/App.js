import React, { Component } from "react";
import Search from "./Search";
import Avatar from "./Avatar";
import "./App.css";
import axios from "axios";
export default class App extends Component {
  state = {
    avatar: [],
    search: "",
  };
  componentDidMount() {
    this.getAvatarData();
  }
  getAvatarData = async () => {
    const avatar = await axios.get(`https://tinyfac.es/api/users`);
    this.setState({ avatar: this.displayAvatar(avatar.data) });
  };
  displayAvatar = (data) => {
    const mapAvatar = data.map((avatar) => {
      const avatarObj = {
        firstName: avatar.first_name,
        lastName: avatar.last_name,
        imgSrc: avatar.avatars[1].url,
        id: avatar.avatars_origin.id,
      };
      return avatarObj;
    });
    return mapAvatar;
  };
  onChange = (e) => {
    this.setState({ search: e.target.value.toLocaleLowerCase() });
  };
  render() {
    console.log(this.state);
    const avatar = this.state.avatar
      .filter((avatar) => {
        if (
          `${avatar.firstName}${avatar.lastName}`
            .toLocaleLowerCase()
            .includes(this.state.search)
        )
          return true;
        else return false;
      })
      .map((avatar) => {
        return (
          <Avatar
            key={avatar.id}
            firstName={avatar.firstName}
            lastName={avatar.lastName}
            imgSrc={avatar.imgSrc}
          />
        );
      });
    return (
      <div>
        <Search onChange={this.onChange} />
        {avatar}
      </div>
    );
  }
}
