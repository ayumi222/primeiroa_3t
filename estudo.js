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
        document.write(tabuada do " + i + "<br>");
         for(let j = 1; j<= 10; j++){
         document.write(i + " x " + j + " = " +(j*i)+"<br>"
  }
    document.write("<br>");

}

function quadrado(){
    for(let i = 1; i <= 20; i++){
     document.write("0 quadrado de " + i + " é " (i*i)+ "<br>");
    }
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

