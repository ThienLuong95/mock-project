export class Loader {
    constructor(doc) {
        this.doc = doc;
    }

    load(tag, url, resolve, reject) {
        let element;
        let parent;
        let attribute;
        let flag = true;

        switch (tag) {
            case 'script':
                element = this.doc.createElement('script');
                attribute = 'src';
                parent = 'body';
                break;
            case 'style':
                element = this.doc.createElement('style');
                attribute = 'href';
                parent = 'head';
                element.type = 'text/css';
                element.rel = 'stylesheet';
                break;
            default:
                flag = false;
                throw new Error("Unsupported tag");
        }
        if (flag) {
            element[attribute] = url;
            element.addEventListener('load', () => {
                resolve(url)
            });
            element.addEventListener('error', (message) => {
                reject(url);
                console.log(message)
            });
            this.doc[parent].appendChild(element);
        }
    }

    loadCSS(url){
        return new Promise((resolve, reject) => this.load('style', url, resolve, reject));
    }
    loadJS(url) {
        return new Promise((resolve, reject) => this.load('script', url, resolve, reject));
    }

}
