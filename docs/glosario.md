---
id: glosario-tecnico
title: "Glosario Técnico"
description: "Jerga de ingeniería que vas a escuchar en el trabajo real y que nadie te explica formalmente — desde 'sábana' hasta 'blameless postmortem'."
slug: /glosario
sidebar_position: 0.5
status: "published"
last_updated: "2026-08-05"
tags: [glosario, reference]
---

# Glosario Técnico

Esta página existe por una razón muy concreta: vas a escuchar palabras en
reuniones, en Slack, en code reviews — que nadie se molesta en explicar
porque "todo el mundo las conoce". Spoiler: nadie nace sabiéndolas. Aquí
están, explicadas como te las explicaría un colega senior en un café, no
como las define un diccionario técnico formal.

Está organizado alfabéticamente. Usa `Cmd+F` / `Ctrl+F` para buscar.

> 💡 **Cómo usar esta página:** si en cualquier tema de EKS ves un término
> que no reconoces y no está en el "Diccionario Rápido" al final de ese
> tema, probablemente está aquí. Si no está ni aquí ni allá, es candidato
> a agregarse — la jerga de la industria crece todo el tiempo.

---

## A

**ADR (Architecture Decision Record)**
Documento corto que registra una decisión de arquitectura ya tomada, junto
con el contexto y las alternativas que se descartaron y por qué. Ver
[Written Communication](/volume-1-soft-skills/communication/written-communication).

**Amarre / hacer un amarre**
Una conexión improvisada entre dos sistemas que no fueron diseñados para
hablar entre sí — se resuelve con lo que hay a mano (un script, un
webhook, un cron) en vez de una integración "correcta" y bien diseñada.
No es necesariamente malo: muchos amarres funcionan años en producción,
pero rara vez son bonitos. "Hicimos un amarre con la API vieja mientras
migramos" significa una solución temporal para conectar dos sistemas que
no se comunican de forma nativa.

**Ambiente**
El equivalente en español latinoamericano de "environment": el conjunto
de infraestructura y configuración donde corre una versión del sistema —
desarrollo, pruebas (QA/staging) o producción. En España se dice más
"entorno"; en gran parte de Latinoamérica, "ambiente" es la palabra que
vas a escuchar en el día a día ("levanta el ambiente de QA", "eso se
rompió en el ambiente de producción").

**Apagar incendios**
Trabajar reactivamente resolviendo emergencias urgentes en vez de avanzar
en el trabajo planeado — lo opuesto a trabajo preventivo. "Esta semana no
avancé nada, estuve apagando incendios" significa que la mayoría del
tiempo se fue resolviendo problemas urgentes no planificados. Ver también
[Ownership y Liderazgo Técnico](/volume-1-soft-skills/leadership/leadership-mindset)
— el anti-patrón "El Bombero Héroe" describe a quien solo aparece para
apagar incendios, sin hacer trabajo preventivo.

**At-least-once delivery**
Garantía de un sistema de mensajería de que un mensaje llegará una o más
veces — nunca cero, pero puede llegar duplicado. Por eso los consumidores
de eventos deben ser idempotentes.

---

## B

**Backpressure**
Cuando un sistema le "avisa" a quien le envía datos que vaya más despacio
porque no da abasto — como decirle a alguien que hable más lento porque no
alcanzas a anotar. Común en streams de datos y colas de mensajes.

**Bikeshedding**
Gastar más tiempo debatiendo un detalle trivial (el color de un botón) que
una decisión realmente importante (la arquitectura del sistema), porque el
detalle trivial es más fácil de opinar para todos.

**Bullets (bullet points)**
Los puntos de una lista — el " • " o " - " que usas para enumerar cosas en
vez de escribir en párrafos. En comunicación senior, "escribir en bullets"
a veces se usa como crítica: bullets sueltos y genéricos dejan que el autor
esconda que no pensó el problema a fondo, por eso Amazon prefiere prosa
completa en decisiones importantes (ver [Written Communication](/volume-1-soft-skills/communication/written-communication)).

**Blameless (postmortem)**
Analizar un incidente asumiendo que cualquier persona, con la misma
información y presión de tiempo, habría cometido el mismo error — la
pregunta nunca es "¿quién falló?" sino "¿qué en el sistema permitió esto?".

**Boilerplate**
Código repetitivo que tienes que escribir una y otra vez para que algo
funcione, sin que aporte lógica de negocio real (configuración inicial,
imports, estructura estándar).

**Brownfield vs. Greenfield**
Greenfield = proyecto nuevo, sin código previo, "campo verde". Brownfield =
proyecto existente con historia, deuda técnica y decisiones heredadas —
"campo ya construido".

---

## C

**Canary release (despliegue canario)**
Lanzar una nueva versión a un pequeño porcentaje de usuarios primero (1-5%)
para detectar problemas antes de exponerla a todos. El nombre viene de los
canarios que los mineros usaban para detectar gas tóxico antes de que
afectara a las personas.

**Chapuza**
Una solución rápida, mal hecha y a sabiendas de que está mal hecha — un
remiendo que "funciona" pero que nadie defendería en una revisión seria.
Se diferencia de un workaround honesto en que una chapuza generalmente se
hace con prisa y todos saben, desde el principio, que hay que volver a
arreglarla bien después (aunque casi nunca se vuelve).

**Chicharrón**
Un problema complicado, desagradable y sin solución obvia que alguien te
"deja" o hereda — muy usado en Colombia y Venezuela. "Me dejaron un
chicharrón" significa que heredaste un problema difícil que otra persona
no resolvió (o no quiso resolver) antes de irse o de pasarlo a otro
equipo.

**Circuit Breaker**
Patrón que "corta el circuito" hacia un servicio que está fallando
repetidamente, respondiendo con un fallback rápido en vez de seguir
intentando y agotar recursos esperando timeouts.

**Cold start**
El tiempo extra que tarda un sistema (especialmente serverless) en
responder la primera vez, porque tiene que "arrancar" desde cero antes de
procesar la petición.

**Colgado / colgarse**
Cuando un proceso, servicio o máquina deja de responder sin necesariamente
caerse del todo — sigue "vivo" técnicamente pero no procesa nada útil.
"El servidor se colgó" es distinto de "el servidor se cayó": colgado
sigue respondiendo (por ejemplo a un ping) pero no hace nada útil; caído
ya ni siquiera responde.

**Cuadrar**
Hacer que dos conjuntos de números o datos coincidan exactamente — muy
usado en equipos de datos y finanzas. "Cuadrar la sábana de ventas con el
sistema contable" significa verificar que ambos reporten las mismas
cifras, y si no cuadran, investigar por qué.

**Culebra**
Un problema recurrente y no resuelto de raíz que sigue "mordiendo" cada
tanto tiempo — muy usado en Colombia y Venezuela, donde también se aplica
a deudas pendientes. "Ese bug de concurrencia es una culebra" significa
que reaparece periódicamente y nadie lo ha arreglado de fondo, solo se
parcha cada vez que vuelve a morder.

---

## D

**Dead Letter Queue (DLQ)**
La "cola de rechazados": donde van los mensajes o eventos que un sistema
no pudo procesar después de varios intentos, para revisarlos manualmente
en vez de perderlos o reintentarlos infinitamente.

**Deuda técnica**
Atajos tomados a propósito para entregar más rápido, que "cobran interés"
en forma de más esfuerzo futuro para mantener o extender ese código. No es
inherentemente malo — es una decisión, igual que la deuda financiera.

---

## E

**Eventual consistency (consistencia eventual)**
Garantía de que, si dejas de escribir datos nuevos, el sistema
*eventualmente* llegará a un estado consistente — pero no lo garantiza
instantáneamente. Común en sistemas distribuidos que priorizan
disponibilidad sobre consistencia inmediata.

---

## F

**Feature flag**
Un interruptor en el código que permite prender o apagar una
funcionalidad sin desplegar código nuevo — útil para lanzar features
gradualmente o desactivar algo roto sin un rollback completo.

---

## G

**God object / God class**
Una clase u objeto que sabe y hace demasiado, tocando responsabilidades de
todo el sistema. El primo cercano del anti-patrón "Big Ball of Mud".

---

## H

**Hotfix**
Una corrección urgente que se despliega directo a producción, saltándose
(o acelerando) el proceso normal de revisión, porque algo crítico está
roto ahora mismo.

---

## I

**Idempotente**
Una operación que da el mismo resultado sin importar cuántas veces la
ejecutes. "Poner el interruptor en ON" es idempotente (da igual cuántas
veces lo hagas, queda en ON). "Sumar 1" no lo es.

---

## L

**Legacy (código legado)**
Código antiguo que sigue en producción, generalmente sin documentación
clara ni el contexto original de por qué se hizo así — no es un insulto,
es una descripción neutral de código con historia.

**Levantar (un ambiente/servicio)**
Iniciar o poner en marcha un servicio, servidor o ambiente completo — lo
opuesto de "tumbar". "Levanta el ambiente de staging" significa iniciar
toda la infraestructura necesaria para que ese ambiente esté disponible y
funcionando.

---

## M

**Meter mano**
Intervenir directamente en el código o sistema para solucionar algo,
generalmente de forma rápida y sin mucho proceso formal. "Voy a meter
mano al script de deploy" significa modificarlo directamente, sin
necesariamente pasar por todo el proceso de revisión que usarías para un
cambio grande.

**Monolito**
Aplicación donde toda la lógica de negocio vive en un único proceso
desplegado como una sola unidad. Ver el tema completo en
[Arquitectura Monolítica](/volume-3-architecture/fundamentals/monolith-architecture).

---

## N

**North Star metric**
La única métrica que un equipo o producto elige como la más importante de
todas, la que mejor predice el éxito a largo plazo — todo lo demás se
prioriza en función de si mueve esa métrica.

---

## O

**On-call (guardia)**
El turno en que un ingeniero es responsable de responder alertas e
incidentes de producción, incluso fuera de horario laboral.

---

## P

**P0 / P1 / P2 (niveles de severidad)**
Clasificación de qué tan grave es un incidente. P0 = "todo está caído,
detén lo que estás haciendo". P1 = grave pero no total. P2 = importante
pero puede esperar hasta el próximo día hábil. Los números y su
significado exacto varían por empresa.

**Parche / parchar**
Una corrección rápida y puntual para un problema específico, sin resolver
la causa raíz — el primo cercano de un hotfix, pero más informal y
generalmente más pequeño en alcance. "Le puse un parche mientras
encontramos la causa real" es una admisión honesta de que la solución es
temporal.

**Playbook / Runbook**
Documento con los pasos exactos a seguir ante una situación conocida (ej.
"la base de datos está lenta") — para no tener que pensar desde cero en
medio de un incidente.

**Polling vs. Push**
Polling = preguntar repetidamente "¿ya hay algo nuevo?" a intervalos.
Push = el otro sistema te avisa activamente cuando hay algo nuevo, sin que
tengas que preguntar.

**POC (Proof of Concept)**
Una versión mínima construida solo para demostrar que una idea técnica
*puede* funcionar — no está pensada para producción ni para durar.

---

## R

**Race condition**
Un bug que ocurre porque dos procesos acceden o modifican el mismo dato al
mismo tiempo, y el resultado depende de "quién llegó primero" — impredecible
y notoriamente difícil de reproducir.

**Rate limiting (throttling)**
Limitar cuántas peticiones puede hacer un cliente en un periodo de tiempo,
para proteger el sistema de ser saturado (a propósito o por accidente).

**Regarla**
Cometer un error, generalmente uno con consecuencias visibles. "La regué
con el deploy de ayer" es una forma directa y sin rodeos de admitir un
error — y admitirlo así, rápido y sin adornos, es justo lo que describe el
tema de [Ownership y Liderazgo Técnico](/volume-1-soft-skills/leadership/leadership-mindset)
sobre depositar en el "banco de confianza técnica".

**Rollback**
Revertir un cambio o despliegue a la versión anterior, generalmente porque
la nueva versión introdujo un problema.

**RFC (Request for Comments)**
Documento que propone una decisión *antes* de tomarla, para que el equipo
la discuta y aporte antes de implementar.

---

## S

**Sábana**
Término muy usado en equipos de datos/BI en Latinoamérica para referirse a
una **tabla ancha y desnormalizada** — una sola tabla gigante con
muchísimas columnas, resultado de unir (hacer `JOIN`) varias tablas
normalizadas en una sola, "extendida como una sábana". Se usa mucho para
reportes y dashboards, porque evita tener que hacer `JOIN`s complejos en
cada consulta — el costo es que ocupa más espacio y puede tener datos
repetidos. Si un compañero de datos te dice "arma la sábana de ventas",
te está pidiendo esa tabla ancha con todo lo relevante de ventas ya unido.

> **Ojo:** "sábana" también se usa con un segundo significado, más común en
> equipos de ingeniería (no de datos): una **vista o tablero que junta
> muchos Pull Requests en una sola tabla larga** para verlos todos de un
> vistazo — por ejemplo, "pásame la sábana de PRs abiertos" pide una lista
> con todos los PRs pendientes de revisión, su autor, estado de CI y
> antigüedad, en lugar de revisarlos uno por uno en GitHub. La idea de
> fondo es la misma en ambos casos: "algo extendido/desplegado para ver
> todo junto de un vistazo", solo que aplicado a filas de datos en un caso
> y a PRs en el otro.

**Sharding**
Dividir una base de datos grande en piezas más pequeñas ("shards"),
generalmente distribuidas en distintos servidores, para que ninguna pieza
sola tenga que cargar con todo el volumen de datos o tráfico.

**Sidecar (patrón)**
Un proceso auxiliar que corre junto a tu aplicación principal (en el mismo
pod/contenedor) para encargarse de una responsabilidad transversal —
logging, seguridad, proxy de red— sin que la aplicación principal tenga
que saber de ello.

**SLA / SLO / SLI**
SLA (Service Level Agreement) = el compromiso formal con el cliente (ej.
"99.9% de disponibilidad"). SLO (Objective) = la meta interna que te
propones para cumplir el SLA con margen. SLI (Indicator) = la métrica real
que mides para saber si estás cumpliendo el SLO.

**Spike (technical spike)**
Una investigación acotada en tiempo para responder una pregunta técnica
específica ("¿esta librería aguanta nuestra carga?") antes de comprometerse
a construir algo con ella.

---

## T

**Tech debt** — ver **Deuda técnica**.

**Tumbar (un servicio/ambiente)**
Apagar o derribar intencionalmente un servicio, servidor o ambiente — lo
opuesto de "levantar". "Vamos a tumbar el ambiente de staging para
liberar recursos" significa apagarlo deliberadamente, no que se cayó por
error.

---

## V

**Vendor lock-in**
Quedar tan dependiente de las herramientas o servicios de un proveedor
específico que cambiarte a otro sale carísimo o casi imposible. Uno de los
principios de EKS es evitarlo deliberadamente (ver
[EKS_ARCHITECTURE.md](https://github.com/Ox18/docusaurus-personal)).

---

## W

**WIP (Work In Progress)**
Trabajo que está en curso, no terminado — común como etiqueta en tableros
Kanban o en el título de un Pull Request que aún no está listo para
revisión completa.

---

## Y

**Yak shaving**
Cuando terminas haciendo una tarea completamente distinta a la que
empezaste, porque cada paso reveló otro prerequisito ("para arreglar A
necesito B, para B necesito C..."), hasta que ya no recuerdas por qué
empezaste. El nombre viene de una tira cómica sobre afeitar un yak para
conseguir... una cadena de favores completamente absurda.

---

## ¿Falta un término?

Este glosario crece con el proyecto. Si escuchas una palabra en el trabajo
que no entendiste y no está aquí, es señal de que hay que agregarla —
anótala en tu [Personal Knowledge](/volume-7) y luego súmala aquí.
