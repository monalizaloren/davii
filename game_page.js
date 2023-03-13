
    player1_name = localStorage.getItem("player1_name");
	/*a linha acima você esta pegando um elemento do localStorge que é o player1_name*/
	//Faça o mesmo com o player 2
	//???

	player1_score = 0;
	//Na linha acima você está definindo a pontuação do player1, faça o mesmo com o player 2


document.getElementById("player1_name").innerHTML = player1_name + " : ";
/* Na linha acima você esta juntando duas palavras: O nome do jogador e o símbolo " : "
   Faça o mesmo com o player2*/
//???

document.getElementById("player1_score").innerHTML = player1_score ;
//Na linha acima você está mostrando a pontuação do primeiro jogador, faça o mesmo com o segundo
//???

document.getElementById("player_question").innerHTML = "Turno de Pergunta - " + player1_name ;
//O código innerHTML, tem a função de mudar o conteúdo HTML por meio do javascript, adicione o mesmo abaixo:
document.getElementById("player_answer").??? = "Turno de Resposta - " + player2_name ;

function send() {
	get_word = document.getElementById("word").value;
	//O código 'toLowerCase' deixa todas as letras minúsculas. Adicione o código abaixo para deixar todas as letras minúsculas
	word = get_word.???();

	//função charAt() é usada para obter o caractere em uma determinada posição de uma string.
	//Adicione esse código nas interrogações abaixo:
    charAt1 = word.???(1);

	lenght_divide_2 = Math.floor(word.length/2);
	charAt2 = word.???(lenght_divide_2);
	
    lenght_minus_1 = word.length - 1; 
    charAt3 = word.???(lenght_minus_1); 
	
    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");

    question_word = "<h4 id='word_display'> P. "+remove_charAt3+"</h4>";
    input_box = "<br>Resposta : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Verificar</button>";
    row =  question_word + input_box + check_button ; 

	//Adicione o código que altera o conteúdo HTML, por meio do javascript
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}


question_turn = "player1";
answer_turn = "player2";
