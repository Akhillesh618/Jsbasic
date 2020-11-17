//Release 0
var fruits=["Apple","Banana","Mango","Grape","Orange","Pineapple","watermelon"];
Countfruits=fruits.length;
console.log(`total fruits are ${Countfruits}`);


//Release 1
let akhilfruits=["Apple","Banana","Mango","Grape"];
let nikhilfruits=["orange","pineapple","blackgrape"];
let vineethfruits=["watermelon","Dragonfruit","Kiwi"];
console.log(akhilfruits,nikhilfruits,vineethfruits)
totalfruits=akhilfruits.length+nikhilfruits.length+vineethfruits.length;
console.log('total fruits are '+totalfruits);

//Release 2

if(akhilfruits!=0 || nikhilfruits!=0||vineethfruits!=0)
{
    console.log("Akhilfruits: "+akhilfruits);
    console.log("Nikhilfruits: "+nikhilfruits)
    console.log("Vineethfruits: "+vineethfruits)
}