 console.log("What the heck");

 console.error("Error happened here")

 console.warn("The package is depreciated");

 console.table({name: 'Abraham', email: 'email.comm'});

 console.group('simple');
 console.log("What the heck");
 console.error("Error happened here")
 console.warn("The package is depreciated");
 console.groupEnd();

 const style ='padding: 10px; background-color:white; color:green;';

 console.log('%cHello World', style);