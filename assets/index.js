
const list = [
    {id: 1, name: 'Документ 1'},
    {id: 2, name: 'Документ 42'},
    {id: 3, name: 'Документ 3'}
];

const cellName = ['id', 'name'];

var tableSelector = 'table tbody';

// drawTableBody(list, tableSelector, cellName);

const $searchButton = document.querySelector('.filter button');
const $filterInput = document.querySelector('.filter input');
function isEqualsToSearchField (document) {
    if(!$filterInput.value) {
        return  true;
    }
    if(document.name.indexOf($filterInput.value) > 0) {
        return true;
    }
}
function drawTableBody(document) {
    return `<tr>
        <td>${document.id}</td>
        <td>${document.name}</td>
    </tr>`
}





















const a = list.filter(isEqualsToSearchField).sort(function(a, b){
    return a.name < b.name ? -1 : a.name > b.name ? 1 : -1;
}).map(drawTableBody).join('');
document.querySelector(tableSelector).innerHTML = a;

















// // Бизнес логика
// const filterClickHandler = function (e) {

//     const q = $filterInput.value;
//     drawTableBody(filter(list, 'name', q), tableSelector, cellName);;

// };



// $searchButton.addEventListener('click', filterClickHandler);