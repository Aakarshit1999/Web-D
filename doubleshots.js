const google = "google";
const fb = null;

if (google) {
  console.log("I execute - BLOCK 1");
}

if (!!fb) { 
  console.log("I execute - BLOCK 2");
}
// The whole purose of using this double shots is to convert the truthy or falsy values to definite 
// true or false 