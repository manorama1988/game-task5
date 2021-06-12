

/*alert(`welcome ${mess} . Please insert an array`);
let mess1 = prompt(`welcome ${mess} . Please insert an array`);
alert(`welcome ${mess} . Please insert an array`); */

/*

var student = [
                {name:'Joy',age:30},
                {name:'Roy',age:35},
                {name:'Koy',age:25},
                {name:'Soy',age:33}
               
];

let mess1 = prompt(`welcome Please insert your name`);

for (let i= 0 ; i<= student.length; i++){
    
   console.log(" Array data",student[i])

   if (student[i].name === mess1){
       console.log("you age is", student[i].age);
   }else{
       console.log("data is not present");
   }

} */

const recipesArray = [
    {
        meal : "pancakes",
        ingredients : ["eggs","flour","milk","butter"],
        time: "0.5hour",
    },
    {
        meal : "tomato soup",
        ingredients : ["eggs","flour","milk","butter"],
        time: "1hour",
    },
    {
        meal : "eggs with salad",
        ingredients : ["eggs","flour","milk","butter"],
        time: "1hour",
    },
    {
        meal : "cake",
        ingredients : ["eggs","flour","milk","butter"],
        time: "1hour",
    },
    {
        meal : "soup",
        ingredients : ["tomato","flour","milk","butter"],
        time: "1hour",
    },
]
let msg = prompt("Please enter your recipe ");
let unknown = "ture";

for(let i = 0; i<= recipesArray.length; i++)
{
    //let show = prompt(` we have recipe .recipesArray`);
   // console.log(recipesArray[i].meal);
    if(recipesArray[i].meal === msg){
     
        //console.log(recipesArray[i].meal, "takes", 
        //recipesArray[i].time,"and ingredients are required", recipesArray[i].ingredients[i])
        //unknown = "false";
        
        for(let j=0; j<=recipesArray[i].ingredients.length; j++){
           // console.log(recipesArray[i].ingredients[j]);

           // console.log(recipesArray[i].ingredients[j]);

            console.log(recipesArray[i].meal, "takes", 
        recipesArray[i].time,"and ingredients are required", recipesArray[i].ingredients[j]);
        break;
        }

            
        unknown = "false";
    }
    
   
}






