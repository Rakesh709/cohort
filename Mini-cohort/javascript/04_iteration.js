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

// reduce use krna hai 

let mostActiveUser = userActivity.reduce((maxUser,user)=>(user.activityCount > maxUser.activityCount ? user :maxUser))

const mostActiveUser2= userActivity.reduce((maxUser,user)=>(
    maxUser.activityCount < user.activityCount ? user : maxUser
))

//maxUser ki value 0 hai to usa jada hona chahia 

//console.log(mostActiveUser);
//console.log(mostActiveUser2);


//#################################################

//expanse tracker : how to create report

//reduce sai wapas - agger accumulater  array rha to array milega 
//object rha to object milega

let expenses=[
    {description:"Groceries",amount:50, category:"Food"},
    {description:"ElectricityBill",amount:100, category:"Utility"},
    {description:"Dinner",amount:30, category:"Food"},
    {description:"Internet Bill",amount:50, category:"Utility"},
]

let expenseReport = expenses.reduce((report,expense)=>{
report[expense.category]+=expense.amount;
// report[expense.category] = (report[expense.category] || 0) + expense.amount
   return report
},{Food:0,Utility:0})

//console.log("Expense report: ",expenseReport);


const totalExpense = expenses.reduce((acc,amt)=>{
    return acc+amt.amount},0)

//console.log(totalExpense);


let tasks= [
    {description:"Write report", completed:false,priority:2},
    {description:"Send email", completed:true,priority:3},
    {description:"Prepare report", completed:false,priority:1},
]

//task which not completed

const pendingShortedTask = tasks
        .filter((task)=> !task.completed)
        .sort((a,b)=>a.priority-b.priority)

//console.log(pendingShortedTask);


let movieRating=[
    {title:"Movie A", rating:[4,5,3]},
    {title:"Movie B", rating:[5,5,4]},
    {title:"Movie C", rating:[3,4,2]},
]

const averageRating = movieRating.map((movie)=>{
    let total= movie.rating.reduce((sum,rating) =>sum+rating,0)
    let avg = total/ movie.rating.length
    // movie.rating = avg
    // return movie
    return {title:movie.title, averageRatings:avg.toFixed(2)}
})

console.log(averageRating);
