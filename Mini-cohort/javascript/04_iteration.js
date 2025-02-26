let salesData = [
    {id:1, product:"Laptop", price:1200},
    {id:2, product:"smartphone", price:100},
    {id:3, product:"Headphone", price:200},
    {id:4, product:"keyboared", price:400},
]

let totalSales  =  salesData.reduce((acc,sales)=>(acc+sales.price),0)
//console.log(totalSales);

//initial run 
// acc=0
// sales = {id:1, product:"Laptop", price:1200},

//acc ki value 0 hoti hai initial mai 

// {} --> return is required
// () --> no return

//function sequancial pipe ---- > interview q from reduce 
//create your own pipe  and chaning
// eek kai baad eek mathed use krte ja rhe ho 
// "hitesh".toUpper().indexOf("h")

let inventory =[
    {name:"Widget A" , stock:30},
    {name:"Widget B" , stock:300},
    {name:"Widget C" , stock:45},
    {name:"Widget D" , stock:70},
]

let lowStockItems = inventory.filter((item)=> item.stock <50)
let lowStockItems2 = inventory.filter((item)=> {
   return item.stock <50})

// console.log(lowStockItems);
// console.log(lowStockItems2);
//filter atleaste eek array return krega

let userActivity =[
    {user:"Alice", activityCount:45},
    {user:"Bob", activityCount:72},
    {user:"Charlie", activityCount:33},
]

//find most activity user

// reduce suse krn hai 

let mostActiveUser = userActivity.reduce((maxUser,user)=>(user.activityCount > maxUser.activityCount ? user :maxUser))

const mostActiveUser2= userActivity.reduce((maxUser,user)=>(
    maxUser.activityCount < user.activityCount ? user : maxUser
))


//console.log(mostActiveUser);
console.log(mostActiveUser2);


//#################################################

let expenses=[
    {description:"Groceries",amount:50, category:"Food"},
    {description:"ElectricityBill",amount:100, category:"Utility"},
    {description:"Dinner",amount:30, category:"Food"},
    {description:"Internet Bill",amount:50, category:"Utility"},
]




let expenseReport = expenses.reduce((report,expense)=>{
report[expense.category]+=expense.amount;
   return report
},{Food:0,Utility:0})

//console.log(expenseReport);
