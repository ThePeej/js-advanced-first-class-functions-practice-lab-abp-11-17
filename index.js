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
    const rev1 = driver1.revenue;
    const rev2 = driver2.revenue;
    console.log(rev1)
    console.log(rev2)
    debugger;
  })
  console.log(drivers)
  debugger;
  */
}