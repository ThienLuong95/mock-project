var _cmTemplate9539 = _cmGetElementByID('cmTemplate9539');
var _cmStyle9539 = _cmGetElementByID('cmStyle9539');
var _cmScript9539 = _cmGetElementByID('cmScript9539');
var _cmTemplateLastContent = '';
var _cmStyleLastContent = '';

var _cmLastHeadText = '';
var _cmLastListLink = [];
var _cmLastListScript = [];


function _cmGetElementByID(id) {
    return document.getElementById(id);
}

function _cmCreateElement(type) {
    return document.createElement(type);
}

function _cmIsEquals(lastContent, newContent) {
    return lastContent === newContent;
}

function _cmCreateUrlElement(type, url) {
    var _element;
    switch (type) {
        case 'link':
            _element = _cmCreateElement('link');
            _element.rel = 'stylesheet';
            _element.type = 'text/css';
            _element.href = url;
            break;
        case 'script':
            _element = _cmCreateElement('script');
            _element.src = url;
            break;
        default:
            throw new Error('Unsupported Type!');

    }
    return _element;
}

function _cmClearArrayLink() {
    _cmLastListLink = [];

}

function _cmClearArrayScript() {
    _cmLastListScript = [];
}

function _cmRemoveElementInDOM(parentName, element) {
    document[parentName].removeChild(element);
}

function _cmRemoveElementsInDOM(parentName, elements) {
    for (var i = 0; i < elements.length; i++) {
        _cmRemoveElementInDOM(parentName, elements[i]);
    }
}

function _cmWriteHeadTag(headText) {
    document.head.innerHTML = headText;
}

function _cmAppendElementToParent(parentName, element) {
    document[parentName].appendChild(element);
}

function _cmPushLinkElementToArrayLink(element) {
    _cmLastListLink.push(element);
}

function _cmPushScriptElementToArrayScript(element) {
    _cmLastListScript.push(element);
}

function _cmAppendAndStoredLinkElement(linkElement) {
    _cmAppendElementToParent('head', linkElement);
    _cmPushLinkElementToArrayLink(linkElement);
}

function _cmAppendAndStoredScriptElement(scriptElement) {
    _cmAppendElementToParent('body', scriptElement);
    _cmPushScriptElementToArrayScript(scriptElement);
}

function _cmAppendLinksToDOM(linkUrls) {
    var _tempElement;
    for (var i = 0; i < linkUrls.length; i++) {
        _tempElement = _cmCreateUrlElement('link', linkUrls[i]);
        _cmAppendAndStoredLinkElement(_tempElement);
    }
}

function _cmAppendScriptsToDOM(scriptUrls) {
    var _tempElement;
    for (var i = 0; i < scriptUrls.length; i++) {
        _tempElement = _cmCreateUrlElement('script', scriptUrls[i]);
        _cmAppendAndStoredScriptElement(_tempElement);
    }
}

function _cmInnerElement(element, text) {
    element.innerHTML = text;
}

function _cmInnerTemplate(template) {
    _cmInnerElement(_cmTemplate9539, template);
    console.log(template)

}

function _cmInnerStyle(style) {
    _cmInnerElement(_cmStyle9539, style);
    console.log(style)

}

function _cmEvalScript(script) {
    eval(script);
    console.log(script);
}

// main function
function cmWriteExternalSource(headText, linkUrls, scriptUrls) {
    //appLinks and headText
    if (_cmIsEquals(_cmLastHeadText, headText)) {
        //no need to write tag head
        //clear
        _cmRemoveElementsInDOM('head', _cmLastListLink);
        _cmClearArrayLink();
        //append and stored
        _cmAppendLinksToDOM(linkUrls);

    } else {
        _cmLastHeadText = headText;
        _cmWriteHeadTag(headText);
        _cmClearArrayLink();
        //append and stored
        _cmAppendLinksToDOM(linkUrls);
        // append style
        _cmAppendElementToParent('head', _cmStyle9539);

    }
    // appendScript
    //clear
    _cmRemoveElementsInDOM('body', _cmLastListScript);
    _cmClearArrayScript();
    //append and stored
    _cmAppendScriptsToDOM(scriptUrls);

}

function cmOnRun(html, css, js) {
    _cmInnerTemplate(html);
    _cmInnerStyle(css);
    _cmEvalScript(js);
}


