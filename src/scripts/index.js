import '../styles/index.scss';

let pathName = window.location.pathname.split('/');
let lastPath = pathName.pop();
lastPath = lastPath.replace('.html', '') || 'home';
document.body.classList.add(`page--${lastPath}`);

console.log('webpack starterkit');
