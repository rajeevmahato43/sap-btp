using {cuid,managed} from '@sap/cds/common';
namespace userModel.User;



entity UserProfile : managed {
    name: String(100);
    key email: String(100);
    phoneNumber: Integer;
    address: String(200);
    password: String(300);
}