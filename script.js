/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
   arr.map((developersByMap) => {
    if(developersByMap.profession==="developer"){
      console.log(developersByMap)
    }
   });

}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  
  arr.forEach(developers)
  function developers(obj){
    if(obj.profession==="developer"){
      console.log(obj);
    }
  }
 
}

function addData() {
  //Write your code here, just console.log
  arr.push( {id:4,name:"susan",age:"20",profession:"intern"})
  console.log(arr)
}

function removeAdmin() {
  //Write your code here, just console.log
  for(let i=0;i<arr.length;i++){
    let obj=arr[i]
    if(obj.profession==="admin"){
    arr.splice(i,1)}
  }
  console.log(arr)
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2=[
    { id: 5, name: "sita", age: "32", profession: "intern" },
    { id: 6, name: "gita", age: "43", profession: "intern" },
    { id: 7, name: "nita", age: "51", profession: "teacher" },
  ]
  let concatarray=arr.concat(arr2)
  console.log(concatarray)

}
