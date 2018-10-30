import XLSX from 'xlsx';
export default {
    formatDateFromIntToString: function(value) {
        if (value) {
            return moment(value).format('DD MMM YYYY')
        }
        return '';
    },
    formatDateWithMinuteFromInt: function (value) {
      if (value) {
        return moment(value).format('DD MMM YYYY HH:mm');
      }
      return '';
    },
    getTimezoneName: function () {
        return moment.tz.guess();
    },
    exportXLSX: (data, fileName, sheetName) =>{
        var ws = XLSX.utils.json_to_sheet(data);
        /* add to workbook */
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, sheetName);
        XLSX.writeFile(wb, fileName);
    },
    exportResultXLSX: (dataSheet1, dataSheet2, fileName, sheetName1, sheetName2) =>{
        var ws1 = XLSX.utils.json_to_sheet(dataSheet1);
        /* add to workbook */
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws1, sheetName1);
        var ws2 = XLSX.utils.json_to_sheet(dataSheet2);
        XLSX.utils.book_append_sheet(wb, ws2, sheetName2);
        XLSX.writeFile(wb, fileName);
    },
    translateByDrupal: function (value, parameters) {
        if (!value) return '';
        return Drupal.t(value, parameters); //Drupal is required before loading Util
    },
    getAllUrlParams: function(url) {

    // get query string from url (optional) or window
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

    // we'll store the parameters here
    var obj = {};

    // if query string exists
    if (queryString) {

        // stuff after # is not part of query string, so get rid of it
        queryString = queryString.split('#')[0];

        // split our query string into its component parts
        var arr = queryString.split('&');

        for (var i=0; i<arr.length; i++) {
            // separate the keys and the values
            var a = arr[i].split('=');

            // in case params look like: list[]=thing1&list[]=thing2
            var paramNum = undefined;
            var paramName = a[0].replace(/\[\d*\]/, function(v) {
                paramNum = v.slice(1,-1);
                return '';
            });

            // set parameter value (use 'true' if empty)
            var paramValue = typeof(a[1])==='undefined' ? true : a[1];

            // (optional) keep case consistent
            paramName = paramName.toLowerCase();
            paramValue = paramValue.toLowerCase();

            // if parameter name already exists
            if (obj[paramName]) {
                // convert value to array (if still string)
                if (typeof obj[paramName] === 'string') {
                    obj[paramName] = [obj[paramName]];
                }
                // if no array index number specified...
                if (typeof paramNum === 'undefined') {
                    // put the value on the end of the array
                    obj[paramName].push(paramValue);
                }
                // if array index number specified...
                else {
                    // put the value at that index number
                    obj[paramName][paramNum] = paramValue;
                }
            }
            // if param name doesn't exist yet, set it
            else {
                obj[paramName] = paramValue;
            }
        }
    }

    return obj;
},

    isUrl: function(s){
        var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
        return regexp.test(s);
    }
}