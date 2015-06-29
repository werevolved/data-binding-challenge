var myApp = angular.module("myApp", []);


function JoesController(){
	this.message = "Hey.";

}

myApp.controller("JoesController",JoesController);
