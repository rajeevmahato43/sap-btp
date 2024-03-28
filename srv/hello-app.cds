 /* This file is declearation of code and service. While .js file repressent the implementation of service */
 service HelloWorld {
    //entity WelcomeMessageSRV as projection on msg.WelcomeMessage; 
    function printHello(msg:String) returns String;

 }