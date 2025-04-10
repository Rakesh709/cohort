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

//how many users have enum as one of their tags

[
  {
    $match: {
      tags: "enim"
    }
  },
  {
    $count: 'userWithEnimTags'
  }
]

// what are the names and age of users swho are inactive and have velit as a tag?

[
  {
    $match: {
      isActive: false, 
      tags: "velit",
      
    },
  },
  {
    $project: {
      name:1,
      age:1
    }
  }
]

//how many user have phone number with +1 (940)

[
  {
    $match: {
      "company.phone":/^\+1 \(940\)/
    }
  },
  {
    $count: "usersWithNumber"
  }
]

//who has registred the most recently 
[
  {
    $sort: {
      registered: -1
      // this means user regitsrted at last will come first
    }
  },{
    $limit: 5
  },
  {
    $project: {
      name:1,
      registred:1,
      favoriteFruit:1
    }
  }
]

//categories user by there favorite fruit

[
  {
    $group: {
      _id: "$favoriteFruit",
      users:{
        $push:"$name"
      }
    }
  }
]
//push is accumulater like avg 

//how many users have "ad" as the secondary tag in there list of tags

[
  {
    $match: {
      "tags.1":"ad"
    }
  },{
    $count: 'secondTagAd'
  }
]

//find user who have both "enim and is as their tags"
[
  {
    $match: {
      tags:{
        $all:["enim","id"]
      }
    }
  }
]

// list all the companies located in the USA with thier corrsponding user count
[
  {
    $match: {
      "company.location.country":"USA"
    }
  },
  {
    $group: {
      _id: "$company.title",
      userCount:{ $sum:1}
    }
  }
]