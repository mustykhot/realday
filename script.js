//collect day of the week from  device
let date = new Date();
let day = date.getDay();
let realDay;
let ginger;
let whosaidit;

//check day and set qoute
if(day==0){
    realDay = 'Sunday';
    ginger = 'The greatest glory in living lies not in never falling, but in rising every time we fall.';
    whosaidit = 'Nelson Mandela';
}

else if(day==1){
    realDay = 'Monday';
    ginger = 'It is during our darkest moments that we must focus to see the light.';
    whosaidit = 'Aristotle';

}

else if(day==2){
    realDay = 'Tuesday';
    ginger = 'Spread love everywhere you go. Let no one ever come to you without leaving happier.';
    whosaidit = 'Mother Teresa';
}

else if(day==3){
    realDay = 'Wednesday';
    ginger = 'Do not go where the path may lead, go instead where there is no path and leave a trail.';
    whosaidit = 'Ralph Waldo Emerson';
}

else if(day==4){
    realDay = 'Thursday';
    ginger = 'In the end, it\'s not the years in your life that count. It\'s the life in your years.';
    whosaidit = 'Abraham Lincoln';
}

else if(day==5){
    realDay = 'Friday';
    ginger = 'Never let the fear of striking out keep you from playing the game.';
    whosaidit = 'Babe Ruth';

}

else if(day==6){
    realDay = 'Saturday';
    ginger = 'Life is never fair, and perhaps it is a good thing for most of us that it is not.';
    whosaidit = 'Oscar Wilde';
}

//release output
document.getElementById("d").innerHTML=realDay;
document.getElementById("quote").innerHTML=ginger;
document.getElementById('person').innerHTML=whosaidit;
