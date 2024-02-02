# 🚀 B2FLY-API

<p>
  <a href="https://documenter.getpostman.com/view/13040502/UzBjrney#c3212110-5be6-45bd-b000-95c6538746ca" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Teste prático com o objetivo de avaliar a capacidade técnica de desenvolvimento de ma aplicação com framework ReactJS.

## Instalação

1- Clone o repositório

```sh
git clone https://github.com/edvaldotorres/b2fly-app
```

2- Acesse a pasta do projeto

```sh
cd b2fly-app
```

4- Instale as dependências do projeto

```sh
npm install
```

5- Rodar o projeto

```sh
npm run dev
```

## Testes

```sh
npm run test
```

## Uso

acesse [http://localhost:5173/](http://localhost:5173/) para ver o projeto.

## Questões de Conhecimento Geral:

1.  **Explique o conceito de componentes no React e como eles se relacionam com o conceito de reutilização de código.**

    - O React é uma biblioteca JavaScript para a criação de interfaces de usuário, que utiliza o conceito de componentes para a construção de interfaces de usuário.
    - Componentes no React são blocos de construção de interfaces de usuário, que podem ser reutilizados em diferentes partes de uma aplicação.
    - Os componentes no React são construídos a partir de funções ou classes, que encapsulam a lógica e a interface de usuário de uma parte da aplicação.
    - Os componentes no React se relacionam com o conceito de reutilização de código porque permitem a criação de interfaces de usuário reutilizáveis, ou seja, permitem a criação de interfaces de usuário que podem ser utilizadas em diferentes partes de uma aplicação.

2.  **Descreva o ciclo de vida de um componente de classe no React.**

    - O ciclo de vida de um componente de classe no React é composto por diferentes fases, que representam diferentes momentos na vida de um componente.
    - As fases do ciclo de vida de um componente de classe no React são:
      - **Montagem (Mounting):** Nesta fase, o componente é inicializado e inserido no DOM. As fases desta etapa são:
        - **constructor:** Método especial para inicializar o estado do componente e vincular métodos de instância.
        - **render:** Método obrigatório que retorna o JSX que representa o componente.
        - **componentDidMount:** Método que é executado após o componente ser inserido no DOM.
      - **Atualização (Updating):** Nesta fase, o componente é atualizado em resposta a mudanças de estado ou de propriedades. As fases desta etapa são:
        - **shouldComponentUpdate:** Método que permite ao componente decidir se deve ser atualizado ou não.
        - **render:** Método obrigatório que retorna o JSX que representa o componente.
        - **componentDidUpdate:** Método que é executado após o componente ser atualizado.
      - **Desmontagem (Unmounting):** Nesta fase, o componente é removido do DOM. A fase desta etapa é:
        - **componentWillUnmount:** Método que é executado antes do componente ser removido do DOM.

3.  **Qual é a diferença entre componentes controlados e não controlados no React?**

    - **Componentes controlados:** São componentes que mantêm o estado do componente no estado do React. Isso significa que o estado do componente é armazenado no estado do React e é atualizado através do método `setState`. Os componentes controlados são úteis quando se deseja controlar o estado do componente de forma centralizada.
    - **Componentes não controlados:** São componentes que mantêm o estado do componente no DOM. Isso significa que o estado do componente é armazenado no DOM e é atualizado através de referências ao DOM. Os componentes não controlados são úteis quando se deseja controlar o estado do componente de forma descentralizada.

4.  **Como você integraria um front-end React a um aplicativo Laravel existente?**

    - Para integrar um front-end React a um aplicativo Laravel existente, é necessário criar um ponto de entrada para o front-end React no aplicativo Laravel.
    - Podemos criar um ponto de entrada para o front-end React no aplicativo Laravel criando uma rota que aponte para o arquivo `index.html` do front-end React.
    - Podemos também usar CDNs para carregar o front-end React no aplicativo Laravel.

5.  **Descreva como o Laravel Passport pode ser utilizado para autenticar uma API que é consumida por um aplicativo React.**

    - O Laravel Passport pode ser utilizado para autenticar uma API que é consumida por um aplicativo React através da criação de tokens de acesso.
    - Para utilizar o Laravel Passport para autenticar uma API que é consumida por um aplicativo React, é necessário criar um sistema de autenticação baseado em tokens de acesso.
    - O Laravel Passport fornece um sistema de autenticação baseado em tokens de acesso que permite a autenticação de APIs que são consumidas por aplicativos React.

## Observações

- O projeto precisa de uma API para funcionar corretamente, acesse o repositório [b2fly-api](https://github.com/edvaldotorres/b2fly-api) para mais informações.

## Autor

👤 **Edvaldo Torres de Souza**

- Website: [edvaldotorres.com.br](https://edvaldotorres.com.br/)
- Github: [@edvaldotorres](https://github.com/edvaldotorres)
- LinkedIn: [Edvaldo Torres](https://www.linkedin.com/in/edvaldo-torres-189894150/)
