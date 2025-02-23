let salesData = [
    { product:"Laptop", price:1200},
    { product:"smartphone", price:100},
    { product:"Headphone", price:200},
    { product:"keyboared", price:400},
]

let totalSales  =  salesData.reduce((acc,sales)=>(acc+sales.price),0)
console.log(totalSales);

//acc ki value 0 hoti hai initial mai 

// {} --> return is required
// () --> no return

//functiona squatial pipe ---- > interview q from reduce 


let inventory =[
    {name:"Widget A" , stock:30},
    {name:"Widget B" , stock:300},
    {name:"Widget C" , stock:45},
    {name:"Widget D" , stock:70},
]

let lowStockItems = inventory.filter((item)=> item.stock <50)

//console.log(lowStockItems);
//filter atleaste eek array return krega

let userActivity =[
    {user:"Alice", activityCount:45},
    {user:"Bob", activityCount:72},
    {user:"Charlie", activityCount:33},
]

//find most activity user

// reduce suse krn hai 

let mostActiveUser = userActivity.reduce((maxUser,user)=>(user.activityCount > maxUser.activityCount ? user :maxUser))

console.log(mostActiveUser);
