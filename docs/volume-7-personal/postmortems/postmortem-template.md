---
id: postmortem-template
title: "Plantilla: Postmortem Blameless"
description: "Cómo documentar un incidente real sin culpar a nadie, extrayendo la máxima mejora posible."
sidebar_position: 1
status: "published"
last_updated: "2026-08-05"
tags: [personal-knowledge, postmortem, template]
---

# Plantilla: Postmortem Blameless

## 🎯 Por Qué Blameless

Un postmortem **con culpa** enseña a la gente a esconder errores. Un
postmortem **blameless** (sin culpa) asume que cualquier persona,
con la misma información y presión de tiempo que tenía quien tomó la
decisión, habría hecho lo mismo — así que la pregunta correcta nunca es
"¿quién falló?" sino "¿qué en nuestro sistema (técnico u
organizacional) permitió que este fallo llegara a producción?".

> **💎 Perla escondida:** Google, en su libro *"Site Reliability
> Engineering"*, documenta que equipos con cultura blameless reportan
> incidentes menores **antes** de que se conviertan en incidentes
> mayores, porque no hay miedo a ser señalado. El costo de "no castigar"
> se paga muchas veces con menos incidentes graves a largo plazo.

## Plantilla (copia esto para cada incidente real)

```markdown
# Postmortem: [Título descriptivo del incidente]

**Fecha del incidente:** AAAA-MM-DD
**Duración:** [inicio] – [fin] (X minutos/horas)
**Severidad:** [Sev1 / Sev2 / Sev3]
**Autor:** [tu nombre]

## Resumen (1 párrafo)
[Qué pasó, qué impacto tuvo, causa raíz en una oración]

## Impacto
- Usuarios afectados: [número o %]
- Impacto en negocio: [ingresos, confianza, SLA incumplido]

## Línea de tiempo
- HH:MM — [evento]
- HH:MM — [evento]

## Causa raíz
[Análisis técnico completo. Usa "5 Por qués" si ayuda a llegar
a la causa sistémica, no solo al síntoma inmediato.]

## Qué salió bien
[Sé honesto — reconocer lo que funcionó es tan valioso como identificar
lo que falló.]

## Qué podemos mejorar
[Sin nombres de personas — enfócate en el sistema, el proceso, las
herramientas.]

## Acciones de seguimiento
- [ ] Acción concreta — owner: [nombre] — fecha: [AAAA-MM-DD]
- [ ] Acción concreta — owner: [nombre] — fecha: [AAAA-MM-DD]
```

## ⚠️ Anti-patrón: El Postmortem sin Acciones

Un postmortem que termina en "Causa raíz" sin una sección de acciones
de seguimiento con dueño y fecha es solo una historia bien escrita — no
previene que el mismo incidente vuelva a ocurrir.

## 🏁 Resumen Final

Escribe uno de estos cada vez que algo real falle, aunque sea pequeño.
En un año tendrás un archivo invaluable de patrones de fallo específicos
de tu contexto — algo que ningún libro ni curso externo puede darte.
