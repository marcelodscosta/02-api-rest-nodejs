# Projeto de API de Transações Financeiras

Este é um projeto de API desenvolvido em Node.js utilizando o microframework Fastify. Essa API permite o gerenciamento de transações financeiras, onde os usuários podem realizar débitos e créditos em suas contas.

## Instalação

Para começar, clone este repositório para o seu ambiente local:

```bash
git clone git@github.com:marcelodscosta/02-api-rest-nodejs.git
```

Em seguida, navegue até o diretório do projeto e instale as dependências utilizando npm ou yarn:

```bash
cd 02-api-rest-nodejs
npm install
# ou
yarn install
```

Certifique-se de ter um banco de dados configurado e acessível. O projeto utiliza o Knex como query builder para interagir com o banco de dados.

Além disso, você precisará configurar o arquivo .env com as variáveis de ambiente necessárias, como conexão com o banco de dados.

## Utilização
Após a instalação e configuração, você pode iniciar o servidor localmente com o seguinte comando:

```bash
npm run dev
# ou
yarn dev

```

Isso iniciará o servidor localmente e estará disponível em http://localhost:3000.

## Rotas Disponíveis
* GET /transactions: Retorna todas as transações associadas à sessão do usuário.
* GET /transactions/:id: Retorna uma transação específica com o ID fornecido.
* POST /transactions: Cria uma nova transação. Requer um corpo de requisição contendo os campos title, amount e type.
* GET /transactions/summary: Retorna um resumo das transações, incluindo o saldo total da conta.
## Scripts Disponíveis
Este projeto vem com os seguintes scripts predefinidos no arquivo package.json:

* dev: Inicia o servidor localmente utilizando tsx watch para recarregar automaticamente quando houver alterações no código.
* knex: Executa comandos do Knex para migrações e seeders.
* lint: Executa o ESLint para verificar e corrigir problemas de estilo de código.
* test: Executa os testes automatizados.
build: Compila o código TypeScript para JavaScript no diretório build para uso em produção.

Certifique-se de configurar corretamente suas variáveis de ambiente e banco de dados antes de utilizar os scripts relacionados ao Knex.

Este é apenas um guia básico de instalação e utilização do projeto. Sinta-se à vontade para explorar e modificar conforme necessário para atender às suas necessidades específicas. 