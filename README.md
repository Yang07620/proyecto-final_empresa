## Planificació del projecte (Gantt)

```mermaid
gantt
  title Planificació del projecte
  dateFormat YYYY-MM-DD
  section Fase 1
  Anàlisi i requisits :a1, 2026-05-01, 4d
  Disseny inicial     :a2, after a1, 3d
  section Fase 2
  Desenvolupament app :b1, 2026-05-08, 10d
  Proves              :b2, after b1, 3d
  section Fase 3
  Desplegament        :c1, 2026-05-22, 4d
  Memòria i defensa   :c2, 2026-05-27, 5d

## Pas 3. Adaptar les tasques del vostre projecte

Canvieu els noms de les tasques, dates i durades segons la vostra planificació real.

Recordeu:

- Cada tasca té un nom.
- Cada tasca té una data d'inici i una durada (`d`).
- Podeu fer que una tasca comenci després d'una altra amb `after`.

## Pas 4. Comprovar que es veu bé

Guardeu els canvis i reviseu el `README` a GitHub (o a la plataforma on publiqueu el repositori).

Si no es mostra el diagrama:

- Comproveu que el bloc comença amb ` ```mermaid ` i acaba amb ` ``` `.
- Reviseu que les dates tenen format `YYYY-MM-DD`.
- Reviseu que no hi hagi errors d'indentació.

## Pas 5. Incloure'l també a la memòria

El diagrama de Gantt del `README` ha de coincidir amb la planificació explicada a la memòria del projecte.

Assegureu-vos que:

- Les fases del Gantt coincideixen amb els sprints.
- Les dates són coherents amb els lliuraments.
- La versió final del diagrama està actualitzada.

## Errors habituals

- Posar dates en format incorrecte.
- Oblidar tancar el bloc de codi.
- Definir tasques sense ordre temporal real.
- No actualitzar el diagrama quan canvia la planificació.