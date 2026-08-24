---
id: reuniones-y-llamadas
title: "Reuniones y llamadas: entrar, discrepar y no desaparecer"
description: "Cómo participar en una reunión en inglés con varias personas: interrumpir educadamente, discrepar, pedir aclaración, presentar tu punto y cerrar con acuerdos."
sidebar_position: 3
estimated_time: 35
status: published
last_updated: "2026-08-24"
tags: [reuniones, meetings, remoto, discusion]
---

# Reuniones y llamadas: entrar, discrepar y no desaparecer

## Resumen Ejecutivo

La reunión multi-persona es el escenario más difícil del inglés de trabajo:
audio malo, gente que se solapa, acentos distintos y cero tiempo para
pensar. La solución no es "mejorar tu inglés en general", sino tener
resueltas de antemano las cinco maniobras que la reunión exige — entrar a
hablar, pedir repetición, discrepar, presentar tu punto y cerrar acuerdos —
más un puñado de trucos de reunión remota que compensan tu desventaja de
listening en tiempo real.

## 🧒 Explicación para dummies

En una reunión de 6 personas hablando inglés, tu cerebro hace tres tareas
en paralelo:

1. **Decodificar** el audio (difícil: acentos, solapamiento, mala conexión)
2. **Entender** el contenido técnico
3. **Producir** tu respuesta

Cuando las tres compiten, la que se cae es la 3: **te vuelves invisible**.
No es que no tengas nada que decir; es que para cuando armaste la frase, el
tema ya cambió.

La estrategia entonces no es hacerte más rápido — es **bajar el costo de
la tarea 3**, con frases pre-armadas, y **bajar el costo de la 1**, con
trucos (chat, transcripción, grabación).

## 🎯 Objetivos

- Entrar a hablar sin esperar un hueco que nunca llega
- Discrepar en inglés sin sonar duro ni rendirte
- Presentar una idea técnica en 60 segundos con estructura
- Salir de la reunión con acuerdos escritos

---

## 🚪 Maniobra 1 — Entrar a hablar

El error clásico es esperar el silencio perfecto. En inglés se interrumpe
**con fórmula**, y es completamente aceptado:

- **"Can I jump in here?"** ← la más usada
- **"Quick thought on that —"**
- **"Sorry to interrupt, but..."**
- **"Can I add something to that?"**
- **"Before we move on — one question."**
- **"If I could just add one thing..."**

En remoto, además: **levanta la mano** (botón), o escribe en el chat
*"question when there's a gap"*. El host casi siempre te dará el turno,
y entras sin competir por el audio.

Y si dos hablan a la vez: **"Sorry, go ahead."** — cede siempre. Cuesta
nada, siempre queda bien, y te da 20 segundos extra para armar tu frase.

---

## 🔁 Maniobra 2 — Pedir aclaración (sin miedo)

| Situación | Qué decir |
|---|---|
| No oíste | *"Sorry, I didn't catch that."* |
| Hablan rápido | *"Could you slow down a bit? I want to make sure I get this."* |
| No entendiste una palabra | *"What do you mean by 'X'?"* |
| Necesitas verlo escrito | *"Could you drop that in the chat?"* |
| Quieres confirmar | *"So, just to confirm: you want us to X before Y, right?"* |
| Perdiste el hilo | *"Sorry, I lost you at the part about the queue — could you go back to that?"* |
| Todo va muy rápido | *"Can we take a step back for a second?"* |

**Reformular lo que entendiste** es la técnica más potente y la más
subutilizada:
> *"Let me make sure I got this right: we're moving the auth to the
> gateway, and the services will trust the header. Is that correct?"*

Hace dos cosas: verifica que entendiste **y** te da 15 segundos de tiempo
mientras hablas de algo que ya sabes decir.

---

## ⚔️ Maniobra 3 — Discrepar

La escalera del desacuerdo, de suave a firme:

| Nivel | Frase |
|---|---|
| 1 | *"That makes sense. One thing I'd add is..."* |
| 2 | *"I see it a bit differently."* |
| 3 | *"I have some concerns about that approach."* |
| 4 | *"I'm not sure that would work, because..."* |
| 5 | *"I'd push back on that — here's why."* ← firme pero profesional |
| 6 | *"I strongly disagree, and I think we'd regret it."* ← reserva para lo grave |

**La fórmula que funciona siempre** (reconocer → discrepar → alternativa):

> *"I get why we'd want to do it that way — it's faster to ship. **My
> concern is** that we'd have to rewrite it when we add the second region.
> **What if we** made the region a parameter now? It's maybe two extra
> days."*

- Reconoce lo válido del otro punto → no te lee como ataque
- Nombra el riesgo concreto → no es opinión, es dato
- Ofrece salida → conviertes la crítica en propuesta

**Si te presionan y necesitas tiempo**:
- *"Let me think about it and get back to you this afternoon."*
- *"Can I look at the numbers before we decide?"*
- *"I'd rather not commit to that right now."*

> 💎 **Perla Escondida #11**: los angloparlantes de negocios usan un
> **"desacuerdo envuelto en acuerdo"** que confunde muchísimo a los
> hispanohablantes. Frases como *"That's interesting, but..."*, *"I hear
> you, however..."*, *"With all due respect..."*, *"That's one way to look
> at it"* o *"I'm not sure I'd go that far"* son **desacuerdos reales**, a
> veces bastante fuertes. Y hay una peligrosa en el otro sentido: cuando un
> británico dice **"That's a brave decision"** o **"I might suggest..."**,
> está diciendo que le parece muy mala idea. Si oyes el envoltorio suave,
> escucha lo que viene **después del "but"** — ahí está el mensaje real.

---

## 🎤 Maniobra 4 — Presentar tu punto en 60 segundos

Estructura de 4 partes, memorizable, sirve para todo (propuesta, update,
opinión técnica):

```text
1. TITULAR    "I'd like to propose we move the retries to the client."
2. PORQUÉ     "Right now the server retries, and that's what caused
               the duplicate charges last week."
3. CÓMO       "The client already has the request ID, so it can retry
               safely with idempotency."
4. PEDIDO     "I'd need two days. Does that work?"
```

Frases de transición que te dan estructura audible:
- *"There are three things here. First, ... Second, ... And finally, ..."*
- *"The short version is: ..."* ← excelente arranque cuando estás nervioso
- *"To give you some context, ..."*
- *"The bottom line is ..."*
- *"So my recommendation would be ..."*

---

## ✅ Maniobra 5 — Cerrar con acuerdos

Quien resume la reunión tiene el poder — y encima es lo más fácil de decir
en inglés, porque son frases fijas:

- *"Just to recap: I'll do X, Ana will do Y, and we'll check on Friday."*
- *"So the action items are: ..."*
- *"Who's taking this one?"*
- *"What's the deadline for that?"*
- *"I'll send a summary in the channel after this."* ← **hazlo siempre**

:::tip El movimiento de mayor ROI de todo el capítulo
Ofrécete a escribir el resumen de la reunión. Ganas tres cosas:
1. Escribes (donde tu inglés es fuerte) en vez de hablar (donde es débil).
2. Verificas por escrito lo que creíste entender — si te equivocaste,
   alguien te corrige en el hilo, sin costo.
3. Te vuelves visible como la persona organizada del equipo.
:::

---

## 🎧 Trucos de reunión remota

1. **Activa la transcripción en vivo** (Zoom, Meet, Teams la tienen). Leer
   + escuchar sube tu comprensión de golpe.
2. **Graba** (avisando) y revisa después la parte que no entendiste.
3. **Ten el chat abierto**: nombres, tickets y números pídelos siempre por
   escrito.
4. **Usa auriculares** — la mitad de "no entiendo inglés" es en realidad
   audio malo.
5. **Manda tu punto por escrito antes** de la reunión si es importante. Así
   entras a defender algo ya expuesto, no a explicarlo por primera vez en
   tiempo real.
6. **Llega 2 minutos antes**: el small talk inicial con 1-2 personas es la
   mejor práctica de conversación que vas a tener en el día.

### Small talk de supervivencia (los primeros 2 minutos)
- *"How's it going?"* → *"Pretty good, thanks. How about you?"*
- *"How was your weekend?"* → *"It was good — pretty quiet. Yours?"*
- *"How's the weather over there?"* ← comodín universal
- *"Long week?"* → *"Yeah, a bit. Lots of deploys."*
- Cierre: *"Alright, should we get started?"*

---

## 🏋️ Actividades

### Actividad 1 — Las 5 maniobras en voz alta (10 min)
Di una frase para cada situación, sin leer:
1. Quieres interrumpir para aportar → ___
2. No entendiste el nombre de un servicio → ___
3. Discrepas con la solución propuesta → ___
4. Quieres presentar tu propuesta → ___
5. La reunión termina sin acuerdos claros → ___

### Actividad 2 — El desacuerdo de 3 partes (10 min)
Escribe y di en voz alta un desacuerdo completo (reconocer → riesgo →
alternativa) sobre algo real de tu trabajo actual. 45 segundos máximo.
Grábate y escúchalo: ¿sonaste agresivo? ¿sonaste inseguro? El punto medio
es la meta.

### Actividad 3 — Decodifica el desacuerdo envuelto (5 min)
¿Estas frases significan sí o no?

```text
1. "That's an interesting approach."
2. "I hear you, but have we considered the cost?"
3. "Sure, we could do that. I'd just want to understand the trade-offs first."
4. "That's a brave decision."
5. "Let's park that for now."
```

<details>
<summary>Ver traducciones</summary>

1. Normalmente **no** ("interesante" = "no me convence"), aunque depende del tono.
2. **No** — el mensaje está después del "but".
3. **No todavía** — está pidiendo justificación antes de aceptar.
4. **Muy en desacuerdo** (británico: "es una locura").
5. **No ahora**, y muchas veces significa "nunca".

</details>

### Actividad 4 — Resumen de reunión (semanal)
En tu próxima reunión real, escribe el resumen en inglés y publícalo en el
canal. Estructura: *Decisions / Action items (owner + date) / Open
questions*. Hazlo 4 semanas seguidas.

---

## 📚 Diccionario Rápido

| Frase | Significado |
|---|---|
| **Jump in** | Intervenir en la conversación |
| **Take a step back** | Volver al panorama general |
| **Push back** | Objetar, resistir una propuesta |
| **Action items** | Tareas acordadas con responsable |
| **Recap** | Resumen de lo hablado |
| **Park it** | Dejarlo pendiente |
| **Bottom line** | Lo esencial, la conclusión |
| **Get back to you** | Te respondo después |

---

**Siguiente**: [Slack y Email: el tono correcto](./slack-y-email.md)
