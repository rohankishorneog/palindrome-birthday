var button=document.querySelector("#btn");
var input=document.querySelector("#inp");
var output=document.querySelector("#output-div");
btn.addEventListener("click",showOnclick);

function showOnclick(){
    console.log("clicked")
    var bDay=button.value.replaceAll("-","");
    var charList=bDay.split('');
    var reversedList=charList.reverse();
    reversedList.join('');

    if(bDay===reversedList){
        output.innerText="Yes, your birthday is palindrome"
    }else{
        output.innerText="No, its not"
    }

}
