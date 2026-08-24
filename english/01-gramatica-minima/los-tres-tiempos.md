---
id: los-tres-tiempos
title: "Los 3 tiempos verbales que cubren el 90%"
description: "Present simple, past simple y una forma de futuro bastan para casi todo tu inglés de trabajo. Cuándo usar cada uno y cómo evitar la trampa del present perfect."
sidebar_position: 2
estimated_time: 30
status: published
last_updated: "2026-08-24"
tags: [gramatica, tiempos-verbales]
---

# Los 3 tiempos verbales que cubren el 90%

## Resumen Ejecutivo

De los doce tiempos verbales que enseñan los cursos, tres cubren casi todo
lo que un ingeniero dice en un día de trabajo: **present simple** (lo que es
verdad siempre y lo que hago habitualmente), **past simple** (lo que pasó)
y **going to / will** (lo que voy a hacer). El present continuous se suma
casi gratis y el present perfect es el único que vale la pena aprender bien
porque no existe equivalente exacto en español latinoamericano hablado.

## 🧒 Explicación para dummies

Un tiempo verbal responde a una sola pregunta: **¿cuándo pasa esto?**

```text
PASADO ────────────── AHORA ────────────── FUTURO
   │                    │                     │
past simple      present simple         going to / will
"I fixed it"     "It works"             "I'll fix it"
                 present continuous
                 "I'm fixing it"
```

Eso es todo. Los otros ocho tiempos son variaciones finas que en el trabajo
diario nadie te va a exigir — y si los usas mal, nadie se da cuenta.

## 🎯 Objetivos

- Elegir el tiempo correcto sin pensarlo, con una regla por tiempo
- Formar los tres en afirmativo, negativo y pregunta
- Saber cuándo *sí* necesitas el present perfect (y cuándo no)

---

## 1️⃣ Present Simple — lo permanente y lo habitual

**Úsalo para**: cómo funciona algo, qué haces normalmente, verdades del
sistema.

```text
+  The service runs on Kubernetes.
+  I work on the payments team.
-  It doesn't support pagination.
?  Does it scale horizontally?
```

**Casos de uso reales**:
- Describir arquitectura: *"The API calls the auth service, which returns a
  token."* ← **casi todo el system design se dice en present simple**
- Tu rol: *"I lead the backend team."*
- Rutinas: *"We deploy on Tuesdays."*

**Trampa #1**: la "s" de he/she/it (ver [Regla 2](./las-7-reglas.md)).
**Trampa #2**: en preguntas y negativos, la "s" se va al auxiliar:
*Does it **work**?* no *Does it works?*

---

## 2️⃣ Present Continuous — lo que está pasando ahora (o estos días)

**Forma**: `be + verbo-ing`.

```text
+  I'm working on the migration.
-  It's not responding.
?  Are you seeing the same error?
```

**Los dos usos**:
1. **Justo ahora**: *"The build is running."*
2. **Este período** (aunque no sea este segundo): *"I'm learning English."*
   / *"We're moving to Postgres this quarter."*

:::warning La trampa del español
En español usamos el presente simple para el ahora ("¿Qué haces?"), pero en
inglés eso significa "¿qué haces habitualmente?".
- *What do you do?* = ¿A qué te dedicas? (tu profesión)
- *What are you doing?* = ¿Qué estás haciendo ahora mismo?

Confundirlas produce respuestas muy raras en entrevistas.
:::

**Verbos que NO van en continuous** (verbos de estado): *know, need, want,
mean, understand, believe, agree, own, seem*.
- ❌ *I'm knowing the answer* → ✅ *I know the answer*
- ❌ *I'm not understanding* → ✅ *I don't understand*

---

## 3️⃣ Past Simple — lo que pasó y terminó

**Forma**: verbo + **-ed** (regulares) o forma irregular. En negativo y
pregunta: **did** + verbo base.

```text
+  I deployed it yesterday.
+  The database went down at 3 AM.     (go → went, irregular)
-  It didn't fail in staging.          ← "didn't fail", NUNCA "didn't failed"
?  Did you check the logs?             ← "did check", NUNCA "did checked"
```

**Es el tiempo del postmortem y de las historias STAR de entrevista**:
*"The queue filled up, the consumers crashed, and we lost 20 minutes of
events. I added a dead-letter queue and the issue never came back."*

**Los 30 irregulares que realmente usas**:

| base | pasado | | base | pasado |
|---|---|---|---|---|
| be | was/were | | keep | kept |
| go | went | | leave | left |
| do | did | | lose | lost |
| have | had | | make | made |
| get | got | | mean | meant |
| take | took | | meet | met |
| come | came | | put | put |
| see | saw | | read | read *(se dice "red")* |
| know | knew | | run | ran |
| think | thought | | say | said *(se dice "sed")* |
| find | found | | send | sent |
| give | gave | | set | set |
| build | built | | write | wrote |
| break | broke | | begin | began |
| bring | brought | | choose | chose |

---

## 4️⃣ Futuro — `going to` vs `will` (la regla de 5 segundos)

Ambos son futuro; la diferencia es **cuándo lo decidiste**:

| | Úsalo cuando | Ejemplo |
|---|---|---|
| **going to** | Ya estaba planeado antes de hablar | *We're going to migrate next sprint.* |
| **will** | Lo decides en este momento | *"The tests fail." → "OK, I'll take a look."* |
| **will** | Predicción / promesa | *It'll probably take two days.* |
| **present continuous** | Agenda fija | *I'm meeting the client at 4.* |

**En la práctica**: si dudas, `will` casi nunca queda mal, y `gonna`
(*going to* hablado) es lo que oirás el 100% del tiempo en conversación
informal: *"I'm gonna check the logs."*

---

## 5️⃣ Present Perfect — el único "difícil" que sí vale la pena

**Forma**: `have/has + participio` (*I've done, he's fixed, we've deployed*).

**Existe porque conecta el pasado con el presente.** Tres usos que sí
importan:

**a) Experiencia de vida (sin decir cuándo)** — el uso de entrevistas:
```text
I've worked with Kafka.            (alguna vez, no importa cuándo)
Have you used Terraform before?
I've never done on-call.
```
vs. past simple, que exige un momento concreto: *I worked with Kafka **at
my last job***.

**b) Algo que empezó antes y sigue ahora** (con *for* / *since*):
```text
I've been here for three years.     ← ¡NO "I am here for three years"!
We've had this bug since Friday.
```

**c) Pasado reciente con efecto ahora**:
```text
I've just pushed the fix.       (ya está arriba)
The build has finished.
I haven't finished it yet.
```

:::danger El error #1 de los hispanohablantes en entrevistas
Español: *"Trabajo aquí **desde hace** 3 años"* → presente.
Inglés: ❌ *"I work here since 3 years"* / ❌ *"I have 3 years working here"*.

✅ **"I've been here for three years."** / **"I've worked here for three
years."**

Y ojo con **for** (duración: *for three years*) vs **since** (punto de
inicio: *since 2023*).
:::

> 💎 **Perla Escondida #6**: hay una traducción literal del español que se
> oye muchísimo y suena rarísima en inglés: **"I have 30 years"** para decir
> tu edad. En inglés la edad se dice con *be*: **"I'm 30 (years old)"**.
> *"I have 30 years"* suena a que posees treinta años como si fueran
> cajas. Va en el mismo paquete que *"I have hunger"* (→ **I'm hungry**),
> *"I have cold"* (→ **I'm cold**), *"I have reason"* (→ **I'm right**) y
> *"I have 3 years working here"* (→ **I've been working here for 3
> years**). El español usa *tener* donde el inglés usa *be*.

---

## 🧭 Árbol de decisión (imprímelo mentalmente)

```text
¿Está pasando ahora mismo o estos días?
   → present continuous:  "I'm working on it."

¿Es siempre verdad / rutina / cómo funciona el sistema?
   → present simple:      "It runs on ECS."

¿Pasó y terminó, en un momento concreto?
   → past simple:         "It failed last night."

¿Pasó, pero importa AHORA / o es experiencia sin fecha?
   → present perfect:     "I've already fixed it." / "I've used Kafka."

¿Va a pasar?
   → going to (planeado) / will (decidido ahora)
```

---

## 🏋️ Actividades

### Actividad 1 — Elige el tiempo (10 min)
Di la frase completa en voz alta:

```text
1. (yo / trabajar) on the payments team.            → ?
2. (el deploy / fallar) last night.                 → ?
3. (yo / arreglar) it right now.                    → ?
4. (yo / estar aquí) for two years.                 → ?
5. "The server is down." → "OK, (yo / revisar) it." → ?
6. (nosotros / migrar) to Postgres next quarter.    → ?
7. (tú / usar alguna vez) Kubernetes?               → ?
8. (el servicio / correr) on three instances.       → ?
```

<details>
<summary>Ver soluciones</summary>

1. I **work** on the payments team. *(present simple: rol permanente)*
2. The deploy **failed** last night. *(past: momento concreto)*
3. I**'m fixing** it right now. *(continuous)*
4. I**'ve been** here for two years. *(present perfect + for)*
5. OK, I**'ll check** it. *(will: decisión del momento)*
6. We**'re going to migrate** to Postgres next quarter. *(plan)*
7. **Have** you ever **used** Kubernetes? *(experiencia)*
8. The service **runs** on three instances. *(present simple: cómo funciona)*

</details>

### Actividad 2 — Tu semana en 3 tiempos (10 min)
Escribe y **di en voz alta**:
- 3 frases en **past simple**: qué hiciste esta semana
- 3 frases en **present simple**: cómo funciona el sistema que mantienes
- 3 frases en **going to/will**: qué harás la semana que viene
- 1 frase en **present perfect** con *for* o *since*: cuánto llevas en algo

Estas 10 frases son, literalmente, el 80% de lo que dirás en un standup, un
1:1 y una entrevista.

### Actividad 3 — Cazador de irregulares (5 min diarios, 1 semana)
Toma 6 verbos irregulares de la tabla por día. Di en voz alta:
*base → pasado → participio* (*go → went → gone*). En 5 días tienes los 30.

---

## 📚 Diccionario Rápido

| Término | Qué significa |
|---|---|
| **Participio** | Tercera forma del verbo: *done, gone, written, fixed* |
| **Verbo de estado** | Verbo que no admite -ing: know, need, want, mean |
| **for / since** | *for* + duración (3 years) / *since* + punto de inicio (2023) |
| **gonna** | Pronunciación real de *going to* al hablar |

---

**Siguiente**: [Los verbos que sí usas](./verbos-que-si-usas.md)
