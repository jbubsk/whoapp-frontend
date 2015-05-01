var loaderActions = require('../actions/loaderActions');
var ajax = {

    public_api: '/api',
    private_api: '/api/private',
    services_host: "http://whoappbackend-jbubsk.rhcloud.com",

    send: function (params) {
        var url = this.services_host,
            _loaderState = params.LoaderActions !== false;

        if (params.publicApi === true) {
            url += this.public_api + params.url;
        } else if (params.publicApi === undefined || params.publicApi === false) {
            url += this.private_api + params.url;
        }

        loaderActions.toggle(_loaderState);
        $.ajax({
            url: url,
            method: params.method,
            data: params.data,
            xhrFields: {
                withCredentials: true
            },
            success: function (data) {
                if (params.success) {
                    params.success(data);
                }
                loaderActions.toggle(!_loaderState);
            },
            error: function (error) {
                console.error("Response text: " + error.responseText + "Status: " + error.status + "\nStatus text: " + error.statusText);
                if (params.error) {
                    params.error(error);
                }
                loaderActions.toggle(!_loaderState);
            }
        });
    }
};

module.exports = ajax;
