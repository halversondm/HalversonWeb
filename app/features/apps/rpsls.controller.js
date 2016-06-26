/**
 * Created by Daniel on 1/26/2016.
 */
"use strict";

class RpslsController {

  constructor(gameService) {
    this.gameService = gameService;
    this.init();
  }

  human(choice) {
    this.init();
    var player2 = this.gameService.getPick();
    this.gameService.setPlayer1(choice);
    this.gameService.setPlayer2(player2);
    this.setPlayer1Class(choice);
    this.setPlayer2Class(player2 + "2");
    this.gameService.takeTurn();
    this.explanation = this.gameService.getResult();
    if (this.gameService.getWinner() === "Player 1") {
      this.winner = "You win!";
      this.gameSuccess = true;
    } else if (this.gameService.getWinner() === "Player 2") {
      this.winner = "The computer wins!";
      this.gameLose = true;
    } else {
      this.winner = this.gameService.getWinner();
      this.gameDraw = true;
    }
  }

  init() {
    this.gameSuccess = false;
    this.gameDraw = false;
    this.gameLose = false;
    this.winner = "";
    this.explanation = "";
    this.rock = false;
    this.lizard = false;
    this.scissors = false;
    this.spock = false;
    this.paper = false;
    this.rock2 = false;
    this.lizard2 = false;
    this.scissors2 = false;
    this.spock2 = false;
    this.paper2 = false;
  }

  setPlayer1Class(choice) {
    switch (choice) {
      case "rock":
        this.rock = true;
        break;
      case "spock":
        this.spock = true;
        break;
      case "lizard":
        this.lizard = true;
        break;
      case "scissors":
        this.scissors = true;
        break;
      case "paper":
        this.paper = true;
        break;
      default:
        throw new Error("error with choice");
    }
  }

  setPlayer2Class(choice) {
    switch (choice) {
      case "rock2":
        this.rock2 = true;
        break;
      case "spock2":
        this.spock2 = true;
        break;
      case "lizard2":
        this.lizard2 = true;
        break;
      case "scissors2":
        this.scissors2 = true;
        break;
      case "paper2":
        this.paper2 = true;
        break;
      default:
        throw new Error("error with choice");
    }
  }
}

RpslsController.$inject = ["gameService"];

export default RpslsController;
