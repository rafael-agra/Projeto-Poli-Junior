# Projeto Poli Junior :octocat:
> Status do Projeto: Concluído :heavy_check_mark:

### Tópicos 

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto-star)

:small_blue_diamond: [API](#api)

:small_blue_diamond: [Deploy](#Deploy)

:small_blue_diamond: [Aplicação](#a-aplicação-rocket)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Licença](#licença)

## Descrição do Projeto :star: 
<p>
O projeto consistia na criação de uma página uma página em HTML, CSS e Javascript que fizesse um 
request HTTP para obtenção dos dados (de um banco de dados fornecido, calculando e exibindo a nota 
necessária de um determinado aluno na P3 de acordo com com alguns fatores como Média pretendida, 
Notas na P1 e P2 e Pesos.

Além disso era necessário a criação de uma interface simples, intuitiva e bonita que possa ser utilizada 
sem maiores complicações e tendo em mente que essa ferramenta seria divulgada para outros grupos de alunos
da instituição.
</p>

## API 
A API utilizada neste projeto pode ser encontrada em: https://api.polijunior.com.br/

**Att: A api foi retirada do ar pelo respectivo provedor (30/10/2020)**

## Deploy

https://rafaelmspu2.github.io/Projeto-Poli-Junior/

## A aplicação :rocket:
<p>
  Para densevolver o projeto foram criadas duas páginas html a <strong>index.html</strong> e a <strong>notas.html</strong>.
  
  A primeira é a página de login, pela qual o usuário deve preencher nos campos suas credenciais (NºUSP e Senha)
  para só então ter acesso as suas notas, bem como o cálculo da nota na P3 para se atingir a média pretendida.
  Abaixo está uma foto da tela de login:
  
  <img src="https://github.com/rafaelmspu2/Projeto-Poli-Junior/blob/master/imagens%20de%20demonstracao/login.png">
  
  Caso o usuário tente clicar no botão "Entrar" sem preencher nenhum campo a página emitirá um alerta informando que
  o usuário não informou as credenciais corretamente, o mesmo vale se apenas um dos campos forem preenchidos. Além disso
  no campo "NªUSP" são aceitos apenas números. Cada campo deve conter ao menos 3 caracteres para ser considerado válido.
  
  Há também uma opção de cadastro, ao clicá-la o usuário é informado que essa opção ainda não está disponível no site.
  
  Ao fazer login o usuário é redirecionado para próxima página Html, onde será ver possível ver suas informações registradas
  na API, como é possível ver na imagem abaixo:
  
  <img src="https://github.com/rafaelmspu2/Projeto-Poli-Junior/blob/master/imagens%20de%20demonstracao/notas.png">
  
  A tabela foi separada em 4 campos: Matéria, Nota da P1, Nota da P2 e Nota necessária na P3, onde nesse último é informado
  ao usuário se é possível ou não atingir a média pretendida e, se for, calcular a nota necessária na P3. 
  
  Já no canto superior direito é possível observar um botão "Sair", que redireciona o usuário para a página de login fazendo
  assim o seu logout.

</p>

## Funcionalidades
:trophy: Buscar dados de uma API e mostrar em formas de tabela. <br/>
:trophy: Redirecionar um usuário da página de login para a principal. <br/>
:trophy: Verificar se o usuário digitou ao menos 3 caracteres/números em cada "textbox" na página de login. <br/>
:trophy: Verifica se é possível atingir a média pretendida ou se ela já foi atingida. <br/>
:trophy: Responsivo para outras plataformas.



## Licença 

The [MIT License]() (MIT)

Copyright :copyright: - 2020
