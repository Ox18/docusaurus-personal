---
id: las-7-reglas
title: "Las 7 reglas (toda la gramática que necesitas)"
description: "Siete reglas cubren el 90% del inglés que vas a producir. Sin excepciones raras, sin tiempos verbales que nadie usa: solo lo que evita que suenes mal."
sidebar_position: 1
estimated_time: 40
status: published
last_updated: "2026-08-24"
tags: [gramatica, reglas, fundamentos]
---

# Las 7 reglas (toda la gramática que necesitas)

## Resumen Ejecutivo

La gramática inglesa que un ingeniero necesita para trabajar cabe en siete
reglas. No es una simplificación marketinera: el inglés tiene una
morfología pobrísima comparado con el español (los verbos casi no cambian),
así que el esfuerzo se concentra en **orden de palabras**, **auxiliares** y
un puñado de detalles que, cuando fallan, sí te delatan. Este tema cubre
esas siete y descarta explícitamente el resto.

## 🧒 Explicación para dummies

El español conjuga: *hablo, hablas, habla, hablamos, habláis, hablan* — seis
formas. El inglés: *speak, speak, speaks, speak, speak, speak* — dos.

Eso significa que el inglés **no puede** darse el lujo de mover las
palabras de lugar, porque el orden es lo único que indica quién hace qué.
En español "Se rompió el build" y "El build se rompió" son ambas válidas;
en inglés el orden es casi rígido.

**Conclusión práctica**: no memorices conjugaciones (casi no hay). Memoriza
el **orden** y los **auxiliares**. Ahí está todo el juego.

## 🎯 Objetivos

- Producir frases con orden correcto sin pensarlo
- Formar preguntas y negaciones sin trabarte
- Evitar los 7 errores que más delatan a un hispanohablante

---

## 1️⃣ Regla 1 — El orden es sagrado: **Sujeto → Verbo → Objeto**

```text
[QUIÉN] [ACCIÓN] [QUÉ] [DÓNDE] [CUÁNDO]
 I       deployed  the API  to staging  yesterday.
 The team  fixed    the bug   in prod    last night.
```

Consecuencias que rompen a casi todos:

**a) El sujeto NUNCA se omite.** En español decimos "está roto"; en inglés
el sujeto es obligatorio: ***It** is broken*.

| ❌ | ✅ |
|---|---|
| Is broken. | **It's** broken. |
| Is not working. | **It's** not working. |
| Seems fine. | **It** seems fine. |
| Is raining. | **It's** raining. |

**b) El adjetivo va ANTES del sustantivo.**

| ❌ | ✅ |
|---|---|
| a service distributed | a **distributed service** |
| the table users | the **users table** |
| an error weird | a **weird error** |

**c) "Cuándo" va al final** (o al principio, nunca en medio del verbo y su
objeto).

| ❌ | ✅ |
|---|---|
| I deployed yesterday the fix | I deployed the fix **yesterday** |
| I have always used Postgres... | ✅ (adverbios de frecuencia sí van en medio) |

---

## 2️⃣ Regla 2 — La "s" de tercera persona (el error más audible)

**He / She / It → el verbo lleva "s"**. Nada más lleva "s".

```text
I work      we work
you work    you work
he workS    they work
it failS
the build failS   ← "the build" = it
```

Suena a detalle menor y no lo es: es el error que un nativo detecta al
instante, incluso sin darse cuenta.

**Regla mental**: *"Él, ella, eso → la S es de ellos."*

| ❌ | ✅ |
|---|---|
| It work fine | It work**s** fine |
| The test fail | The test fail**s** |
| He know the system | He know**s** the system |
| My manager want a demo | My manager want**s** a demo |

**Trampa**: cuando ya hay auxiliar, la "s" desaparece del verbo principal —
*He **doesn't** work* (no *doesn't works*), *Does it **work**?*

---

## 3️⃣ Regla 3 — Preguntas y negaciones necesitan un auxiliar (do/does/did)

En español, preguntar es cambiar la entonación: "¿Funciona?" En inglés
necesitas un auxiliar al frente.

```text
Afirmación:  It works.
Pregunta:    DOES it work?          ← "does" toma la S, "work" la pierde
Negación:    It DOESN'T work.

Pasado:      It worked.
Pregunta:    DID it work?           ← "did" toma el pasado, "work" vuelve a base
Negación:    It DIDN'T work.
```

| ❌ | ✅ |
|---|---|
| Works the pipeline? | **Does** the pipeline work? |
| You know why it failed? | **Do** you know why it failed? |
| I not understand | I **don't** understand |
| Why it failed? | Why **did** it fail? |
| What means this error? | What **does** this error mean? |

:::tip Las 3 excepciones (verbos que NO necesitan do/does/did)
Con **be**, con **modales** (can, will, should, would, could, must) y con
**have** en tiempos perfectos, el auxiliar ya está ahí:
- *Is it broken?* / *It isn't broken.*
- *Can you review this?* / *I can't reproduce it.*
- *Have you deployed it?* / *I haven't deployed it.*
:::

---

## 4️⃣ Regla 4 — Un solo negativo por frase

En español la doble negación es correcta: "No hay **nada**", "No vi a
**nadie**". En inglés suena a error grave.

| ❌ | ✅ |
|---|---|
| I don't know nothing | I don't know **anything** / I know **nothing** |
| There isn't nobody in the call | There **isn't anybody** in the call |
| We don't have no logs | We don't have **any** logs |

**Regla mecánica**: si ya dijiste *don't / isn't / can't*, la siguiente
palabra negativa se vuelve **any-**: anything, anybody, anywhere, any.

---

## 5️⃣ Regla 5 — Artículos: a / an / the / nada

Esta es la que más se resiste, así que aquí está el árbol de decisión:

```text
¿Es incontable (information, feedback, data, software, work,
 advice, traffic) o plural genérico?
   → SIN artículo:  "We need feedback." / "Microservices are hard."

¿Lo mencionas por primera vez y es contable singular?
   → a / an:  "I found a bug." (an antes de sonido vocal: an error, an API*)

¿Ya se mencionó, o es único/específico y ambos saben cuál?
   → the:  "The bug is in the auth service."
```

*Ojo: **an** depende del **sonido**, no de la letra: *an hour*, *an SQL
query* (se dice "es-cu-el"), pero *a user* (suena "iuser"), *a URL*.

**Los incontables que más se fallan** — nunca llevan "s" ni "a":

| ❌ | ✅ |
|---|---|
| I have a feedback | I have **some feedback** |
| These informations | This **information** |
| The datas are | The **data is** (en la práctica) |
| Many softwares | A lot of **software** |
| I need an advice | I need **some advice** |

---

## 6️⃣ Regla 6 — Preposiciones: memoriza el paquete completo, no la palabra

*In, on, at, for, to* no se traducen — se memorizan **pegadas al verbo o
sustantivo**. Aprende el bloque entero como si fuera una sola palabra:

| Paquete | Ejemplo |
|---|---|
| **depend ON** | It depends **on** the load. |
| **work ON** (una tarea) | I'm working **on** the migration. |
| **listen TO** | Listen **to** the recording. |
| **wait FOR** | I'm waiting **for** the review. |
| **look INTO** (investigar) | I'll look **into** it. |
| **be responsible FOR** | I'm responsible **for** the pipeline. |
| **be interested IN** | I'm interested **in** the platform team. |
| **arrive AT / IN** | We arrived **at** a decision. |
| **in production / on staging** | It fails **in** production. |
| **at 3 PM / on Monday / in March** | Reglas de tiempo: at hora, on día, in mes |

**Nunca traduzcas la preposición desde el español.** *"Depende de"* no es
*"depend of"*; es *depend **on***. Es memorización pura y no hay atajo.

---

## 7️⃣ Regla 7 — Contracciones: úsalas o sonarás a manual

Los nativos contraen **siempre** al hablar. No contraer suena robótico o
enfático (como si estuvieras molesto).

| Formal (raro al hablar) | Natural |
|---|---|
| I am working on it | **I'm** working on it |
| It is not ready | **It's not** ready / **It isn't** ready |
| I will send it | **I'll** send it |
| I would say | **I'd** say |
| We have finished | **We've** finished |
| That is right | **That's** right |
| I cannot reproduce it | **I can't** reproduce it |

> 💎 **Perla Escondida #5**: usar contracciones te hace sonar **más
> avanzado de lo que estás**, gratis. Es un cambio cosmético que no requiere
> aprender nada nuevo — las frases son las mismas — pero mueve la percepción
> de tu nivel de forma desproporcionada, porque el cerebro nativo asocia
> "habla sin contracciones" con "está traduciendo en su cabeza". Aplica lo
> mismo al escribir Slack: *"I'll check it"* se lee como colega,
> *"I will check it"* se lee como bot.

---

## 🗑️ Lo que puedes IGNORAR (en serio)

| Tema | Por qué puedes saltártelo |
|---|---|
| Present perfect continuous | *"I have been working"* — di *"I've been on this since Monday"* y listo |
| Past perfect | Casi nunca necesario; el contexto ordena los hechos |
| Condicionales tipo 3 | *"If I had known..."* — útil solo para lamentarse |
| Voz pasiva compleja | Escribe en activa; es mejor estilo incluso en inglés nativo |
| Reported speech con retroceso de tiempos | *"He said it's broken"* se acepta perfectamente |
| Phrasal verbs raros | Aprende los 30 del trabajo ([aquí](./verbos-que-si-usas.md)), ignora los otros 2000 |

---

## 🏋️ Actividades

### Actividad 1 — Corrige 12 frases (10 min)
Todas tienen exactamente un error. Corrígelas en voz alta antes de mirar:

```text
1.  Is not working the deploy.
2.  The test fail sometimes.
3.  Why the build failed?
4.  I don't have no idea.
5.  I have a feedback for you.
6.  It depends of the traffic.
7.  I working on the bug.
8.  What means "idempotent"?
9.  We need a informations.
10. He don't know the system.
11. I deployed yesterday the fix.
12. Do you can review my PR?
```

<details>
<summary>Ver soluciones</summary>

1. **It's** not working. / The deploy **isn't** working.
2. The test **fails** sometimes.
3. Why **did** the build fail?
4. I **don't have any** idea. / I have **no** idea.
5. I have **some** feedback for you.
6. It depends **on** the traffic.
7. I**'m** working on the bug.
8. What **does** "idempotent" **mean**?
9. We need **some information**.
10. He **doesn't** know the system.
11. I deployed the fix **yesterday**.
12. **Can** you review my PR?

</details>

### Actividad 2 — 10 frases sobre tu trabajo real (10 min)
Escribe 10 frases sobre lo que hiciste esta semana usando **solo** estas
reglas. Después léelas en voz alta y verifica con esta checklist:

- [ ] ¿Todas tienen sujeto explícito?
- [ ] ¿Los verbos con he/she/it llevan "s"?
- [ ] ¿Las preguntas tienen do/does/did (o be/modal)?
- [ ] ¿Usaste contracciones?
- [ ] ¿Un solo negativo por frase?

### Actividad 3 — El test del sujeto fantasma (5 min)
Traduce estas frases españolas sin sujeto. El 100% del ejercicio es
recordar poner el sujeto:

*Está caído. / No compila. / Hace frío. / Parece un problema de red. / Es
tarde. / Hay tres errores.*

<details>
<summary>Ver soluciones</summary>

*It's down. / It doesn't compile. / It's cold. / It looks like a network
issue. / It's late. / There are three errors.*

Nota la última: para "hay" siempre es **there is / there are**.

</details>

---

## 📚 Diccionario Rápido

| Término | Qué significa |
|---|---|
| **Auxiliar** | Verbo de apoyo (do/does/did, be, have, can...) para preguntas y negaciones |
| **Modal** | can, could, will, would, should, must, may, might |
| **Contracción** | Forma corta: *I'm, it's, don't, I'll* |
| **Incontable** | Sustantivo sin plural ni "a": information, feedback, software |
| **Tercera persona** | he / she / it → el verbo lleva "s" |

---

**Siguiente**: [Los 3 tiempos verbales que cubren el 90%](./los-tres-tiempos.md)
