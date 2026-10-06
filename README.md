# Coffe | portfólio

Site pessoal de uma página, feito com HTML, CSS e JavaScript puros. Sem frameworks e sem etapa de build.

## Como abrir localmente

1. Extraia o `.zip`.
2. Abra o arquivo `index.html` no navegador (duplo clique).

Não precisa de servidor. Se preferir um, dentro da pasta rode `python3 -m http.server` e acesse `http://localhost:8000`.

## Como publicar no GitHub Pages

1. Crie um repositório e envie o conteúdo desta pasta (o `index.html` deve ficar na raiz do repositório).
2. No repositório, vá em **Settings > Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**, selecione a branch `main` e a pasta `/ (root)`.
4. Salve. O endereço aparece na mesma tela depois de alguns minutos.

## Estrutura

```
portfolio/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    └── favicon.svg
```

## O que você pode personalizar

**Foto de perfil.** Coloque sua foto em `assets/foto.jpg` (quadrada fica melhor) e envie junto para o GitHub. O site já procura por esse arquivo. Enquanto ele não existir, o círculo mostra a letra "C". Se sua foto for PNG ou WebP, troque o nome em `index.html`, na linha `<img class="avatar__img" src="assets/foto.jpg" ...>`.

**Nome, cargo, localização e frase.** Estão no bloco `<section class="container hero">` do `index.html`. O título da aba e a descrição ficam no `<head>`.

**Tecnologias.** Cada item é um `<li class="stack__item">` dentro de `#tecnologias`. Para adicionar uma, copie um `<li>`, troque o nome e o ícone. Os ícones do Simple Icons estão em https://simpleicons.org (baixe o SVG e cole o conteúdo do `<path>`).

**Instagram.** O endereço `https://www.instagram.com/joao.xyl/` aparece em dois lugares do `index.html` (botão da apresentação e seção Contato). Troque nos dois.

**Cores.** No `css/style.css`, os blocos `:root[data-theme="dark"]` e `:root[data-theme="light"]` guardam todas as cores. O roxo de destaque é `--accent` (fundo de botões) e `--accent-text` (texto e links).

**Fonte, tamanhos e espaçamentos.** Variáveis no início do `css/style.css`, no bloco `:root`.

**Tema.** O site abre no tema escuro. O botão no cabeçalho alterna entre escuro e claro e guarda a escolha no navegador de quem visita.

## Recursos externos

- **Manrope** pela Google Fonts (`fonts.googleapis.com` e `fonts.gstatic.com`). Se a fonte não carregar, o site usa a fonte padrão do sistema. Licença: SIL Open Font License.

Nenhuma outra dependência é carregada de fora. Todos os ícones são SVGs dentro do próprio `index.html`.

## Licenças dos ícones

- **Instagram, HTML, CSS, JavaScript e Node.js**: [Simple Icons](https://simpleicons.org), licença CC0 1.0. As marcas pertencem aos respectivos donos.
- **Sol, lua e marcador de localização**: [Material Design Icons](https://pictogrammers.com/library/mdi/), da Pictogrammers, sob a Pictogrammers Free License.

## Limitações

- Não há formulário de contato, porque não há backend nem email. O contato é feito pelo Instagram.
- O tema escolhido fica salvo só no navegador de quem visita.
