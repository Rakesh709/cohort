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

//find the total numberr of male and femal 

[
  {
    $group: {
      _id: "$gender",
      genderCount:{
        $sum: 1
      }
      
    }
  }
]

//which country has the higest number of users ?

[
  {
    $group: {
      _id: "$company.location.country",
      userCount:{
        $sum:+1
      }
    }
  },
    {
      $sort: {
        userCount: -1
      }
    },
  {
    $limit: 2
  }
    
  
]

// list all unique eye colors in collection 

[
  {
    $group: {
      _id: "$eyeColor",
      eyeColourCount:{
        $sum:1
      }
    },
  }
]

//average number of tags per uuser 

[
  {
    $unwind: "$tags"
  },
  {
    $group: {
      _id: "$_id",
      numberOfTags:{$sum:1}
      
    }
  },
  {
    $group: {
      _id: null,
      averageNumberOfTags: {$avg:"$numberOfTags"}
    }
  }
]

