
var AccessToken = "";
var PatronToken = "";

function initialize() {
    menuMainItemClick('authentication')
}

function menuMainItemClick(selection) {

    var authenticationMenu = document.getElementById('authenticationMenu');
    authenticationMenu.style.display = 'none';
    var circulationMenu = document.getElementById('circulationMenu');
    circulationMenu.style.display = 'none';
    var maintenanceMenu = document.getElementById('maintenanceMenu');
    maintenanceMenu.style.display = 'none';
    var informationMenu = document.getElementById('informationMenu');
    informationMenu.style.display = 'none';
    var searchMenu = document.getElementById('searchMenu');
    searchMenu.style.display = 'none';

    if (selection == 'authentication') {
        authenticationMenu.style.display = 'block';
        menuItemClick('authVendor');
    } else if (selection == 'circulation') {
        circulationMenu.style.display = 'block';
        menuItemClick('checkOut');
    } else if (selection == 'maintenance') {
        maintenanceMenu.style.display = 'block';
        menuItemClick('createPatron');
    } else if (selection == 'information') {
        informationMenu.style.display = 'block';
        menuItemClick('patronInfo');
    } else if (selection == 'search') {
        searchMenu.style.display = 'block';
        menuItemClick('patronSearch');
    }
}

function menuItemClick(selection) {

    var authVendor = document.getElementById('authVendor');
    authVendor.style.display = 'none';
    var authPatron = document.getElementById('authPatron');
    authPatron.style.display = 'none';
    var valBearer = document.getElementById('valBearer');
    valBearer.style.display = 'none';
    var patronInfo = document.getElementById('patronInfo');
    patronInfo.style.display = 'none';
    var contactInfo = document.getElementById('contactInfo');
    contactInfo.style.display = 'none';
    var loanInfo = document.getElementById('loanInfo');
    loanInfo.style.display = 'none';
    var reservationInfo = document.getElementById('reservationInfo');
    reservationInfo.style.display = 'none';
    var reservationCount = document.getElementById('reservationCount');
    reservationCount.style.display = 'none';
    var chargeInfo = document.getElementById('chargeInfo');
    chargeInfo.style.display = 'none';
    var paymentInfo = document.getElementById('paymentInfo');
    paymentInfo.style.display = 'none';
    var locationInfo = document.getElementById('locationInfo');
    locationInfo.style.display = 'none';
    var itemInfo = document.getElementById('itemInfo');
    itemInfo.style.display = 'none';
    var itemCount = document.getElementById('itemCount');
    itemCount.style.display = 'none';
    var bibliographicInfo = document.getElementById('bibliographicInfo');
    bibliographicInfo.style.display = 'none';
    var lookupInfo = document.getElementById('lookupInfo');
    lookupInfo.style.display = 'none';

    var checkIn = document.getElementById('checkIn');
    checkIn.style.display = 'none';
    var checkOut = document.getElementById('checkOut');
    checkOut.style.display = 'none';
    var renewal = document.getElementById('renewal');
    renewal.style.display = 'none';
    var addHold = document.getElementById('addHold');
    addHold.style.display = 'none';
    var updateHold = document.getElementById('updateHold');
    updateHold.style.display = 'none';
    var removeHold = document.getElementById('removeHold');
    removeHold.style.display = 'none';
    var payment = document.getElementById('payment');
    payment.style.display = 'none';
    var addCharge = document.getElementById('addCharge');
    addCharge.style.display = 'none';
    var cancelCharge = document.getElementById('cancelCharge');
    cancelCharge.style.display = 'none';

    var createPatron = document.getElementById('createPatron');
    createPatron.style.display = 'none';
    var updatePatron = document.getElementById('updatePatron');
    updatePatron.style.display = 'none';
    var createContact = document.getElementById('createContact');
    createContact.style.display = 'none';
    var updateContact = document.getElementById('updateContact');
    updateContact.style.display = 'none';

    var patronSearch = document.getElementById('patronSearch');
    patronSearch.style.display = 'none';
    var contactSearch = document.getElementById('contactSearch');
    contactSearch.style.display = 'none';
    var loanSearch = document.getElementById('loanSearch');
    loanSearch.style.display = 'none';
    var reservationSearch = document.getElementById('reservationSearch');
    reservationSearch.style.display = 'none';
    var chargeSearch = document.getElementById('chargeSearch');
    chargeSearch.style.display = 'none';
    var paymentSearch = document.getElementById('paymentSearch');
    paymentSearch.style.display = 'none';
    var locationSearch = document.getElementById('locationSearch');
    locationSearch.style.display = 'none';
    var itemSearch = document.getElementById('itemSearch');
    itemSearch.style.display = 'none';
    var bibliographicSearch = document.getElementById('bibliographicSearch');
    bibliographicSearch.style.display = 'none';
    var opacLogin = document.getElementById('opacLogin');
    opacLogin.style.display = 'none';

    if (selection == 'authVendor')
        authVendor.style.display = 'block';
    else if (selection == 'authPatron')
        authPatron.style.display = 'block';
    else if (selection == 'valBearer')
        valBearer.style.display = 'block';
    else if (selection == 'patronInfo')
        patronInfo.style.display = 'block';
    else if (selection == 'contactInfo')
        contactInfo.style.display = 'block';
    else if (selection == 'loanInfo')
        loanInfo.style.display = 'block';
    else if (selection == 'reservationInfo')
        reservationInfo.style.display = 'block';
    else if (selection == 'reservationCount')
        reservationCount.style.display = 'block';
    else if (selection == 'chargeInfo')
        chargeInfo.style.display = 'block';
    else if (selection == 'paymentInfo')
        paymentInfo.style.display = 'block';
    else if (selection == 'locationInfo')
        locationInfo.style.display = 'block';
    else if (selection == 'itemInfo')
        itemInfo.style.display = 'block';
    else if (selection == 'itemCount')
        itemCount.style.display = 'block';
    else if (selection == 'bibliographicInfo')
        bibliographicInfo.style.display = 'block';
    else if (selection == 'lookupInfo')
        lookupInfo.style.display = 'block';
    else if (selection == 'checkIn')
        checkIn.style.display = 'block';
    else if (selection == 'checkOut')
        checkOut.style.display = 'block';
    else if (selection == 'renewal')
        renewal.style.display = 'block';
    else if (selection == 'addHold')
        addHold.style.display = 'block';
    else if (selection == 'updateHold')
        updateHold.style.display = 'block';
    else if (selection == 'removeHold')
        removeHold.style.display = 'block';
    else if (selection == 'payment')
        payment.style.display = 'block';
    else if (selection == 'addCharge')
        addCharge.style.display = 'block';
    else if (selection == 'cancelCharge')
        cancelCharge.style.display = 'block';
    else if (selection == 'createPatron')
        createPatron.style.display = 'block';
    else if (selection == 'updatePatron')
        updatePatron.style.display = 'block';
    else if (selection == 'createContact')
        createContact.style.display = 'block';
    else if (selection == 'updateContact')
        updateContact.style.display = 'block';
    else if (selection == 'patronSearch')
        patronSearch.style.display = 'block';
    else if (selection == 'contactSearch')
        contactSearch.style.display = 'block';
    else if (selection == 'loanSearch')
        loanSearch.style.display = 'block';
    else if (selection == 'reservationSearch')
        reservationSearch.style.display = 'block';
    else if (selection == 'chargeSearch')
        chargeSearch.style.display = 'block';
    else if (selection == 'paymentSearch')
        paymentSearch.style.display = 'block';
    else if (selection == 'locationSearch')
        locationSearch.style.display = 'block';
    else if (selection == 'itemSearch')
        itemSearch.style.display = 'block';
    else if (selection == 'bibliographicSearch')
        bibliographicSearch.style.display = 'block';
    else if (selection == 'opacLogin')
        opacLogin.style.display = 'block';
}

function authenticateVendor() {
    try {
        var serialization = $('input[name="authVendorSerType"]:checked').val();
        var username = $('#authVendorUsername').val().trim();
        var password = $('#authVendorPassword').val().trim();
        var institutionId = $('#authVendorInstitutionId').val().trim();
        var libraryId = $('#authVendorLibarayId').val().trim();
        var expires = $('#authVendorExpires').val().trim();
        var key = $('#authVendorKey').val().trim().trim();
        var url = "http://webapi-spydus.civica.com.au/lcf/1.0/Authenticate/vendor";
        var authorization = 'Basic ' + $.base64.btoa(key + ':' + username + ':' + password + ':' + institutionId + ':' + libraryId);
        var request = "";

        if (key == "")
            throw new Error("Key missing.");
        if (username == "")
            throw new Error("Username missing.");
        if (password == "")
            throw new Error("Password missing.");
        if (institutionId == "")
            throw new Error("Institution Id missing.");
        if (libraryId == "")
            throw new Error("Library Id missing.");

        $('#authVendorHttpStatus').val('');
        $('#authVendorOutput').text('');
        $.ajax({
            type: "POST",
            url: url,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (expires != '')
                    request.setRequestHeader("TKN_EXP", expires);
            },
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    AccessToken = data.Access_Token;
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            var response = serializer.serializeToString(data[0]);
                            var domParser = new DOMParser();
                            var dom = domParser.parseFromString(response, "text/xml");
                            var xmlElements = dom.getElementsByTagName('Access_Token')[0];
                            var xmlNode = xmlElements.childNodes[0];
                            AccessToken = xmlNode.nodeValue;
                        }
                    }
                }
                $('#authVendorHttpStatus').val(xhr.status);
                $('#authVendorOutput').text(response);
                $('#validateBearerToken').val(AccessToken);

                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                $('#authVendorHttpStatus').val(http.status);
                $('#authVendorOutput').text(http.responseText);
                alert(http.responseText);
            }
        });
    } catch (e) {
        alert(e.message);
    }
}

function authenticatePatron() {
    try {
        var serialization = $('input[name="authPatronSerType"]:checked').val();
        var username = $('#authPatronUsername').val().trim();
        var password = $('#authPatronPassword').val().trim();
        var expires = $('#authPatronExpires').val().trim();
        var url = "lcf/1.0/Authenticate/patron";
        var authorization = 'Bearer ' + AccessToken;
        var patronAuth = 'Basic ' + $.base64.btoa(username + ':' + password);
        var request = "";

        if (username == "")
            throw new Error("Username missing.");
        if (password == "")
            throw new Error("Password missing.");

        $('#authPatronHttpStatus').val('');
        $('#authPatronOutput').text('');
        $.ajax({
            type: "POST",
            url: url,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (expires != '')
                    request.setRequestHeader("TKN_EXP", expires);
                request.setRequestHeader("PATRON_AUTH", patronAuth);
            },
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    PatronToken = data.Access_Token;
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            var response = serializer.serializeToString(data[0]);
                            var domParser = new DOMParser();
                            var dom = domParser.parseFromString(response, "text/xml");
                            var xmlElements = dom.getElementsByTagName('Access_Token')[0];
                            var xmlNode = xmlElements.childNodes[0];
                            PatronToken = xmlNode.nodeValue;
                        }
                    }
                }
                $('#authPatronHttpStatus').val(xhr.status);
                $('#authPatronOutput').text(response);
                $('#validateBearerToken').val(PatronToken);

                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                PatronToken = '';
                $('#authPatronHttpStatus').val(http.status);
                $('#authPatronOutput').text(http.responseText);
                alert(http.responseText);
            }
        });
    } catch (e) {
        alert(e.message);
    }
}

function validateBearerToken() {
    try {
        var token = $('#validateBearerToken').val().trim();
        var serialization = $('input[name="validateBearerTokenSerType"]:checked').val();
        var tokenType = $('input[name="validateBearerTokenType"]:checked').val();
        var url = "lcf/1.0/validatetoken/" + tokenType;
        var request = "";

        if (token == "")
            throw new Error("Bearer token missing.");

        $('#validateBearerHttpStatus').val('');
        $('#validateBearerTokenOutput').text('');
        $.ajax({
            type: "GET",
            url: url,
            beforeSend: function (request) {

                if (tokenType == "vendor")
                    request.setRequestHeader("Authorization", 'Bearer ' + token);
                else
                    request.setRequestHeader("PATRON_AUTH", token);

                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
            },
            success: function (data, http, xhr) {
                var response;
                var message;
                if (serialization == 'json') {
                    message = data.message;
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            var response = serializer.serializeToString(data[0]);
                            var domParser = new DOMParser();
                            var dom = domParser.parseFromString(response, "text/xml");
                            var xmlElements = dom.getElementsByTagName('message')[0];
                            var xmlNode = xmlElements.childNodes[0];
                            message = xmlNode.nodeValue;
                        }
                    }
                }
                $('#validateBearerHttpStatus').val(xhr.status);
                $('#validateBearerTokenOutput').text(response);
                if (tokenType == "vendor")
                    AccessToken = token;
                else
                    PatronToken = token;
                alert(message);
            },
            error: function (http) {
                $('#validateBearerHttpStatus').val(http.status);
                $('#validateBearerTokenOutput').text(http.responseText);
                alert(http.responseText);
            }
        });
    } catch (e) {
        alert(e.message)
    }
}

function patronInfo() {
    try {
        var url = "lcf/1.0/patron/";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = $('input[name="patronInfoSerType"]:checked').val();
        var patronIdentifier = $('#patronInfoPatronIdentifier').val().trim();
        var identifierType = $('input[name="patronIdentifierType"]:checked').val();
        var validatePatronToken = $('input[name="patronInfoValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;
        var request = "";

        if (patronIdentifier == "")
            throw new Error("Patron identifier missing.");

        url += patronIdentifier;

        if (identifierType == "irn")
            url += "?id-type=irn";

        $('#patronInfoHttpStatus').val('');
        $('#patronInfoOutput').text('');
        $.ajax({
            type: "GET",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                $('#patronInfoHttpStatus').val(xhr.status);
                $('#patronInfoOutput').text(response);

                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                $('#patronInfoHttpStatus').val(http.status);
                $('#patronInfoOutput').text(http.responseText);
                alert(http.responseText);
            }
        });
    } catch (e) {
        alert(e.message);
    }
}

function contactInfo() {
    try {

        var url = "lcf/1.0/contact/";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = $('input[name="contactInfoSerType"]:checked').val();
        var contactIdentifier = $('#contactInfoItemIdentifier').val().trim();
        var validatePatronToken = $('input[name="contactInfoValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;
        var request = "";

        if (contactIdentifier == "")
            throw new Error("Contact identifier missing.");

        url += contactIdentifier;

        $('#contactInfoHttpStatus').val('');
        $('#contactInfoOutput').text('');
        $.ajax({
            type: "GET",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                $('#contactInfoHttpStatus').val(xhr.status);
                $('#contactInfoOutput').text(response);

                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                $('#contactInfoHttpStatus').val(http.status);
                $('#contactInfoOutput').text(http.responseText);
                alert(http.responseText);
            }
        });
    } catch (e) {
        alert(e.message);
    }
}

function loanInfo() {
    try {
        var url = "lcf/1.0/loan/";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = $('input[name="loanInfoSerType"]:checked').val();
        var loanIdentifier = $('#loanInfoItemIdentifier').val().trim();
        var validatePatronToken = $('input[name="loanInfoValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;
        var request = "";

        if (loanIdentifier == "")
            throw new Error("Loan identifier missing.");

        url += loanIdentifier;

        $('#loanInfoHttpStatus').val('');
        $('#loanInfoOutput').text('');
        $.ajax({
            type: "GET",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                $('#loanInfoHttpStatus').val(xhr.status);
                $('#loanInfoOutput').text(response);

                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                $('#loanInfoHttpStatus').val(http.status);
                $('#loanInfoOutput').text(http.responseText);
                alert(http.responseText);
            }
        });
    } catch (e) {
        alert(e.message);
    }
}

function reservationInfo() {
    try {
        var url = "lcf/1.0/reservation/";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = $('input[name="reservationInfoSerType"]:checked').val();
        var reservationIdentifier = $('#reservationInfoItemIdentifier').val().trim();
        var validatePatronToken = $('input[name="reservationInfoValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;
        var request = "";

        if (reservationIdentifier == "")
            throw new Error("Reservation identifier missing.");

        url += reservationIdentifier;

        $('#reservationInfoHttpStatus').val('');
        $('#reservationInfoOutput').text('');
        $.ajax({
            type: "GET",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                $('#reservationInfoHttpStatus').val(xhr.status);
                $('#reservationInfoOutput').text(response);

                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                $('#reservationInfoHttpStatus').val(http.status);
                $('#reservationInfoOutput').text(http.responseText);
                alert(http.responseText);
            }
        });
    } catch (e) {
        alert(e.message);
    }
}

function reservationCount() {
    try {
        var url = "lcf/1.0/reservationcount/";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = $('input[name="reservationCountSerType"]:checked').val();
        var titleIdentifier = $('#reservationCountTitleIdentifier').val().trim();
        var validatePatronToken = $('input[name="reservationCountValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;

        var location = $('#reservationCountLocationIdentifier').val().trim();

        var request = "";

        if (titleIdentifier == "")
            throw new Error("Title identifier missing.");

        url += titleIdentifier;

        if (location != "")
            url += "?location=" + location;

        $('#reservationCountHttpStatus').val('');
        $('#reservationCountOutput').text('');
        $.ajax({
            type: "GET",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                $('#reservationCountHttpStatus').val(xhr.status);
                $('#reservationCountOutput').text(response);

                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                $('#reservationCountHttpStatus').val(http.status);
                $('#reservationCountOutput').text(http.responseText);
                alert(http.responseText);
            }
        });
    } catch (e) {
        alert(e.message);
    }
}

function chargeInfo() {
    try {
        var url = "lcf/1.0/charge/";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = $('input[name="chargeInfoSerType"]:checked').val();
        var chargeIdentifier = $('#chargeInfoItemIdentifier').val().trim();
        var validatePatronToken = $('input[name="chargeInfoValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;
        var request = "";

        if (chargeIdentifier == "")
            throw new Error("Charge identifier missing.");

        url += chargeIdentifier;

        $('#chargeInfoHttpStatus').val('');
        $('#chargeInfoOutput').text('');
        $.ajax({
            type: "GET",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                $('#chargeInfoHttpStatus').val(xhr.status);
                $('#chargeInfoOutput').text(response);

                if (xhr.status == '207')
                    alert(response);

            },
            error: function (http) {
                $('#chargeInfoHttpStatus').val(http.status);
                $('#chargeInfoOutput').text(http.responseText);
                alert(http.responseText);
            }
        });
    } catch (e) {
        alert(e.message);
    }
}

function paymentInfo() {
    try {

        var url = "lcf/1.0/payment/";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = $('input[name="paymentInfoSerType"]:checked').val();
        var paymentIdentifier = $('#paymentInfoItemIdentifier').val().trim();
        var validatePatronToken = $('input[name="paymentInfoValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;
        var request = "";

        if (paymentIdentifier == "")
            throw new Error("Payment identifier missing.");

        url += paymentIdentifier;

        $('#paymentInfoHttpStatus').val('');
        $('#paymentInfoOutput').text('');
        $.ajax({
            type: "GET",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                $('#paymentInfoHttpStatus').val(xhr.status);
                $('#paymentInfoOutput').text(response);

                if (xhr.status == '207')
                    alert(response);

            },
            error: function (http) {
                $('#paymentInfoHttpStatus').val(http.status);
                $('#paymentInfoOutput').text(http.responseText);
                alert(http.responseText);
            }
        });
    } catch (e) {
        alert(e.message);
    }
}

function locationInfo() {
    try {
        var url = "lcf/1.0/location/";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = $('input[name="locationInfoSerType"]:checked').val();
        var locationIdentifier = $('#locationInfoItemIdentifier').val().trim();
        var validatePatronToken = $('input[name="locationInfoValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;
        var request = "";

        if (locationIdentifier == "")
            throw new Error("Location identifier missing.");

        url += locationIdentifier;

        $('#locationInfoHttpStatus').val('');
        $('#locationInfoOutput').text('');
        $.ajax({
            type: "GET",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                $('#locationInfoHttpStatus').val(xhr.status);
                $('#locationInfoOutput').text(response);

                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                $('#locationInfoHttpStatus').val(http.status);
                $('#locationInfoOutput').text(http.responseText);
                alert(http.responseText);
            }
        });
    } catch (e) {
        alert(e.message);
    }
}

function itemInfo() {
    try {

        var url = "lcf/1.0/item/";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = $('input[name="itemInfoSerType"]:checked').val();
        var itemIdentifier = $('#itemInfoItemIdentifier').val().trim();
        var validatePatronToken = $('input[name="itemInfoValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;
        var request = "";

        if (itemIdentifier == "")
            throw new Error("Item identifier missing.");

        url += itemIdentifier;

        $('#itemInfoHttpStatus').val('');
        $('#itemInfoOutput').text('');
        $.ajax({
            type: "GET",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                $('#itemInfoHttpStatus').val(xhr.status);
                $('#itemInfoOutput').text(response);

                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                $('#itemInfoHttpStatus').val(http.status);
                $('#itemInfoOutput').text(http.responseText);
                alert(http.responseText);
            }
        });
    } catch (e) {
        alert(e.message);
    }
}

function itemCount() {
    try {
        var url = "lcf/1.0/itemcount/";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = $('input[name="itemCountSerType"]:checked').val();
        var titleIdentifier = $('#itemCountTitleIdentifier').val().trim();
        var validatePatronToken = $('input[name="itemCountValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;

        var location = $('#itemCountLocationIdentifier').val().trim();
        var includeOnOrder = $('input[name="itemCountIncludeOnOrder"]:checked').val();
        if (includeOnOrder != 'true')
            includeOnOrder = false;

        var request = "";

        if (titleIdentifier == "")
            throw new Error("Title identifier missing.");

        url += titleIdentifier;

        var queryString = "?include-on-order=N";
        if (includeOnOrder)
            queryString = "?include-on-order=Y";

        if (location != "") {
            queryString += "&location=" + location;
        }

        url += queryString;

        $('#itemCountHttpStatus').val('');
        $('#itemCountOutput').text('');
        $.ajax({
            type: "GET",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                $('#itemCountHttpStatus').val(xhr.status);
                $('#itemCountOutput').text(response);

                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                $('#itemCountHttpStatus').val(http.status);
                $('#itemCountOutput').text(http.responseText);
                alert(http.responseText);
            }
        });
    } catch (e) {
        alert(e.message);
    }
}

function bibliographicInfo() {
    try {

        var url = "lcf/1.0/manifestation/";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = $('input[name="bibliographicInfoSerType"]:checked').val();
        var manifestationIdentifier = $('#bibliographicInfoItemIdentifier').val().trim();
        var validatePatronToken = $('input[name="bibliographicInfoValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;
        var request = "";

        if (manifestationIdentifier == "")
            throw new Error("Bibliographic identifier missing.");

        url += manifestationIdentifier;

        $('#bibliographicInfoHttpStatus').val('');
        $('#bibliographicInfoOutput').text('');
        $.ajax({
            type: "GET",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                $('#bibliographicInfoHttpStatus').val(xhr.status);
                $('#bibliographicInfoOutput').text(response);

                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                $('#bibliographicInfoHttpStatus').val(http.status);
                $('#bibliographicInfoOutput').text(http.responseText);
                alert(http.responseText);
            }
        });
    } catch (e) {
        alert(e.message);
    }
}

function lookupInfo() {
    try {
        var url = "lcf/1.0/lookup/";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = $('input[name="lookupInfoSerType"]:checked').val();
        var lookupIdentifier = $('#lookupInfoItemIdentifier').val().trim();
        var validatePatronToken = $('input[name="lookupInfoValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;
        var request = "";

        if (lookupIdentifier == "")
            throw new Error("Lookup identifier missing.");

        url += lookupIdentifier;

        $('#lookupInfoHttpStatus').val('');
        $('#lookupInfoOutput').text('');
        $.ajax({
            type: "GET",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                $('#lookupInfoHttpStatus').val(xhr.status);
                $('#lookupInfoOutput').text(response);

                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                $('#lookupInfoHttpStatus').val(http.status);
                $('#lookupInfoOutput').text(http.responseText);
                alert(http.responseText);
            }
        });
    } catch (e) {
        alert(e.message);
    }
}

function checkIn() {
    try {
        var url = "lcf/1.0/loan/";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = $('input[name="checkInSerType"]:checked').val();
        var identifier = $('#checkInIdentifier').val().trim();
        var identifierType = $('input[name="checkInIdentifierType"]:checked').val();
        var validatePatronToken = $('input[name="checkInValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;

        if (identifier == "")
            throw new Error("Item identifier missing.");

        url += identifier;

        if (identifierType == "item")
            url += "?id-type=item";

        var request = "";

        if (serialization == 'xml') {
            request = "<loan version=\"1.0\" xmlns=\"http://ns.bic.org.uk/lcf/1.0\">" +
                "<loan-status>08</loan-status>" +
                "</loan>";
        }
        else {
            var json = {
                "version": "1.0",
                "loan-status": ["08"],
            }
            request = JSON.stringify(json);
        }

        $('#checkInHttpStatus').val('');
        $('#checkInOutput').text('');
        $.ajax({
            type: "PUT",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                $('#checkInHttpStatus').val(xhr.status);
                $('#checkInOutput').text(response);

                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                $('#checkInHttpStatus').val(http.status);
                $('#checkInOutput').text(http.responseText);
                alert(http.responseText);
            }
        });
    } catch (e) {
        alert(e.message);
    }
}

function checkOutConfirmation() {
    var chargeAcknowledged = document.getElementById('checkOutChargeAcknowledged');
    var confirmation = $('input[name="checkOutConfirmation"]:checked').val();
    if (confirmation != 'true')
        chargeAcknowledged.disabled = false;
    else
        chargeAcknowledged.disabled = true;
}

function checkOut() {
    try {
        var url = "lcf/1.0/loan";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = $('input[name="checkOutSerType"]:checked').val();
        var itemIdentifier = $('#checkOutItemIdentifier').val().trim();
        var patronIdentifier = $('#checkOutPatronIdentifier').val().trim();
        var validatePatronToken = $('input[name="checkOutValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;
        var confirmation = $('input[name="checkOutConfirmation"]:checked').val();
        if (confirmation != 'true')
            confirmation = false;
        var chargeAcknowledged = $('input[name="checkOutChargeAcknowledged"]:checked').val();
        if (chargeAcknowledged != 'true')
            chargeAcknowledged = false;

        if (confirmation)
            url += "?confirmation=Y";
        else if (chargeAcknowledged)
            url += "?charge-acknowledged=Y";

        if (itemIdentifier == "")
            throw new Error("Item identifier missing.");
        if (patronIdentifier == "")
            throw new Error("Patron identifier missing.");

        var request = "";

        if (serialization == 'xml') {
            request = "<loan version=\"1.0\" xmlns=\"http://ns.bic.org.uk/lcf/1.0\">" +
                "<patron-ref>" + patronIdentifier + "</patron-ref>" +
                "<item-ref>" + itemIdentifier + "</item-ref>" +
                "</loan>";
        }
        else {
            var json = {
                "version": "1.0",
                "patron-ref": patronIdentifier,
                "item-ref": itemIdentifier,
            }
            request = JSON.stringify(json);
        }

        $('#checkOutHttpStatus').val('');
        $('#checkOutOutput').text('');
        $.ajax({
            type: "POST",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                $('#checkOutHttpStatus').val(xhr.status);
                $('#checkOutOutput').text(response);

                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                $('#checkOutHttpStatus').val(http.status);
                $('#checkOutOutput').text(http.responseText);
                alert(http.responseText);
            }
        });

    } catch (e) {
        alert(e.message);
    }
}

function renewalConfirmation() {
    var chargeAcknowledged = document.getElementById('renewalChargeAcknowledged');
    var confirmation = $('input[name="renewalConfirmation"]:checked').val();
    if (confirmation != 'true')
        chargeAcknowledged.disabled = false;
    else
        chargeAcknowledged.disabled = true;
}

function renewal() {
    try {
        var url = "lcf/1.0/loan";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = $('input[name="renewalSerType"]:checked').val();
        var itemIdentifier = $('#renewalItemIdentifier').val().trim();
        var patronIdentifier = $('#renewalPatronIdentifier').val().trim();
        var validatePatronToken = $('input[name="renewalValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;
        var confirmation = $('input[name="renewalConfirmation"]:checked').val();
        if (confirmation != 'true')
            confirmation = false;
        var chargeAcknowledged = $('input[name="renewalChargeAcknowledged"]:checked').val();
        if (chargeAcknowledged != 'true')
            chargeAcknowledged = false;

        if (confirmation)
            url += "?confirmation=Y";
        else if (chargeAcknowledged)
            url += "?charge-acknowledged=Y";

        if (itemIdentifier == "")
            throw new Error("Item identifier missing.");
        if (patronIdentifier == "")
            throw new Error("Patron identifier missing.");

        var request = "";

        if (serialization == 'xml') {
            request = "<loan version=\"1.0\" xmlns=\"http://ns.bic.org.uk/lcf/1.0\">" +
                "<patron-ref>" + patronIdentifier + "</patron-ref>" +
                "<item-ref>" + itemIdentifier + "</item-ref>" +
                "</loan>";
        }
        else {
            var json = {
                "version": "1.0",
                "patron-ref": patronIdentifier,
                "item-ref": itemIdentifier,
            }
            request = JSON.stringify(json);
        }

        $('#renewalHttpStatus').val('');
        $('#renewalOutput').text('');
        $.ajax({
            type: "POST",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                $('#renewalHttpStatus').val(xhr.status);
                $('#renewalOutput').text(response);

                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                $('#renewalHttpStatus').val(http.status);
                $('#renewalOutput').text(http.responseText);
                alert(http.responseText);
            }
        });

    } catch (e) {
        alert(e.message);
    }
}

function addHoldConfirmation() {
    var chargeAcknowledged = document.getElementById('addHoldChargeAcknowledged');
    var confirmation = $('input[name="addHoldConfirmation"]:checked').val();
    if (confirmation != 'true')
        chargeAcknowledged.disabled = false;
    else
        chargeAcknowledged.disabled = true;
}

function addHold() {
    try {
        var url = "lcf/1.0/reservation";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = $('input[name="addHoldSerType"]:checked').val();
        var identifier = $('#addHoldIdentifier').val().trim();
        var patronIdentifier = $('#addHoldPatronIdentifier').val().trim();
        var pickupLocation = $('#addHoldPickupLocation').val().trim();
        var validatePatronToken = $('input[name="addHoldValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;

        var confirmation = $('input[name="addHoldConfirmation"]:checked').val();
        if (confirmation != 'true')
            confirmation = false;
        var chargeAcknowledged = $('input[name="addHoldChargeAcknowledged"]:checked').val();
        if (chargeAcknowledged != 'true')
            chargeAcknowledged = false;

        var identifierType = $('input[name="addHoldIdentifierType"]:checked').val();

        if (confirmation)
            url += "?confirmation=Y";
        else if (chargeAcknowledged)
            url += "?charge-acknowledged=Y";

        var manifestationReference = "";
        var itemIdentifier = "";
        var reservationType = "";

        if (identifier == "")
            throw new Error("Identifier missing.");

        if (patronIdentifier == "")
            throw new Error("Patron identifier missing.");

        if (pickupLocation == "")
            throw new Error("Pickup location missing.")

        if (identifierType == "item") {
            itemIdentifier = identifier;
            reservationType = "03";
        }
        else {
            manifestationReference = identifier;
            reservationType = "02";
        }

        var request = "";

        if (serialization == 'xml') {
            request = "<reservation version=\"1.0\" xmlns=\"http://ns.bic.org.uk/lcf/1.0\">" +
                "<patron-ref>" + patronIdentifier + "</patron-ref>" +
                "<reservation-type>" + reservationType + "</reservation-type>" +
                "<manifestation-ref>" + manifestationReference + "</manifestation-ref>" +
                "<item-ref>" + itemIdentifier + "</item-ref>" +
                "<pickup-location-ref>" + pickupLocation + "</pickup-location-ref>" +
                "</reservation>";
        }
        else {
            var json = {
                "version": "1.0",
                "patron-ref": patronIdentifier,
                "reservation-type": reservationType,
                "manifestation-ref": manifestationReference,
                "item-ref": itemIdentifier,
                "pickup-location-ref": pickupLocation,
            }
            request = JSON.stringify(json);
        }

        $('#addHoldHttpStatus').val('');
        $('#addHoldOutput').text('');
        $.ajax({
            type: "POST",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                $('#addHoldHttpStatus').val(xhr.status);
                $('#addHoldOutput').text(response);

                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                $('#addHoldHttpStatus').val(http.status);
                $('#addHoldOutput').text(http.responseText);
                alert(http.responseText);
            }
        });

    } catch (e) {
        alert(e.message);
    }
}

function updateHold() {
    try {
        var url = "lcf/1.0/reservation/";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = $('input[name="updateHoldSerType"]:checked').val();
        var reservationIdentifier = $('#updateHoldIdentifier').val().trim();
        var pickupLocation = $('#updateHoldPickupLocation').val().trim();
        var validatePatronToken = $('input[name="updateHoldValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;

        var confirmation = $('input[name="updateHoldConfirmation"]:checked').val();
        if (confirmation != 'true')
            confirmation = false;

        if (reservationIdentifier == "")
            throw new Error("Reservation identifier missing.");

        url += reservationIdentifier;

        if (confirmation)
            url += "?confirmation=Y";

        var request = "";

        if (serialization == 'xml') {
            request = "<reservation version=\"1.0\" xmlns=\"http://ns.bic.org.uk/lcf/1.0\">" +
                "<pickup-location-ref>" + pickupLocation + "</pickup-location-ref>" +
                "</reservation>";
        }
        else {
            var json = {
                "version": "1.0",
                "pickup-location-ref": pickupLocation,
            }
            request = JSON.stringify(json);
        }

        $('#updateHoldHttpStatus').val('');
        $('#updateHoldOutput').text('');
        $.ajax({
            type: "PUT",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                $('#updateHoldHttpStatus').val(xhr.status);
                $('#updateHoldOutput').text(response);

                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                $('#updateHoldHttpStatus').val(http.status);
                $('#updateHoldOutput').text(http.responseText);
                alert(http.responseText);
            }
        });

    } catch (e) {
        alert(e.message);
    }
}

function removeHold() {
    try {
        var url = "lcf/1.0/reservation/";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = $('input[name="removeHoldSerType"]:checked').val();
        var reservationIdentifier = $('#removeHoldIdentifier').val().trim();
        var validatePatronToken = $('input[name="removeHoldValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;

        var confirmation = $('input[name="removeHoldConfirmation"]:checked').val();
        if (confirmation != 'true')
            confirmation = false;

        if (reservationIdentifier == "")
            throw new Error("Reservation identifier missing.");

        url += reservationIdentifier;

        if (confirmation)
            url += "?confirmation=Y";

        var request = "";

        $('#removeHoldHttpStatus').val('');
        $('#removeHoldOutput').text('');
        $.ajax({
            type: "DELETE",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                $('#removeHoldHttpStatus').val(xhr.status);
                $('#removeHoldOutput').text(response);

                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                $('#removeHoldHttpStatus').val(http.status);
                $('#removeHoldOutput').text(http.responseText);
                alert(http.responseText);
            }
        });

    } catch (e) {
        alert(e.message);
    }
}

function payment() {
    try {
        var url = "lcf/1.0/payment";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = $('input[name="paymentSerType"]:checked').val();
        var patronIdentifier = $('#paymentPatronIdentifier').val().trim();
        var transactionIdentifier = $('#paymentTransactionIdentifier').val().trim();
        var amount = $('#paymentAmount').val().trim();
        var charges = $('#paymentChargesIdentifier').val().trim();
        var validatePatronToken = $('input[name="paymentValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;

        var paymentType = document.getElementById("paymentType").value;

        if (patronIdentifier == "")
            throw new Error("Patron identifier missing.");

        if (amount == "")
            throw new Error("Amount missing.")

        var chargeIdentifiers = "";
        if (charges != "")
            chargeIdentifiers = charges.split(",");

        if (transactionIdentifier == "")
            transactionIdentifier = null;

        var request = "";
        charges = "";
        if (serialization == 'xml') {

            for (var i = 0; i < chargeIdentifiers.length; i++) {
                charges += "<charge-ref>" + chargeIdentifiers[i].trim() + "</charge-ref>";
            }

            request = "<payment version=\"1.0\" xmlns=\"http://ns.bic.org.uk/lcf/1.0\">" +
                "<patron-ref>" + patronIdentifier + "</patron-ref>" +
                "<payment-type>" + paymentType + "</payment-type>" +
                "<transaction-ref>" + transactionIdentifier + "</transaction-ref>" +
                "<amount>" + amount + "</amount>" +
                charges +
                "</payment>";
        }
        else {

            for (var i = 0; i < chargeIdentifiers.length; i++) {
                chargeIdentifiers[i] = chargeIdentifiers[i].trim();
            }

            var json = {
                "version": "1.0",
                "patron-ref": patronIdentifier,
                "payment-type": paymentType,
                "transaction-ref": transactionIdentifier,
                "amount": amount,
                "charge-ref": chargeIdentifiers,
            }
            request = JSON.stringify(json);
        }

        $('#paymentHttpStatus').val('');
        $('#paymentOutput').text('');
        $.ajax({
            type: "POST",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                $('#paymentHttpStatus').val(xhr.status);
                $('#paymentOutput').text(response);

                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                $('#paymentHttpStatus').val(http.status);
                $('#paymentOutput').text(http.responseText);
                alert(http.responseText);
            }
        });

    } catch (e) {
        alert(e.message);
    }
}

function addCharge() {
    try {

        var url = "lcf/1.0/charge/";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = $('input[name="addChargeSerType"]:checked').val();
        var patronIdentifier = $('#addChargePatronIdentifier').val().trim();
        var amount = $('#addChargeAmount').val().trim();
        var chargeType = document.getElementById("addChargeType").value;
        var chargeFormant = document.getElementById("addChargeFormat").value;
        var note = document.getElementById("addChargeNote").value;
        var validatePatronToken = $('input[name="addChargeValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;

        if (patronIdentifier == "")
            throw new Error("Patron identifier missing.");

        if (amount == "")
            throw new Error("Amount missing.")

        var request = "";
        if (serialization == 'xml') {

            request = "<charge version=\"1.0\" xmlns=\"http://ns.bic.org.uk/lcf/1.0\">" +
                "<patron-ref>" + patronIdentifier + "</patron-ref>" +
                "<charge-type>" + chargeType + "</charge-type>" +
                "<charge-format>" + chargeFormant + "</charge-format>" +
                "<charge-amount>" + amount + "</charge-amount>";
            if (note != "")
                request += "<note><note-text>" + note + "</note-text></note>";
            request += "</charge>";
        }
        else {

            var notes = null;
            if (note != "") {
                notes = [{
                    "note-text": note,
                }]
            }

            var json = {
                "version": "1.0",
                "patron-ref": patronIdentifier,
                "charge-type": chargeType,
                "charge-format": chargeFormant,
                "charge-amount": amount,
                "note": notes,
            }
            request = JSON.stringify(json);
        }

        $('#addChargeHttpStatus').val('');
        $('#addChargeOutput').text('');
        $.ajax({
            type: "POST",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                $('#addChargeHttpStatus').val(xhr.status);
                $('#addChargeOutput').text(response);

                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                $('#addChargeHttpStatus').val(http.status);
                $('#addChargeOutput').text(http.responseText);
                alert(http.responseText);
            }
        });

    } catch (e) {
        alert(e.message);
    }
}

function cancelCharge() {
    try {
        var url = "lcf/1.0/charge/";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = $('input[name="cancelChargeSerType"]:checked').val();
        var chargeIdentifier = $('#cancelChargeIdentifier').val().trim();
        var validatePatronToken = $('input[name="cancelChargeValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;

        if (chargeIdentifier == "")
            throw new Error("Charge identifier missing.");

        url += chargeIdentifier;

        var request = "";

        $('#cancelChargeHttpStatus').val('');
        $('#cancelChargeOutput').text('');
        $.ajax({
            type: "DELETE",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                $('#cancelChargeHttpStatus').val(xhr.status);
                $('#cancelChargeOutput').text(response);

                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                $('#cancelChargeHttpStatus').val(http.status);
                $('#cancelChargeOutput').text(http.responseText);
                alert(http.responseText);
            }
        });

    } catch (e) {
        alert(e.message);
    }
}

function patronSearch() {
    try {

        throw new Error("Currently not implemented.");

        var url = "lcf/1.0/patron";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = $('input[name="patronSearchSerType"]:checked').val();
        var validatePatronToken = $('input[name="patronSearchValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;
        var request = "";

        var queryString = "";

        if (queryString != "")
            url += queryString;

        $('#patronSearchHttpStatus').val('');
        $('#patronSearchOutput').text('');
        $.ajax({
            type: "GET",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                $('#patronSearchHttpStatus').val(xhr.status);
                $('#patronSearchOutput').text(response);

                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                $('#patronSearchHttpStatus').val(http.status);
                $('#patronSearchOutput').text(http.responseText);
                alert(http.responseText);
            }
        });
    } catch (e) {
        alert(e.message);
    }
}

function contactSearch() {
    try {

        throw new Error("Currently not implemented.");

        var url = "lcf/1.0/contact";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = $('input[name="contactSearchSerType"]:checked').val();
        var validatePatronToken = $('input[name="contactSearchValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;
        var request = "";

        var queryString = "";

        if (queryString != "")
            url += queryString;

        $('#contactSearchHttpStatus').val('');
        $('#contactSearchOutput').text('');
        $.ajax({
            type: "GET",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                $('#contactSearchHttpStatus').val(xhr.status);
                $('#contactSearchOutput').text(response);

                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                $('#contactSearchHttpStatus').val(http.status);
                $('#contactSearchOutput').text(http.responseText);
                alert(http.responseText);
            }
        });
    } catch (e) {
        alert(e.message);
    }
}

function loanSearch() {
    try {

        throw new Error("Currently not implemented.");

        var url = "lcf/1.0/loan";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = $('input[name="loanSearchSerType"]:checked').val();
        var validatePatronToken = $('input[name="loanSearchValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;
        var request = "";

        var queryString = "";

        if (queryString != "")
            url += queryString;

        $('#loanSearchHttpStatus').val('');
        $('#loanSearchOutput').text('');
        $.ajax({
            type: "GET",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                $('#loanSearchHttpStatus').val(xhr.status);
                $('#loanSearchOutput').text(response);

                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                $('#loanSearchHttpStatus').val(http.status);
                $('#loanSearchOutput').text(http.responseText);
                alert(http.responseText);
            }
        });
    } catch (e) {
        alert(e.message);
    }
}

function reservationSearch() {
    try {

        throw new Error("Currently not implemented.");

        var url = "lcf/1.0/reservation";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = $('input[name="reservationSearchSerType"]:checked').val();
        var validatePatronToken = $('input[name="reservationSearchValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;
        var request = "";

        var queryString = "";

        if (queryString != "")
            url += queryString;

        $('#reservationSearchHttpStatus').val('');
        $('#reservationSearchOutput').text('');
        $.ajax({
            type: "GET",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                $('#reservationSearchHttpStatus').val(xhr.status);
                $('#reservationSearchOutput').text(response);

                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                $('#reservationSearchHttpStatus').val(http.status);
                $('#reservationSearchOutput').text(http.responseText);
                alert(http.responseText);
            }
        });
    } catch (e) {
        alert(e.message);
    }
}

function chargeSearch() {
    try {

        throw new Error("Currently not implemented.");

        var url = "lcf/1.0/charge";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = $('input[name="chargeSearchSerType"]:checked').val();
        var validatePatronToken = $('input[name="chargeSearchValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;
        var request = "";

        var queryString = "";

        if (queryString != "")
            url += queryString;

        $('#chargeSearchHttpStatus').val('');
        $('#chargeSearchOutput').text('');
        $.ajax({
            type: "GET",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                $('#chargeSearchHttpStatus').val(xhr.status);
                $('#chargeSearchOutput').text(response);

                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                $('#chargeSearchHttpStatus').val(http.status);
                $('#chargeSearchOutput').text(http.responseText);
                alert(http.responseText);
            }
        });
    } catch (e) {
        alert(e.message);
    }
}

function paymentSearch() {
    try {

        throw new Error("Currently not implemented.");

        var url = "lcf/1.0/payment";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = $('input[name="paymentSearchSerType"]:checked').val();
        var validatePatronToken = $('input[name="paymentSearchValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;
        var request = "";

        var queryString = "";

        if (queryString != "")
            url += queryString;

        $('#paymentSearchHttpStatus').val('');
        $('#paymentSearchOutput').text('');
        $.ajax({
            type: "GET",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                $('#paymentSearchHttpStatus').val(xhr.status);
                $('#paymentSearchOutput').text(response);

                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                $('#paymentSearchHttpStatus').val(http.status);
                $('#paymentSearchOutput').text(http.responseText);
                alert(http.responseText);
            }
        });
    } catch (e) {
        alert(e.message);
    }
}

function locationSearch() {
    try {

        throw new Error("Currently not implemented.");

        var url = "lcf/1.0/location";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = $('input[name="locationSearchSerType"]:checked').val();
        var validatePatronToken = $('input[name="locationSearchValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;
        var request = "";

        var queryString = "";

        if (queryString != "")
            url += queryString;

        $('#locationSearchHttpStatus').val('');
        $('#locationSearchOutput').text('');
        $.ajax({
            type: "GET",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                $('#locationSearchHttpStatus').val(xhr.status);
                $('#locationSearchOutput').text(response);

                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                $('#locationSearchHttpStatus').val(http.status);
                $('#locationSearchOutput').text(http.responseText);
                alert(http.responseText);
            }
        });
    } catch (e) {
        alert(e.message);
    }
}

function itemSearch() {
    try {

        throw new Error("Currently not implemented.");

        var url = "lcf/1.0/item";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = $('input[name="itemSearchSerType"]:checked').val();
        var validatePatronToken = $('input[name="itemSearchValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;
        var request = "";

        var queryString = "";

        if (queryString != "")
            url += queryString;

        $('#itemSearchHttpStatus').val('');
        $('#itemSearchOutput').text('');
        $.ajax({
            type: "GET",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                $('#itemSearchHttpStatus').val(xhr.status);
                $('#itemSearchOutput').text(response);

                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                $('#itemSearchHttpStatus').val(http.status);
                $('#itemSearchOutput').text(http.responseText);
                alert(http.responseText);
            }
        });
    } catch (e) {
        alert(e.message);
    }
}

function bibliographicSearch() {
    try {

        var url = "lcf/1.0/manifestation";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = $('input[name="bibliographicSearchSerType"]:checked').val();
        var validatePatronToken = $('input[name="bibliographicSearchValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;
        var request = "";

        var queryString = $('#bibliographicQueryString').val();

        if (queryString != "")
            url += "?" + queryString;

        $('#bibliographicSearchHttpStatus').val('');
        $('#bibliographicSearchOutput').text('');
        $.ajax({
            type: "GET",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                $('#bibliographicSearchHttpStatus').val(xhr.status);
                $('#bibliographicSearchOutput').text(response);

                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                $('#bibliographicSearchHttpStatus').val(http.status);
                $('#bibliographicSearchOutput').text(http.responseText);
                alert(http.responseText);
            }
        });
    } catch (e) {
        alert(e.message);
    }
}

function createPatron() {
    try {
        var url = "lcf/1.0/patron";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = $('input[name="createPatronSerType"]:checked').val();
        var patronIdentifier = $('#createPatronPatronIdentifier').val().trim();
        var password = $('#createPatronPassword').val().trim();
        var username = $('#createPatronUsername').val().trim();
        var forename = $('#createPatronForename').val().trim();
        var surname = $('#createPatronSurname').val().trim();
        var dateOfBirth = $('#createPatronDateOfBirth').val().trim();
        var regExpiry = $('#updatePatronRegExpiry').val().trim();
        var location = $('#createPatronLocation').val().trim();

        var validatePatronToken = $('input[name="createPatronValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;

        if (patronIdentifier == "")
            throw new Error("Patron identifier missing.");

        if (password == "")
            throw new Error("Password missing.");

        if (forename == "")
            throw new Error("Forename missing.");

        if (surname == "")
            throw new Error("Surname missing.");

        if (dateOfBirth == "")
            throw new Error("Date of birth missing.");

        if (location == "")
            throw new Error("Location missing.");

        if (username == "")
            username = null;

        if (regExpiry == "")
            regExpiry = null;

        var request = "";
        if (serialization == 'xml') {

            request = "<patron version=\"1.0\" xmlns=\"http://ns.bic.org.uk/lcf/1.0\">" +
                "<identifier>" + patronIdentifier + "</identifier>" +
                "<user-pwd>" + password + "</user-pwd>";
            if (username != null)
                request += "<user-id>" + username + "</user-id>";
            request += "<forename>" + forename + "</forename>";
            request += "<surname>" + surname + "</surname>";
            if (dateOfBirth != null)
                request += "<date-of-birth>" + dateOfBirth + "</date-of-birth>";
            if (regExpiry != null)
                request += "<reg-expiry>" + regExpiry + "</reg-expiry>";
            request += "<associated-location>" +
                "<association-type>03</association-type>" +
                "<location-ref>" + location + "</location-ref>" +
                "</associated-location>" +
                "</patron>";
        }
        else {

            var associatedLocations = null;
            if (location != null) {
                associatedLocations = [{
                    "association-type": "03",
                    "location-ref": [location],
                }]
            }

            var json = {
                "version": "1.0",
                "identifier": patronIdentifier,
                "user-pwd": password,
                "user-id": username,
                "forename": forename,
                "surname": surname,
                "date-of-birth": dateOfBirth,
                "reg-expiry": reg - expiry,
                "associated-location": associatedLocations,
            }
            request = JSON.stringify(json);
        }

        $('#createPatronHttpStatus').val('');
        $('#createPatronOutput').text('');
        $.ajax({
            type: "POST",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                $('#createPatronHttpStatus').val(xhr.status);
                $('#createPatronOutput').text(response);

                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                $('#createPatronHttpStatus').val(http.status);
                $('#createPatronOutput').text(http.responseText);
                alert(http.responseText);
            }
        });

    } catch (e) {
        alert(e.message);
    }
}

function loadPatron() {
    try {
        var url = "lcf/1.0/patron/";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = "json";
        var patronIdentifier = $('#updatePatronPatronIdentifier').val().trim();

        var validatePatronToken = $('input[name="patronInfoValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;

        var request = "";

        if (patronIdentifier == "")
            throw new Error("Patron identifier missing.");

        url += patronIdentifier;

        $.ajax({
            type: "GET",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);

                    try {

                        var patron = JSON.parse(response);

                        $('#updatePatronPassword').val('********');

                        if (patron["identifier"] != null)
                            $('#updatePatronPatronIdentifier').val(patron["identifier"]);
                        if (patron["forename"] != null)
                            $('#updatePatronForename').val(patron["forename"]);
                        if (patron["surname"] != null)
                            $('#updatePatronSurname').val(patron["surname"]);
                        if (patron["date-of-birth"] != null)
                            $('#updatePatronDateOfBirth').val(patron["date-of-birth"]);
                        if (patron["reg-expiry"] != null)
                            $('#updatePatronRegExpiry').val(patron["reg-expiry"]);
                        if (patron["user-id"] != null)
                            $('#updatePatronUsername').val(patron["user-id"]);

                        if (patron["associated-location"] != null && patron["associated-location"].length > 0) {
                            if (patron["associated-location"][0] != null) {
                                var associatedLocation = patron["associated-location"][0];
                                if (associatedLocation != null) {
                                    if (associatedLocation["location-ref"][0] != null) {
                                        var locationRef = associatedLocation["location-ref"][0].split("/");
                                        $('#updatePatronLocation').val(locationRef[locationRef.length - 1]);
                                    }
                                }
                            }
                        }

                    } catch (e) {
                        alert(e.message);
                    }
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                alert(http.responseText);
            }
        });
    } catch (e) {
        alert(e.message);
    }
}

function updatePatron() {
    try {
        var url = "lcf/1.0/patron/";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = $('input[name="updatePatronSerType"]:checked').val();
        var patronIdentifier = $('#updatePatronPatronIdentifier').val().trim();
        var patronNewIdentifier = $('#updatePatronNewPatronIdentifier').val().trim();
        var password = $('#updatePatronPassword').val().trim();
        var username = $('#updatePatronUsername').val().trim();
        var forename = $('#updatePatronForename').val().trim();
        var surname = $('#updatePatronSurname').val().trim();
        var dateOfBirth = $('#updatePatronDateOfBirth').val().trim();
        var regExpiry = $('#updatePatronRegExpiry').val().trim();
        var location = $('#updatePatronLocation').val().trim();

        var validatePatronToken = $('input[name="updatePatronValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;

        if (patronIdentifier == "")
            throw new Error("Patron identifier missing.");

        url += patronIdentifier;

        if (patronNewIdentifier == "")
            patronNewIdentifier = null;

        if (password == "********")
            password = null

        if (password == "" || password == "********")
            throw new Error("Invalid password of birth.");

        if (dateOfBirth == "")
            throw new Error("Invalid date of birth.");

        if (regExpiry == "")
            throw new Error("Invalid registration expiry.");

        if (forename == "")
            throw new Error("Invalid forename.");

        if (surname == "")
            throw new Error("Invalid surename.");

        if (location == "")
            throw new Error("Invalid location.");

        var request = "";
        if (serialization == 'xml') {

            request = "<patron version=\"1.0\" xmlns=\"http://ns.bic.org.uk/lcf/1.0\">";
            if (patronNewIdentifier != null)
                request += "<identifier>" + patronNewIdentifier + "</identifier>";
            if (password != null)
                request += "<user-pwd>" + password + "</user-pwd>";
            request += "<user-id>" + username + "</user-id>" +
                "<forename>" + forename + "</forename>" +
                "<surname>" + surname + "</surname>" +
                "<date-of-birth>" + dateOfBirth + "</date-of-birth>" +
                "<reg-expiry>" + regExpiry + "</reg-expiry>" +
                "<associated-location>" +
                "<association-type>03</association-type>" +
                "<location-ref>" + location + "</location-ref>" +
                "</associated-location>" +
                "</patron>";
        }
        else {

            var associatedLocations = null;
            if (location != null) {
                associatedLocations = [{
                    "association-type": "03",
                    "location-ref": [location],
                }]
            }

            var json = {
                "version": "1.0",
                "identifier": patronNewIdentifier,
                "user-pwd": password,
                "user-id": username,
                "forename": forename,
                "surname": surname,
                "date-of-birth": dateOfBirth,
                "reg-expiry": regExpiry,
                "associated-location": associatedLocations,
            }
            request = JSON.stringify(json);
        }

        $('#updatePatronHttpStatus').val('');
        $('#updatePatronOutput').text('');
        $.ajax({
            type: "PUT",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                $('#updatePatronHttpStatus').val(xhr.status);
                $('#updatePatronOutput').text(response);

                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                $('#updatePatronHttpStatus').val(http.status);
                $('#updatePatronOutput').text(http.responseText);
                alert(http.responseText);
            }
        });

    } catch (e) {
        alert(e.message);
    }
}

function createContact() {
    try {

        var url = "lcf/1.0/contact";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = $('input[name="createContactSerType"]:checked').val();
        var patronIdentifier = $('#createContactPatronIdentifier').val().trim();
        var addressLine1 = $('#createContactAddLine1').val().trim();
        var addressLine2 = $('#createContactAddLine2').val().trim();
        var addressLine3 = $('#createContactAddLine3').val().trim();
        var suburb = $('#createContactSuburb').val().trim();
        var postcode = $('#createContactPostcode').val().trim();
        var state = $('#createContactState').val().trim();
        var country = $('#createContactCountry').val().trim();
        var language = $('#createContactLanguage').val().trim();
        var homePhone = $('#createContactHomePhone').val().trim();
        var businessPhone = $('#createContactBusinessPhone').val().trim();
        var mobilePhone = $('#createContactMobilePhone').val().trim();
        var email = $('#createContactEmail').val().trim();

        var validatePatronToken = $('input[name="createContactValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;

        if (patronIdentifier == "")
            throw new Error("Patron identifier missing.");

        var request = "";
        if (serialization == 'xml') {

            request = "<contact version=\"1.0\" xmlns=\"http://ns.bic.org.uk/lcf/1.0\">" +
                "<patron-ref>" + patronIdentifier + "</patron-ref>";
            if (addressLine1 != "")
                request += "<address-line>" + addressLine1 + "</address-line>";
            if (addressLine2 != "")
                request += "<address-line>" + addressLine2 + "</address-line>";
            if (addressLine3 != "")
                request += "<address-line>" + addressLine3 + "</address-line>";

            if (homePhone != "")
                request += "<communication-detail><communication-type>02</communication-type><locator>" + homePhone + "</locator></communication-detail>";
            if (businessPhone != "")
                request += "<communication-detail><communication-type>03</communication-type><locator>" + businessPhone + "</locator></communication-detail>";
            if (mobilePhone != "")
                request += "<communication-detail><communication-type>04</communication-type><locator>" + mobilePhone + "</locator></communication-detail>";
            if (email != "")
                request += "<communication-detail><communication-type>05</communication-type><locator>" + email + "</locator></communication-detail>";

            if (suburb != "")
                request += "<suburb>" + suburb + "</suburb>";
            if (postcode != "")
                request += "<postcode>" + postcode + "</postcode>";
            if (state != "")
                request += "<state>" + state + "</state>";
            if (country != "")
                request += "<country>" + country + "</country>";
            if (language != "")
                request += "<language>" + language + "</language>";

            request += "</contact>";
        }
        else {

            var patronRef = [];
            patronRef.push(patronIdentifier);

            var addressline = [];
            if (addressLine1 != "")
                addressline.push(addressLine1);
            if (addressLine2 != "")
                addressline.push(addressLine2);
            if (addressLine3 != "")
                addressline.push(addressLine3);

            var communicationDetail = [];
            if (homePhone != "")
                communicationDetail.push({ "communication-type": 02, "locator": homePhone })
            if (businessPhone != "")
                communicationDetail.push({ "communication-type": 03, "locator": businessPhone })
            if (mobilePhone != "")
                communicationDetail.push({ "communication-type": 04, "locator": mobilePhone })
            if (email != "")
                communicationDetail.push({ "communication-type": 05, "locator": email })

            if (suburb == "")
                suburb = null;
            if (postcode == "")
                postcode = null;
            if (state == "")
                state = null;
            if (country == "")
                country = null;

            var json = {
                "version": "1.0",
                "patron-ref": patronRef,
                "address-line": addressline,
                "communication-detail": communicationDetail,
                "suburb": suburb,
                "postcode": postcode,
                "state": state,
                "country": country,
                "language": language,
            }

            request = JSON.stringify(json);
        }

        $('#createContactHttpStatus').val('');
        $('#createContactOutput').text('');
        $.ajax({
            type: "POST",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                $('#createContactHttpStatus').val(xhr.status);
                $('#createContactOutput').text(response);

                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                $('#createContactHttpStatus').val(http.status);
                $('#createContactOutput').text(http.responseText);
                alert(http.responseText);
            }
        });

    } catch (e) {
        alert(e.message);
    }
}

function loadContact() {
    try {
        var url = "lcf/1.0/contact/";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = "json";
        var patronIdentifier = $('#updateContactPatronIdentifier').val().trim();

        var validatePatronToken = $('input[name="updateContactValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;

        var request = "";

        if (patronIdentifier == "")
            throw new Error("Contact identifier missing.");

        url += patronIdentifier;

        $.ajax({
            type: "GET",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);

                    try {

                        var contact = JSON.parse(response);

                        if (contact["name"] != null)
                            $('#updateContactName').val(contact["name"]);

                        if (contact["address-line"] != null && contact["address-line"].length > 0) {
                            if (contact["address-line"][0] != null)
                                $('#updateContactAddLine1').val(contact["address-line"][0]);
                            if (contact["address-line"][1] != null)
                                $('#updateContactAddLine2').val(contact["address-line"][1]);
                            if (contact["address-line"][2] != null)
                                $('#updateContactAddLine3').val(contact["address-line"][2]);
                        }

                        if (contact["suburb"] != null)
                            $('#updateContactSuburb').val(contact["suburb"]);
                        if (contact["postcode"] != null)
                            $('#updateContactPostcode').val(contact["postcode"]);
                        if (contact["state"] != null)
                            $('#updateContactState').val(contact["state"]);
                        if (contact["suburb"] != null)
                            $('#updateContactCountry').val(contact["country"]);
                        if (contact["language"] != null)
                            $('#createContactLanguage').val(contact["language"]);

                        if (contact["communication-detail"] != null) {
                            for (var i = 0; i < contact["communication-detail"].length; i++) {

                                var communicationDetail = contact["communication-detail"][i];

                                if (communicationDetail["communication-type"] == "02")
                                    $('#updateContactHomePhone').val(communicationDetail["locator"]);
                                else if (communicationDetail["communication-type"] == "03")
                                    $('#updateContactBusinessPhone').val(communicationDetail["locator"]);
                                else if (communicationDetail["communication-type"] == "04")
                                    $('#updateContactMobilePhone').val(communicationDetail["locator"]);
                                else if (communicationDetail["communication-type"] == "05")
                                    $('#updateContactEmail').val(communicationDetail["locator"]);
                            }
                        }

                    } catch (e) {
                        alert(e.message);
                    }
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                alert(http.responseText);
            }
        });
    } catch (e) {
        alert(e.message);
    }
}

function updateContact() {
    try {

        var url = "lcf/1.0/contact/";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = $('input[name="updateContactSerType"]:checked').val();
        var contactIdentifier = $('#updateContactPatronIdentifier').val().trim();
        var addressLine1 = $('#updateContactAddLine1').val().trim();
        var addressLine2 = $('#updateContactAddLine2').val().trim();
        var addressLine3 = $('#updateContactAddLine3').val().trim();
        var suburb = $('#updateContactSuburb').val().trim();
        var postcode = $('#updateContactPostcode').val().trim();
        var state = $('#updateContactState').val().trim();
        var country = $('#updateContactCountry').val().trim();
        var language = $('#createContactLanguage').val().trim();
        var homePhone = $('#updateContactHomePhone').val().trim();
        var businessPhone = $('#updateContactBusinessPhone').val().trim();
        var mobilePhone = $('#updateContactMobilePhone').val().trim();
        var email = $('#updateContactEmail').val().trim();

        var validatePatronToken = $('input[name="updateContactValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;

        if (contactIdentifier == "")
            throw new Error("Contact identifier missing.");

        url += contactIdentifier;

        var request = "";
        if (serialization == 'xml') {

            request = "<contact version=\"1.0\" xmlns=\"http://ns.bic.org.uk/lcf/1.0\">" +
                "<identifier>" + contactIdentifier + "</identifier>";
            request += "<address-line>" + addressLine1 + "</address-line>";
            request += "<address-line>" + addressLine2 + "</address-line>";
            request += "<address-line>" + addressLine3 + "</address-line>";

            request += "<communication-detail><communication-type>02</communication-type><locator>" + homePhone + "</locator></communication-detail>";
            request += "<communication-detail><communication-type>03</communication-type><locator>" + businessPhone + "</locator></communication-detail>";
            request += "<communication-detail><communication-type>04</communication-type><locator>" + mobilePhone + "</locator></communication-detail>";
            request += "<communication-detail><communication-type>05</communication-type><locator>" + email + "</locator></communication-detail>";

            request += "<suburb>" + suburb + "</suburb>";
            request += "<postcode>" + postcode + "</postcode>";
            request += "<state>" + state + "</state>";
            request += "<country>" + country + "</country>";
            request += "<language>" + language + "</language>";

            request += "</contact>";
        }
        else {

            var addressline = [];
            addressline.push(addressLine1);
            addressline.push(addressLine2);
            addressline.push(addressLine3);

            var communicationDetail = [];
            communicationDetail.push({ "communication-type": 02, "locator": homePhone })
            communicationDetail.push({ "communication-type": 03, "locator": businessPhone })
            communicationDetail.push({ "communication-type": 04, "locator": mobilePhone })
            communicationDetail.push({ "communication-type": 05, "locator": email })

            var json = {
                "version": "1.0",
                "identifier": contactIdentifier,
                "patron-ref": null,
                "address-line": addressline,
                "communication-detail": communicationDetail,
                "suburb": suburb,
                "postcode": postcode,
                "state": state,
                "country": country,
                "language": language,
            }

            request = JSON.stringify(json);
        }

        $('#updateContactHttpStatus').val('');
        $('#updateContactOutput').text('');
        $.ajax({
            type: "PUT",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            response = serializer.serializeToString(data[0]);
                        }
                    }
                }
                $('#updateContactHttpStatus').val(xhr.status);
                $('#updateContactOutput').text(response);

                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                $('#updateContactHttpStatus').val(http.status);
                $('#updateContactOutput').text(http.responseText);
                alert(http.responseText);
            }
        });

    } catch (e) {
        alert(e.message);
    }
}

function opacLogin() {
    try {
        var url = "lcf/1.0/opaclogin/";
        var authorization = 'Bearer ' + AccessToken;
        var serialization = $('input[name="opacLoginSerType"]:checked').val();
        var patronIdentifier = $('#opacLoginItemIdentifier').val().trim();
        var validatePatronToken = $('input[name="opacLoginValidatePatronToken"]:checked').val();
        if (validatePatronToken != 'true')
            validatePatronToken = false;
        var redirect = $('input[name="opacLoginRedirect"]:checked').val();
        if (redirect != 'true')
            redirect = false;
        var request = "";

        if (patronIdentifier == "")
            throw new Error("Patron identifier missing.");

        url += patronIdentifier;

        $('#opacLoginHttpStatus').val('');
        $('#opacLoginOutput').text('');
        $.ajax({
            type: "GET",
            url: url,
            dataType: serialization,
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", authorization);
                request.setRequestHeader("Accept", 'application/' + serialization);
                request.setRequestHeader("Content-Type", 'application/' + serialization + '; charset=utf-8');
                if (validatePatronToken)
                    request.setRequestHeader("PATRON_AUTH", PatronToken);
            },
            data: request,
            success: function (data, http, xhr) {
                var response;
                if (serialization == 'json') {
                    var uri = decodeURI(data.href);
                    if (redirect) {
                        $(location).attr('href', uri);
                    }
                    response = JSON.stringify(data);
                }
                else {
                    var xmlString;
                    data = $(data);
                    if (window.ActiveXObject) {
                        response = xmlData.xml;
                    } else {
                        if (data.length > 0) {
                            var serializer = new XMLSerializer();
                            var response = serializer.serializeToString(data[0]);
                            var domParser = new DOMParser();
                            var dom = domParser.parseFromString(response, "text/xml");
                            var xmlElements = dom.getElementsByTagName('href')[0];
                            var xmlNode = xmlElements.childNodes[0];
                            var uri = decodeURI(xmlNode.nodeValue);
                            if (redirect) {
                                $(location).attr('href', uri);
                            }
                        }
                    }
                }
                $('#opacLoginHttpStatus').val(xhr.status);
                $('#opacLoginOutput').text(response);

                if (xhr.status == '207')
                    alert(response);
            },
            error: function (http) {
                $('#opacLoginHttpStatus').val(http.status);
                $('#opacLoginOutput').text(http.responseText);
                alert(http.responseText);
            }
        });
    } catch (e) {
        alert(e.message);
    }
}





