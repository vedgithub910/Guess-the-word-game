p1name=localStorage.getItem("p1");
p2name=localStorage.getItem("p2");
p1score=0;
p2score=0;
document.getElementById("player1_name").innerHTML=p1name +" : ";
document.getElementById("player2_name").innerHTML=p2name+" : ";
document.getElementById("player1_score").innerHTML=p1score;
document.getElementById("player2_score").innerHTML=p2score;
document.getElementById("player_question").innerHTML="question turn : "+p1name;
document.getElementById("player_answer").innerHTML="answer turn : "+p2name;


function send(){
getword=document.getElementById("word").value;
word=getword.toLowerCase();
c1=word.charAt(0);
middle=Math.floor(word.length/2);
c2=word.charAt(middle);
last=word.length-1;
c3=word.charAt(last);
x=word.replace(c1,"_");
y=x.replace(c2,"_");
z=y.replace(c3,"_");

qword="<h4 id='word_display'>Q: "+z+"</h4>";
ibox="<br> Answer: <input type='text' id='checkans'>";
b1="<br> <button class='btn btn-info' onclick='check()'>Check</button>";
final=qword+ibox+b1;
document.getElementById("output").innerHTML=final
}
Qt="player1";
At="player2";
function check(){
getanswer=document.getElementById("checkans").value;                                                                            
answer=getanswer.toLowerCase();
if(answer==word){
if(At=="player1")    
{
p1score=p1score+1;

document.getElementById("player1_score").innerHTML=p1score;

}else{
p2score=p2score+1;
document.getElementById("player2_score").innerHTML=p2score;    
}          
}
if(Qt=="player1"){
Qt="player2";
document.getElementById("player_question").innerHTML="question turn : "+p2name;
}
else{
Qt="player1";
document.getElementById("player_question").innerHTML="question turn : "+p1name;
}
if(At=="player1"){
At="player2";
document.getElementById("player_answer").innerHTML="answer turn : "+p2name;
}
else{
At="player1";
document.getElementById("player_answer").innerHTML="answer turn : "+p1name;
}
document.getElementById("output").innerHTML="";


}