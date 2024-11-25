"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hc = {
    dbId: 22,
    email: "hc@gmail.com",
    userId: 221,
    startTrail: function () {
        return "trail started";
    },
    getCoupon: function (name, off) {
        return 10;
    },
};
var hcAdmin = {
    dbId: 22,
    email: "hc@gmail.com",
    userId: 221,
    role: "admin", // Add required role property
    startTrail: function () {
        return "trail started";
    },
    getCoupon: function (name, off) {
        return 10;
    }
};
// in interface we can change the value of the object but we cannot change the type of the object
// in interface we can add new properties to the object but we cannot remove the properties from the object
hc.email = "hc@hc.com";
