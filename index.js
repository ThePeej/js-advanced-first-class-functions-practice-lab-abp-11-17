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
  const driversCopy = [...drivers];
  driversCopy.sort(function (driver1, driver2){
    const rev1 = driver1.revenue;
    const rev2 = driver2.revenue;
    console.log(rev1)
    console.log(rev2)
    ///debugger;
    return rev1-rev2;
  })
  console.log(drivers)
  console.log(driversCopy)
  return driversCopy
  ///debugger;
}

function driversByName(drivers) {
  const driversCopy = [...drivers];
  driversCopy.sort(function (driver1, driver2){
    const name1 = driver1.name;
    const name2 = driver2.name;
    console.log(name1)
    console.log(name2)
    ///debugger;
    return name1.localeCompare(name2)
  })
  console.log(drivers)
  console.log(driversCopy)
  return driversCopy
  ///debugger;
}

function totalRevenue(drivers){
  // pushes all driver revenues into a single array
  let revenues = [];
  for (const name of drivers) {
    revenues.push(name.revenue);
    console.log(revenues);
    ///debugger;
  }
  // reduces revenues array into one single sum of revenues
  const totalRev = revenues.reduce(function(total,current){
    ///debugger;
    return total + current;
  })
  console.log(totalRev)
  ///debugger;
  return totalRev
}

function averageRevenue(drivers){
 const total = totalRevenue(drivers); //uses totalRevenue function to get sum of all driver revenues (instead of recreating the function)
 const avgRev = total/drivers.length; //divides total revenue by number of drivers to get avg
 ///debugger;
 return avgRev;
}
