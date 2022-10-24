import * as view from './singleItemView.js'
import SingleItem from "./singleItemModel";

export default async function(state){
    state.singleItem = new SingleItem(state.routeParams)

    await state.singleItem.getResult()

    view.render(state.singleItem.result, state.favourites.isFav(state.singleItem.id))

    // открытие модального окна
    document.querySelector('.button-order').addEventListener('click', ()=> {
        view.showModal()
    })

    // закрытие модального окна
    document.querySelector('.modal__close').addEventListener('click', ()=>{
        view.hideModal()
    })

    document.querySelector('.modal-wrapper').addEventListener('click', (e)=>{
        if (e.target.closest('.modal')){
            return null
        } else{
            view.hideModal()
        }
    })

    // Отправка формы
    document.querySelector('.modal__form').addEventListener('submit', submitInfo)

    async function submitInfo(){
        const formData = view.getInput()

        await state.singleItem.submitForm(formData)

        const response = state.singleItem.response

        if (state.singleItem.response.message === 'Bid Created'){
            alert('Ваша заявка успешно создана')
            view.hideModal()
        } else if(state.singleItem.response.message === 'Bid Not Created'){
            response.errors.forEach( item => alert(item))
        }
    }

    document.querySelector('#button-favourite').addEventListener('click', addToFavourites)

    async function addToFavourites(){
        state.favourites.toggleFav(state.singleItem.id)
        view.toggleFavButton(state.favourites.isFav(state.singleItem.id))
    }
}