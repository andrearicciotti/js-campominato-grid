# Esercizio

---

## Testo dell' esercizio

- **Parte 1**
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

- **Parte 2**
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

---

## Algoritmo di svolgimento

**1. Logica del programma**

- In questo programma salteremo la fase di raccolta dati, in quanto dovremmo racogliere dall' utente solo le sue interazioni.

- Creiamo i componenti HTML del nostro programma e le classi CSS per poi eliminarli e inserirli successivamente.

- Al click dell' utente sul bottone inseriamo dinamicamente sulla nostra pagina una griglia di gioco composta da 100 celle, 10 per riga.

- Al click sulla cella, quest' ultima si colora di azzurro e emette un messaggio in console contenente numero della sua cella.

---
