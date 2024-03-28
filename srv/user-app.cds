using { userModel.User as user } from '../db/userProfile';

service DefaultUserService {

    entity UserService as projection on user.UserProfile;

}
