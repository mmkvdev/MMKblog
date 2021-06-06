import engine from 'store/src/store-engine';
import sessionStorage from 'store/storages/sessionStorage';
import defaults from 'store/plugins/defaults';
import expire from 'store/plugins/expire';

export default engine.createStore([sessionStorage, [defaults, expire]]);