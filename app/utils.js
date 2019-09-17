import {render_array} from './constants.js';

function loadDoc(url, div, func) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        const jsonObj = JSON.parse(xhttp.responseText);
        func(jsonObj, div);
    }
    else {
        div.innerHTML = `
        <div class="flex-box padd box" style="width: 600px; display: flex; padding-top: 100px;">
            <div class="mdl-spinner mdl-js-spinner is-active"></div>
        </div>
        `
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

for (let i = 0; i < render_array.length; i++) {
    loadDoc(render_array[i].src, render_array[i].div, render_array[i].func);
}
