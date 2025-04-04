//mongodb-aggregation

//find the active user

[
  {
    $match: {
      isActive: true,
    },
  },
  {
    $count: "activeUsers",
  },
]

// average age

[
  {
    $group: {
      _id: "null",
      //making whole document as one document
      averageAge:{
        $avg:"$age"
      }
    
    }
  }
]

//top common fruit among the users 

[
  {
    $group: {
      _id: "$favoriteFruit",
      count:{
        $sum:1
      }
    },
  },
  {
    $sort: {
      count:-1
    }
  },
  {
    $limit: 5
  }
]