---
id: incidentes-y-oncall
title: "Incidentes y on-call: inglés bajo presión"
description: "El inglés de un incidente en producción: reportar, coordinar la guerra, escalar, comunicar al cliente y escribir el postmortem — con plantillas listas."
sidebar_position: 5
estimated_time: 30
status: published
last_updated: "2026-08-24"
tags: [incidentes, oncall, sre, postmortem]
---

# Incidentes y on-call: inglés bajo presión

## Resumen Ejecutivo

Un incidente es el peor momento posible para pelear con el idioma: hay
urgencia, mucha gente escuchando y las consecuencias de un malentendido son
reales. Por suerte, el inglés de incidentes es el **más formulaico de
todos** — se repiten las mismas cinco o seis estructuras (reportar, dar
estado, escalar, mitigar, cerrar) y existen convenciones de la industria
(*sev1*, *mitigated vs resolved*, *blameless*) que son idénticas en todos
los equipos. Aprende las plantillas y el idioma deja de ser el problema.

## 🧒 Explicación para dummies

En un incidente, tu comunicación tiene que responder cuatro preguntas, en
este orden, todo el tiempo:

```text
1. ¿QUÉ está roto?      "Checkout is failing for ~30% of users."
2. ¿DESDE cuándo?       "Since 14:02 UTC."
3. ¿QUÉ estás haciendo? "I'm rolling back the last deploy."
4. ¿CUÁNDO actualizas?  "Next update in 15 minutes."
```

La #4 es la que casi todo el mundo olvida y la que más calma a los demás.
Un incidente sin actualizaciones periódicas genera cinco personas
preguntando "¿alguna novedad?" cada dos minutos.

## 🎯 Objetivos

- Reportar un incidente en 3 frases claras
- Dar actualizaciones de estado con la estructura estándar
- Escalar y pedir ayuda sin rodeos
- Escribir un postmortem en inglés

---

## 🚨 Fase 1 — Reportar (las primeras 3 frases)

```text
🔴 Incident: checkout API returning 500s.
Impact: ~30% of checkout requests failing since 14:02 UTC.
I'm investigating. Next update in 15 minutes.
```

Frases sueltas para armar el reporte:
- *"We have an incident with the payment service."*
- *"Users are seeing 500 errors on checkout."*
- *"The impact is roughly 30% of requests."*
- *"It started around 14:02 UTC, right after the last deploy."*
- *"I'm declaring a sev2."* *(sev1 = crítico, sev2 = serio, sev3 = menor)*
- *"I'm taking incident commander."* *(yo coordino)*

---

## 📡 Fase 2 — Dar estado (cada 15-30 min, sin excepción)

**Plantilla de update**:
```text
Update (14:20 UTC):
- Status: still investigating / mitigated / resolved
- What we know: the error started right after deploy #482
- What we're doing: rolling back to #481
- Next update: 14:40
```

Vocabulario de estado — **esta distinción importa mucho**:

| Término | Significado real |
|---|---|
| **Investigating** | No sabemos aún la causa |
| **Identified** | Sabemos qué es, aún no arreglado |
| **Mitigated** | Los usuarios ya no lo sufren, pero la causa sigue ahí |
| **Resolved** | Arreglado de verdad |
| **Monitoring** | Aplicamos el fix, observando si vuelve |

:::danger Nunca digas "fixed" cuando quieres decir "mitigated"
Si hiciste rollback, el bug **sigue existiendo** en el código. Decir *"it's
fixed"* hace que el equipo cierre el incidente y nadie escriba el
postmortem — hasta que vuelve a pasar. Di: *"It's mitigated — we rolled
back. The root cause is still open."*
:::

---

## 🆘 Fase 3 — Pedir ayuda y escalar

- *"I need help with this — can someone from the DB team join?"*
- *"I'm escalating to the platform team."*
- *"Paging the on-call for networking."*
- *"@here we have a sev1 — I need eyes on the queue metrics."*
- *"I'm out of ideas on this one. Can someone take a look at the traces?"*
- *"Can someone take over? I've been on this for four hours."*

**Frases de coordinación en la llamada de guerra (war room)**:
- *"Who's the incident commander?"*
- *"Let's keep the updates in this thread."*
- *"Can you take the customer comms while I keep digging?"*
- *"Stop — before we change anything else, let's write down what we've
  already tried."* ← frase de senior
- *"One change at a time, please."*
- *"Let's not deploy anything else until this is resolved."*

---

## 🔍 Fase 4 — Explicar la causa

| Español | Inglés |
|---|---|
| La causa raíz fue... | *The root cause was...* |
| Se disparó por... | *It was triggered by...* |
| Empezó a fallar cuando... | *It started failing when...* |
| El deploy introdujo... | *The deploy introduced a regression in...* |
| Se llenó la cola | *The queue backed up.* |
| Se agotó la memoria | *We ran out of memory.* / *The pod got OOM-killed.* |
| Se cayó la conexión | *The connection dropped.* |
| Se saturó | *It got saturated / overloaded.* |
| Se quedó colgado | *It hung.* / *It was stuck.* |
| Efecto dominó | *It cascaded to the other services.* |
| Tormenta de reintentos | *A retry storm.* |
| Estaba mal configurado | *It was misconfigured.* |
| Se nos pasó | *We missed it.* / *It slipped through.* |

Frase compuesta de ejemplo:
> *"The root cause was a misconfigured connection pool: after deploy #482,
> each pod opened 200 connections instead of 20, so the database hit its
> limit and started rejecting new connections. That cascaded to the auth
> service, which shares the same instance."*

---

## 🗣️ Fase 5 — Comunicar al cliente / negocio

Con negocio y clientes, cambia el registro: **sin jerga, con impacto y
tiempos**.

```text
Hi all,

Between 14:02 and 14:35 UTC, about 30% of checkout attempts failed.
Affected users saw an error and had to retry. No payments were
double-charged and no data was lost.

The issue was caused by a configuration change in our latest release,
which we have rolled back. The service is fully operational now.

We're putting a safeguard in place to prevent this configuration from
being deployed again. I'll share the full postmortem by Friday.
```

**Reglas del mensaje externo**: sin nombres de personas, sin culpables, con
ventana de tiempo exacta, con impacto en términos de usuario, y con la
acción preventiva. Y **nunca** *"a small issue"* si afectó al 30% —
minimizar destruye confianza.

> 💎 **Perla Escondida #13**: la palabra **"blameless"** define toda la
> cultura de incidentes angloparlante, y traducirla mal cuesta caro. Un
> *blameless postmortem* no significa "no digas quién lo hizo" por
> cortesía; significa que la pregunta correcta es **"¿qué permitió que este
> error llegara a producción?"** en vez de **"¿quién se equivocó?"**. Por
> eso los postmortems se escriben en pasiva o en plural — *"the config was
> deployed without review"*, *"we didn't have a check for..."* — nunca
> *"Juan deployed a bad config"*. Si escribes un postmortem con nombres
> propios en las causas, en un equipo gringo vas a recibir feedback fuerte,
> aunque tu inglés sea impecable. Ver
> [Postmortem Template](/volume-7-personal/postmortems/postmortem-template)
> en el libro de ingeniería.

---

## 📄 Postmortem en inglés (plantilla)

```markdown
# Incident: Checkout 500s — 2026-08-19

## Summary
For 33 minutes, ~30% of checkout requests failed with 500 errors,
caused by a connection pool misconfiguration in release 482.

## Impact
- Duration: 14:02 – 14:35 UTC (33 min)
- Users affected: ~12,000 checkout attempts
- Revenue impact: estimated $18k in delayed orders
- Data loss: none

## Timeline (UTC)
- 14:02 — Release 482 deployed
- 14:05 — Error rate alert fired
- 14:11 — On-call engineer acknowledged
- 14:22 — Root cause identified (connection pool size)
- 14:31 — Rollback started
- 14:35 — Error rate back to normal

## Root cause
The connection pool size was set per-pod instead of per-cluster...

## What went well
- The alert fired within 3 minutes.
- Rollback took under 5 minutes.

## What went wrong
- The config change was not covered by any test.
- We had no alert on database connection saturation.

## Action items
| Action | Owner | Due |
|---|---|---|
| Add connection-count alert | @ana | Aug 26 |
| Add config validation to CI | @luis | Sep 2 |
```

Frases estándar de postmortem:
- *"This was not caused by a single mistake, but by a gap in our process."*
- *"We got lucky that it happened during business hours."*
- *"The alert fired, but it went to a channel nobody watches."*
- *"We should have caught this in staging, but staging has a different
  pool size."*

---

## 🏋️ Actividades

### Actividad 1 — Reporta 3 incidentes (10 min)
Escribe y **di en voz alta** el reporte inicial (3 frases) para:
1. La API de login devuelve 500 desde hace 10 minutos, todos los usuarios.
2. Los reportes nocturnos no se generaron; nadie afectado aún, pero mañana sí.
3. Un cliente reporta cobros duplicados; no sabes cuántos.

<details>
<summary>Ver modelos</summary>

1. *"🔴 Sev1: the login API is returning 500s for all users since 09:12 UTC.
   Nobody can log in. I'm investigating — next update in 10 minutes."*
2. *"Sev3: last night's report job didn't run. No user impact yet, but
   the daily reports won't be ready for the 9 AM meeting. I'm rerunning it
   now and I'll confirm within the hour."*
3. *"Potential sev1: a customer reported duplicate charges. I'm checking
   how many transactions are affected. I'd suggest we pause the payment
   retries until we know the scope. Update in 15 minutes."*

</details>

### Actividad 2 — Mitigated vs resolved (5 min)
Di en inglés la diferencia entre estos dos estados, en tus propias
palabras, en 20 segundos. Después escríbelo. Si puedes explicarlo, ya
tienes el vocabulario del capítulo.

### Actividad 3 — Postmortem real (20 min)
Toma un incidente real que hayas vivido (aunque sea pequeño) y escribe su
postmortem en inglés con la plantilla completa. Cuida que **ninguna causa
tenga nombre propio**. Este ejercicio te sirve dos veces: practica inglés y
te deja un documento real para tu portafolio.

---

## 📚 Diccionario Rápido

| Término | Significado |
|---|---|
| **Sev1 / Sev2 / Sev3** | Nivel de severidad (1 = crítico) |
| **Incident commander** | Quien coordina el incidente |
| **Mitigated** | Usuarios ya no afectados, causa aún abierta |
| **Rollback** | Volver a la versión anterior |
| **Paging** | Despertar al on-call vía alerta |
| **War room** | Llamada dedicada al incidente |
| **Blameless** | Sin culpables; se analiza el sistema, no la persona |
| **Root cause** | Causa raíz |
| **Action item** | Tarea de seguimiento con responsable y fecha |

---

**Siguiente**: [Módulo 3 — Shadowing](../03-oido-y-boca/shadowing.md)
