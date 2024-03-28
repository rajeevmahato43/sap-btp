using {cuid,managed} from '@sap/cds/common';
namespace userModel.User;



entity UserProfile : managed,cuid {
    name: String(100);
    email: String(100);
    phoneNumber: Integer;
    address: String(200);
    password: String(300);
}