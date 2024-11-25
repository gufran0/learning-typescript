// interface is a way to define a type for an object
interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrail: () => string;
  getCoupon(couponname: string, value: number): number;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}
const hc: User = {
  dbId: 22,
  email: "hc@gmail.com",
  userId: 221,
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "hc", off: 22) => {
    return 10;
  },
    };

    const hcAdmin: Admin = {
        dbId: 22,       
        email: "hc@gmail.com",
        userId: 221,
        role: "admin",  // Add required role property
        startTrail: () => {
          return "trail started";
        },
        getCoupon: (name: string, off: number) => {
          return 10;
        }
      };

// in interface we can change the value of the object but we cannot change the type of the object
// in interface we can add new properties to the object but we cannot remove the properties from the object

hc.email = "hc@hc.com";
// hc.dbId = 33; // this will give an error because dbId is readonly

export {};
