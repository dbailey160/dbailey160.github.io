function askQuestions () {

	var firstName = prompt('what is your first name?');
	var lastName = prompt('what is your last name?');

	var fullName = firstName + '' + lastName;

	$('h2').text('Hello ' + fullName);

	var userAge = prompt('How old are you?');

	userAge = parseInt(userAge);

	if (userAge >= 18) {
		console.log('User is an adult.');
	} else if (userAge >= 13) {
		console.log('User is a teenager.');
	} else {
		console.log('User is a child.');
	}

	if (firstName.toLowerCase() === 'general' && lastName.toLowerCase() !== 'assembly'){
		console.log('Hello General.');
	}

	var faveColour = prompt('What is your favourite colour?').toLowerCase();

	if (faveColour == 'red' ||
		faveColour == 'blue' ||
		faveColour == 'yellow' ||
		faveColour == 'green') {

		$('h2').css('color', faveColour);


	}
}	

	// when the page loads 

	$(function() {

		$('img').on('click', askQuestions);

		// hide the sections
		$('h3').next().hide();


		// when the user clicks an h3 heading 
		$('h3').on('click',function(){

			// show or hide the next element
			$(this).next().slideToggle(1000);

		});

	}); 