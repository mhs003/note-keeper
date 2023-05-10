const ajax = () => {};

ajax.get = (url, callback, isAsync) => {
    makeAjax('GET', url, callback, isAsync);
};

ajax.post = (url, parameter_object, callback, isAsync) => {
    makeAjax('POST', url, callback, isAsync, parameter_object);
};

function makeAjax(method, url, callback, isAsync = true, parameter_object) {
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState === 4) {
            callback(this.responseText, this.status.toString().startsWith('2') ? 'success' : 'error', this.status);
        }
    };
    xhttp.open(method, url, isAsync);
    if(parameter_object != null && method === 'POST') {
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(parseParams(parameter_object));
    } else {
        xhttp.send();
    }
}

function parseParams(obj) {
    var k, array;
    array = [];

    for(k in obj) {
        array.push(k + '=' + obj[k]);
    }

    return array.join('&');
}

export default ajax;