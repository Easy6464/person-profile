import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: 'Paul Levesque',
      bio: "Paul Levesque, also known as TRIPPLE H is an American business executive, actor, and retired professional wrestler. Regarded as one of the greatest professional wrestlers of all time, he is the current chief content officer and head of creative for WWE.",
      imgSrc: 'https://media.gettyimages.com/id/85820466/photo/wrestlemania-25-inside.jpg?s=1024x1024&w=gi&k=20&c=w8RgJxLgqrO62wMjo3F0v_Nh3Mjkk6s-ZpvhJpecdTs=',
      profession: 'Actor',
    },
    show: false,
    intervalId: null,
    timeSinceMount: 0,
  };

  toggleProfile = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  componentDidMount() {
    this.setState({ intervalId: setInterval(this.updateTimeSinceMount, 1000) });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  updateTimeSinceMount = () => {
    this.setState((prevState) => ({ timeSinceMount: prevState.timeSinceMount + 1 }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeSinceMount } = this.state;

    return (
      <div className="App">
        <h1 className='person'>PERSON PROFILE</h1>
        <button onClick={this.toggleProfile}>{show ? 'Hide Profile' : 'Show Profile'}</button>
        {show && (
          <div className="profile">
            <img style={{width : '35rem'}} src={imgSrc} alt="Profile" />
            <h2 className='name'>{fullName}</h2>
            <p className='bio'>{bio}</p>
            <span>PROFESSION: {profession}</span>
          </div>
        )}
        <p className='tsm'>Time since mount: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;