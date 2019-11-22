class ProjectDescription {
    constructor(title, description, gitHub, link) {
        this.title = title;
        this.description = description;
        this.gitHub = gitHub;
        this.link = link;
        this.appendModal = function () {
            $('.modal-title').empty();
            $(`.modal-body`).empty();
            $('.modal-title').append(`<h2>${this.title}</h2>`);
            $(`.modal-body`).append(`<h4>Description:</h4> ${this.description}`, `<h4>Githud Repository:</h4><a href="${this.gitHub}">${this.gitHub}</a>`, `<h4>Link:</h4> <a href="${this.link}">${this.link}</a>`);
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

$("#PBmodal").click(PartyBuddy.appendModal());
$("#WDmodal").click(WeatherDas.appendModal());


 