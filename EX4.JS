/**
 * produit deux nombre et deuxieme nombre par defaut 1
 * @param {number} a-le premier nombre
 * @param {number} b-le deuxieme nombre valeur par defaut 1
 * @returns {number} le produit des deux nombre
 */
function produit(a,b=1){
    return a*b;
}
//la function avec le second parametre
console.log(produit(5,5));
//la function sans le second parametre
console.log(produit(5));
