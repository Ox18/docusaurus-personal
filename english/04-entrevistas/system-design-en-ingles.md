---
id: system-design-en-ingles
title: "System Design hablado: el inglés de pensar en voz alta"
description: "El vocabulario y las frases exactas para conducir una entrevista de system design en inglés: aclarar requisitos, proponer, estimar, negociar trade-offs y defender decisiones."
sidebar_position: 3
estimated_time: 35
status: published
last_updated: "2026-08-24"
tags: [entrevistas, system-design, arquitectura]
---

# System Design hablado: el inglés de pensar en voz alta

## Resumen Ejecutivo

En una entrevista de system design no te evalúan el diseño final: te
evalúan **cómo piensas en voz alta durante 45 minutos**. Para un
hispanohablante eso significa que el idioma pasa de ser un detalle a ser el
canal completo de evaluación — puedes tener el diseño correcto en la cabeza
y reprobar por no poder narrarlo. La buena noticia es que este tipo de
entrevista es el más guionable de todos: tiene fases fijas y un conjunto
cerrado de frases que se repiten en cada una.

## 🧒 Explicación para dummies

La entrevista tiene siempre la misma forma:

```text
1. CLARIFICAR    (5 min)   "¿Qué exactamente construimos?"
2. ESTIMAR       (5 min)   "¿Cuántos usuarios, cuántos datos?"
3. DISEÑO ALTO   (10 min)  "Esta es la caja grande"
4. PROFUNDIZAR   (15 min)  "Vamos al detalle de una pieza"
5. TRADE-OFFS    (10 min)  "Qué gano y qué pierdo con esto"
```

Cada fase tiene sus frases. Si te las aprendes, tu boca ejecuta el guion
mientras tu cerebro se dedica al problema — que es donde debe estar.

## 🎯 Objetivos

- Narrar tu diseño en inglés sin quedarte mudo
- Tener frases listas para cada una de las 5 fases
- Manejar el "pensar en voz alta" y las repreguntas incómodas

---

## 1️⃣ Fase: Clarificar requisitos

**Nunca empieces a dibujar.** Empieza preguntando — y esto se valora
muchísimo.

- *"Before I start, can I ask a few questions about the requirements?"*
- *"Who are the users, and what's the main use case?"*
- *"Are we designing for reads or writes? What's the ratio?"*
- *"Do we need this to be real-time, or is a few seconds of delay okay?"*
- *"Should I assume a single region, or is this global?"*
- *"Is there an existing system, or are we starting from scratch?"*
- *"What's out of scope? Should I worry about authentication?"*
- *"Let me write down the requirements so we're aligned:"*

**Resumir antes de avanzar** (movimiento de senior):
> *"Okay, so to summarize: we need a URL shortener, roughly 100 million new
> links a month, read-heavy, latency under 100 milliseconds, and it has to
> be globally available. Analytics is nice-to-have but not critical. Does
> that sound right?"*

---

## 2️⃣ Fase: Estimaciones (back-of-the-envelope)

El vocabulario numérico en inglés se traba mucho más de lo que esperas.
Practícalo aparte.

| Concepto | Cómo se dice |
|---|---|
| 100M | *a hundred million* |
| 1B | *a billion* (mil millones) ⚠️ |
| 1.5K | *fifteen hundred* / *one point five thousand* |
| 10^6 | *ten to the sixth* |
| 500 GB | *five hundred gigs* |
| 3 TB | *three terabytes* |
| 20% | *twenty percent* |
| 3x | *three times* / *3x* ("three ex") |
| p99 | *p ninety-nine* |
| 200ms | *two hundred milliseconds* / *two hundred mil* |
| QPS | *queries per second* |
| ~ | *roughly / about / around / give or take* |

:::warning La trampa del billón
En inglés **billion = mil millones (10⁹)**, no un billón español (10¹²).
Y *trillion* = 10¹². Si dices "billion" pensando en el español, te vas por
tres órdenes de magnitud en una estimación. Es de los errores más caros que
puedes cometer en esta entrevista.
:::

**Frases de estimación**:
- *"Let me do some rough math."*
- *"Let's say we have 10 million daily active users."*
- *"If each user makes 10 requests a day, that's 100 million requests, so
  roughly 1,200 queries per second on average."*
- *"Peak traffic is usually 2 to 3 times the average, so let's plan for
  3,000 QPS."*
- *"Each record is about 500 bytes, so 100 million records is around 50
  gigabytes."*
- *"That's an order of magnitude estimate — I'd verify it with real data."*
- *"Let me round up to keep the math simple."*

---

## 3️⃣ Fase: Diseño de alto nivel

- *"Let me start with the high-level design and then we can go deeper."*
- *"At a high level, we have three components: ..."*
- *"The client hits the API gateway, which routes to the service."*
- *"The write path goes through the queue; the read path hits the cache
  first."*
- *"I'll add a load balancer in front of the application servers."*
- *"For storage, I'd go with Postgres for the metadata and object storage
  for the files."*
- *"Let me draw this out."* / *"I'm putting a box here for the ..."*

**Vocabulario de flujo** (el que más falta hace):

| Español | Inglés |
|---|---|
| El cliente le pega a la API | *The client hits the API.* |
| La petición pasa por... | *The request goes through...* |
| Se encola | *It gets queued.* / *It's pushed to the queue.* |
| El consumidor la procesa | *The consumer picks it up / processes it.* |
| Escribe en la base | *It writes to the database.* |
| Devuelve una respuesta | *It returns a response.* |
| Si falla, reintenta | *If it fails, it retries.* |
| Se guarda en caché | *It's cached.* / *We cache the result.* |
| Se replica | *It's replicated to the read replicas.* |
| Se particiona por user_id | *We shard by user ID.* |
| Se dispara un evento | *It emits/publishes an event.* |
| Queda eventualmente consistente | *It's eventually consistent.* |

---

## 4️⃣ Fase: Profundizar

- *"Let's zoom in on the write path."*
- *"The tricky part here is ______."*
- *"There's a race condition if two requests come in at the same time.
  I'd handle it with ______."*
- *"To make this idempotent, I'd use a request ID."*
- *"For the cache, I'd go with write-through and a five-minute TTL."*
- *"I'd shard by user ID, since most queries are scoped to a single user."*
- *"If this node goes down, the load balancer takes it out of rotation and
  the requests fail over to the others."*
- *"We'd need to handle backpressure — if the consumers can't keep up, the
  queue grows."*

---

## 5️⃣ Fase: Trade-offs (donde se gana la entrevista)

**Nunca digas "this is the best option".** Di qué ganas y qué pierdes.

**La fórmula**:
> *"There are two options here. **Option A** is ______ — it's simpler and
> faster to build, but ______. **Option B** is ______ — it scales better,
> but it adds ______. **Given the requirements we agreed on**, I'd go with
> A, and if traffic grows past ______, I'd revisit it."*

Frases de trade-off:
- *"The trade-off here is between consistency and latency."*
- *"That would work, but it adds operational complexity."*
- *"It's a classic trade-off: we get better write throughput, but reads
  become eventually consistent."*
- *"I'd rather keep it simple now and optimize when we have real numbers."*
- *"This doesn't scale past a few thousand QPS — at that point we'd need
  to ______."*
- *"The main risk with this approach is ______."*
- *"I'm making an assumption here: ______. If that's wrong, the design
  changes."*

> 💎 **Perla Escondida #19**: la frase más valiosa de toda la entrevista de
> system design es **"the trade-off here is..."**. Los entrevistadores
> senior no buscan la arquitectura correcta — buscan a alguien que sepa que
> **no existe** arquitectura correcta, solo decisiones con costo. Un
> candidato que dice *"I'd use Kafka"* suena junior. Uno que dice *"I'd use
> Kafka because we need replay and ordering, but that means running a
> cluster and dealing with consumer lag — if we didn't need replay, SQS
> would be less work"* suena senior, **aunque su inglés sea peor**. Esa
> frase es tu mejor inversión de memorización de todo el módulo.

---

## 🧠 Pensar en voz alta (la habilidad central)

El silencio de 30 segundos mientras piensas es letal: el entrevistador no
sabe si estás razonando o bloqueado. Narra tu proceso:

- *"Let me think out loud for a second."*
- *"My first instinct is ______, but let me check if that holds."*
- *"Actually, wait — that wouldn't work, because ______. Let me back up."*
  ← **corregirte en voz alta suma puntos, no los resta**
- *"I'm going to park that for now and come back to it."*
- *"I'm not sure about this part — I'd want to look at the numbers."*
- *"Let me consider the failure case: what happens if the queue is down?"*

**Si te quedas en blanco**:
> *"Let me take a step back and look at the requirements again."*

Es una frase de rescate perfecta: legítima, suena metódica, y te compra 15
segundos.

---

## 🎤 Repreguntas incómodas y cómo responderlas

| Pregunta | Respuesta |
|---|---|
| *"What if traffic grows 100x?"* | *"The bottleneck would be ______. At that point I'd ______."* |
| *"Why not use X instead?"* | *"That's a fair option. The reason I leaned toward Y is ______. With X we'd gain ______ but lose ______."* |
| *"What happens if this service goes down?"* | *"Requests would fail over to ______. We'd lose ______ until it recovers."* |
| *"How would you test this?"* | *"I'd start with ______, and I'd load-test the ______ path specifically."* |
| *"How would you monitor it?"* | *"The key metrics would be ______ — and I'd alert on ______, not on ______."* |
| *"Is there a simpler solution?"* | *"Probably, yes — if we dropped the ______ requirement, we could just ______."* ← honestidad que suma |

---

## 🏋️ Actividades

### Actividad 1 — Narra un sistema tuyo (15 min)
Explica en voz alta, en inglés, la arquitectura de un sistema en el que
trabajas hoy. 5 minutos. Usa obligatoriamente: *hits, goes through, gets
queued, is cached, the trade-off here is*.

### Actividad 2 — Números en voz alta (10 min)
Di estos en inglés sin dudar: *1,200 QPS · 50 GB · 3 TB · 100 million ·
1.5 billion · p99 of 250ms · 3x peak · 20% growth · 10^9*.
Repite hasta que salgan automáticos. Es puro drill mecánico y evita el
peor bloqueo de esta entrevista.

### Actividad 3 — El trade-off del día (5 min diarios, 1 semana)
Cada día toma una decisión técnica real de tu trabajo y explícala en voz
alta con la fórmula completa: *"There are two options... Option A... Option
B... Given ______, I'd go with ______."*

### Actividad 4 — Simulacro completo (45 min)
Diseña "un acortador de URLs" o "el feed de Twitter" en voz alta, solo, con
las 5 fases y cronómetro. Grábate. Al escucharlo, cuenta cuántos silencios
mayores a 5 segundos tuviste: esa es tu métrica a bajar.

---

## 📚 Diccionario Rápido

| Término | Significado |
|---|---|
| **Back-of-the-envelope** | Cálculo aproximado rápido |
| **Trade-off** | Lo que ganas a cambio de lo que pierdes |
| **Bottleneck** | Cuello de botella |
| **Fail over** | Pasar a un respaldo cuando algo cae |
| **Backpressure** | Presión hacia atrás cuando el consumidor no da abasto |
| **Shard** | Partición horizontal de datos |
| **Read-heavy / write-heavy** | Dominado por lecturas / escrituras |
| **Zoom in** | Profundizar en una parte |

---

**Siguiente**: [Preguntas al final y salario](./preguntas-y-salario.md)
