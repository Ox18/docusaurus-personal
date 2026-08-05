---
sidebar_position: 1
---

# Arquitectura Monolítica

## Resumen Ejecutivo

La mayoría de aplicaciones comienzan como monolitos. Entender cuándo un monolito es correcto (y cuándo no lo es) es fundamental.

## Definición

Un monolito es una aplicación única, indivisible, donde toda la lógica de negocio está acoplada en un mismo proceso.

```
┌─────────────────────────────┐
│      Single Deployment      │
├─────────────────────────────┤
│  Users │ Orders │ Products  │
│  Auth  │ Payments│ Inventory │
│────────────────────────────│
│      Shared Database        │
└─────────────────────────────┘
```

## Ventajas

✅ Simple de desarrollar inicialmente
✅ Fácil de debuggear
✅ Una sola base de datos
✅ Deployment simple
✅ Funciona bien hasta 10-20 engineers

## Desventajas

❌ Difícil de escalar
❌ Un bug puede tirar todo
❌ Teams interfieren entre sí
❌ Deploy = risk
❌ Lenguaje locked-in

## Cuándo usar

- Startups (< 1 año)
- Equipos pequeños (< 10 personas)
- Requisitos simples
- MVP

## Cuándo evolucionar

- Performance bottlenecks
- Team growth > 15 people
- Domains claramente separables
- Diferentes SLAs por feature
