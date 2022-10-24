import FavouritesCards from "./favouritesCardsModel.js"
import * as view from './favouritesCardView.js'

export default async function(state){
    const favsList = state.favourites.favs

    const favsCards = new FavouritesCards(favsList)

    await favsCards.getFavs()

    view.renderPage(favsCards.cards)

    Array.from(document.querySelectorAll('.card__like')).forEach( item => {
        item.addEventListener('click', e => {
            e.preventDefault()
            
            const id = e.target.closest('.card').dataset.id

            state.favourites.toggleFav(id)
            view.toggleFavButton(e.target.closest('.card__like'), state.favourites.isFav(id))

            const currentCard = e.target.closest('.card')
            view.deleteCard(currentCard)
            view.renderPage(favsCards.cards)
            location.reload()
        })
    })
}