<h1 align="center">🎉 Boas-vindas ao meu repositório do projeto Ultracar Service </h1>

![swagger documetation blogs api](https://user-images.githubusercontent.com/104791582/233059459-f1eaab3e-587e-44cb-9584-6998ed23d9a9.gif)

![flag tools](https://img.shields.io/badge/Tools-%20Docker%20|%20Node.js-9cf) ![flag tools](https://img.shields.io/badge/Languages-JavaScript-yellow) ![flag tools](https://img.shields.io/badge/Frameworks-React-yelow)


### [DEPLOY](https://ultracarservice.bohr.io/)

<p>Projeto como proposta inicial para seguinte cenário:</p>
<p>Determinada oficina necessita de um processo para
execução de serviço em veículos.</p>
<p>A ideia é implementar um microserviço para execuação citada acima podendo assim ser acoplado a uma palicação maior</p>

## 🔨 Recursos do projeto

<ul>
<li>✅Identifiação do Cliente Via QRCode redicionando para uma página com os dados do mesmo</li>
<li>✅Página para registro da ordem de serviço podendo selicionar o mêcanico que ira realizar, peças e serviços.</li>
<li>✅Página com os cliente cadastrados e seus respectivos carros.</li>
<li>✅Gerador de QRCode com dados do cliente cadastrado</li>
<li>✅Botão par baixar o QRCode em formado de imagem png</li>
<li>✅Registro da data e hora do inicio do serviço</li>
<li>✅Página com lista de O.S abertas</li>
</ul>

## ▶️ Executando aplicação
</br>

**⚠️ Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**

> ℹ️ Rode a aplicação com o comando:
```
docker-compose up -d
```
  - Esses comando irá inicializar um container chamado `frontend_ultracar_service`, realizara o build e subirá um servidor local.

  - A partir daqui você pode acessar a aplicação em:
  ````
   http://localhost:3000;
  ````

  - **⚠️ Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos.

  - ✨ **Dica:** A extensão `Remote - Containers` é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.

  <img src="https://user-images.githubusercontent.com/104791582/213542711-a092f145-a6e3-4172-89f4-417379cfefae.png" width="800px" >

</br>

## 🧔 Autor

<div class="badge-base LI-profile-badge" data-locale="pt_BR" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="dev-marcospaulo" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://br.linkedin.com/in/dev-marcospaulo?trk=profile-badge">Marcos Paulo Pereira</a></div>
