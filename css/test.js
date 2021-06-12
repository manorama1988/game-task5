
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


for(let i = 0; i<= recipesArray.length; i++)
{
    if(recipesArray[i].meal === msg){
        console.log(recipesArray[i].ingredients[i]);
    }
   
    console.log(recipesArray[i].ingredients[i]);
   
}






