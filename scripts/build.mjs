import {cpSync,mkdirSync} from 'node:fs';
mkdirSync('dist',{recursive:true});cpSync('www','dist',{recursive:true});
console.log('Sitio listo en dist/');
