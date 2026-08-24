---
id: code-review-ingles
title: "Code Review: comentar sin sonar agresivo"
description: "El inglés exacto de los code reviews: cómo pedir cambios, discrepar, aceptar críticas y usar los códigos secretos (nit, LGTM, WDYT) que todos usan y nadie explica."
sidebar_position: 2
estimated_time: 30
status: published
last_updated: "2026-08-24"
tags: [code-review, github, tono, escritura]
---

# Code Review: comentar sin sonar agresivo

## Resumen Ejecutivo

El code review es donde el inglés de un ingeniero hispanohablante hace más
daño sin que se dé cuenta. La traducción literal del español produce
comentarios que suenan a orden o a ataque (*"This is wrong. Change it."*),
cuando la norma en equipos angloparlantes es un registro suave, con
preguntas en vez de afirmaciones y una jerga propia de abreviaturas — *nit*,
*LGTM*, *WDYT*, *TIL* — que nadie documenta. Este tema te da las fórmulas
listas y la tabla de decodificación.

## 🧒 Explicación para dummies: la escala de dureza

Todo comentario de review se puede decir en cinco niveles de dureza. En
español solemos escribir en el nivel 4-5 sin mala intención; en inglés eso
se lee como agresión.

```text
Nivel 1  "nit: could we rename this to userId?"        ← suave, opcional
Nivel 2  "What do you think about extracting this?"    ← pregunta abierta
Nivel 3  "I'd suggest moving this to the service."     ← sugerencia clara
Nivel 4  "This will break when the list is empty."     ← afirmación firme
Nivel 5  "This is wrong."                              ← casi nunca
```

**Regla práctica**: para estilo y preferencias usa 1-2. Para bugs reales usa
4, pero **explicando el porqué** (el porqué es lo que hace que un nivel 4 no
se lea como ataque).

## 🎯 Objetivos

- Escribir comentarios que la gente quiera atender
- Decodificar la jerga de GitHub
- Responder a un review duro sin ponerte defensivo

---

## 🔤 Los códigos secretos (memoriza esta tabla)

| Sigla | Significa | Cuándo la ves |
|---|---|---|
| **LGTM** | Looks Good To Me | Aprobado |
| **nit** | nitpick — detalle menor, opcional | *"nit: extra space here"* |
| **WDYT?** | What Do You Think? | Te piden opinión |
| **IMO / IMHO** | In My (Humble) Opinion | Marcando que es opinión |
| **TIL** | Today I Learned | Aprendí algo de tu PR (¡es un elogio!) |
| **PTAL** | Please Take Another Look | Ya cambié, revísalo otra vez |
| **AFAIK** | As Far As I Know | Hasta donde sé |
| **FWIW** | For What It's Worth | Por si sirve |
| **OOC** | Out Of Curiosity | Por curiosidad (pregunta no bloqueante) |
| **SGTM** | Sounds Good To Me | De acuerdo |
| **NBD** | No Big Deal | No es grave |
| **ICYMI** | In Case You Missed It | Por si no lo viste |
| **+1 / 👍** | Estoy de acuerdo | |
| **Blocking / non-blocking** | Impide o no impide el merge | *"non-blocking, but..."* |

---

## ✍️ Fórmulas para dejar comentarios

### Sugerencia suave (el 70% de tus comentarios)
- *"nit: could we rename this to `userCount`? It reads a bit clearer."*
- *"Small thing — what do you think about extracting this into a helper?"*
- *"Optional: this could be simplified with `Array.map`."*
- *"Not blocking, but we might want to add a test for the empty case."*

### Pregunta genuina (cuando no entiendes)
- *"Out of curiosity, why do we need the second call here?"*
- *"Could you walk me through this part? I might be missing something."*
- *"Is this intentional, or a leftover from debugging?"*
- *"Am I reading this right — does this retry forever if the API is down?"*

:::tip El truco del "I might be missing something"
Agregar *"I might be missing something"* o *"maybe I'm missing context"*
convierte cualquier crítica en una pregunta colaborativa. Y tiene un
beneficio real: el 20% de las veces **sí** te faltaba contexto, y así no
quedas mal.
:::

### Problema real (bug, seguridad, performance)
Aquí sí sé directo — pero explica el impacto:
- *"This will throw if `items` is empty — we hit that in prod last month."*
- *"I think there's a race condition here: if two requests come in at the
  same time, both will pass the check."*
- *"This query doesn't use the index, so it'll get slow past ~100k rows."*
- *"Blocking: this logs the full request body, including the auth token."*

### Elogios (no los saltes — cuestan 3 segundos y cambian equipos)
- *"Nice — this is much cleaner than the old version."*
- *"TIL about `structuredClone`, thanks!"*
- *"Great test coverage on this one."*
- *"Thanks for splitting this into small commits, made it easy to review."*

### Aprobar
- *"LGTM! 🚀"*
- *"LGTM — just the one nit, feel free to ignore."*
- *"Approving — nice work."*
- *"LGTM once CI is green."*

---

## 🙋 Cuando TE revisan (responder bien)

### Aceptar
- *"Good catch, thanks!"* ← la más útil del capítulo
- *"You're right, I'll fix it."*
- *"Fair point — updated."*
- *"Done, PTAL."*

### Explicar tu decisión (sin defenderte)
- *"I went with X because Y. Happy to change it if you prefer."*
- *"That was intentional — the API returns null in that case. I'll add a
  comment to make it clearer."*
- *"I considered that, but it would mean an extra DB call per request."*

### Discrepar
- *"I see your point, but I'd rather keep it explicit here — it's easier
  to debug."*
- *"Hmm, I'm not sure — wouldn't that break the retry logic? WDYT?"*
- *"Let's take this one offline, it's a bigger design question."*

### Cuando no entiendes el comentario
- *"Sorry, I'm not sure I follow — could you give me an example?"*
- *"Do you mean I should move the whole function, or just the validation?"*

> 💎 **Perla Escondida #10**: **"Good catch!"** es la respuesta más
> rentable del inglés de trabajo. Cuando alguien encuentra un error tuyo,
> responder *"Good catch, thanks — fixed"* logra tres cosas a la vez:
> reconoce el error sin disculparte en exceso, le da crédito al revisor y
> cierra el hilo. Compárala con *"Sorry, my bad, I didn't see it, sorry"* —
> disculparse de más te hace ver inseguro, no humilde. En la cultura de
> ingeniería angloparlante, **los errores encontrados en review son
> exactamente lo que el review debía producir**: no son fallos tuyos, son
> el proceso funcionando.

---

## 📝 La descripción de tu PR (plantilla)

```markdown
## What
Adds retry logic to the payment client.

## Why
We were losing ~2% of payments when the provider had brief outages.
See ticket PAY-1421.

## How
Exponential backoff with a max of 3 attempts. Non-retryable errors
(4xx) fail immediately.

## Notes for reviewers
- The test in `payment_client_test.go` simulates the timeout.
- I kept the old method for now; I'll remove it in a follow-up PR.
```

Cuatro secciones fijas — **What / Why / How / Notes** — y cada una en una o
dos frases. Escrita así, tu PR se revisa más rápido y tu inglés se juzga
menos, porque la estructura hace el trabajo.

---

## 🚫 Traducciones que suenan mal (tabla de rescate)

| ❌ Suena agresivo | ✅ Versión normal |
|---|---|
| This is wrong. | I think there's an issue here: ... |
| You forgot the tests. | I don't see tests for this — did you plan to add them in a follow-up? |
| Change this. | Could we change this to ...? |
| I don't like this. | I'd lean toward ... because ... |
| Why did you do this? | Out of curiosity, what's the reason for this approach? |
| This makes no sense. | I'm having trouble following this part — could you explain? |
| It's obvious that... | I think ... (elimina "obvious", "obviously", "just") |
| You must ... | We should probably ... |
| Bad naming. | nit: the name `data` is a bit generic — maybe `userRecords`? |

:::warning Cuidado con "just" y "simply"
*"Just use a map."* / *"You can simply do X."* suenan a "esto era obvio,
cómo no lo viste". Bórralas: *"You could use a map here."* dice lo mismo
sin el filo.
:::

---

## 🏋️ Actividades

### Actividad 1 — Suaviza 8 comentarios (10 min)
Reescribe cada uno en nivel 1-2:

```text
1. This code is duplicated. Fix it.
2. Wrong variable name.
3. Why you don't use async here?
4. This will fail. Obviously.
5. Add tests.
6. I don't understand nothing of this function.
7. This is not the correct pattern.
8. Approve.
```

<details>
<summary>Ver modelos</summary>

1. *"This looks similar to the helper in `utils.ts` — could we reuse it?"*
2. *"nit: maybe `retryCount` instead of `n`? A bit more descriptive."*
3. *"Out of curiosity, is there a reason this isn't async? It'd avoid
   blocking the loop."*
4. *"I think this will fail when the list is empty — `items[0]` would be
   undefined."*
5. *"Could we add a test for the timeout case? Happy to pair on it if
   useful."*
6. *"I'm having trouble following this function — could you add a short
   comment explaining the flow?"*
7. *"Have you considered using the strategy pattern here? It might make
   adding providers easier. Non-blocking though."*
8. *"LGTM 🚀"*

</details>

### Actividad 2 — Escribe un PR real (15 min)
Toma tu último PR y reescribe su descripción con la plantilla What/Why/How/
Notes en inglés. Guárdala como snippet — la vas a reusar cada semana.

### Actividad 3 — Decodifica (5 min)
¿Qué te están diciendo?

```text
1. "nit: NBD but the import order is off. LGTM otherwise!"
2. "OOC, does this handle the 429 case? Non-blocking."
3. "PTAL — I addressed all comments except the naming one, WDYT?"
4. "TIL! FWIW we had the same issue in the billing service last year."
```

<details>
<summary>Ver traducciones</summary>

1. "Detalle menor, no es grave: el orden de imports está mal. Por lo demás,
   aprobado."
2. "Por curiosidad, ¿esto maneja el error 429? No bloquea el merge."
3. "Revísalo otra vez: atendí todos los comentarios excepto el del nombre,
   ¿tú qué opinas?"
4. "¡No lo sabía! Por si sirve, tuvimos el mismo problema en el servicio de
   facturación el año pasado."

</details>

---

## 📚 Diccionario Rápido

| Término | Significado |
|---|---|
| **nit / nitpick** | Detalle menor, opcional |
| **Blocking** | Impide aprobar el PR |
| **Good catch** | Buen hallazgo (respuesta estándar a un error detectado) |
| **Walk me through** | Explícame paso a paso |
| **Follow-up PR** | PR posterior con el resto del trabajo |
| **Ship it** | Mándalo, está listo |

---

**Siguiente**: [Reuniones y llamadas](./reuniones-y-llamadas.md)
