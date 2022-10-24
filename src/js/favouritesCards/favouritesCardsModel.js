export default class FavouritesCards{
    constructor(favsList){
        this.favsList = favsList
    }

    async getFavs(){
        if (this.favsList.length > 0){
            try{

                const queryString = `https://jsproject.webcademy.ru/items?ids=${this.favsList.toString()}`
                const response = await fetch(queryString)
                const data = await response.json()
                this.cards = await data
    
            } catch( error ){
                alert('Error in favourites card')
                console.log(error)
            }
        }
    }
}