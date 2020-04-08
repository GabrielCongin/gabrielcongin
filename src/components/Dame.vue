<template>
    <div id="dame">
        <div id="global">
            <div id="myDiv"><h1>Jeu de Dame</h1></div>
            <div id="scoreImage">
                <img id="img_noir" border="" style="" src="../assets/dame/pion_noir.png"/><br/><br/>
                <img id="img_blanc" border="" style="" src="../assets/dame/pion_blanc.png"/>
            </div>
            <div id ="scoreText">
                <h1 id="score_noir">: 0</h1>
                <h1 id="score_blanc">: 0</h1>
            </div>
        </div>
    </div>
</template>

<script>
    class Pion {
        constructor(symb){
            this.symb = symb;
        }
    }

    let i=0;
    let j;
    let htmlTab="";
    let cpt = 0;
    let color;
    let plateau = new Array(10);
    let symbole = "";
    let previous;
    let play = 0;
    let currentCouleur = "blanc";

    function doSelection(identif,first){
        previous = identif;
        removeRed();
        let x = identif.charAt(1);
        let y = identif.charAt(3);
        let newX;
        let newY;
        if(plateau[x][y].symb == 'noir' && play % 2 != 0){
            newX = parseInt(x)+1;
            newY = parseInt(y)+1;
            if(newY < 10 && newX < 10 && plateau[newX][newY].symb == ""){
                document.getElementById(`l${newX}c${newY}`).style = "background-color:red;";
                plateau[newX][newY].symb='rouge';
            }else if(newY+1 < 10 && newX+1 < 10 && (plateau[newX][newY].symb == "blanc" || plateau[newX][newY].symb == "dame_blanc") && plateau[newX+1][newY+1].symb == ""){
                document.getElementById(`l${newX+1}c${newY+1}`).style = "background-color:red;";
                plateau[newX+1][newY+1].symb='rouge';
            }
            newY = parseInt(y)-1;
            if(newY >= 0 && newX < 10 && plateau[newX][newY].symb == ""){
                document.getElementById(`l${newX}c${newY}`).style = "background-color:red;";
                plateau[newX][newY].symb='rouge';
            }else if(newY-1 >= 0 && newX+1 < 10 && (plateau[newX][newY].symb == "blanc" || plateau[newX][newY].symb == "dame_blanc") && plateau[newX+1][newY-1].symb == ""){
                document.getElementById(`l${newX+1}c${newY-1}`).style = "background-color:red;";
                plateau[newX+1][newY-1].symb='rouge';
            }
        }else if(plateau[x][y].symb == 'blanc' && play % 2 == 0){
            newX = parseInt(x)-1;
            newY = parseInt(y)+1;
            if(newY < 10 && newX >= 0 && plateau[newX][newY].symb == ""){
                document.getElementById(`l${newX}c${newY}`).style = "background-color:red;";
                plateau[newX][newY].symb='rouge';
            }else if(newY+1 < 10 && newX-1 >= 0 && (plateau[newX][newY].symb == "noir" || plateau[newX][newY].symb == "dame_noir") && plateau[newX-1][newY+1].symb == ""){
                document.getElementById(`l${newX-1}c${newY+1}`).style = "background-color:red;";
                plateau[newX-1][newY+1].symb='rouge';
            }
            newY = parseInt(y)-1;
            if(newY >= 0 && newX >= 0 && plateau[newX][newY].symb == ""){
                document.getElementById(`l${newX}c${newY}`).style = "background-color:red;";
                plateau[newX][newY].symb='rouge';
            }else if(newY-1 >= 0 && newX-1 >= 0 && (plateau[newX][newY].symb == "noir" || plateau[newX][newY].symb == "dame_noir") && plateau[newX-1][newY-1].symb == ""){
                document.getElementById(`l${newX-1}c${newY-1}`).style = "background-color:red;";
                plateau[newX-1][newY-1].symb='rouge';
            }
        }else if(plateau[x][y].symb == 'dame_noir' && play%2!=0 || plateau[x][y].symb == 'dame_blanc' && play%2==0){
            let h;
            let diago = new Array(4);
            let eat = new Array(4);
            let found = false;
            let p;
            for(p=0;p<diago.length;p++){
                diago[p] = true;
                eat[p] = false;
            }
            let color = plateau[x][y].symb.substring(5,plateau[x][y].symb.length);
            for(h=1;h<10;h++){
                newX = parseInt(x) + h;
                newY = parseInt(y) + h;
                if(newX < 10 && newY < 10){
                    if(!checkDiagonal(newX,newY,x,y,color)){
                        diago[0] = false;
                    }
                    if(plateau[newX][newY].symb == opposite(color)){
                        if(!eat[0]){
                            eat[0] = true;
                            if(newX < 9 && newY < 9 && plateau[newX+1][newY+1].symb==""){
                                found=true;
                            }
                        }else{
                            diago[0] = false;
                        }
                    }
                    if(diago[0] && plateau[newX][newY].symb == ""){
                        document.getElementById(`l${newX}c${newY}`).style = "background-color:red;";
                        plateau[newX][newY].symb='rouge';
                    }
                }
                let newY2 = parseInt(y) - h;
                if(newX < 10 && newY2 >= 0) {
                    if (!checkDiagonal(newX, newY2, x, y,color)) {
                        diago[1] = false;
                    }
                    if(plateau[newX][newY2].symb == opposite(color)){
                        if(!eat[1]){
                            eat[1] = true;
                            if(newX < 9 && newY2 > 0 && plateau[newX+1][newY2-1].symb==""){
                                found = true;
                            }
                        }else{
                            diago[1] = false;
                        }
                    }
                    if (diago[1] && plateau[newX][newY2].symb == "") {
                        document.getElementById(`l${newX}c${newY2}`).style = "background-color:red;";
                        plateau[newX][newY2].symb = 'rouge';
                    }
                }
                let newXDown = parseInt(x)-h;
                if(newXDown >= 0 && newY < 10){
                    if(!checkDiagonal(newXDown,newY,x,y,color)){
                        diago[2] = false;
                    }
                    if(plateau[newXDown][newY].symb == opposite(color)){
                        if(!eat[2]){
                            eat[2] = true;
                            if(newXDown > 0 && newY < 9 && plateau[newXDown-1][newY+1].symb == ""){
                                found = true
                            }
                        }else{
                            diago[2] = false;
                        }
                    }
                    if(diago[2] && plateau[newXDown][newY].symb == ""){
                        document.getElementById(`l${newXDown}c${newY}`).style = "background-color:red;";
                        plateau[newXDown][newY].symb='rouge';
                    }
                }
                if(newXDown >=0 && newY2 >= 0){
                    if(!checkDiagonal(newXDown,newY2,x,y,color)){
                        diago[3] = false;
                    }
                    if(plateau[newXDown][newY2].symb == opposite(color)){
                        if(!eat[3]){
                            eat[3] = true;
                            if(newXDown > 0 && newY2 > 0 && plateau[newXDown - 1 ][newY2-1].symb == ""){
                                found = true;
                            }
                        }else{
                            diago[3] = false;
                        }
                    }
                    if(diago[3] && plateau[newXDown][newY2].symb == ""){
                        document.getElementById(`l${newXDown}c${newY2}`).style = "background-color:red;";
                        plateau[newXDown][newY2].symb='rouge';
                    }
                }
            }
            if(!found){
                if(!first){
                    removeRed();
                    play++;
                    changeRectanglePlayer();
                }
            }
        }
    }

    function checkDiagonal(newX,newY,x,y,color){
        if(plateau[newX][newY].symb != color && plateau[newX][newY].symb != plateau[x][y].symb){
            return true;
        }
        return false;
    }

    function opposite(color){
        if(color == 'noir'){
            return 'blanc';
        }else{
            return 'noir';
        }
    }

    function doMovement(identif){

        let x = parseInt(identif.charAt(1));
        let y = parseInt(identif.charAt(3));
        let oldX = parseInt(previous.charAt(1));
        let oldY = parseInt(previous.charAt(3));
        if( (y - oldY == 1 || y - oldY == -1) && plateau[oldX][oldY].symb.substring(0,4)!='dame' && plateau[x][y].symb=="rouge"){
            document.getElementById(`l${x}c${y}`).childNodes[0].src = require("../assets/dame/pion_"+plateau[oldX][oldY].symb+".png");
            document.getElementById(`l${oldX}c${oldY}`).childNodes[0].src = "";
            plateau[x][y].symb = plateau[oldX][oldY].symb;
            plateau[oldX][oldY].symb = "";
            document.getElementById(`l${x}c${y}`).style = "background-color:tan;";
            play++;
            previous = null;
            removeRed();
            replaceDame(identif);
            changeRectanglePlayer();
        }else if((y - oldY == 2 || y - oldY == -2) && plateau[oldX][oldY].symb.substring(0,4)!='dame' && plateau[x][y].symb=="rouge"){
            document.getElementById(`l${x}c${y}`).childNodes[0].src = require("../assets/dame/pion_"+plateau[oldX][oldY].symb+".png");
            document.getElementById(`l${oldX}c${oldY}`).childNodes[0].src = "";
            document.getElementById(`l${(oldX+x)/2}c${(oldY+y)/2}`).childNodes[0].src = "";
            plateau[x][y].symb = plateau[oldX][oldY].symb;
            plateau[oldX][oldY].symb = "";
            plateau[(oldX+x)/2][(oldY+y)/2].symb = "";
            document.getElementById(`l${x}c${y}`).style = "background-color:tan;";
            increaseCpt(plateau[x][y].symb);
            previous = null;
            replaceDame(identif);
            doAllSideSelection(identif);
        }else if(plateau[oldX][oldY].symb.substring(0,4)=='dame' && plateau[x][y].symb=="rouge"){
            let found = false;
            document.getElementById(`l${x}c${y}`).childNodes[0].src = require("../assets/dame/"+plateau[oldX][oldY].symb+".png");
            document.getElementById(`l${oldX}c${oldY}`).childNodes[0].src = "";
            plateau[x][y].symb = plateau[oldX][oldY].symb;
            plateau[oldX][oldY].symb = "";
            document.getElementById(`l${x}c${y}`).style = "background-color:tan;";
            let color = plateau[x][y].symb.substring(5,plateau[x][y].symb.length);
            let b;
            for(b=1;b< Math.abs(x - oldX);b++){
                let newX;
                let newY;
                if(oldX < x && oldY < y){
                    newX = oldX+b;
                    newY = oldY+b;
                }else if(oldX > x && oldY > y){
                    newX = oldX-b;
                    newY = oldY-b;
                }else if(oldX < x && oldY > y){
                    newX = oldX+b;
                    newY = oldY-b;
                }else if(oldX > x && oldY < y ){
                    newX = oldX-b;
                    newY = oldY+b;
                }
                if(plateau[newX][newY].symb != plateau[x][y].symb && plateau[newX][newY].symb != ""
                    && plateau[newX][newY].symb != "rouge" && plateau[newX][newY].symb != color){
                    found = true;
                    plateau[newX][newY].symb = "";
                    document.getElementById(`l${newX}c${newY}`).childNodes[0].src = "";
                    increaseCpt(color);
                }
            }
            previous = null;
            if(found){
                doSelection(identif,false);
            }else{
                removeRed();
                play++;
                changeRectanglePlayer();
            }
        }
    }

    function increaseCpt(colorPiece){
        let line = document.getElementById(`score_${colorPiece}`).textContent;
        let score = parseInt(line.charAt(line.length-1))+1;
        document.getElementById(`score_${colorPiece}`).innerHTML = line.substring(0,line.length-1)+score;
    }

    function removeRed(){
        let n;
        let m;
        for(n=0;n<10;n++){
            for(m=0;m<10;m++){
                if(plateau[n][m].symb == "rouge"){
                    document.getElementById(`l${n}c${m}`).style = "background-color:tan;";
                    plateau[n][m].symb= "";
                }
            }
        }
    }

    function doAllSideSelection(identif){
        removeRed();
        let found = false;
        previous = identif;
        let x = parseInt(identif.charAt(1));
        let y = parseInt(identif.charAt(3));
        let s = plateau[x][y].symb;
        let opposite;
        if(s == 'noir'){
            opposite = 'blanc';
        }else{
            opposite = 'noir';
        }
        let v;
        let w;
        for(v = -1;v<=1;v=v+2){
            for(w = -1;w<=1;w=w+2){
                if(x+(2*v) >= 0 && x+(2*v)<10 && y+(2*w) >= 0 && y+(2*w)<10 && plateau[x+v][y+w].symb == opposite &&
                    plateau[x+(2*v)][y+(2*w)].symb == ""
                ){
                    document.getElementById(`l${x+(2*v)}c${y+(2*w)}`).style = "background-color:red;";
                    plateau[x+(2*v)][y+(2*w)].symb='rouge';
                    found = true;
                }
            }
        }
        if(!found){
            play++;
            changeRectanglePlayer();
        }
    }

    function replaceDame(identif){
        let x = parseInt(identif.charAt(1));
        let y = parseInt(identif.charAt(3));
        if(plateau[x][y].symb == 'noir' && x == 9 || plateau[x][y].symb == 'blanc' && x == 0){
            document.getElementById(identif).childNodes[0].src = require(`../assets/dame/dame_${plateau[x][y].symb}.png`);
            plateau[x][y].symb = `dame_${plateau[x][y].symb}`;
        }
    }

    function changeRectanglePlayer () {
        if(currentCouleur=='blanc'){
            currentCouleur='noir';
        }else{
            currentCouleur='blanc';
        }
        document.getElementById(`img_${currentCouleur}`).style = 'border-color:red;';
        document.getElementById(`img_${currentCouleur}`).border = '5';
        document.getElementById(`img_${opposite(currentCouleur)}`).style = "";
        document.getElementById(`img_${opposite(currentCouleur)}`).border = "";
    }
    export default {
        name: "Dame",
        methods:{
            doAction(identif){
                console.log("coucou");
                let x = parseInt(identif.charAt(1));
                let y = parseInt(identif.charAt(3));
                if(plateau[x][y].symb == 'noir' || plateau[x][y].symb == 'blanc' || plateau[x][y].symb.substring(0,4) == 'dame'){
                    doSelection(identif,true);
                }else{
                    doMovement(identif);
                }
            }
        },
        mounted() {
            htmlTab += '<table>'
            for(i=0;i<10;i++){
                htmlTab += '<tr>';
                plateau[i] = new Array(10);
                for(j=0;j<10;j++){
                    if(cpt % 2 == 0){
                        color = 'white';
                    }else{
                        color = 'tan';
                    }
                    cpt++;
                    let id = `l${i}c${j}`;
                    htmlTab += `<td on:click="doAction('${id}')" id="${id}" align="center" style="background-color:${color};border: 1px solid #333;width: 60px;height: 60px;">`;

                    if(color == 'tan'){
                        if(i<=3) {
                            symbole="noir";
                            htmlTab += '<img src='+require('../assets/dame/pion_noir.png')+'>';
                        }else if(i>=6){
                            symbole="blanc";
                            htmlTab += '<img src='+require('../assets/dame/pion_blanc.png')+'>';
                        }else{
                            htmlTab += `<img src="">`;
                        }
                    }
                    htmlTab += `</td>`;
                    plateau[i][j] = new Pion(symbole);
                    symbole = "";
                }
                htmlTab += '</tr>';
                cpt++;
            }
            htmlTab+='</table>';
            document.getElementById('myDiv').innerHTML+= htmlTab;
            document.getElementById("img_blanc").style = 'border-color:red;';
            document.getElementById("img_blanc").border = '5';
        }
    }
</script>

<style scoped>
    #global #myDiv {
        float : left;
    }

    #global #scoreImage {
        float : left;
        padding-left: 10%;
        padding-top: 23%;
    }

    #global #scoreText {
        padding-left: 2%;
        float : left;
        padding-top: 24%;
    }

</style>