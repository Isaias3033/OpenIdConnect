# Login com Firebase e OpenID Connect
 
Este repositório contém um exemplo prático e completo de uma aplicação web de login e cadastro, utilizando o Firebase para autenticação e o Firestore para gerenciar dados de usuários. O projeto foi desenvolvido para demonstrar a utilização de autenticação e autorização com OpenID Connect.
 
## Tecnologias Utilizadas
 
Firebase Authentication: Para gerenciar o processo de login e cadastro de usuários, incluindo métodos de autenticação por e-mail e senha.
Cloud Firestore: Um banco de dados NoSQL utilizado para armazenar informações adicionais do usuário (nome, sobrenome, e-mail) de forma segura.
HTML, CSS e JavaScript: A base para a interface do usuário e a lógica de front-end. O estilo da página é responsivo e tem um design limpo e moderno.
 
## Funcionalidades Principais
 
O projeto inclui as seguintes funcionalidades:
Cadastro de Usuário: Permite que novos usuários criem uma conta usando nome, sobrenome, e-mail e senha. Uma mensagem de erro é exibida se o e-mail já estiver em uso.
Login de Usuário: Permite que usuários existentes façam login com suas credenciais. O ID do usuário autenticado é salvo no localStorage.
Página Inicial (Homepage): Após o login, o usuário é redirecionado para uma página que exibe seus dados (nome, sobrenome e e-mail) buscados do Firestore.
Logout: O usuário pode sair da conta, o que remove o ID do usuário do localStorage e o redireciona para a página de login.
Navegação Dinâmica: A interface alterna entre os formulários de login e cadastro de forma fluida, controlada pelo JavaScript.
 
## Como Iniciar
 
Configurar o Firebase: Crie um projeto no console do Firebase e habilite o Firebase Authentication (E-mail/Senha) e o Cloud Firestore.
Obter as Chaves de Configuração: Adicione um aplicativo web ao seu projeto Firebase para obter o objeto de configuração (firebaseConfig).
Atualizar os Arquivos: Substitua as strings vazias no firebaseauth.js e homepage.js com as suas chaves de configuração do Firebase.
Executar o Projeto: Abra o arquivo index.html em seu navegador.
 
## Estrutura do Projeto
 
index.html: Página principal com os formulários de login e cadastro.
homepage.html: Página exibida após o login, mostrando os dados do usuário.
firebaseauth.js: Contém a lógica de autenticação e interação com o Firestore para cadastro e login.
homepage.js: Gerencia o estado de autenticação do usuário e busca seus dados para exibição na página inicial.
script.js: Controla a exibição e ocultação dos formulários de login e cadastro.
style.css: Folha de estilo para a interface da aplicação.
 
## Licença
 
Este projeto é distribuído sob a Licença Pública Geral GNU v3.0.
# OpenIdConnect
