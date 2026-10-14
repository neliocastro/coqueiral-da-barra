# specs/design.md — Fonte de verdade visual

Legenda: ✅ aprovado · ⏳ proposto (aguardando validação visual).

## 1. Análise das referências (só direção, nunca cópia)
- **Praia de Cuca**: hero fotográfico em tela cheia com véu escuro, navegação em "pílula" flutuante com blur, títulos em serif itálica, rótulos em caixa-alta espaçada, alternância de seções claras (areia) e escuras (verde profundo/quase preto), imagens com cantos bem arredondados e composição sobreposta, cards de vidro sobre foto, botões pílula com ícone de seta, botão flutuante de WhatsApp. **Tom**: calmo, editorial, sofisticado.
- **Guadalupe (Sirinhaém)**: verde profundo + areia + detalhe dourado, títulos em sans larga caixa-alta, ícones lineares próprios, muito respiro, fotos aéreas, imagens que "vazam" do grid. **Tom**: sereno, natural, sem pressa.
- **Rota DUE / Orla Praia dos Carneiros**: estrutura comercial completa (hero, benefícios, galeria em carrossel, mapa, FAQ, CTA e formulário). Usar apenas como lembrete de ritmo de conversão; é mais "corporativo" do que queremos.
- **Praia Canoé**: exemplo do que evitar (turquesa chapado, blocos genéricos, rodapé de template).
- **O que o nosso site herda**: atmosfera calma e premium, fotografia protagonista, alternância claro/escuro, CTA sempre à mão.
- **O que é nosso**: identidade, nome, paleta derivada das fotos reais (coqueiral, baía, areia), textos, ícones e composições originais.

## 2. Direção visual
✅ "Refúgio de baía": editorial, quieto, quente, premium sem ostentação. Natureza real e simples (coqueiral, baía, trilha de areia) tratada com cuidado de revista. Muito espaço em branco, poucas cores, fotografia grande.

## 3. Paleta ⏳
| Papel | Nome | Hex |
|---|---|---|
| Fundo claro | Areia clara | `#F4EFE6` |
| Fundo claro alt. | Areia seca | `#EAE2D3` |
| Fundo escuro | Coqueiral noite | `#14231D` |
| Fundo escuro alt. | Mata profunda | `#1F3A2F` |
| Texto principal (claro) | Tinta | `#1B211E` |
| Texto secundário | Cinza folha | `#58615B` |
| Texto sobre escuro | Marfim | `#F7F3EA` |
| Primária (destaque) | Verde-dendê | `#2F5D46` |
| Secundária | Azul baía | `#3E7C8C` |
| Detalhe | Cobre-sol | `#B98652` |
| WhatsApp | Verde WhatsApp | `#25D366` (só no botão flutuante/ícone) |

Regras: botão primário sobre fundo escuro = marfim com texto tinta; sobre claro = verde-dendê com texto marfim. Cobre-sol só em rótulos, filetes e detalhes (nunca em parágrafos). Verificar contraste AA em toda combinação.

## 4. Tipografia ✅ (família) / ⏳ (valores)
- **Títulos**: serif itálica expressiva — *Fraunces* (itálico, peso 500–600), fallback `Georgia, serif`.
- **Texto/UI**: sans limpa — *Hanken Grotesk* (400/500/600), fallback `system-ui, sans-serif`.
- **Rótulos**: Hanken Grotesk, 12–13 px, caixa-alta, tracking +0,18em, cor cobre-sol.
- Escala (fluida com `clamp`): H1 `clamp(2.5rem, 6vw, 5rem)`; H2 `clamp(2rem, 4vw, 3.25rem)`; H3 `1.5rem`; corpo `1.0625rem/1.7`; pequeno `0.875rem`.
- Entrelinha de títulos 1,05–1,15; largura máxima de parágrafo 60–65 caracteres.

## 5. Espaçamento e grid ⏳
- Escala base 4 px: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128.
- Container máx. 1200 px, gutter 24 px (16 px no celular).
- Seções: padding vertical 96–128 px desktop, 64–80 px mobile.
- Grid de 12 colunas desktop; 4 colunas mobile.

## 6. Ritmo visual
Alternar: Hero escuro-fotográfico → claro (lugar) → escuro (lotes) → claro (galeria) → foto com cards de vidro → verde profundo (localização/CTA) → footer quase preto. Nunca duas seções seguidas com o mesmo fundo. Uma "pausa" fotográfica em tela cheia a cada 2–3 seções.

## 7. Bordas e raios ⏳
Imagens 24 px (16 px mobile); cards 24 px; botões e chips em pílula (999 px); header em pílula. Bordas finas `1px` com `rgba(255,255,255,.14)` no escuro e `rgba(27,33,30,.12)` no claro. Sombras suaves e difusas (`0 20px 50px -20px rgba(20,35,29,.35)`).

## 8. Botões ⏳
- Primário: pílula, altura 52 px, texto 15–16 px/600, ícone de seta circular à direita.
- Secundário: pílula com contorno 1 px.
- WhatsApp flutuante: pílula "Fale conosco"/"Chat with us" no canto inferior direito; só ícone no celular.
- Hover: leve elevação + seta desloca 2 px. Foco: anel 2 px azul baía com offset.

## 9. Cards ⏳
- Card de lote: foto no topo (4:3), nome, 2–3 chips de características (somente dados reais), CTA individual.
- Card de vidro sobre foto: fundo `rgba(20,35,29,.45)` + `backdrop-filter: blur(14px)`, borda fina, texto marfim.
- Chips: pílula pequena com contorno, 13 px.

## 10. Fotografia
- Fotos reais do cliente (`minhas-fotos/`), tiradas com celular, algumas verticais e com luz dura: tratar com cuidado (recorte, correção leve de brilho/contraste/horizonte), sem filtros pesados nem alterar a realidade do terreno (não adicionar elementos, não apagar defeitos relevantes).
- Prioridade para hero: horizonte da baía com coqueiral e luz mais suave.
- Fotos verticais: usar em composição sobreposta/par, não esticadas em hero.
- Sem imagens de banco ou geradas por IA apresentadas como o terreno. Se usadas para clima (ex.: textura), deve ser identificável.
- Fotos da internet: só com licença/autorização e crédito; nunca como se fossem do terreno. Padrão: fotos do cliente.
- ✅ Animação com as fotos reais autorizada (ex.: Ken Burns/crossfade no hero, sequência de fotos em vídeo curto ou rolagem), em CSS/JS leve, sem alterar a realidade do terreno, respeitando `prefers-reduced-motion`.
- Véu em gradiente escuro (15–45 %) sobre fotos com texto.

## 11. Tratamento do produto (os 3 lotes)
Cada lote tem identidade clara (Lote 1/2/3 ou nome), mesma estrutura de card e mesma ordem de informação. Medidas e características só com dados reais; enquanto faltarem, placeholder visível "a confirmar" (nunca em produção). Opcional futuro: croqui/planta ilustrativa original.

## 12. Tom de voz
Calmo, acolhedor, direto, sem exageros. Frases curtas. Sem superlativos vazios ("o melhor", "imperdível"), sem pressão artificial. PT natural e EN equivalente (não literal). Títulos em itálico serif; textos curtos.

## 13. Hierarquia
Rótulo (cobre, caixa-alta) → título serif itálico → parágrafo curto → CTA. Uma ideia por seção. Um único CTA primário visível por tela.

## 14. Movimento ⏳
- Entrada de seções: fade + translateY 16–24 px, 600–800 ms, `cubic-bezier(.2,.7,.2,1)`, disparada uma vez (IntersectionObserver).
- Hero: zoom lentíssimo (Ken Burns 1,00→1,06) opcional.
- Header: ganha fundo/blur após rolar.
- Parallax: no máximo sutil, só desktop.
- Tudo desativado com `prefers-reduced-motion`.

## 15. Desktop e celular
- Desktop: header pílula centralizado, composições assimétricas e sobrepostas, galeria em mosaico.
- Celular: header compacto + menu em tela cheia; seções em coluna única; imagens full-bleed com cantos menores; CTA fixo/flutuante sempre acessível; texto mínimo 16 px.
- Nada depende de hover.

## 16. Evitar
Copiar textos, logo, nome ou layout idêntico de qualquer referência · turquesa saturado e gradientes roxos/neon · aparência de template imobiliário genérico · stock photos de casas de luxo que não existem · carrosséis automáticos que rolam sozinhos · pop-ups · excesso de animação · texto sobre foto sem véu · mais de 2 famílias de fonte · promessas de valorização/rentabilidade · números inventados · botões em cores diferentes por seção.
