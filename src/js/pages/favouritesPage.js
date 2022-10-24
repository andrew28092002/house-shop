import favouritesCards from "../favouritesCards/favouritesCardsController.js";

export default function(state){
    document.querySelector('#app').innerHTML = ''

    favouritesCards(state)
}