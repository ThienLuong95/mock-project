
import {Loader} from "./Loader"

let loader= new Loader(document);
let scripts=[];
let styles=[];
function setExternalSources(_scrips, _styles) {
    scripts=_scrips;
    styles=_styles;
}
function getExternalSources() {
    let arr=[];
    let temp;
    for (let script of scripts){
       temp=loader.loadCSS(script.url);
       arr.push(temp);
    } for (let style of styles){
       temp=loader.loadCSS(style.url);
       arr.push(temp);
    }
    return arr;
}
function loadExternalSources(){
    Promise.all(getExternalSources()).then(
    function () {
        console.log('resolve')
    }
    ).catch(function (message) {
        console.log(message)
    })
}

