//collect day of the week from  device
let date = new Date();
let day = date.getDay();
let realDay;
let ginger;

//check day and set qoute
if(day==0){
    realDay = 'Sunday';
    ginger = 'Rest small, dont die!';
}

else if(day==1){
    realDay = 'Na Monday';
    ginger = 'Ji Masun';

}

else if(day==2){
    realDay = 'Na Tuesday';
    ginger = 'Work Still Plenty!!';
}

else if(day==3){
    realDay = 'Na Wednesday';
    ginger = 'Continue Working';
}

else if(day==4){
    realDay = 'Na Thursday';
    ginger = 'Mafo You will soon rest';
}

else if(day==5){
    realDay = 'Na Friday';
    ginger = 'Oya stop working';

}

else if(day==6){
    realDay = 'Na Saturday';
    ginger = 'Kalo parrryyy!!';
}

//release output
document.getElementById("d").innerHTML=realDay;
document.getElementById("quote").innerHTML=ginger;
