---
id: errores-de-hispanohablante
title: "Los 25 errores que te delatan (y cómo matarlos)"
description: "Falsos amigos, calcos del español y errores fosilizados que cometen casi todos los hispanohablantes en inglés técnico — con la corrección exacta."
sidebar_position: 4
estimated_time: 30
status: published
last_updated: "2026-08-24"
tags: [errores, falsos-amigos, calcos]
---

# Los 25 errores que te delatan (y cómo matarlos)

## Resumen Ejecutivo

Casi todos los errores persistentes de un hispanohablante en inglés vienen
de una misma causa: **traducir la estructura, no la idea**. Este tema lista
los 25 que más se repiten en contextos de ingeniería, agrupados en falsos
amigos (palabras que parecen lo que no son), calcos (estructuras españolas
copiadas) y errores fosilizados (los que ya se te pegaron y necesitan
corrección deliberada). Cada uno viene con la versión correcta lista para
memorizar.

## 🧒 Explicación para dummies: qué es "fosilizado"

Un error fosilizado es un bug que ya está en producción y nadie reportó.
Lleva años ahí, tu cerebro lo da por correcto, y **la exposición al inglés
no lo arregla sola** — puedes escuchar inglés 10 años y seguir diciendo
*"I have 30 years"*, porque el error nunca produce una falla visible: la
gente te entiende, asiente, y sigue.

La única forma de matar un fosilizado es **corrección consciente**: verlo
escrito, decir la versión correcta muchas veces, y atraparte en el acto
cuando lo digas mal. Por eso este tema es una lista, no una lectura.

## 🎯 Objetivos

- Identificar tus errores fosilizados personales
- Corregir los 25 más costosos
- Tener una lista de vigilancia para las próximas semanas

---

## 🎭 Parte 1 — Falsos amigos (los peligrosos)

| Palabra inglesa | NO significa | Significa | La palabra que buscabas |
|---|---|---|---|
| **actually** | actualmente | en realidad, de hecho | *currently* |
| **eventually** | eventualmente | finalmente, con el tiempo | *possibly, occasionally* |
| **realize** | realizar (hacer) | darse cuenta | *carry out, perform* |
| **assist** | asistir (ir) | ayudar | *attend* |
| **support** | soportar (aguantar) | dar soporte, apoyar | *tolerate, put up with* |
| **library** | librería (tienda) | biblioteca / librería de código | *bookstore* |
| **sensible** | sensible (emocional) | sensato | *sensitive* |
| **exit** | éxito | salida | *success* |
| **carpet** | carpeta | alfombra | *folder* |
| **argument** | argumento (de código sí) | discusión, pelea | *plot* (de historia) |
| **compromise** | compromiso | ceder, transigir | *commitment* |
| **advertisement** | advertencia | anuncio publicitario | *warning* |
| **discussion** | discusión (pelea) | conversación normal | *argument* |
| **estimate** | ✅ es correcto | pero se dice "ES-ti-meit" (verbo) / "ES-ti-mat" (sustantivo) | |

**Los tres que más daño hacen en el trabajo**:

```text
❌ "Actually I'm working on the API."     → suena a "de hecho..."
✅ "Currently I'm working on the API."

❌ "We will eventually fix it."           → suena a "algún día lejano"
✅ "We might fix it later." (si querías decir "eventualmente/quizá")

❌ "I have a compromise at 3."            → suena a que vas a ceder algo
✅ "I have a meeting/commitment at 3."
```

---

## 🪞 Parte 2 — Calcos del español (traducir la estructura)

| ❌ Calco | ✅ Correcto | Nota |
|---|---|---|
| I have 30 years | **I'm 30** | la edad va con *be* |
| I have hunger / cold / sleep | **I'm hungry / cold / sleepy** | idem |
| I have reason | **I'm right** | idem |
| I have 3 years working here | **I've been working here for 3 years** | ver [tiempos](./los-tres-tiempos.md) |
| I am agree | **I agree** | *agree* ya es verbo |
| Depends of | **Depends on** | preposición fija |
| Explain me this | **Explain this to me** | *explain* siempre con *to* |
| Say me what happened | **Tell me what happened** | *tell* + persona |
| Is necessary to test | **It's necessary to test** / **We need to test** | sujeto obligatorio |
| The most easy | **The easiest** | superlativo corto con -est |
| More better | **Better** | *better* ya es comparativo |
| I did a mistake | **I made a mistake** | |
| All the days | **Every day** | |
| Since 3 years | **For 3 years** | *for* = duración |
| In the moment | **At the moment** | |
| Make a question | **Ask a question** | |
| I am going to say you something | **I'm going to tell you something** | |
| It's the same that | **It's the same as** | |
| Different to | **Different from** | |
| Responsible of | **Responsible for** | |
| In the practice | **In practice** | sin artículo |
| Take a decision | **Make a decision** | |
| Assist to the meeting | **Attend the meeting** | doble error: falso amigo + preposición |

---

## ⚠️ Parte 3 — Errores fosilizados de nivel intermedio

### 1. "People is" → **People ARE**
*People* es plural siempre. También: *the team **is*** (singular en inglés
americano), *the data **is***, *everyone **is***.

### 2. Plural con adjetivos
Los adjetivos **nunca** llevan "s":
❌ *two differents services* → ✅ *two different services*

### 3. "Informations", "feedbacks", "advices", "softwares"
Incontables, no tienen plural: *some information, some feedback, a piece of
advice*.

### 4. "How is called...?" → **What is it called?**
Pregunta con *what*, no con *how*: ❌ *How is called this pattern?* →
✅ *What's this pattern called?*

### 5. "Explain me how works this"
Triple error muy común. ✅ *Explain to me how this works.* Nota que en
subordinada el orden vuelve a normal (*how this works*, no *how works
this*).

### 6. Preguntas indirectas
Cuando la pregunta va dentro de otra frase, **desaparece el auxiliar**:
```text
❌ Do you know where is the config file?
✅ Do you know where the config file is?

❌ Can you tell me what does it do?
✅ Can you tell me what it does?
```

### 7. "Very much" mal colocado
❌ *I like very much this approach* → ✅ *I really like this approach* /
*I like this approach a lot.*

### 8. Terminar todo con "no?" 
❌ *It works, no?* → ✅ *It works, right?* / *...doesn't it?*

> 💎 **Perla Escondida #8**: hay un error de **tono**, no de gramática, que
> cuesta más caro que todos los de esta lista juntos: traducir el imperativo
> directo del español. En español "Manda el reporte" o "Arregla esto" es
> neutro entre colegas. En inglés, **"Send the report."** / **"Fix this."**
> se lee como una orden seca o incluso un regaño. La forma neutra en inglés
> lleva envoltorio: **"Could you send the report?"** / **"Would you mind
> taking a look at this?"** No es cortesía opcional, es el registro
> **normal**. Muchos ingenieros hispanohablantes tienen fama de "cortantes"
> en Slack sin saberlo, por esto exactamente. Ver
> [Slack y Email](../02-ingles-de-trabajo/slack-y-email.md).

---

## 🎯 Tu lista de vigilancia

No intentes matar los 25 a la vez. Elige **3** que reconozcas como tuyos y
ponlos en un post-it:

```text
MIS 3 ERRORES DE ESTA SEMANA
[ ] "I am agree"    → I agree
[ ] "depends of"    → depends on
[ ] "explain me"    → explain to me
```

Cuando los digas bien 10 veces seguidas sin pensar, cámbialos por otros 3.

---

## 🏋️ Actividades

### Actividad 1 — El campo minado (10 min)
Cada frase tiene 1 o 2 errores. Corrígelas en voz alta:

```text
1.  I am agree with your solution.
2.  Actually I am working in the payments team.
3.  I have 5 years working with Java.
4.  Can you explain me how works the cache?
5.  The people is waiting for the deploy.
6.  I did a mistake in the migration.
7.  Do you know where is the log file?
8.  This depends of the configuration.
9.  We need two differents environments.
10. I will assist to the meeting tomorrow.
11. I have hunger, let's take a decision after lunch.
12. Is necessary to rollback, no?
```

<details>
<summary>Ver soluciones</summary>

1. I **agree** with your solution.
2. **Currently** I'm working **on** the payments team. *(o "I work on")*
3. I**'ve been working with Java for** 5 years.
4. Can you **explain to me how the cache works**?
5. **People are** waiting for the deploy.
6. I **made** a mistake in the migration.
7. Do you know **where the log file is**?
8. This depends **on** the configuration.
9. We need two **different environments**.
10. I will **attend** the meeting tomorrow.
11. I**'m hungry**, let's **make** a decision after lunch.
12. **It's** necessary to roll back, **right**?

</details>

### Actividad 2 — Auditoría de tu Slack (10 min)
Abre tus últimos 20 mensajes en inglés (Slack, PRs, tickets). Búscate:
- ¿Cuántos empiezan con un imperativo seco?
- ¿Cuántos tienen calcos de esta lista?
- Reescribe los 3 peores.

Esta actividad incomoda y es la más útil del tema: son tus errores reales,
no los de una lista genérica.

### Actividad 3 — Grábate y cázate (5 min)
Habla 2 minutos sobre tu proyecto actual, grabándote. Escúchate con esta
lista al lado y marca cada error que cometas. Los que aparezcan **dos o
más veces** son tus fosilizados; esos van al post-it.

---

## 📚 Diccionario Rápido

| Término | Qué significa |
|---|---|
| **Falso amigo** | Palabra parecida en ambos idiomas con significado distinto |
| **Calco** | Traducir la estructura española palabra por palabra |
| **Fosilizado** | Error tan repetido que ya suena "correcto" para ti |
| **Registro** | Nivel de formalidad; el inglés de oficina es más indirecto que el español |

---

**Siguiente**: [Módulo 2 — Daily Standup](../02-ingles-de-trabajo/daily-standup.md)
