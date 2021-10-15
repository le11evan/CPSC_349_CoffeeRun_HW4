(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    var FIREBASE_SERVER_URL = 'http://coffeerun-af5a2.firebaseapp.com';
    var App = window.App;
    var Truck = App.Truck;
    // var DataStore = App.DataStore;
    // var RemoteDataStore = App.RemoteDataStore;
    //var firebasedatastore = App.firebasedatastore;
    var FirebaseDataStore = App.FirebaseDataStore;
    var FormHandler = App.FormHandler;
    var Validation = App.Validation;
    var CheckList = App.CheckList;
    // var datastore = new DataStore();
    // var datastore = new RemoteDataStore(SERVER_URL);
    var datastore = new FirebaseDataStore(FIREBASE_SERVER_URL);
    var truck = new Truck('ncc-1705', datastore);
    window.truck = truck;
    var checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(truck.deliverOrder.bind(truck));
    var formHandler = new FormHandler(FORM_SELECTOR);
    formHandler.addSubmitHandler(function(data) {
        truck.createOrder.call(truck, data);
        checkList.addRow.call(checkList, data);
        });


    formHandler.addInputHandler(Validation.isCompanyEmail);
    truck.printOrders(checkList.addRow.bind(checkList));
    console.log(formHandler);
})(window);