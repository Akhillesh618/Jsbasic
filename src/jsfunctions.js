//////ex 1
var Dog =
{
  name: "Skipper",
  age : 2,
  bark: function()
  {
    console.log('woof woof!!');
  },

   printonf: function()
   {
    console.log(this.name + +"is" + this.age + "years old!");
   }
};



/////ex 2
var sum = function(num1,num2) 
{
var sumresult = num1 + num2;
return sumresult;
};

const sum1 = sum(5,9);
console.log(sum1);


console.log(sum(10,12));
 
var sum_arr_fn = (num1 , num2) =>num1+num2;

console.log(sum_arr_fn(12,32));



//ex3
var Dog =function(name,age){
  this.name =name;
  this.age=age;
  this.printonf = function()
  {
    console.log(this.name +" is " + this.age  + " years old! ");
  };
};

var dog1 =new Dog("scoby",7);
var dog2 = new Dog("maddy" ,4);

dog1.printonf()
dog2.printonf()



// ex 4

{
  let a = "Some string";
  console.log(a)
  {
    let a = "other string";
    console.log(a)
  }
  console.log(a);

}

//ex 4

for (var i = 0; i <5; i++)
{
  console.log(i);
}

console.log("outside " +i);


//19/nov
//Ex 3

function wrapper(l,u,something)
{
  for(let i=l;i<=u,i++;)
 {
  applicationCache(i);
  }
} 

let aee = []
wrapper(50,50,function(k)
{
   k%2!==0 ? aee.push(k): null
} )

console.log(aee)
