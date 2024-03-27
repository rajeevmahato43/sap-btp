using { cuid, managed } from '@sap/cds/common';
namespace sap.welcome;


entity WelcomeMessage:cuid,managed{
    msg: String;
    name: String;
}