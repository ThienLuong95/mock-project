function getElment(id){
    document.getElementById(id)
}
var cmRoot9539 =getElment('cmRoot9539');
var cmStyle9539=getElment('cmStyle9539');
var cmScript9539=getElment('cmScript9539');

function cmInnerElementByType(type, text) {

    var id='';
    switch (type) {
        case 'html':
            cmRoot9539.innerHTML=text;
            break;
        case 'css':
            cmStyle9539.innerHTML=text;
            break;
        default: throw new Error ('Unknown type');
    }

}
function cmEvalComponentByScript(script) {
    eval(script);
}
function writeHeadTag() {
    
}
