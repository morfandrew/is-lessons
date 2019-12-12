const list = [
    {id: 1, name: 'Документ 1'},
    {id: 2, name: 'Документ 2'},
    {id: 3, name: 'Документ 3'}
];


const cellName = ['id', 'name'];


//получаем ДОМ элемент, элемент табличного тела
const $tbody = document.querySelector('table tbody');
//очищаем тело от записей
$tbody.innerHTML = '';
//формируем тело таблицы, перебирая список
for (let index = 0; index < list.length; index++) {
    //создаем все элементы
    const element = list[index];//получаем 1, 2, 3
    const $tr = document.createElement('tr');//пока просто сохранили в переменную
    const $tdId = document.createElement('td');
    const $tdNumber = document.createElement('td');
    // начинаем устанавливать контент
    $tdId.innerHTML = element.id;
    $tdNumber.innerHTML = element.name;
    //добавили в созданную строку все данные
    $tr.append($tdId, $tdNumber);
    //добавили в таблицу строку
    $tbody.appendChild($tr);
}

const $searchButton = document.querySelector('.filter button');//вытаскиваем из ДОМ дерева кнопку
const $filterInput = document.querySelector('.filter input');

var tableSelector = 'table tbody'
function drawTableBody(list, selector){
    const $tbody = document.querySelector(selector);
    $tbody.innerHTML = '';
    for (let index = 0; index < list.length; index++) {
        const element = list[index];

       
    }
}

//фильтр
function filter(array, propName, predicate){
    result = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];// свалится id и name
        const property = element[propName];//свойство name
        if (property.indexOf(predicate) > -1){//номер позиции, где находится В, при поиске Вася, если не находит, то -1
            result.push(element);//помещаем элемент в резалт
        }
    return result;
}
//поиск
if (element.name.indexOf(q) > -1) {
    const $tr = document.createElement('tr');
    const $tdId = document.createElement('td');
    const $tdNumber = document.createElement('td');
    $tdId.innerHTML = element.id;
    $tdNumber.innerHTML = element.name;
    $tr.append($tdId, $tdNumber);
    $tbody.appendChild($tr);
}


function (cell) {
    //динамически создавать ячейки и присваивать им данные из объектов
    for (let index = 0; index < cell.length; index++) {
        const element = cell[index];//будет сваливаться строчка
        const $cell = document.createElement('td');
        $cell.innerHTML = element['cellName'];
        $tr.appendChild($cell);
    }
}

//Бизнесс логика
const filterClickHandler = function (e) {

    const q = $filterInput.value;//получила поле ввода
    drawTableBody(filter(list, 'name', ), tableSelector)

};
$searchButton.addEventListener('click', filterClickHandler);//добавляем событие клика


//дз по сортировке

const $sortButtonIncr = document.querySelector('.increase');

function sortListIncr() {
    $tbody.innerHTML = '';
    for (let j = list.length -1; j>0 ; j--) {
        for (let i = 0; i < j; i++) {
            if (list[id] > list[id+1]) {
                let temp = list[id];
                list[id] = list[id+1];
                list[id+1] = temp;
            }   
        }

    }
    //получаем ДОМ элемент, элемент табличного тела
    const $tbody = document.querySelector('table tbody');
    //очищаем тело от записей
    $tbody.innerHTML = '';
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        const $tr = document.createElement('tr');
        const $tdId = document.createElement('td');
        const $tdNumber = document.createElement('td');
        $tdId.innerHTML = element.id;
        $tdNumber.innerHTML = element.name;
        $tr.append($tdId, $tdNumber);
        $tbody.appendChild($tr);
    }
 }