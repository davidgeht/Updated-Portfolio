class ProjectDescription {
    constructor(title, description, gitHub, link) {
        this.title = title;
        this.description = description;
        this.gitHub = gitHub;
        this.link = link;
        this.appendModal = function () {
            console.log("appending" + title)
            $("#modal .modal-title ").html(`<h2>${this.title}</h2>`);
            $("#modal .modal-body").html(`<h4>Description:</h4> ${this.description}<br><h4>Githud Repository:</h4><a href="${this.gitHub}">${this.gitHub}</a><br><h4>Link:</h4> <a href="${this.link}">${this.link}</a>`);
        };
    }
}
;

const PartyBuddy = new ProjectDescription(
    `Party Buddy`,
    `This project is a web application that allows users to Search food recipes using keywords (such as ingredients or meal type) and dietary restrictions. Search alcoholic cocktail recipes based on the name. Put together a menu by selecting items from the results of the search. Created a shopping list of ingredients based on the selected items. Search nearby grocery stores or liquor stores (or search by address or postal code). Send email invitations to their party guests.`,
    `https://github.com/jondam1985/party-buddy`,
    `https://jondam1985.github.io/party-buddy/`);
 
const WeatherDas = new ProjectDescription(
    `Weather Dashboard`, 
    `A free weather application using a weather API from openweather.org. Allows the user to access current weather data from numerous cities around the world. The application makes multiple AJAX calls to the weather API to get various amounts of data for the user to view.`,
    `https://github.com/davidgeht/Weather-Applicatio`,
    `https://davidgeht.github.io/Weather-Application/`);

const employeeSumApp = new ProjectDescription(
    'Employee Summary Application',
    `A software engineering team generator command line applicationThe code quiz application is a refresher quiz for javascript based questions, it is meant to test the user on there knoweldge of javascript. It is a mutliple choice based quiz that has a timer limit. For every question that is incorrect the user loses 15 seconds from the timer, if the timer expired to 0 the game is ended and there score is recorded in local storage which can be view on the next page titled highscores.`,
    'https://github.com/davidgeht/Employee-Summary-Application',
    `Not Applicable`
);

const EatDaBurger= new ProjectDescription(
    'Eat-The-Burger',
    'A resturant application that allows users to input the names of the burgers they would like to eat. The application allows the user to add burgers, and list the burgers in a devoured section indication the burger has been eaten.',
    'https://github.com/davidgeht/Eat-The-Burger',
    'https://polar-dawn-91505.herokuapp.com/'

);

const employeeTracker = new ProjectDescription(
    `Employee Tracker`,
    `An application that helps track and manage a companys' or instituations employees.`,
    `https://github.com/davidgeht/Employee-Tracker`,
    `Not Applicable`
);

const buckeatlist = new ProjectDescription(
    `BuckEATList`,
    `An application that allows the user to search and save different resturants that they want to try to their buckEATlist. Also the user is able to review and rate the resturants that they have tried in their "NOMs" list. The user is able to upload pictures from their resturant experience.`,
    `https://github.com/davidgeht/BuckEATlist`,
    `https://buckeatlist.herokuapp.com/`
);

$("#PBmodal").click(()=>PartyBuddy.appendModal());
$("#WDmodal").click(()=>WeatherDas.appendModal());
$("#CDmodal").click(()=>employeeSumApp.appendModal());
$("#DPmodal").click(()=>EatDaBurger.appendModal());
$("#ETmodal").click(()=>employeeTracker.appendModal());
$("#BELmodal").click(()=>buckeatlist.appendModal());

// $( document ).ready(function(){
//     $('img').each(function(e){
//       var src = $(e).attr('src');
//       $(e).hover(function(){
//         $(this).attr('src', src.replace('.gif', '_anim.gif'));
//       }, function(){
//         $(this).attr('src', src);
//       });
//     });
//   });
  
 