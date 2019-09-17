   // Create a class for the element
class BtnAdd extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'https://code.getmdl.io/1.3.0/material.light_blue-pink.min.css')
    const anchor = document.createElement('a');
    anchor.setAttribute('class', 'mdl-list__item-secondary-action');
    anchor.setAttribute('href', 'javascript:void(0)');
    const icon = document.createElement('i');
    icon.setAttribute('class', 'material-icons');
    icon.innerHTML = 'add';
    anchor.appendChild(icon);
    shadow.appendChild(anchor);
    shadow.appendChild(link);
  }
}

// Define the new element
customElements.define('btn-add', BtnAdd);

/*
<template id="add-template">
  <a class="mdl-list__item-secondary-action btn-user-add" href="javascript:void(0)" onclick="ciao();"><i class="material-icons">add</i></a>
</template>
<script>
*/
    /*function updateJson(url, data) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const jsonObj = JSON.parse(data);
        xhttp.setRequestHeader("Content-Type", "application/choice");
    }
    else {
        div.innerHTML = `
        <div class="flex-box padd box" style="width: 600px; display: flex; padding-top: 100px;">
            <div class="mdl-spinner mdl-js-spinner is-active"></div>
        </div>
        `
    }
  };
  xhttp.open("POST", url, true);
  xhttp.send(jsonObj);
}
function ciao(){alert('ciao');}
</script>

*/


/*
const f2 = `
    function callUpdate(){
        alert('ciao');
    }
`
*/

export function renderUsersList(json, div) {
    div.innerHTML = '';
    let jSlice = json.body.slice(0,3);
    for (let i = 0; i < jSlice.length; i++) {
        div.innerHTML += `
        <div class="mdl-list__item">
            <span class="mdl-list__item-primary-content">
            <a href="javascript:void(0)" class="flex-box user-menu-picture" style="margin: 0; margin-right: 16px;">
                <img src=${json.body[i].img}/>
            </a>
            <span class="name-data">${json.body[i].name}</span>
            </span>
            <btn-add></btn-add>
        </div>
        `
    }
}