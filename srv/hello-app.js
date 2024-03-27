
module.exports = function (HelloWorld) {
    HelloWorld.on("printHello", (req) => {
        console.log("Welcome to sap from console Your msg is: " + req.data.msg);
        return "Welcome to sap to UI Your msg is: " + req.data.msg;

    });
} 