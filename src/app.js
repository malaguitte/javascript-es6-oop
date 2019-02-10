import {Car} from './classes/car.js';
import {Drone} from './classes/Drone.js';
import {data} from './data/data.js';
import {DataService} from './services/data-service.js';
import {Button} from './ui/button.js';
import {Image} from './ui/image.js';
import {TitleBar} from './ui/title-bar.js';


let dataService = new DataService();
dataService.loadData(data);

let titleBar = new TitleBar('My Application');
titleBar.addLink('Home', '');
titleBar.addLink('Cars', '');
titleBar.addLink('Drones', '');
titleBar.addLink('Map', '');
titleBar.appendToElement($('body'));
