/** O codigo fonte agora da acessa a Eduarda */
/** feito - Eduarda */
/** O codigo fonte agora pode ser acessado pela Ana */
 /** feito ana */
var Tabuleiro = [];

for (let l = 0; l < 5; l++) {
    Tabuleiro[l] = []; 
    for (let c = 0; c < 5; c++) {
        Tabuleiro[l][c] = false;
    }
}

for(let i = 0; i < 5; i++){
    let posx = Math.floor(Math.random() * 5);
    let posy = Math.floor(Math.random() * 5);
    Tabuleiro [posx][posy] = true;
}






console.log(Tabuleiro);
