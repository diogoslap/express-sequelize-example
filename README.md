Este é um projeto de exemplo que faz um CRUD através de uma API que possui a seguinte stack:

- Express.js
- Sequelize
- Sqlite 3

# Instalação

É necessário ter instalado:

- Node.js
- sqlite3

Em caso de utilizar outro banco relacional, alterar o arquivo config/database.js

Para iniciar a instalação do projeto, execute:

```
npm install
```

Após isso execute o seguinte comando para criar o migration da base de dados

```
npx sequelize db:migrate
```

Em seguida inicie o servidor:

```
npm start
```

# Uso da API

Criando um novo usuário:

```
curl --request POST \
  --url http://localhost:3000/users \
  --header 'content-type: application/json' \
  --data '{
	"username":"username",
	"name":"name",
	"email":"youremail@email.com",
	"password":"123456"
}'
```

Retornando todos os usuários:

```
curl --request GET \
  --url http://localhost:3000/users
```

Retornando um usuario específico por ID:

```
curl --request GET \
  --url http://localhost:3000/users/1
```

Atualizando dados de um usuário:

### #Observação#

Dentro de data no comando do curl, pode especificar quais campos queira alterar.

```
curl --request PUT \
  --url http://localhost:3000/users/1 \
  --header 'content-type: application/json' \
  --data '{
	"username":"diogo",
	"name":"Nome novo1"
}'
```

Apagando um usuário:

```
curl --request DELETE \
  --url http://localhost:3000/users/1
```