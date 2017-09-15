import path from 'path';
const config= new Map();
config.set('port',3000);
config.set('viewsDir',path.join(__dirname,'..','views'));
config.set('staticDir',path.join(__dirname,'..','public'));
export default config; 