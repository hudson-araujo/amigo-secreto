# Sorteio de Amigos

Este projeto consiste em uma aplicação simples para gerenciar uma lista de amigos e realizar sorteios entre eles. Através de uma interface interativa, os usuários podem adicionar novos amigos à lista, com verificações para evitar duplicatas, e realizar sorteios de forma aleatória.

## Funcionalidades

### **Adicionar Amigo**
   - O usuário pode digitar o nome de um amigo e adicioná-lo à lista.
   - **Validação**:
     - Não é permitido adicionar nomes em branco.
     - Não é permitido adicionar nomes duplicados, considerando a comparação de nomes de forma **case insensitive**. Ou seja, "João" e "joão" são considerados o mesmo nome.
     - Caso o nome seja repetido, um alerta será exibido informando o usuário.

### **Listar Amigos**
   - Após adicionar um amigo, o nome será exibido na lista de amigos na interface.
   - A lista é atualizada dinamicamente sempre que um novo amigo é adicionado.

### **Sortear Amigo**
   - O usuário pode realizar um sorteio aleatório de um amigo da lista.
   - Se não houver amigos na lista, será exibida uma mensagem informando que não há amigos disponíveis para sorteio.
   - O nome do amigo sorteado é exibido na tela.

## Como Usar

   **Adicionar Amigos**:
   - Digite o nome de um amigo no campo de entrada e clique no botão "Adicionar".
   - Caso o nome seja repetido ou vazio, será exibido um alerta.

   **Sortear Amigo**:
   - Clique no botão "Sortear" para realizar o sorteio. O nome do amigo sorteado será exibido na tela.

## Tecnologias Usadas

- **HTML**: Estrutura básica da página.
- **CSS**: Estilos básicos para a formatação da interface.
- **JavaScript**: Lógica de adição, verificação de duplicatas e sorteio de amigos.
