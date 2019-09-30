(window.webpackJsonppomodoroclock=window.webpackJsonppomodoroclock||[]).push([[0],{10:function(e,t,n){e.exports=n(11)},11:function(e,t,n){"use strict";n.r(t);var s=n(3),i=n(4),r=n(5),a=n(8),o=n(6),c=n(1),l=n(9),m=n(0),u=n.n(m),d=n(7),b=n.n(d);n(16);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=0,k=1,h=0,y=1,v={runState:k,timerType:h,interval:null,breakMinutes:5,breakSeconds:0,sessionMinutes:25,sessionSeconds:0,timerMinutes:25,timerSeconds:0},E=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(a.a)(this,Object(o.a)(t).call(this,e))).state=p({},v),n.IncrementBreak=n.IncrementBreak.bind(Object(c.a)(n)),n.DecrementBreak=n.DecrementBreak.bind(Object(c.a)(n)),n.IncrementSession=n.IncrementSession.bind(Object(c.a)(n)),n.DecrementSession=n.DecrementSession.bind(Object(c.a)(n)),n.reset=n.reset.bind(Object(c.a)(n)),n.startStopToggle=n.startStopToggle.bind(Object(c.a)(n)),n.GetFormattedTimer=n.GetFormattedTimer.bind(Object(c.a)(n)),n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"GetFormattedTimer",value:function(){return("0"+this.state.timerMinutes).slice(-2).toString()+":"+("0"+this.state.timerSeconds).slice(-2).toString()}},{key:"IncrementBreak",value:function(e){var t=p({},this.state);t.runState===k&&(t.breakMinutes++,t.breakMinutes>60&&(t.breakMinutes=60),t.timerType===y&&(t.timerMinutes=t.breakMinutes,t.timerSeconds=0)),this.setState(t)}},{key:"DecrementBreak",value:function(e){var t=p({},this.state);t.runState===k&&(t.breakMinutes--,t.breakMinutes<1&&(t.breakMinutes=1),t.timerType===y&&(t.timerMinutes=t.breakMinutes,t.timerSeconds=0)),this.setState(t)}},{key:"IncrementSession",value:function(){var e=p({},this.state);e.runState===k&&(e.sessionMinutes++,e.sessionMinutes>60&&(e.sessionMinutes=60),e.timerType===h&&(e.timerMinutes=e.sessionMinutes,e.timerSeconds=0)),this.setState(e)}},{key:"DecrementSession",value:function(){var e=p({},this.state);e.runState===k&&(e.sessionMinutes--,e.sessionMinutes<1&&(e.sessionMinutes=1),e.timerType===h&&(e.timerMinutes=e.sessionMinutes,e.timerSeconds=0)),this.setState(e)}},{key:"reset",value:function(){this.timerSound.pause(),this.timerSound.currentTime=0;var e=this.state.interval;clearInterval(e),this.setState(p({},v))}},{key:"GetTimerLabel",value:function(){return this.state.timerType===y?"Break":"Session"}},{key:"startStopToggle",value:function(){var e=this,t=p({},this.state);this.state.runState===k?(t.runState=f,t.interval=setInterval((function(){t.timerSeconds--,t.timerSeconds<0&&(t.timerSeconds=59,t.timerMinutes--,t.timerMinutes<0&&(t.timerType===h?(t.timerType=y,t.timerMinutes=t.breakMinutes,t.timerSeconds=t.breakSeconds):(t.timerType=h,t.timerMinutes=t.sessionMinutes,t.timerSeconds=t.sessionSeconds),t.timerSeconds=0,e.playSound())),e.setState(t)}),1e3)):(t.runState=k,clearInterval(t.interval)),this.setState(t)}},{key:"playSound",value:function(){this.timerSound.play()}},{key:"render",value:function(){var e=this;return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{style:{width:"max-content",margin:"auto"}},u.a.createElement("div",null,u.a.createElement("h1",{style:{textAlign:"center"}},"Pomodoro Clock")),u.a.createElement("div",{id:"column-container"},u.a.createElement("div",{id:"row-container"},u.a.createElement("div",{id:"break-box",className:"box"},u.a.createElement("h3",{id:"break-label"},"Break Length"),u.a.createElement("button",{id:"break-increment",onClick:this.IncrementBreak},u.a.createElement("i",{style:{fontSize:"50px"},className:"fas fa-sort-up"})),u.a.createElement("p",{id:"break-length"},this.state.breakMinutes),u.a.createElement("button",{id:"break-decrement",onClick:this.DecrementBreak},u.a.createElement("i",{style:{fontSize:"50px"},className:"fas fa-sort-down"}))),u.a.createElement("div",{id:"session-box",className:"box"},u.a.createElement("h3",{id:"session-label"},"Session Length"),u.a.createElement("button",{id:"session-increment",onClick:this.IncrementSession},u.a.createElement("i",{style:{fontSize:"50px"},className:"fas fa-sort-up"})),u.a.createElement("p",{id:"session-length"},this.state.sessionMinutes),u.a.createElement("button",{id:"session-decrement",onClick:this.DecrementSession},u.a.createElement("i",{style:{fontSize:"50px"},className:"fas fa-sort-down"})))),u.a.createElement("div",{id:"timer-box"},u.a.createElement("h2",{id:"timer-label"},this.GetTimerLabel()),u.a.createElement("p",{id:"time-left"},this.GetFormattedTimer()),u.a.createElement("button",{id:"start_stop",onClick:this.startStopToggle},u.a.createElement("i",{style:{fontSize:"25px"},className:"fas fa-play"}),u.a.createElement("i",{style:{fontSize:"25px"},className:"fas fa-pause"})),u.a.createElement("button",{id:"reset",onClick:this.reset},u.a.createElement("i",{style:{fontSize:"25px"},className:"fas fa-sync"})))),u.a.createElement("audio",{id:"beep",preload:"auto",src:"https://goo.gl/65cBl1",ref:function(t){e.timerSound=t}})))}}]),t}(u.a.Component);b.a.render(u.a.createElement(E,null),document.getElementById("root"))},16:function(e,t,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.10d0a153.chunk.js.map