let btn=document.getElementById("Calculate");
let age=document.getElementById("age");
let year=document.getElementById("Y");
let monthe=document.getElementById("M");
let day=document.getElementById("D");
btn.addEventListener("click",()=>{
    const inputdate=age.value;
    if(!inputdate){
        alert("Veuillez sélectionner une date !");
        return ;
    }
    const birthday=new Date(inputdate);
    const today= new Date();
    if (birthday > today) {
        alert("La date ne peut pas être dans le futur !");
        return;
    }
    let years=today.getFullYear() -birthday.getFullYear();
    let monthes=today.getMonth() -birthday.getMonth();
    let days=today.getDate() -birthday.getDate();
    if(days<0){
        monthes--;
        const lastmonth=new Date(today.getFullYear(),today.getMonth(),0);
        days+=lastmonth.getDate();
    }
    if(monthes<0){
        years--;
        monthes+=12;
    }
    year.textContent=years;
    monthe.textContent=monthes;
    day.textContent=days;
    inputdate.textContent=''
})