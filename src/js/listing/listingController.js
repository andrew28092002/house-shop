import * as view from './listingView.js'


export default function (state){
    
    view.render()

    state.results.forEach( item => {
        view.renderCard(item, state.favourites.isFav(item.id))
    })

    state.emitter.subscribe('event:render-listing', ()=>{
        view.clearListingContainer()

        state.results.forEach( item => {
            view.renderCard(item, state.favourites.isFav(item.id))
        })
    })

    Array.from(document.querySelectorAll('.card__like')).forEach( item => {
        item.addEventListener('click', e => {
            e.preventDefault()
            
            const id = e.target.closest('.card').dataset.id

            state.favourites.toggleFav(id)
            view.toggleFavButton(e.target.closest('.card__like'), state.favourites.isFav(id))
        })
    })
}