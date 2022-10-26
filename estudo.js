let tabuada = 2;
let nome = "leticia";

function escreva (){
    document.write("tabuada do " + tabuada + "<br>")
    document.write(tabuada + " x 1 = "+(tabuada*1)+"<br>");
    document.write(tabuada + " x 2 = "+(tabuada*2)+"<br>");
    document.write(tabuada + " x 3 = "+(tabuada*3)+"<br>");
    document.write(tabuada + " x 4 = "+(tabuada*4)+"<br>");
    document.write(tabuada + " x 5 = "+(tabuada*5)+"<br>");
    document.write(tabuada + " x 6 = "+(tabuada*6)+"<br>");
    document.write(tabuada + " x 7 = "+(tabuada*7)+"<br>");
    document.write(tabuada + " x 8 = "+(tabuada*8)+"<br>");
    document.write(tabuada + " x 9 = "+(tabuada*9)+"<br>");
    document.write(tabuada + " x 10 = "+(tabuada*10)+"<br>");
    document.write("feito por" + nome);
}

function minhatabuada (){
    for( let i = 1; i <= 10; i++){
         for(let j = 1; j<= 10; j++){
         document.write(i + " x " + j + " = " +(j*i)+"<br>");  
       }
    }

}

function quadrado(){
    for(let i = 1; i <= 20; i++){
     document.write("0 quadrado de " + i + " é " (i*i)+ "<br>");
    }
}
    
    
 
 
    
    
    
    
    
    
    
    
    
function moeda(atual)
return atual.tolocalesgtring('pt-br,{style: 'currency'), currency: 'brl'});

function calcula(){
    let c = document.getElementById("value").value;
    let j = document.getElementById(juros).value;
    let t = document.getElementById("meses").value;

    if (!number(c)){
        alert("o valor do capital deve ser numerico")
        document.getElementById("valor").value ="";
        document.getElementById("valor").focus();
        return
    }
    if(!number(j)){
        alert("o valor do juros deve ser numerico")
        document.getElementById("juros").value = "";
        document.getElementById("juros").focus();
    }
    if(!number(t)){
        alert("o valor do juros deve ser numerico")
        document.getElementById("meses").value = "";
        document.getElementById("meses").focus();

    document.write("resultado: + r");
}
let r = c;
for(let m = 1; m<= t; m++){
  r = c * (1 +(j / 100));
  c = r; 
document.write("mes " + m + "- valor: " + moeda(r)+"<br>")
}
    let op = ""
    function operacao(ope){
        op = ope;
    }
    function calcule (){
        let v1 = document.getElementById("v1").value;
        let v2 = document.getElementById("v2").value;
        let r = 0;
        if(operacao === "+"){
            r = Number (v1) + number(v2)
        }
        document.getElementById("resultado").innergHtml = r;
    }





    let c = document.getElementById("valor").value;
    let j = document.getElementById("juros").value;
    let r = c * (1 + (j/100));
    document.write("RESULTADO: " + r);

}


