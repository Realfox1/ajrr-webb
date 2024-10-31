import { data } from './data.js';

let currentCategory = 'أذكار الصباح';
let currentIndex = 0;

function showCategory(category) {
  currentCategory = category;
  currentIndex = 0;
  displayDuaa();
}

function displayDuaa() {
  const duaaList = data[currentCategory];
  if (duaaList && duaaList.length > 0) {
    const duaa = duaaList[currentIndex];
    document.getElementById('duaa-text').innerText = duaa.content;
    document.getElementById('duaa-title').innerText = `${currentCategory}`;
  }
}

function nextDuaa() {
  const duaaList = data[currentCategory];
  if (currentIndex < duaaList.length - 1) {
    currentIndex++;
    displayDuaa();
  }
}

function prevDuaa() {
  if (currentIndex > 0) {
    currentIndex--;
    displayDuaa();
  }
}

function markRead() {
  alert("تمت قراءتها!");
}

displayDuaa();
