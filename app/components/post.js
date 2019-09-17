import {calculateTimeAgo} from './time_ago.js';
import {listComments} from './comments.js';

export function renderPost(json, div, date = calculateTimeAgo, comments = listComments) {
    div.innerHTML = '';
    for (let i = 0; i < json.body.length; i++) {
        div.innerHTML += `
        <div id="post_${i}" class="padd">
          <div class="box-body mdl-shadow--2dp">
            <div class="padd mdl-card__title">
                <a href="#" class="flex-box user-menu-picture" style="margin: 0; margin-right: 13px;">
                    <img src="${json.body[i].user.img}"/>
                </a>
                <div class="flex-col">
                  <span>${json.body[i].user.name}</span>
                  <span class="light-color">
                      &#8986; ${date(json.body[i].tsp_caricamento)}
                  </span>
                </div>
                <div class="mdl-layout-spacer"></div>
                <div class="flex-end" style="position: relative;">
                    <button id="post-menu-${i}"
                            class="mdl-button mdl-js-button mdl-button--icon">
                      <i class="material-icons">more_vert</i>
                    </button>

                    <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                        for="post-menu-${i}">
                      <li class="mdl-menu__item">Segnala Post</li>
                      <li class="mdl-menu__item">Nascondi Post</li>
                      <li class="mdl-menu__item">Non Seguire Più Isabella</li>
                    </ul>
                </div>
            </div>
            <div class="box-text padd">
                <span>
                  ${json.body[i].text}
                </span>
            </div>
            <div class="box-img">
                <img src="${json.body[i].img}" style="width: 100%; height: auto;"/>
            </div>
            <div id="card_footer_${i}" class="action-card-container">
                <div id="form_post_${i}" class="padd form-post-comment">
                    <form action="#" style="padding: 0 16px;">
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width: 100%;">
                          <textarea class="mdl-textfield__input" type="text" rows= "3" id="form_post_text_${i}" ></textarea>
                          <label class="mdl-textfield__label" for="form_post_text_${i}">Text...</label>
                        </div>
                        <div class="flex-end">
                            <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                                Salva
                            </button>
                        </div>
                    </form>
                </div>
                <div class="box-container">
                    <div class="padd">
                        <a class="mdl-button mdl-js-button mdl-button--accent" href="#post_comments_${i}" onclick="document.querySelector('#post_comments_${i}').style.height = 'auto';">
                            Commenti
                        </a>
                    </div>
                    <div class="padd">
                        <button class="mdl-button mdl-js-button mdl-button--primary" onclick="document.querySelector('#form_post_${i}').style.display='block'; document.querySelector('#card_footer_${i}').style.height='180px';">
                            <i class="material-icons">add_comment</i>
                        </button>
                        <button class="mdl-button mdl-js-button mdl-button--accent">
                            <i class="material-icons">star</i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="page-content box-container">
                <ul id="post_comments_${i}" style="height: 0; overflow: hidden;" class="padd mdl-list">
                    ${comments(json.body[i].comments)}
                </ul>
            </div>
          </div>
        </div>
        `
    }
}