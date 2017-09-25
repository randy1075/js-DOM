/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

var taylorNameDiv = document.getElementById('name1');
taylorNameDiv.innerHTML = "Tay-Tay";

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/
var Khaledpositiondiv = document.getElementById('position2');
Khaledpositiondiv.innerHTML = "Project Manager";

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

var PikoTaroaliasdiv = document.getElementById('alias3');
PikoTaroaliasdiv.innerHTML = "Concatenation";


/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

var data = ["name", "position", "alias", "profile"];
var profileDivs = document.getElementsByClassName(data[3]);

profileDivs[0].innerHTML = "When Doves Cry";

/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

profileDivs[1].innerHTML = "A goal is not always meant to be reached, it often serves simply as something to aim at.";

/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var aliasDivs = document.getElementsByClassName(data[2]);
aliasDivs[2].innerHTML = "Pulp Fiction - Jules Winnfield";


/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/

//var data2 = ["nameParent", "position7", "alias7", "bio7"];
//for (var i = 0; i <= 5; i++){
var myNewDiv = document.createElement('div');
//var myNewDiv = document.getElementById('name7');
myNewDiv.id = 'name7';
myNewDiv.innerHTML = 'Peter Griffin';

var nameParentDiv = document.getElementById('nameParent');
nameParentDiv.appendChild(myNewDiv);
//}

//familyGuyNameDiv.innerHTML = "Peter Griffin";
 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/

var myNewDiv2 = document.createElement('div');
myNewDiv2.id = 'alias8';
myNewDiv2.innerHTML = 'Old Man Riverwalk';
var aliasParentDiv = document.getElementById('aliasParent');
aliasParentDiv.appendChild(myNewDiv2);


//Final Boss
/*9. Create your own profile.*/

