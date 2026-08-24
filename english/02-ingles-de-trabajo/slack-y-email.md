---
id: slack-y-email
title: "Slack y Email: el tono correcto (donde tu inglés puede brillar)"
description: "Plantillas listas para Slack, email y tickets en inglés: pedir ayuda, dar malas noticias, hacer seguimiento y decir que no, con el registro adecuado."
sidebar_position: 4
estimated_time: 30
status: published
last_updated: "2026-08-24"
tags: [slack, email, escritura, tono]
---

# Slack y Email: el tono correcto

## Resumen Ejecutivo

Escribir es tu ventaja competitiva: tienes tiempo para pensar, puedes
revisar y nadie te apura. Un ingeniero hispanohablante con listening
mediocre puede tener una reputación excelente en inglés escrito — y esa
reputación es la que le llega al manager. Lo único que hay que corregir es
el **tono**: el inglés de trabajo es más indirecto que el español, y las
plantillas de este tema ya lo traen incorporado.

## 🧒 Explicación para dummies: la regla del envoltorio

En español, un mensaje directo es eficiente y educado:
> "Necesito el acceso a staging para hoy."

En inglés, ese mismo mensaje sin envoltorio se lee como exigencia. El
formato normal tiene **tres capas**:

```text
[ SALUDO/CONTEXTO ]  Hey Ana — quick one:
[ PETICIÓN SUAVE  ]  could you grant me access to staging?
[ POR QUÉ / CUÁNDO]  I'm blocked on the migration, ideally today.
                     Thanks!
```

No es hipocresía ni pérdida de tiempo: **es el registro estándar**. Sin él,
el mensaje llega igual pero tú llegas distinto.

## 🎯 Objetivos

- Escribir mensajes que la gente responda rápido
- Pedir, rechazar y avisar problemas con el tono correcto
- Tener plantillas listas para copiar

---

## 💬 Slack: las 10 plantillas

### 1. Pedir ayuda (con contexto — clave)
```text
Hey @ana — quick question when you have a minute:
I'm getting a 403 from the payments API in staging, but the same
token works locally. Any idea what's different in staging?
No rush, it's not blocking anything critical yet.
```
La última línea (*"no rush"* o *"blocking me"*) es lo que hace que la gente
priorice bien. Siempre di cuál de las dos es.

### 2. Pedir acceso o algo bloqueante
```text
Hi @devops — I need access to the staging DB to debug PAY-1421.
This is blocking me right now. Could someone grant it today?
Thanks a lot 🙏
```

### 3. Avisar un problema (heads-up)
```text
Heads-up everyone: deploys to prod are failing since ~14:00 UTC.
Looks like the registry is timing out. I'm looking into it and I'll
update this thread in 20 minutes.
```

### 4. Dar seguimiento sin sonar impaciente
```text
Hey @carlos — just following up on the API contract.
Any updates? Happy to jump on a quick call if that's easier.
```
> *"Just following up"* + *"any updates?"* es la fórmula estándar. Después
> del segundo recordatorio: *"Bumping this in case it got buried 🙂"*

### 5. Decir que no (o que ahora no)
```text
Thanks for thinking of me! I'm at capacity this sprint with the
migration, so I can't take this on right now. I could pick it up
next week — or if it's urgent, maybe @luis has bandwidth?
```
La estructura: agradece → di que no → **ofrece alternativa**. El "no" solo
suena a portazo; el "no + alternativa" es lo normal.

### 6. Pedir revisión de PR
```text
PR is up when someone has time 🙏 https://github.com/...
It's about 200 lines, mostly the retry logic. Not urgent — I'd like
it merged before Thursday's release.
```

### 7. Responder a algo que no entendiste
```text
Sorry, I want to make sure I get this right — do you mean we should
remove the endpoint entirely, or just deprecate it for now?
```

### 8. Disculparte por un error (sin arrastrarte)
```text
That was my mistake — I pushed a config change without testing the
staging path. It's reverted now and prod is stable. I'll add a check
to the pipeline so it can't happen again.
```
Estructura: reconocer → estado actual → prevención. **Una sola disculpa**;
repetir "sorry" tres veces te hace ver inseguro.

### 9. Estimar / comprometerte
```text
Rough estimate: 2-3 days for the happy path, plus a day for tests.
I'll know more after I look at the old schema tomorrow — I'll confirm
then.
```

### 10. Cerrar el día / handoff
```text
Signing off for today. Status: the migration script works on the
test dataset, still failing on rows with null emails. Picking it
back up tomorrow morning. @maria has context if anything urgent
comes up.
```

---

## 🎚️ Ajustes de tono (la tabla de rescate)

| ❌ Muy directo | ✅ Natural |
|---|---|
| Send me the file. | Could you send me the file when you get a chance? |
| I need this today. | I'd need this today if possible — I'm blocked otherwise. |
| You didn't answer my message. | Just bumping this in case it got buried 🙂 |
| This is wrong. | I think there might be an issue here — could you double-check? |
| I can't do it. | I won't be able to get to this today. |
| Answer me. | Let me know when you have a moment. |
| It's not my problem. | That one's outside my area — @team-x would be the right people. |
| No. | I'd rather not, because ... |

### Los suavizadores (aprende estos 8, funcionan en todo)
`just` · `maybe` · `a bit` · `I think` · `it seems` · `could you` ·
`when you get a chance` · `does that work?`

```text
Duro:    Change the endpoint.
Suave:   I think we might need to change the endpoint — does that work?
```

:::warning No pases al extremo opuesto
Demasiado envoltorio también hace daño: *"Sorry to bother you, I'm so sorry,
I know you're very busy, it's probably my fault, but maybe if you have a
tiny moment..."* se lee como inseguridad. **Una capa de suavizador es
suficiente.**
:::

---

## 📧 Email (cuando es formal o externo)

```text
Subject: Payment API timeouts — proposed fix

Hi Sarah,

Following up on yesterday's call about the payment timeouts.

We found the root cause: the client retries were not using
idempotency keys, so a timeout could result in a duplicate charge.

We'd like to propose two changes:
1. Add idempotency keys to all payment requests.
2. Move the retry logic to the client, with exponential backoff.

This would take about a week. Could we confirm by Friday so we can
include it in next sprint?

Happy to walk through the details on a call if useful.

Best,
Wilmer
```

**Anatomía**: asunto concreto (no "Question") → contexto en 1 línea →
hallazgo → propuesta numerada → **pedido con fecha** → oferta de llamada →
cierre.

| Situación | Apertura | Cierre |
|---|---|---|
| Neutro / colega | *Hi Sarah,* | *Best,* / *Thanks,* |
| Primer contacto | *Hi Sarah, I hope you're doing well.* | *Best regards,* |
| Externo formal | *Dear Ms. Chen,* | *Kind regards,* |
| Interno rápido | *Hey team —* | *Thanks!* |

**Frases de email que siempre sirven**:
- *"Following up on our conversation about X."*
- *"Just a quick update on X."*
- *"Please let me know if you have any questions."*
- *"Looking forward to your feedback."*
- *"Apologies for the delay in getting back to you."*
- *"As discussed, ..."* / *"As promised, here's ..."*

> 💎 **Perla Escondida #12**: **escribe primero, habla después.** Si sabes
> que un tema importante se va a discutir en una reunión, manda tu posición
> por escrito antes (Slack o email, 5 líneas). Cambia el juego por completo:
> llegas a la reunión a **defender** algo que la gente ya leyó, en vez de
> **explicarlo** por primera vez en tiempo real, que es justo donde tu
> inglés hablado está en desventaja. Además tu argumento queda escrito y
> citable — y en equipos remotos, lo que está escrito pesa más que lo que
> se dijo. Es la estrategia que convierte tu debilidad (speaking) en un
> punto donde compites con tu fortaleza (writing).

---

## 🏋️ Actividades

### Actividad 1 — Reescribe 6 mensajes (10 min)
```text
1. "I need the credentials now."
2. "You didn't review my PR."
3. "This design is bad."
4. "I can't do this task."
5. "Explain me the ticket."
6. "The deploy failed because of you."
```

<details>
<summary>Ver modelos</summary>

1. *"Hey — could you send me the staging credentials when you get a chance?
   I'm blocked on the migration."*
2. *"Hey @ana, just bumping the PR in case it got buried 🙂 No rush if
   you're heads-down."*
3. *"I have some concerns about this design — mainly the coupling between
   the services. Could we talk through the alternatives?"*
4. *"I'm at capacity this sprint, so I can't take this on right now. I
   could start next Monday — would that work?"*
5. *"Could you give me a bit more context on this ticket? I'm not sure
   what the expected output is."*
6. *"The deploy failed — looks like it came from the config change in
   PR 214. Could you take a look?"* *(nota: sin "you" acusatorio)*

</details>

### Actividad 2 — Tu snippet pack (15 min)
Copia las 10 plantillas de Slack a tus snippets/notas, y adáptalas con los
nombres reales de tu equipo y tus servicios. Tener el texto a un atajo de
teclado es lo que hace que las uses bajo presión.

### Actividad 3 — Un mensaje real por día (1 semana)
Cada día, escribe **un** mensaje en inglés que normalmente escribirías en
español o dejarías sin escribir. Un status, un agradecimiento, un
heads-up. Siete mensajes en una semana cambian cómo te percibe el equipo.

---

## 📚 Diccionario Rápido

| Término | Significado |
|---|---|
| **Heads-up** | Aviso anticipado |
| **Bump** | Volver a subir un mensaje sin respuesta |
| **At capacity / no bandwidth** | Sin tiempo disponible |
| **Signing off** | Terminando mi jornada |
| **Handoff** | Entregar el trabajo al siguiente turno/persona |
| **Buried** | Perdido entre muchos mensajes |
| **Circle back** | Retomar después |

---

**Siguiente**: [Incidentes y on-call](./incidentes-y-oncall.md)
