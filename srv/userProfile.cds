
using {userModel.User as userModel} from '../db/userProfile';

service UserService {

     entity ProfileSrv as projection on userModel.UserProfile;
    @insertonly entity PostProfileSrv as projection on userModel.UserProfile;
    //@updateonly entity UpdateProfileSrv as projection on user.UserProfile;
    //@deleteonly entity DeleteProfileSrv as projection on user.UserProfile;

}