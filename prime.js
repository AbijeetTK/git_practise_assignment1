//prime

 let num=13;
let check=true;
for(let i=2;i<num;i++)
{
if(num%i==0)
{
check =false;
break;
}
}
if(check==false)
{
console.log("It is Prime.");
}
else
{
console.log("It is not prime");
}