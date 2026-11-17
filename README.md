# Douglaz Silva — portfólio

Site estático de apresentação profissional, publicado em **https://douglazsilva.github.io/** via GitHub Pages.

## Conteúdo

Página única com: introdução, "About", contato, experiência profissional, projetos (MarmitechLab e AID Tecnologia), formação e certificações, competências, clientes e reconhecimentos. Os dados foram atualizados a partir do perfil do LinkedIn e dos sites [MarmitechLab](https://marmitechlab.github.io/) e [AID Tecnologia](https://aidtecnologia.github.io/).

## Estrutura

```
index.html            conteúdo e metadados
css/main.css          estilos, animações e responsividade
css/normalize.min.css reset de navegadores
js/main.js            animação de entrada (JavaScript vanilla)
fonts/                Inter (WOFF2) + licença OFL
img/                  logo e imagem de compartilhamento (Open Graph)
scripts/check_html.py validação usada no CI
```

## Rodando localmente

Não há build nem dependências. Sirva a pasta com qualquer servidor estático:

```bash
python3 -m http.server 8000
# abra http://localhost:8000
```

## Publicação

Qualquer push em `master` dispara o deploy automático do GitHub Pages. O workflow em `.github/workflows/validate.yml` valida o HTML antes de cada push/PR.

## Google Analytics

O HTML contém um bloco comentado com o placeholder `G-XXXXXXXXXX`. Para ativar, crie uma propriedade **GA4** em analytics.google.com, adicione o fluxo `https://douglazsilva.github.io/`, copie o ID de medição e substitua o placeholder no `<head>` de `index.html`.

## Créditos

- Layout original adaptado do portfólio de [Nicolas Desle](https://nicolasdesle.be/).
- Fonte [Inter](https://rsms.me/inter/), licenciada sob SIL Open Font License 1.1 (`fonts/OFL-Inter.txt`).
