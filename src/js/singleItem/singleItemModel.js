export default class SingleItem{
    constructor(id){
        this.id = id
    }

    async getResult(){
        try{

            const queryString = `https://jsproject.webcademy.ru/items/${this.id}`
            const response = await fetch(queryString)
            const data = await response.json()
            this.result = await data

        } catch(error){
            alert(error)
        }
    }

    async submitForm(formData){
        try {
            const queryString = `https://jsproject.webcademy.ru/bidnew`
            const objPost = {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(formData)
            }

            const response = await fetch(queryString, objPost)
            const data = await response.json()
            this.response = await data

            
        } catch(error){
            alert(error)
        }
    } 

}