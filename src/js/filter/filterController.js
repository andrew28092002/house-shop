import * as view from './filterView.js'
import Filter from './filterModel.js'

export default async function(state){
    // Создание объекта фильтра
    if (!state.filter) state.filter = new Filter()

    // Получение параметров фильтра
    await state.filter.getParams()

    // рендеринг страницы фильтра
    view.render(state.filter.params)

    // Запрос на сервер
    await state.filter.getResult()
    state.results = state.filter.result

    // Меняем значение на кнопке 
    view.changeButtonText(state.filter.result.length)

    // Прослушка формы
    const form = document.querySelector('#filter-form')
    // Изменение формы
    form.addEventListener('change', changeInfoFilter)
    // Очистка формы
    form.addEventListener('reset', clearInputFilter)
    // Отправка информации на сервер
    form.addEventListener('submit', submitInfoFilter)

    // Функция для получения новых данных с формы и обновления результатов
    async function changeInfoFilter(e){
        e.preventDefault()

        state.filter.query = view.getInput()
        await state.filter.getResult()
        state.results = state.filter.result

        view.changeButtonText(state.filter.result.length)
    }
    // Функция для очистки полей ввода по нажатию кнопки reset
    async function clearInputFilter(){

        state.filter.query = ''
        await state.filter.getResult()

        view.changeButtonText(state.filter.result.length)
    }
    // Фукнция отправки информации на сервер
    async function submitInfoFilter(e){
        e.preventDefault()
        
        state.emitter.emit('event:render-listing', {})
    }

    

}