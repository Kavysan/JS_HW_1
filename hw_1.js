// exercise 1
function findWords(a,b){
    for (let i=0; i< b.length; i++){
        if (a.includes(b[i].toLowerCase())){
            console.log("Matched " + b[i] + "\n")
        }
        else{
            console.log("No matches for " + b[i] + "\n")
        }
    }
}
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
dog_string = dog_string.toLowerCase()
let dog_names = ["Max","HAS","PuRple","dog"]
findWords(dog_string,dog_names)

// exercise 2
function replaceEvens(arr){
    for (let i=0; i< arr.length; i++){
    if (i%2 == 0){
        arr.splice(i, 1, 'even index');
    }
}
return arr
}
let arr = ["Max","Baseball","Reboot","Goku","Truck","Rodger"]
console.log(replaceEvens(arr))