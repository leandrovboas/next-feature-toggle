[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub last commit](https://img.shields.io/badge/last%20comit-may%202021-orange)](https://github.com/leandrovboas/ignews/commits)
[![Next.js](https://img.shields.io/badge/NextJs-blue)](https://nextjs.org/)
[![React.js](https://img.shields.io/badge/-ReactJs-blue)](https://pt-br.reactjs.org/)
[![Typescript](https://img.shields.io/badge/-Typescript-blue)](https://www.typescriptlang.org/)

<br/>

<div align="center">
    <h1 color="#ffff" >Exemplo de criação de um Feature Toggle usando Next.js</h1>
    </br>
</div>
<br/>

# <strong>Sobre o projeto</strong>

Criei um app em Next.js para testar uma forma de fazer Feature Toggle nos componentes do site.

Criei dois header e coloque em um enum um alias para eles basta criar um arquivo .env com a variável FEATURE_DISABLED
e colocar um dos alias para desabilitar um dos dois headers.

<br/>

# <strong>Executando o projeto</strong>

Basta clonar o repositório, adicionar um arquivo .env na raiz do projeto com a variável FEATURE_DISABLED=""
e executar o npm start
deve aparecer os dois headers, para desabilitar um deles é só adicionar na variável do .env um dos alias que
estão no enum (src > utils > enum) e rodar npm start novamente

</br>

# **License**

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

</br>

# **contato**

### Desenvolvido por Leandro Vilas Boas

[Linkedin](https://br.linkedin.com/in/leandro-vilas-boas-55403b2b) <br/>
[Github](https://github.com/leandrovboas)
