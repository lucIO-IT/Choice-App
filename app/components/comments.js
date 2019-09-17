export function listComments(c){
    let t = ``
    for (let i = 0; i < c.length; i++){
        t += `
            <li class="mdl-list__item mdl-list__item--three-line">
                <span class="mdl-list__item-primary-content">
                  <i class="material-icons mdl-list__item-avatar">person</i>
                  <span>${c[i].name}</span>
                  <span class="mdl-list__item-text-body">
                    ${c[i].text}
                  </span>
                </span>
                <span class="mdl-list__item-secondary-content">
                  <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>
                </span>
            </li>
        `
    }
    return t
}

/*
                  ${json.body[i].comments.map(key => (
                    `
                    <li class="mdl-list__item mdl-list__item--three-line">
                        <span class="mdl-list__item-primary-content">
                          <i class="material-icons mdl-list__item-avatar">person</i>
                          <span>${key.name}</span>
                          <span class="mdl-list__item-text-body">
                            ${key.text}
                          </span>
                        </span>
                        <span class="mdl-list__item-secondary-content">
                          <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>
                        </span>
                    </li>
                    `
                  )).join('')}
*/