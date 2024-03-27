 /* This file is declearation of code and service. While .js file repressent the implementation of service */
using {sap.welcome as msg} from '../db/welcomeMsg';

 service HelloWorld {
    entity WelcomeMessageSRV as projection on msg.WelcomeMessage; 
    function printHello(msg:String) returns String;

 }