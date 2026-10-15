# memoria.md — Histórico vivo do projeto

Registrar só o que ajuda na continuidade. Formato: `AAAA-MM-DD — fato`.

## Decisões aprovadas
- 2026-10-14 — Site é uma **landing page única** para vender **3 lotes em Barra de Serinhaém (Ituberá, BA)**.
- 2026-10-14 — **Idiomas: português (padrão) + inglês**, com seletor.
- 2026-10-14 — **CTA principal: WhatsApp** (botão flutuante + CTAs por seção/lote, sem backend).
- 2026-10-14 — **Stack: HTML + CSS + JS puro**, sem framework nem build.
- 2026-10-14 — **Tipografia: serif itálica (títulos) + sans (texto)**. Proposta: Fraunces + Hanken Grotesk.
- 2026-10-14 — Referências usadas só para estrutura e atmosfera (Praia de Cuca, Guadalupe, Rota DUE, Praia Canoé); identidade original.

- 2026-10-14 — **Público-alvo**: compradores de terrenos para construir ou investir no litoral da Bahia.
- 2026-10-14 — **Lotes**: 3 lotes de **1.000 m²** cada; **preço sob consulta**; possibilidade (sob consulta) de redimensionar para 500 m² ou 333 m².
- 2026-10-14 — **WhatsApp**: +55 71 99200-5271 (Nélio Castro).
- 2026-10-14 — **Fotos**: usar as de `minhas-fotos/`; animação com elas autorizada. Fotos da internet só com licença/crédito (recomendação minha, aguardando confirmação).
- 2026-10-14 — **Vídeos do local**: embed do YouTube com crédito aos criadores (3 links em site.md §3d).
- 2026-10-14 — **Mapa**: usar o Google My Maps do cliente com a posição dos terrenos (precisa de link público de visualização).
- 2026-10-14 — **Textos do local**: escritos por nós a partir das fontes listadas, parafraseados e verificados; nada copiado.

- 2026-10-14 — **Nome do empreendimento: Coqueiral da Barra** (escolhido entre as sugestões abaixo). Logotipo ainda a criar; checar domínio/marca.

## Nomes sugeridos para o empreendimento (escolhido: Coqueiral da Barra)
1. **Coqueiral da Barra** (recomendado: remete ao coqueiral real das fotos; fácil de lembrar).
2. **Foz do Serinhaém** (encontro rio–mar; forte identidade geográfica).
3. **Enseada Serinhaém** (baía calma, tom mais sofisticado).
4. **Recanto da Barra** (acolhedor, mais genérico).
5. **Barra Viva** (curto, moderno; menos ligado ao lugar).
Checar disponibilidade de domínio/marca e evitar confusão com Sirinhaém (PE) antes de decidir.

- 2026-10-14 — **Fatos de localização do cliente**: ~100 m do lote à praia; ~7 km em linha reta até Barra Grande; link público do Google My Maps recebido (embed).
- 2026-10-14 — **Fotos**: curadoria feita por mim (hero desktop `5830f0fa`, mobile `0f410c21`; lista em site.md §3e) — aguardando OK do cliente. **Textos**: rascunho PT/EN em `specs/textos.md` — aguardando OK.
- 2026-10-14 — Imagens de Google Earth/Street View enviadas não serão publicadas; só referência interna.

- 2026-10-14 — **Aprovados** pelo cliente: curadoria de fotos (site.md §3e) e textos PT/EN (specs/textos.md). Itens `[ ]` nos textos seguem pendentes de dado real.

- 2026-10-14 — **Ajustes de texto pedidos pelo cliente**: H1 agora "…da Baía de Camamu"; cartão "Coqueirais, rio e praia…"; contraste do rótulo do hero melhorado (marfim sobre pílula escura); FAQ ganhou "Como é Barra de Serinhaém?" e "Como chego de Salvador?"; nova seção **Como chegar** (3 rotas a partir de Salvador, dentro de #localizacao, texto fornecido pelo cliente).

- 2026-10-14 — **Removida do FAQ** a pergunta "E a documentação?" (pedido do cliente). Documentação segue como pendência interna de dado, sem aparecer no site.

- 2026-10-14 — **Logo e favicon criados** (palmeira de coqueiro + onda em cobre, fundo verde-noite): `public/brand/`, `public/favicon.svg`, `favicon.ico`, apple-touch-icon, ícones 192/512, `og-image.jpg`. Wordmark segue em Fraunces itálico (texto vivo).
- 2026-10-14 — **Estrutura mudou**: o site agora vive em `public/` (Vercel publica só essa pasta; originais, specs e referências ficam fora do site). Publicação: GitHub → Vercel (HTML estático, sem build). `referencias/` fica fora do Git (85 MB, prints de terceiros).

- 2026-10-14 — **Repositório GitHub público**: https://github.com/neliocastro/coqueiral-da-barra (branch `main`). Escolha do cliente (público). Próximo: importar na Vercel (Output Directory `public`, sem build).

- 2026-10-14 — **Otimização de desempenho (PSI mobile: 85 → meta ≥ 95)**. Diagnóstico do PSI: LCP 3,6 s (o LCP é o `<h1>`, atrasado por CSS/fontes do Google), FCP 2,9 s, CLS 0, TBT 20 ms; A11y/BP/SEO 100. Correções: (1) fontes **hospedadas em `public/fonts/`** (Fraunces itálico 500–600 e Hanken 400–600, latin, eixos limitados e subset: 117 KB → 81 KB), `preload` da fonte do título, sem conexões ao Google Fonts; (2) slides 2 e 3 do hero saem do HTML (`<template id="hero-extra">`) e só carregam após o `load`, depois o crossfade começa (classe `.is-playing`); (3) imagens WebP recomprimidas (q64–72) + variantes de 480 px, `srcset/sizes` corretos, hero mobile 640 px (126 KB, antes 230 KB); (4) `main.js` com `defer`, scroll com `requestAnimationFrame` (sem reflow forçado); (5) `vercel.json`: CSP, COOP, cache de fontes (imutável) e imagens (7 dias + stale-while-revalidate). Medição local equivalente (simulate, base vs nova): nota 90–93 → 94–98, FCP 1,5 → 1,1 s, LCP 3,2–3,5 → 2,5–3,2 s, SI 1,5 → 1,1 s. Nota real só após novo deploy + PSI.

- 2026-10-14 — **Como chegar ganhou o cartão 04**: travessia de barco Ituberá → Barra (lanchas rápidas e barcos convencionais, horários e nota de variação), texto fornecido pelo cliente; cartão em largura total abaixo das 3 rotas. Nomes de operadoras privadas omitidos de propósito (decisão minha; cliente pode pedir para incluir). Horários vêm do texto do cliente e não foram verificados.

## Decisões rejeitadas
- (nenhuma até agora)

## Alterações realizadas
- 2026-10-14 — Criados `CLAUDE.md`, `specs/site.md`, `specs/design.md` e `memoria.md`. Nenhum código do site foi escrito.
- 2026-10-14 — Analisadas 20 capturas em `referencias/` e 34 fotos em `minhas-fotos/` (amostra de 8 vistas).

- 2026-10-14 — **Primeira versão da página construída** (plano aprovado): `index.html`, `css/styles.css`, `js/main.js` (i18n PT/EN está em atributos `data-en`, não em `i18n.js`), 21 fotos otimizadas em `imagens-site/` (WebP 800/1600 + JPEG). Seções: hero com crossfade, o lugar, 3 lotes, por que, galeria com lightbox, vídeos (facade, crédito Real Vision e Eaí, Vamos viajar), localização (embed My Maps), FAQ, CTA e rodapé. WhatsApp com mensagem por lote e por idioma.
- 2026-10-14 — Testado no navegador interno: PT/EN, menu mobile, galeria, mapa, vídeos (miniaturas), sem rolagem horizontal em 390 px e 1024 px. Não testado: Lighthouse, leitor de tela, Safari/Firefox reais.

## Problemas encontrados
- Bug corrigido: chave `dataset` com hífen quebrava a troca de idioma.
- As fotos em `minhas-fotos/` são de celular (várias verticais, luz dura, resolução e enquadramento irregulares); nenhuma parece profissional. Podem limitar o efeito "premium" do hero.
- As fotos têm só 1600×739 px (ou 739×1600): o hero em tela cheia ficará suave em monitores grandes. Ideal: originais maiores ou fotos de drone.
- `imagens-site/` está vazia (a otimizar a partir de `minhas-fotos/`).
- Há arquivos `._*` (metadados do macOS) dentro de `minhas-fotos/` e `referencias/`; ignorar.

## Soluções aplicadas
- Ver "Otimização de desempenho" em Alterações/Decisões (2026-10-14).

## Aprendizados (desempenho e testes)
- **Classe CSS reutilizada quebra layout**: a classe `.hero.play` colidiu com `.play` (botão de vídeo, `width:68px; margin:-34px`) e encolheu o hero para 68 px. Usar nomes únicos (`.is-playing`) e checar o hero no celular depois de mexer em classes.
- O LCP deste site é o texto do `<h1>`; imagens de hero em tela cheia são ignoradas como candidato a LCP, mas competem por banda: não carregar slides extras antes do `load`.
- Lighthouse local: o CLI recusa Node x64 em Mac Apple Silicon; funciona abrindo o Chrome com `--remote-debugging-port` e chamando o módulo `lighthouse` por script (`throttlingMethod: simulate` reproduz o PSI). Comparar sempre versão antiga e nova no mesmo servidor local, com gzip.
- `Cache-Control: immutable` só em arquivos com nome novo ao mudar o conteúdo (fontes). Imagens recomprimidas mantiveram o nome: cache de 7 dias em vez de imutável.
- Navegador da pane: cache de CSS (`max-age`) engana testes; usar outra porta/origem para ver a versão nova.
- WebP/AVIF: não há AVIF (sem ferramenta local); `cwebp` ok. Fotos de 1600 px limitam a nitidez; trocar por originais maiores vale mais que comprimir.

## Pendências
- Criar logotipo de "Coqueiral da Barra" e checar disponibilidade de domínio/marca.
- Dados reais dos lotes: medidas (frente × fundo), qual lote tem qual vista/distância da água, documentação (matrícula/escritura), infraestrutura, regras de construção; viabilidade legal de desmembrar em 500/333 m².
- Confirmar qual cor do mapa é cada lote e a distância de cada um à praia.
- Aprovar (ou ajustar) textos de `specs/textos.md` e a curadoria de fotos.
- Verificar os fatos do local nas fontes (praia ~5 km, distâncias, tempos de barco, acessos) antes de publicar.
- Confirmar nome dos criadores e permissão de embed dos 3 vídeos; um link do serinhaem.net pode não ser YouTube.
- Confirmar posição sobre fotos da internet (licença/crédito).
- Triagem completa das 34 fotos (escolher hero e atribuir fotos a cada lote).
- Validar paleta e tipografia propostas (mock/hero).
- Domínio, hospedagem, política de privacidade.
- Traduções EN revisadas.

## Próximos passos (após a v1)
- Conectar o repo na Vercel e publicar; depois definir domínio e trocar `og:image` para URL absoluta (https://SEU-DOMINIO/imagens-site/og-image.jpg); adicionar sitemap.xml e `<link rel="canonical">`.
- Cliente revisar a página; ajustar textos/fotos; preencher medidas de cada lote e confirmar qual cor do mapa é cada lote.
- Fazer commit/push da otimização, rodar o PSI de novo na URL da Vercel e comparar com 85 (LCP 3,6 s). Se o LCP ainda passar de 2,5 s: reduzir a fonte Fraunces (travar o eixo `opsz`) ou carregar o hero via CSS após o primeiro paint.
- Teste de teclado/leitor de tela; testar Safari/Firefox.
- Logotipo, domínio, hospedagem, favicon final, imagem Open Graph.

## Próximos passos (originais)
1. Escolher o nome e resolver as pendências de dados dos lotes e mapa.
2. Triar e otimizar fotos para `imagens-site/`.
3. Apresentar plano resumido da página e, após aprovação, construir hero + estrutura base.
4. Construir as seções restantes, PT/EN, e testar responsividade, acessibilidade e desempenho.
