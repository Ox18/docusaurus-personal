---
id: labs-catalog
title: "Catálogo de Laboratorios"
description: "Todos los laboratorios planeados para el Volumen IV, en el orden en que deberías abordarlos según el ROADMAP."
sidebar_position: 0
slug: /volume-4/labs
status: "published"
last_updated: "2026-08-05"
tags: [labs, catalog]
---

# Catálogo de Laboratorios

Cada laboratorio incluye: arquitectura, código real, `docker-compose.yml`
cuando aplica, pruebas, checklist y errores comunes. Se estudian **en el
orden del **ROADMAP.md** (en la raíz del repositorio) — no antes.

| Laboratorio | Prerequisito conceptual | Estado |
|---|---|---|
| [🐳 Docker](./docker/docker-basics.md) | Fundamentos de programación | ✅ Disponible |
| ☸️ Kubernetes | Docker (Nivel 4) | 🔜 Planeado |
| 📨 Kafka | Event-Driven Architecture | 🔜 Planeado |
| 🐰 RabbitMQ | Event-Driven Architecture | 🔜 Planeado |
| 🔴 Redis | Caching Strategies | 🔜 Planeado |
| 🌍 Terraform | Docker | 🔜 Planeado |
| 📊 OpenTelemetry | Microservicios | 🔜 Planeado |
| ☁️ AWS | Docker + Networking | 🔜 Planeado |
| ☁️ Azure | Docker + Networking | 🔜 Planeado |
| 🧩 Microservicios (lab práctico) | Monolito + Event-Driven | 🔜 Planeado |
| 🔀 CQRS (lab práctico) | Event-Driven Architecture | 🔜 Planeado |
| 🔗 Saga Pattern (lab práctico) | Microservicios + Event-Driven | 🔜 Planeado |
| 📤 Outbox Pattern (lab práctico) | Event-Driven + Database Design | 🔜 Planeado |

> **Nota de arquitectura:** no marcamos estos como "vacíos" por descuido —
> es una decisión deliberada de calidad sobre velocidad. Cada laboratorio
> se escribe completo o no se publica (`status: draft` hasta entonces),
> siguiendo la regla de oro del proyecto: preferimos un laboratorio
> excelente que diez mediocres.
