# Dr. Jan Kleber — Site

Site do **Dr. Jan Kleber de Vette** (CRO-BA 25340), cirurgião-dentista da VETTE Odontologia Especializada, com foco em reabilitação oral, próteses, implantes e lentes de contato dental em Teixeira de Freitas – BA.

Site (demonstração): https://euartursilva.github.io/site-dr-jankleber/

## Arquivos

| Arquivo | Conteúdo |
|---|---|
| `index.html` | A página: topo com retrato, quem sou eu, tratamentos, casos reais, como funciona, vídeos, clínica, depoimentos e contato |
| `style.css` | Visual do site. As cores e fontes ficam no topo do arquivo (`--bone`, `--ink`, `--graphite`, `--bronze`) |
| `app.js` | Ampliação das fotos de antes e depois (sem bibliotecas externas) |
| `img/` | Fotos do consultório, retratos, casos de antes e depois, capas dos vídeos e ícone (`favicon.svg`) |
| `APRESENTACAO.md` | Texto para apresentar o site ao Dr. Jan |

## De onde veio o conteúdo

- **Textos:** bio e legendas do Instagram [@dr.jankleber](https://www.instagram.com/dr.jankleber/).
- **Avaliações:** perfil do Google (nota 5,0, 103 avaliações em novembro de 2026).
- **Fotos:** Instagram e Google Maps do consultório, capturadas em cerca de 850 px. Trocar pelos originais em alta quando o Dr. Jan enviar.
- **Vídeos:** os cards abrem os reels no Instagram (os arquivos de vídeo não estão no site).

## Antes de publicar de verdade (confirmar com o Dr. Jan)

- [ ] **Horário:** hoje está "Segunda a sexta, a partir das 8h" (seção Contato).
- [ ] **Endereço:** o Google tem dois perfis, um com bairro Centro e outro São Pedro. O site usa Centro.
- [ ] **Domínio:** drjankleber.com.br está fora do ar; o Google mostra drjankleberodontologiaespecializada.com.br.
- [ ] **Antes e depois:** autorização por escrito dos pacientes das fotos (regras de publicidade do CFO).
- [ ] **Depoimentos:** permissão para usar os nomes das avaliações do Google.
- [ ] **"Também na clínica":** Ortodontia, Odontopediatria e Endodontia vieram dos destaques do Instagram; confirmar quem atende.

## Como atualizar

- **Trocar uma foto:** substitua o arquivo em `img/` mantendo o mesmo nome.
- **WhatsApp:** o número aparece como `5573999262343` em `index.html`.
- **Depois de mudar `style.css` ou `app.js`:** aumente o número depois de `?v=` nos links do `index.html`, para o navegador não mostrar a versão antiga.

## Regras de publicidade odontológica

O texto mostra nome e CRO, evita promessa de resultado e traz o aviso de que cada caso precisa de avaliação individual. Revise qualquer texto novo com o Dr. Jan antes de publicar.

## Publicação

GitHub Pages a partir da branch `main` (pasta raiz). Toda alteração enviada para `main` vai para o ar em cerca de 1 minuto.
