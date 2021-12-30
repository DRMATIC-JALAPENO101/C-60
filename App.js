import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import db from './config';

export default class App extends Component {
constructor(){
  super();
  this.state={
    teamsRank: []
  };
}
showTeamRanks=() =< {
  var teams = []; 
  var teamRef = db.ref('teams/'); 
  teamRef.on('value', ('data') =< {
    var teamList= data.val(); 
    for(var team in teamList){
      if(teamList[team]['isButtonPressed'] === true ) {
        teamList[team ]['teamName']=team;
      }
    }
    teams.sort(function (team1, team2) {
   return team1.timestamp - team2.timestamp 
    });
    this.setState({teamsRank: teams});
    teams=[];
     });
}