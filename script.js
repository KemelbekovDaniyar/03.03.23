const input = document.querySelector('#text-input');
const ul = document.querySelector('#list');

const btn = document.querySelector('#add-li').addEventListener('click', function () {
  if (input.value.trim() === "") {
    return;
  }
  const li = document.createElement('li')
  ul.append(li)
  li.textContent = input.value;
  input.value = "";
  const remove = document.createElement("button");
  remove.textContent = "RemoveBtn";
  li.append(remove);
  remove.addEventListener("click", function () {
    li.remove();
  })
})

input.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    document.querySelector("#add-li").dispatchEvent(new Event('click'));
  }
});



// 1
const shoppingList = ["Bread", "Milk", "Newspaper"];
const body = document.querySelector('body')
for (let i = 0; i < shoppingList.length; i++) {
  const element = shoppingList[i];
  const ul = document.createElement('ul')
  body.append(ul);
  const li = document.createElement('li')
  li.textContent = element;
  element.value = "";
  ul.append(li);
}

// 2
const city = [];
const ulAdd = document.querySelectorAll('#ul li');
for (let i = 0; i < ulAdd.length; i++) {
  city.push(ulAdd[i].textContent)
}

// 3
const players = [
  { name: "Aijan", score: 70 },
  { name: "Ilgiz", score: 65 },
  { name: "Dastan", score: 100 }
];
const playersList = document.createElement("ul");
document.body.append(playersList);
for (let i = 0; i < players.length; i++) {
  const playersLi = document.createElement("li");
  playersList.append(playersLi);
  
  playersLi.textContent = players[i].name + " - ";

  const score = document.createElement("strong");
  score.textContent = players[i].score;
  playersLi.append(score);
};
// 4
const cities = [];

const listItems = document.querySelectorAll('ol li');

for (let i = 0; i < cities.length; i++) {
  cities.push({
    name: li.querySelector(".name").textContent,
    population: li.querySelector(".population").textContent
  })
}
console.log(cities);


// 5
const citydata = [
  { name: "Bishkek", population: "1m" },
  { name: "Karakol", population: "80k" },
  { name: "Cholpon-Ata", population: "40k" }
];

const citydataTable = document.createElement('table');
body.append(citydataTable);

for (let i = 0; i < citydata.length; i++) {
  const tr = document.createElement('tr');
  citydataTable.append(tr);

  const td = document.createElement('td');
  tr.append(td);
  td.textContent = citydata[i].name;

  const tdd = document.createElement('td');
  tr.append(tdd);
  tdd.textContent = citydata[i].population;
}
