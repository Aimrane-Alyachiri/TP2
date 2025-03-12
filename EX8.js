/**
 * Compose deux fonctions f et g.
 * Retourne une nouvelle fonction qui applique g à x puis applique f au résultat de g(x).
 * 
 * @param {Function} f - La fonction qui sera appliquée après g.
 * @param {Function} g - La fonction qui sera appliquée en premier.
 * @returns {Function} Une nouvelle fonction qui applique d'abord g puis f.
 */
const composer = (f, g) => (x) => f(g(x));

/**
 * Double un nombre.
 * 
 * @param {number} x - Le nombre à doubler.
 * @returns {number} Le double de x.
 */
const double = (x) => x * 2;

/**
 * Incrémente un nombre de 1.
 * 
 * @param {number} x - Le nombre à incrémenter.
 * @returns {number} Le nombre incrémenté de 1.
 */
const incrementer = (x) => x + 1;

/**
 * double un nombre puis l'incrémente.
 * utilise la fonction composer pour combiner les fonctions double et `incrementer`.
 * 
 * @param {number} x - Le nombre à traiter.
 * @returns {number} Le résultat du doublement du nombre suivi de l'incrémentation.
 */
const doublePuisIncrementer = composer(incrementer, double);

/**
 * Incrémente un nombre puis le double.
 * Utilise la fonction composer pour combiner les fonctions `incrementer` et `double`.
 * 
 * @param {number} x - Le nombre à traiter.
 * @returns {number} Le résultat de l'incrémentation du nombre suivi du doublement.
 */
const incrementerPuisDouble = composer(double, incrementer);

// tester 
console.log(doublePuisIncrementer(2)); // Résultat : 5
console.log(incrementerPuisDouble(2)); // Résultat : 6
