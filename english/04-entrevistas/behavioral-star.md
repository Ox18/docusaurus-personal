---
id: behavioral-star
title: "Historias STAR: 6 historias que responden 30 preguntas"
description: "Cómo preparar un banco de historias STAR en inglés que cubra casi cualquier pregunta conductual, con conectores, plantilla y ejemplos completos."
sidebar_position: 2
estimated_time: 35
status: published
last_updated: "2026-08-24"
tags: [entrevistas, star, behavioral]
---

# Historias STAR: 6 historias que responden 30 preguntas

## Resumen Ejecutivo

Las preguntas conductuales (*"Tell me about a time when..."*) parecen
infinitas, pero se responden con un banco reducido: **seis historias bien
preparadas cubren el 90% de lo que te van a preguntar**, porque la misma
historia sirve para varias preguntas cambiando el énfasis. En inglés esto
es doblemente valioso: en vez de improvisar una narración compleja bajo
presión — donde el idioma te traiciona — recuperas una historia que ya
practicaste, con sus conectores ya memorizados.

## 🧒 Explicación para dummies: qué es STAR

STAR es una estructura de cuatro partes para contar una anécdota
profesional sin perderte:

```text
S — Situation   El contexto en 1-2 frases.      "We had a payment service..."
T — Task        Tu responsabilidad concreta.    "I was asked to..."
A — Action      QUÉ HICISTE TÚ (el 60% del      "First I... Then I..."
                tiempo; usa "I", no "we")
R — Result      Resultado, con números.         "As a result, we cut..."
```

El error universal es contar mucha **S** y poca **A**: cinco minutos de
contexto y quince segundos de lo que hiciste. El entrevistador está
evaluando la **A** — es lo único que dice algo sobre ti.

## 🎯 Objetivos

- Construir un banco de 6 historias reutilizables
- Contarlas en 2 minutos con conectores naturales
- Mapear cada historia a las preguntas que responde

---

## 🎒 Las 6 historias que necesitas

| # | Historia | Preguntas que cubre |
|---|---|---|
| 1 | **Un problema técnico difícil que resolviste** | *hardest technical problem, debugging, learned something new, took initiative* |
| 2 | **Un conflicto con un compañero o equipo** | *conflict, disagreement, difficult person, convinced someone* |
| 3 | **Un fracaso o error tuyo** | *failure, mistake, what would you do differently, feedback* |
| 4 | **Liderar algo sin ser el jefe** | *leadership, mentoring, drove a project, influence without authority* |
| 5 | **Un incidente en producción** | *pressure, ambiguity, tight deadline, ownership* |
| 6 | **Decir que no / priorizar** | *too much work, competing priorities, pushed back, said no to a stakeholder* |

**Regla clave**: sean **historias reales**. Bajo repreguntas (*"and what did
the other person say?"*), una historia inventada se cae en 30 segundos.

---

## 🔗 Los conectores que dan estructura audible

Estos conectores hacen dos cosas: te ordenan la narración **y** le señalan
al oyente en qué parte vas. Memorízalos.

### Situación
- *"This was back when I was at ______."*
- *"To give you some context, ______."*
- *"At the time, we were ______."*

### Tarea
- *"I was responsible for ______."*
- *"My job was to ______."*
- *"I was asked to ______."*

### Acción (usa marcadores de secuencia)
- *"The first thing I did was ______."*
- *"Then I ______."*
- *"After that, I ______."*
- *"What I decided to do was ______."*
- *"I pushed for ______, because ______."*
- *"I reached out to ______ to ______."*

### Resultado
- *"In the end, ______."*
- *"As a result, we ______."*
- *"It turned out ______."*
- *"Looking back, what I learned was ______."*

---

## 📖 Ejemplo completo #1 — Problema técnico difícil

> **S** — *"This was at my current job. We had a payment service that would
> randomly time out, maybe two or three times a week, always at night. It
> had been happening for about two months and nobody had figured out why."*
>
> **T** — *"My manager asked me to take a look, because it was starting to
> affect our SLA with the payment provider."*
>
> **A** — *"The first thing I did was add proper tracing — we had logs, but
> nothing that connected a request across services. Once I had that, I saw
> the timeouts always happened right after the nightly batch job started.
> At first I assumed it was CPU, but the metrics ruled that out. Then I
> looked at the connection pool, and that was it: the batch job was opening
> connections and not releasing them, so during that window the API had
> almost nothing left. I fixed the leak, and I also added an alert on pool
> saturation so we'd catch it earlier next time."*
>
> **R** — *"The timeouts went away completely — we haven't had one in eight
> months. And the tracing I added ended up being useful for the whole team;
> we've used it to debug two other issues since then."*

**Por qué funciona**: contexto corto, mucha acción en primera persona,
razonamiento visible (probé, descarté, encontré), resultado con número, y
un beneficio secundario que muestra pensamiento a largo plazo.

---

## 📖 Ejemplo completo #3 — Un error tuyo

> **S** — *"About a year ago, I was migrating our user table to a new
> schema."*
>
> **T** — *"I owned the migration end to end, including the rollout plan."*
>
> **A** — *"I tested everything in staging and it worked fine, so I ran it
> in production on a Friday afternoon. What I didn't account for was that
> production had about a hundred times more rows, so the migration locked
> the table for almost four minutes. Logins failed during that window. As
> soon as I saw the alerts, I stopped the migration and rolled back. Then I
> wrote a postmortem, and I rewrote the migration to run in batches with a
> pause between them."*
>
> **R** — *"The second attempt ran with zero downtime. But the bigger
> outcome was the process: we added a rule that any migration touching more
> than a million rows needs a batched plan and a load test. Honestly, the
> real lesson for me was about **testing with realistic data volumes** —
> and not deploying anything risky on a Friday."*

**Por qué funciona**: asume el error sin excusas, muestra reacción rápida,
convierte el fallo en una mejora de proceso, y cierra con una lección
concreta. Ese es exactamente el patrón que buscan.

---

## ⚖️ Las trampas de las conductuales

### Trampa 1 — "We" en vez de "I"
Los hispanohablantes tendemos a hablar en plural por modestia cultural. En
una entrevista angloparlante, si todo es *"we did"*, el entrevistador no
sabe qué hiciste **tú**.

✅ Usa *we* para el contexto y **I** para tus acciones: *"We had a problem
with X. **I** proposed Y, and **I** built the prototype."*

### Trampa 2 — Historia sin resultado
Toda historia necesita un final medible. Si no tienes número, usa impacto:
*"...and that pattern is still what the team uses today."*

### Trampa 3 — El conflicto donde el otro es el villano
En la historia #2 (conflicto), nunca pintes al otro como incompetente.
Muestra que entendiste su punto:
> *"His concern was actually valid — he'd seen that library cause problems
> before. What I did was set up a small benchmark so we could decide with
> data instead of opinions. We ended up going with his option for the
> critical path and mine for the batch jobs."*

### Trampa 4 — Repreguntas
Prepárate para: *"What would you do differently?"*, *"How did the other
person react?"*, *"What was the hardest part?"*, *"How did you measure
that?"* Si la historia es real, se responden solas.

> 💎 **Perla Escondida #18**: prepara tus historias **en español primero**,
> pero **nunca las traduzcas frase por frase**. Escribe los bullets en
> español (para pensar la historia con toda tu inteligencia), y después
> **cuéntala en inglés desde cero**, con las palabras que sí tienes. Si
> traduces literalmente, terminas atascado buscando una palabra exacta que
> no conoces — y ese atasco pasa siempre en medio de la historia, en el
> peor momento. Contar desde cero en inglés produce frases más simples y
> mucho más fluidas. **En una entrevista, la frase simple que sale sin
> pausas vale más que la frase elegante que no sale.**

---

## 🗺️ Tu matriz de preparación

| Historia | Situación en 5 palabras | Números del resultado | ¿Preguntas que cubre? |
|---|---|---|---|
| 1. Técnica | | | |
| 2. Conflicto | | | |
| 3. Error | | | |
| 4. Liderazgo | | | |
| 5. Incidente | | | |
| 6. Priorizar | | | |

---

## 🏋️ Actividades

### Actividad 1 — Elige tus 6 (15 min)
Escribe en **español** una línea por cada historia. Solo el titular, sin
detalles. Si no se te ocurre alguna, revisa tus últimos 12 meses de tickets
y postmortems — están ahí.

### Actividad 2 — Escribe la #1 y la #3 en inglés (30 min)
Son las dos que más se preguntan. Escríbelas completas con la estructura
STAR, máximo 250 palabras cada una. Cuenta las veces que dices "I" — deben
ser más que las de "we" en la parte de Acción.

### Actividad 3 — Cronómetro (10 min)
Cuenta cada historia en voz alta en **2 minutos exactos**. Grábate. Si pasas
de 2:30, tu Situación es demasiado larga: recórtala a dos frases.

### Actividad 4 — Repreguntas (10 min)
Pídele a alguien (o a una IA) que te haga estas cuatro después de cada
historia:
1. *"What would you do differently?"*
2. *"How did the rest of the team react?"*
3. *"What was the hardest part?"*
4. *"How did you measure the impact?"*

---

## 📚 Diccionario Rápido

| Término | Significado |
|---|---|
| **Behavioral question** | Pregunta sobre tu comportamiento pasado |
| **STAR** | Situation, Task, Action, Result |
| **Push back** | Objetar, no aceptar sin discutir |
| **Own (a project)** | Ser responsable total de algo |
| **Take initiative** | Actuar sin que te lo pidan |
| **Looking back** | En retrospectiva |

---

**Siguiente**: [System design en inglés](./system-design-en-ingles.md)
