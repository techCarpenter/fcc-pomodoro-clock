import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let runEnum = {
  running: 0,
  stopped: 1
};
let timerEnum = {
  session: 0,
  break: 1
};
let DefaultState = {
  runState: runEnum.stopped,
  timerType: timerEnum.session,
  interval: null,
  breakMinutes: 5,
  breakSeconds: 0,
  sessionMinutes: 25,
  sessionSeconds: 0,
  timerMinutes: 25,
  timerSeconds: 0
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...DefaultState };
    this.IncrementBreak = this.IncrementBreak.bind(this);
    this.DecrementBreak = this.DecrementBreak.bind(this);
    this.IncrementSession = this.IncrementSession.bind(this);
    this.DecrementSession = this.DecrementSession.bind(this);
    this.reset = this.reset.bind(this);
    this.startStopToggle = this.startStopToggle.bind(this);
    this.GetFormattedTimer = this.GetFormattedTimer.bind(this);
  }
  GetFormattedTimer() {
    return (
      ("0" + this.state.timerMinutes).slice(-2).toString() + ":" + ("0" + this.state.timerSeconds).slice(-2).toString()
    );
  }
  // Functions
  IncrementBreak(id) {
    let state = { ...this.state };
    if (state.runState === runEnum.stopped) {
      state.breakMinutes++;
      if (state.breakMinutes > 60) {
        state.breakMinutes = 60;
      }
      if (state.timerType === timerEnum.break) {
        state.timerMinutes = state.breakMinutes;
        state.timerSeconds = 0;
      }
    }
    this.setState(state);
  }
  DecrementBreak(id) {
    let state = { ...this.state };
    if (state.runState === runEnum.stopped) {
      state.breakMinutes--;
      if (state.breakMinutes < 1) {
        state.breakMinutes = 1;
      }
      if (state.timerType === timerEnum.break) {
        state.timerMinutes = state.breakMinutes;
        state.timerSeconds = 0;
      }
    }
    this.setState(state);
  }
  IncrementSession() {
    let state = { ...this.state };
    if (state.runState === runEnum.stopped) {
      state.sessionMinutes++;
      if (state.sessionMinutes > 60) {
        state.sessionMinutes = 60;
      }
      if (state.timerType === timerEnum.session) {
        state.timerMinutes = state.sessionMinutes;
        state.timerSeconds = 0;
      }
    }
    this.setState(state);
  }
  DecrementSession() {
    let state = { ...this.state };
    if (state.runState === runEnum.stopped) {
      state.sessionMinutes--;
      if (state.sessionMinutes < 1) {
        state.sessionMinutes = 1;
      }
      if (state.timerType === timerEnum.session) {
        state.timerMinutes = state.sessionMinutes;
        state.timerSeconds = 0;
      }
    }
    this.setState(state);
  }
  reset() {
    this.timerSound.pause();
    this.timerSound.currentTime = 0;
    let interval = this.state.interval;
    clearInterval(interval);
    this.setState({ ...DefaultState });
  }
  GetTimerLabel() {
    if (this.state.timerType === timerEnum.break) {
      return "Break";
    } else {
      return "Session";
    }
  }
  startStopToggle() {
    let state = { ...this.state };
    if (this.state.runState === runEnum.stopped) {
      state.runState = runEnum.running;
      state.interval = setInterval(() => {
        state.timerSeconds--;
        if (state.timerSeconds < 0) {
          state.timerSeconds = 59;
          state.timerMinutes--;
          if (state.timerMinutes < 0) {
            if (state.timerType === timerEnum.session) {
              state.timerType = timerEnum.break;
              state.timerMinutes = state.breakMinutes;
              state.timerSeconds = state.breakSeconds;
            } else {
              state.timerType = timerEnum.session;
              state.timerMinutes = state.sessionMinutes;
              state.timerSeconds = state.sessionSeconds;
            }
            state.timerSeconds = 0;
            this.playSound();
          }
        }
        this.setState(state);
      }, 1000);
    } else {
      state.runState = runEnum.stopped;
      clearInterval(state.interval);
    }
    this.setState(state);
  }
  playSound() {
    this.timerSound.play();
  }
  render() {
    return (
      <React.Fragment>
        <div style={{ width: "max-content", margin: "auto" }}>
          <div>
            <h1 style={{ textAlign: "center" }}>Pomodoro Clock</h1>
          </div>
          <div id="column-container">
            <div id="row-container">
              <div id="break-box" className="box">
                <h3 id="break-label">Break Length</h3>
                <button id="break-increment" onClick={this.IncrementBreak}>
                  <i style={{ fontSize: "50px" }} className="fas fa-sort-up"></i>
                </button>
                <p id="break-length">{this.state.breakMinutes}</p>
                <button id="break-decrement" onClick={this.DecrementBreak}>
                  <i style={{ fontSize: "50px" }} className="fas fa-sort-down"></i>
                </button>
              </div>
              <div id="session-box" className="box">
                <h3 id="session-label">Session Length</h3>
                <button id="session-increment" onClick={this.IncrementSession}>
                  <i style={{ fontSize: "50px" }} className="fas fa-sort-up"></i>
                </button>
                <p id="session-length">{this.state.sessionMinutes}</p>
                <button id="session-decrement" onClick={this.DecrementSession}>
                  <i style={{ fontSize: "50px" }} className="fas fa-sort-down"></i>
                </button>
              </div>
            </div>
            <div id="timer-box">
              <h2 id="timer-label">{this.GetTimerLabel()}</h2>
              <p id="time-left">{this.GetFormattedTimer()}</p>
              <button id="start_stop" onClick={this.startStopToggle}>
                <i style={{ fontSize: "25px" }} className="fas fa-play"></i>
                <i style={{ fontSize: "25px" }} className="fas fa-pause"></i>
              </button>
              <button id="reset" onClick={this.reset}>
                <i style={{ fontSize: "25px" }} className="fas fa-sync"></i>
              </button>
            </div>
          </div>
          <audio
            id="beep"
            preload="auto"
            src="https://goo.gl/65cBl1"
            ref={audio => {
              this.timerSound = audio;
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
