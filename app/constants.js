import {renderPost} from './components/post.js';
import {renderUsersList} from './components/users_list.js';

const appPage = document.querySelector('#main-content');
const userList = document.querySelector('#main_user_list');

export let render_array = [
    {
        src: "live_DB/post.json",
        div: appPage,
        func: renderPost
    },
    {
        src: "live_DB/users.json",
        div: userList,
        func: renderUsersList
    }
];