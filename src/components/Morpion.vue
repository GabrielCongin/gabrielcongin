<template>
    <div id="morpion" align="center">
        <h1>Tic Tac Toe</h1>
        <table>
            <tr>
                <td @click="symbMethod('1')"> <img src="" id="1"> </td>
                <td @click="symbMethod('2')"> <img src="" id="2"> </td>
                <td @click="symbMethod('3')"> <img src="" id="3"> </td>
            </tr>
            <tr>
                <td @click="symbMethod('4')"> <img id="4" src=""> </td>
                <td @click="symbMethod('5')"> <img id="5" src=""> </td>
                <td @click="symbMethod('6')"> <img id="6" src=""> </td>
            </tr>
            <tr>
                <td @click="symbMethod('7')"> <img id="7" src=""> </td>
                <td @click="symbMethod('8')"> <img id="8" src=""> </td>
                <td @click="symbMethod('9')"> <img id="9" src=""> </td>
            </tr>
        </table>
        <br/>
        <v-btn align="center" @click="restart" text>Recommencer</v-btn>
    </div>
</template>

<script>
    let cpt = 0;
    let end = false;
    let previous = new Array();
    let symb;
    function hasWon(){
        if(document.getElementById('1').src.match(require('../assets/morpion/'+symb+'.png').substring(0,15)) != null &&
            document.getElementById('2').src.match(require('../assets/morpion/'+symb+'.png').substring(0,15)) != null &&
            document.getElementById('3').src.match(require('../assets/morpion/'+symb+'.png').substring(0,15)) != null){
            return true;
        }
        if(document.getElementById('1').src.match(require('../assets/morpion/'+symb+'.png').substring(0,15)) != null &&
            document.getElementById('4').src.match(require('../assets/morpion/'+symb+'.png').substring(0,15)) != null &&
            document.getElementById('7').src.match(require('../assets/morpion/'+symb+'.png').substring(0,15)) != null){
            return true;
        }
        if(document.getElementById('4').src.match(require('../assets/morpion/'+symb+'.png').substring(0,15)) != null &&
            document.getElementById('5').src.match(require('../assets/morpion/'+symb+'.png').substring(0,15)) != null &&
            document.getElementById('6').src.match(require('../assets/morpion/'+symb+'.png').substring(0,15)) != null){
            return true;
        }
        if(document.getElementById('2').src.match(require('../assets/morpion/'+symb+'.png').substring(0,15)) != null &&
            document.getElementById('5').src.match(require('../assets/morpion/'+symb+'.png').substring(0,15)) != null &&
            document.getElementById('8').src.match(require('../assets/morpion/'+symb+'.png').substring(0,15)) != null){
            return true;
        }
        if(document.getElementById('7').src.match(require('../assets/morpion/'+symb+'.png').substring(0,15)) != null &&
            document.getElementById('8').src.match(require('../assets/morpion/'+symb+'.png').substring(0,15)) != null &&
            document.getElementById('9').src.match(require('../assets/morpion/'+symb+'.png').substring(0,15)) != null){
            return true;
        }
        if(document.getElementById('3').src.match(require('../assets/morpion/'+symb+'.png').substring(0,15)) != null &&
            document.getElementById('6').src.match(require('../assets/morpion/'+symb+'.png').substring(0,15)) != null &&
            document.getElementById('9').src.match(require('../assets/morpion/'+symb+'.png').substring(0,15)) != null){
            return true;
        }
        if(document.getElementById('1').src.match(require('../assets/morpion/'+symb+'.png').substring(0,15)) != null &&
            document.getElementById('5').src.match(require('../assets/morpion/'+symb+'.png').substring(0,15)) != null &&
            document.getElementById('9').src.match(require('../assets/morpion/'+symb+'.png').substring(0,15)) != null){
            return true;
        }
        if(document.getElementById('7').src.match(require('../assets/morpion/'+symb+'.png').substring(0,15)) != null &&
            document.getElementById('5').src.match(require('../assets/morpion/'+symb+'.png').substring(0,15)) != null &&
            document.getElementById('3').src.match(require('../assets/morpion/'+symb+'.png').substring(0,15)) != null){
            return true;
        }
        return false;
    }
    export default {
        name: "Morpion",
        methods: {
            symbMethod: function(c){
                if(!end && !previous.includes(c)) {
                    if (cpt % 2 == 0) {
                        symb = 'croix';
                    } else {
                        symb = 'ronds';
                    }
                    document.getElementById(c).src = require('../assets/morpion/'+symb+'.png');
                    previous.push(c);
                    cpt++;
                    if (hasWon()) {
                        alert("Les "+symb+" ont gagné!");
                        end = true;
                    }else if(previous.length == 9){
                        alert("Egalité!");
                        end = true;
                    }
                }
            },
            resetParameters: function(){
                previous = new Array();
                cpt=0;
                end=false;
            },
            restart: function(){
                previous = new Array();
                cpt=0;
                end=false;
                let i;
                for(i=1;i<=9;i++){
                    document.getElementById(i).src="";
                }
            }
        },
        beforeMount() {
            this.resetParameters();
        }
    }
</script>

<style scoped>
    #morpion{
        padding-top: 5%;
    }
    td {
        border: 1px solid #333;
        width: 108px;
        height: 100px;
    }
</style>