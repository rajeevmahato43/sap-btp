const cds = require('@sap/cds');
const { UserProfile } = cds.entities('userModel.User')

const user = function (UserService) {
    UserService.on("READ", "ProfileSrv", async (req) => {
        console.log("Get method called ")
        const result = await SELECT.from(UserProfile);
        return result;
    })
    UserService.on("CREATE", "ProfileSrv", async (req) => {
        const reBody = req.data;
        /*
        ******************** 1st way with await ***************************************
        const {INSERT} =cds.ql
        let result= await cds.transaction(req).run(INSERT.into(UserProfile).entries([reBody]))
        return reBody;
        
        */
        /********************** 2nd way with promise ****************************/
        const result = await cds.transaction(req).run(INSERT.into(UserProfile).entries([reBody])).then((resolve, reject) => {
            if (resolve) {
                return reBody;
            } else {
                req.error(500, "Internal server error")
            }

        }).catch((e) => {
            console.log("*************", e)
            req.error(500, "Internal server error")
        })
        console.log("All executed")
        return result
    })

    UserService.on("UPDATE", "ProfileSrv", async (req) => {
        const result = await cds.transaction(req).run(
            UPDATE(UserProfile).set(req.data).where({ ID: req.data.ID })
        ).then((resolve, reject) => {
            if (!resolve) {
                console.log(reject);
                req.error(500, "Internal Server Error!.")
            } else {
                return req.data;
            }
        }).catch((err) => {
            console.log(err);
            req.error(500, "Internal Server Error!.")
        })
        return req.data;
    })
    UserService.on("DELETE", "ProfileSrv", async (req) => {
        console.log("Delete Method called")
        const result = await cds.transaction(req).run(DELETE.from(UserProfile).where({ ID: req.data.ID })).then((resolve, reject) => {
            if (!resolve) {
                return req.error(410, "No record found")
            } else {
                return req.data;
            }
        }).catch((err) => {
            return req.error(500, err.message)
        });
        return req.data;
    })

    UserService.on("CREATE", "PostProfileSrv", async (req) => {
        const reBody = req.data;
        /*
        ******************** 1st way with await ***************************************
        // Using this method if return result it will gives error on each entity which have key 
        const {INSERT} =cds.ql
        let result= await cds.transaction(req).run(INSERT.into(UserProfile).entries([reBody]))
        return reBody;
        
        */
        /********************** 2nd way with promise ****************************/
        const result = await cds.transaction(req).run(INSERT.into(UserProfile).entries([reBody])).then((resolve, reject) => {
            if (resolve) {
                return reBody;
            } else {
                req.error(500, "Internal server error")
            }

        }).catch((e) => {
            console.log("*************", e)
            req.error(500, "Internal server error")
        })
        console.log("All executed")
        return result
    })




}

module.exports = user;