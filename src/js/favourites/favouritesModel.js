export default class Favourites{
    constructor(){
        this.favs = []
        this.loadFromLocalStorage()
    }


    loadFromLocalStorage(){
        const data = JSON.parse(localStorage.getItem('favs'))

        if (data) this.favs = data
    }

    saveToLocalStorage(){
        localStorage.setItem('favs', JSON.stringify(this.favs))
    }

    addFavs(id){
        this.favs.push(id)
        this.saveToLocalStorage()
    }

    removeFavs(id){
        const index = this.favs.indexOf(id)
        this.favs.splice(index, 1)
        this.saveToLocalStorage()
    }

    isFav(id){
        return this.favs.indexOf(id) != -1 ? true : false
    }

    toggleFav(id){
        if (this.isFav(id)){
            this.removeFavs(id)
        } else {
            this.addFavs(id)
        }
    }

}
