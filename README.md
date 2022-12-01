# Micro frontend em Angular

Esse projeto é um exemplo de como aplicar uma arquitetura de Micro Frontend em Angular. O projeto principal desse workspace é o orquestrador dos microapps, que estão na pasta `projetcs` (apenas por questões de comodidade, já que os microapps poderiam estar em qualquer repositório).

## Como executar

``` bash
npm install
npm build:micro-apps
npm serve:micro-apps
# Em outro terminal
ng s
```

## Como o projeto funciona

### Microapps

Os microapps são construídos com base em Web Components. Ao invés de fazer o boostrap do `AppComponent`, como fazemos em uma aplicação tradicional Angular, estamos registrando esses apps como Web Components, para que possam ser usados em qualquer ambiente. Para fazer isso, estamos utilizando a biblioteca `@angular/elements`.

``` typescript
// Exemplo de um módulo principal de um microapp
@NgModule({
  declarations: [		
    AppComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) {}
  
  ngDoBootstrap() {
    const elem = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('custom-web-component', elem);
  }
}
```
Após o build de um projeto angular, normalmente, ele gera 3 arquivos javascript que são importados no `index.html` do projeto. Por questão de conveniência ao utilizar esses microapps no orquestrador, é necessário juntar esses arquivos em um só, poderiamos usar uma biblioteca pra isso, mas achei mais fácil criar um bundler simples eu mesmo. Esse arquivo é o `bundle.js` e para utilizá-lo é só executá-lo passando o nome do microapp que você deseja fazer o bundle. Isso já está sendo feito quando utilizamos os scripts de build dentro do `package.json`.

### Orquestrador

Neste exemplo, estamos importando o bundle dos microapps em tags `script`. Para automatizar esse processo, criei um service que automatiza esse processo. Só precisamos definir nos arquivos `environment` quais microapps queremos que o orquestrador importe.

``` typescript
// Exemplo de environment utilizado nesse orquestrador

export const environment = {
  microApps: [
    {
      tagName: "micro-app-page-one",
      url: "http://localhost:5000/package.js",
      autoRender: true
    },
    {
      tagName: "micro-app-material-page-two",
      url: "http://localhost:5001/package.js",
      autoRender: true
    },
    {
      tagName: "micro-app-button",
      url: "http://localhost:5002/package.js",
      autoRender: false
    }
  ]
};
```

Vamos entrar em detalhes o que cada campo dessa configuração está fazendo:

- `tagName` - É a tag registrada como Web Component no `ngDoBootstrap` do microapp, é a tag que será utilizada no HTML do orquestrador.
- `url` - Onde o microapp está hospedado. Ele pode estar em qualquer lugar.
- `autoRender` - É uma configurações que diz se esse microapp será renderizado automaticamente no projeto assim que ele iniciar.

O service `micro-apps.service` obtem essas configurações e as utiliza para importar/renderizar os microapps. No nosso exemplo, cada microapp é uma página, ou seja, ela é renderizada automaticamente mas o componente de sua rota só é renderizado quando estamos na rota correta, por isso, criei o componente `micro-apps-router-outlet` que chama o `micro-apps.service` e importa/renderiza os microapps de acordo com a configuração fornecida no `environment`.

Outra configuração que precisamos fazer no módulo principal do nosso orquestrador é para permitir que essas tags criadas nos microapps sejam utilizadas sem erros.

``` typescript
// Módulo principal do orquestrador

@NgModule({
  declarations: [
    AppComponent,
    MicroAppsRouterOutletComponent,
    ...
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

A configuração `schemas:[CUSTOM_ELEMENTS_SCHEMA]` permite que os Web Components sejam utilizados.

