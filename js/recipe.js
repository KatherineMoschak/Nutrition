$(document).ready(function(){


//create recipe objects - temporarily simulating receipe objects until I can find an api nutrition/recipe site to call from javascript

//creating recipe objects
function Recipe(recipeName, recipeIngredients, recipeServings, recipeCalories, recipeFatGrams, recipeProteinGrams, recipeSodiumGrams) {
	this.name = recipeName;
	this.ingredients = recipeIngredients;
	this.servings = recipeServings;
	this.calories = recipeCalories;
	this.fatGrams = recipeFatGrams;
	this.proteinGrams = recipeProteinGrams;
	this.sodiumGrams = recipeSodiumGrams;
}

Recipe.prototype = {
	constructor: Recipe, 

	addIngredients: function (recipeIngredientToAdd){

		console.log(recipeIngredientToAdd);
		this.ingredients.push(recipeIngredientToAdd)

		alert("Thanks for adding "+ recipeIngredientToAdd + " to the recipe for " + this.name + "!");
		return "New ingredients list " + this.ingredients; 

	},

	displayRecipe: function(){

		var appendRecipeBox = null;
		var appendRecipeSelection = null;

		//for Recipe Box
		appendRecipeBox =  $('#recipeBox').append("<h3>" + this.name + "</h3>");
		appendRecipeBox += $('#recipeBox').append("<ul> Ingredients: ");

		for(var i = 0; i < this.ingredients.length; i++){
			//appendRecipe += $('#recipeBox').append("<p> Ingredient: " + this.ingredients[i] + "</p>");
			appendRecipeBox += $('#recipeBox').append("<li>" + this.ingredients[i] + "</li>");
		}

		appendRecipeBox += $('#recipeBox').append("</ul> <p> Servings: " + this.servings + "</p>");
		appendRecipeBox += $('#recipeBox').append("<p> Calories: " + this.calories + "</p>");
		appendRecipeBox += $('#recipeBox').append("<p> Grams of Fat: " + this.fatGrams + "</p>");
		appendRecipeBox += $('#recipeBox').append("<p> Grams of Protein: " + this.proteinGrams + "</p>");
		appendRecipeBox += $('#recipeBox').append("<p> Grams of Sodium: " + this.sodiumGrams + "</p>");

		//for Radio Button selection
		appendRecipeSelection =  $('#chooseRecipe').append("<input type='radio' name='recipeList' value='" + this.name + "'>" + this.name + "<br>");
	}
	
} //end of prototype for Recipe

//creating instances

firstRecipe = new Recipe("Chicken Casserole", ["Chicken", "Mayo", "Celery"], 8, 1000, 30, 25, 99);
secondRecipe = new Recipe("Chicken Salad", ["Chicken", "Mayo", "Grapes"], 8, 900, 20, 15, 50);

//calling displayRecipe to view Recipe contents
firstRecipe.displayRecipe();
secondRecipe.displayRecipe();


$('#updateRecipe').submit(function(e){

  var text = null;
  var recipeSelected = null;

  recipeSelected = $('input:radio[name=recipeList]:checked').val();

  if (recipeSelected == undefined || recipeSelected == null){
  	  alert ("Please choose a recipe first if you would like to add ingredients")
  	}

  else {
  		//assuming recipeSelected has a value 
  		text = $('#recipeIngred').val();

   		if (text == undefined || text == null || text == ""){
  	   		alert ("Please enter an ingredient")
  		}
  		else {
  			//assuming text has value 
  			if (firstRecipe.name === recipeSelected) {
  	  			firstRecipe.addIngredients(text);
  			}

  			else if (secondRecipe.name === recipeSelected) {
           			secondRecipe.addIngredients(text);
  			}
  
  			else {
				alert('error');
  			}
  		} //end else for text check

  } //end if recipeSelected

}); //end formSearch submit function

}); //end doc ready