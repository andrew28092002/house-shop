import singleItem from './../singleItem/singleItemController.js'

export default function (state){
    // Очищаем контейнер
    document.querySelector('#app').innerHTML = ''

    // Запускаем компонент singleItem
    singleItem(state)

}