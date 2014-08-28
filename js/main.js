$(document).ready(function(){


$('#bodyMeasurements').submit(function(e){

	//initialize variables 
	var userWeight = null;
	var userHeightFeet = null;
	var userFeetInches = null;
	var weightTest = null;
	var heightFeetTest = null;
	var heightInchesTest = null;
	var bmiFinalNumber = null;
	var displayText = null;

	userWeight = $('#weightInput').val();

	//checking that weight is a number - not utilizing number input type since it's not fully supported yet
	weightTest = isNaN(userWeight);

	if (weightTest == true || userWeight == "") {
		alert("Please enter a valid weight number for calculation");
		$('#weightInput').val("");
	}

	else {
		//assuming weight number is valid so proceeding
		userHeightFeet = $('#heightFeetInput').val();

		heightFeetTest = isNaN(userHeightFeet);

		if (heightFeetTest == true || userHeightFeet == "" || userHeightFeet >= 8) {
			alert("Please enter a valid height for calculation");
			$('#heightFeetInput').val("");
		}

		else{
			//assuming height in feet is a valid number so proceeding
			userFeetInches = $('#heightInchesInput').val();

			heightInchesTest = isNaN(userFeetInches);

			if (heightInchesTest == true || userFeetInches == "" || userFeetInches >= 13){
				alert("Please enter a valid height for calculation");
				$('#heightInchesInput').val("");
			}

			else {
				//assuming all numbers are correct so proceeding with BMI calculation and then display

				bmiFinalNumber = bmiCalculation (userWeight, userHeightFeet, userFeetInches);

				displayText  = displayBmi(bmiFinalNumber);
				
			}

		}
	}


}); //end form submit function


	//Calculate BMI 
	function bmiCalculation(userWeight, userHeightFeet, userFeetInches){

		var heightCalculation = null;
		var bmiNumber = null;

		//calculate height in inches and square the result
		heightCalculation = (Number(userHeightFeet) * 12) + Number(userFeetInches);
		heightCalculation = heightCalculation * heightCalculation;

		//divide weight in pounds by squared number result
		bmiNumber = Number(userWeight) / heightCalculation;

		//multiply the result by 703  
		bmiNumber = bmiNumber * 703;

		console.log("full number " + bmiNumber);

		//rounding to third decimal for accuracy purposes since toFixed() rounds
		bmiNumber = bmiNumber.toFixed(3);

		console.log("toFixed(3) " + bmiNumber);

		//bmiNumber = bmiNumber.toString();
		//if (bmiNumber.charAt(bmiNumber.length - 1) === "5") {
		//bmiNumber = bmiNumber.slice(0, bmiNumber.length - 1) + "6";
		//}

		bmiNumber = Number(bmiNumber);

		bmiNumber = bmiNumber.toFixed(1);

		console.log(bmiNumber);

		return bmiNumber;


	} //end function bmiCalculation

	function displayBmi(bmiFinalNumber){

		var bmiText = null;
		
		//A BMI of less than 18 means you are under weight.
		//A BMI of less than 18.5 indicates you are thin for your height.
		//A BMI between 18.6 and 24.9 indicates you are at a healthy weight.
		//A BMI between 25 and 29.9 suggests you are overweight for your height.
		//A BMI of 30 or greater indicates obesity. 

		switch (true) {
			case (bmiFinalNumber < 18) :
					bmiText = "you are under weight";
					break;
			case (bmiFinalNumber <= 18.5) :
					bmiText = "you are thin";
					break;
			case (bmiFinalNumber <= 24.9) && (bmiFinalNumber >= 18.6) :
					bmiText = "you are at a healthy weight";
					break;
			case (bmiFinalNumber <= 29.9) && (bmiFinalNumber >= 25) :
					bmiText = "you are a little overweight";
					break;
			case (bmiFinalNumber >= 30) :
					bmiText = "you are overweight";
					break;
			default :
					bmiText = "yikes - there has been an error";
					break;
		} //end switch

		//setting text to display to user
		document.getElementById("bmiAnswer").innerHTML = bmiText;

		return bmiText
	}


}); //end doc ready