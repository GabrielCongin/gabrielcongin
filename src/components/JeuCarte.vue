<template>
    <div id="jeuCarte" align="center">
        <h1>Trouvez les différentes paires</h1>
        <table>
            <tr>
                <td> <img src="../assets/cartespng/backside.png" id="1" @click="displayName('1')"> </td>
                <td> <img src="../assets/cartespng/backside.png" id="2" @click="displayName('2')"></td>
                <td> <img src="../assets/cartespng/backside.png" id="3" @click="displayName('3')"> </td>
                <td> <img src="../assets/cartespng/backside.png" id="4" @click="displayName('4')"> </td>
            </tr>
            <tr>
                <td> <img src="../assets/cartespng/backside.png" id="5" @click="displayName('5')"></td>
                <td> <img src="../assets/cartespng/backside.png" id="6" @click="displayName('6')"></td>
                <td> <img src="../assets/cartespng/backside.png" id="7" @click="displayName('7')"></td>
                <td> <img src="../assets/cartespng/backside.png" id="8" @click="displayName('8')"></td>
            </tr>
            <tr>
                <td> <img src="../assets/cartespng/backside.png" id="9" @click="displayName('9')"></td>
                <td> <img src="../assets/cartespng/backside.png" id="10" @click="displayName('10')"></td>
                <td> <img src="../assets/cartespng/backside.png" id="11" @click="displayName('11')"></td>
                <td> <img src="../assets/cartespng/backside.png" id="12" @click="displayName('12')"></td>
            </tr>
            <tr>
                <td> <img src="../assets/cartespng/backside.png" id="13" @click="displayName('13')"></td>
                <td> <img src="../assets/cartespng/backside.png" id="14" @click="displayName('14')"></td>
                <td> <img src="../assets/cartespng/backside.png" id="15" @click="displayName('15')"></td>
                <td> <img src="../assets/cartespng/backside.png" id="16" @click="displayName('16')"></td>
            </tr>
            <tr>
                <td> <img src="../assets/cartespng/backside.png" id="17" @click="displayName('17')"></td>
                <td> <img src="../assets/cartespng/backside.png" id="18" @click="displayName('18')"></td>
                <td> <img src="../assets/cartespng/backside.png" id="19" @click="displayName('19')"></td>
                <td> <img src="../assets/cartespng/backside.png" id="20" @click="displayName('20')"></td>
            </tr>
        </table>
        <br/>
        <v-btn align="center" @click="restart" text>Recommencer</v-btn>
    </div>
</template>

<script>
    let card = ['1C', '1S', '1T', '1P', 'RC', 'RS', 'RT', 'RP', 'DC', 'DS', 'DT', 'DP', 'VC', 'VS', 'VT', 'VP', 'XC', 'XS', 'XT', 'XP'];
    let sortTab = shuffle(card);
    let id2;
    let win = 10;
    let flag = 0;

    export default {
        name: "JeuCarte",
        methods:{
            displayName: function(c){
                if(flag < 2){
                    flag++;
                    document.getElementById(c).src = require('../assets/cartespng/'+card[c-1]+'.png');
                    if(flag==2){
                        setTimeout( function() {
                            if(goodAnswer(sortTab[c-1],sortTab[id2-1])){
                                win--;
                                if(win == 0){
                                    alert("YOU WON");
                                }
                            }else{
                                document.getElementById(c).src = require('../assets/cartespng/backside.png');
                                document.getElementById(id2).src = require('../assets/cartespng/backside.png');
                            }
                            flag=0;
                        },1500);
                    }else{
                        id2 = c;
                    }
                }

            },
            restart: function(){
                sortTab=shuffle(card);
                win=10;
                let i;
                for(i=1;i<=20;i++){
                    document.getElementById(i).src = require("../assets/cartespng/backside.png");
                }
            }
        }
    }
    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
    function goodAnswer(c1,c2){
        if(c1.substring(0,1)==c2.substring(0,1) && sameColor(c1,c2)){
            return true;
        }
        return false;
    }

    function sameColor(c1,c2){
        let couleur1 = c1.substring(1,2);
        let couleur2 = c2.substring(1,2);
        if(couleur1 == 'C' && couleur2 == 'S' || couleur1 == 'S' && couleur2=='C' || couleur1=='T' && couleur2 == 'P' || couleur1 =='P' && couleur2=='T'){
            return true;
        }
        return false;
    }

</script>

<style scoped>
    #jeuCarte{
        padding-top: 20px;
    }
</style>