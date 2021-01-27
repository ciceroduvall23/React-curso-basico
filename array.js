document.write("</br> Escolha seu pedido: </br>");
document.write("</br> 0 - Sorvete/1 - suco </br>");
document.write("</br> 2 - Coca cola / 3 - agua gelada </br>");

//Switch 
function pedir(){
x = prompt("o que voce deseja pedir?");

switch(x){
    case "0": //*sem as aspas duplas o js identifica como um campo normalmas com as aspas ele entende como uma string
          alert ("voce pediu sorvete");
          break;
    case "1":
        alert ("voce pediu um suco");
        break;
    case "2":
            alert("voce pediu uma coca gelada");
            break;
    case "3":
            alert("voce pedir uma Agua natural ");
            break;
        default:
                alert("ops nao temos essa opçao ! ");
                break; /** dar o break para ele parar*/
      }
}