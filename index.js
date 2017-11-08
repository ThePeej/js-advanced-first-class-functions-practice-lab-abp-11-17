// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function(index){
    console.log(index.name)
    ///debugger;
  })
}

function logDriversByHometown(drivers,hometown){
  drivers.forEach(function(index){
    if (index.hometown === hometown){
      console.log(index.name)
      ///debugger;
    }
  })
}

function driversByRevenue(drivers) {
  drivers.sort(function (driver1, driver2){
    console.log(driver1.revenue);
    console.log(driver2.revenue);
    debugger;
    return driver1.revenue - driver2.revenue;
  })
  console.log(drivers)
  debugger;
}
