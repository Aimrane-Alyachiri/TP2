/** 
 * factorielle d'un nombre
 * @param {number} a -le nombre qui va calculer leur factoriele
 * @param {number} i-le conteur qui parcourir les nombre de 1 jusqua a
 * @param {number} factoriel-un conteneur qui fait la multiplication de tout les nombres de la factoriel
 * @returns {number} -la factoriel de nombre
 */
function factorielle(a){
    let factoriel=1;
    for(let i=1;i<=a;i++){
   factoriel*=i;
    }
    return factoriel;
}
console.log(factorielle(5));