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
- (nenhuma ainda)

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
- Cliente revisar a página; ajustar textos/fotos; preencher medidas de cada lote e confirmar qual cor do mapa é cada lote.
- Rodar Lighthouse e teste de teclado/leitor de tela; testar Safari/Firefox.
- Logotipo, domínio, hospedagem, favicon final, imagem Open Graph.

## Próximos passos (originais)
1. Escolher o nome e resolver as pendências de dados dos lotes e mapa.
2. Triar e otimizar fotos para `imagens-site/`.
3. Apresentar plano resumido da página e, após aprovação, construir hero + estrutura base.
4. Construir as seções restantes, PT/EN, e testar responsividade, acessibilidade e desempenho.
