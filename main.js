function adicionarContato() 
    {
    //pegando oa valores do input
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("tel").value;

    //pegando a tabela e adicionando uma nova linha
    var tabela = document.getElementById("tabelaContatos");
    var novaLinha = tabela.insertRow();

    var celulaNome = novaLinha.insertCell(0);
    var celulaEmail = novaLinha.insertCell(1);
    var celulaTel = novaLinha.insertCell(2);

    //Criando nova linha para um checkbox
    var celulaCheckbox = novaLinha.insertCell(3); // criando coluna de seleção
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    celulaCheckbox.appendChild(checkbox);

    celulaNome.innerHTML = nome;
    celulaEmail.innerHTML = email;
    celulaTel.innerHTML = tel;

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("tel").value = "";
    }

    //Função Excluir contato
    function excluirContato() {
        //Pegar tabela
        var tabela = document.getElementById("tabelaContatos");
        //Pegar checkbox
        var checkboxes = tabela.querySelectorAll("input[type='checkbox']");

        //Criar condição e chamar função "confirm" para abrir caixa de dialogo
        if (confirm("Tem certeza de que deseja excluir os contatos selecionados?")) { 
            //Iniciar loop verificando do final até o primeiro checkbox
            for (var i = checkboxes.length - 1; i >= 0; i--) {
                //Verifica se o elemento atual na array é um checkbox e se ele esta marcado
                if (checkboxes[i].type === "checkbox" && checkboxes[i].checked) {
                    //Exclui linha 
                    tabela.deleteRow(i);
                }
            }
        }
    }