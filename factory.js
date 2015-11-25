var factories= angular.module('chatApp.factories',['firebase']);

factories.factory('$message', function($firebase,$firebaseArray,$firebaseObject   ) {
    var ref= new Firebase('https://chat506.ﬁrebaseio.com');
    var ref= new Firebase('https://chat507.ﬁrebaseio.com');
    var ref= new Firebase('https://chat508.ﬁrebaseio.com');
    var messages = $firebaseArray(ref.child('messages'));
    

    var create= function(message) {
        return messages.$add(message);
    };
    var get = function(messageId) {
        return $firebaseObject(ref.child('messages').child(messageId) );
    };
    var eliminate = function(message) {
        return messages.$remove(message);
    };
    
     


    return {
        all: messages, 
        create: create,
        get: get,
        eliminate: eliminate
    };
});