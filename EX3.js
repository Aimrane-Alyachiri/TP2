/**
 *  le nombre est pair
 * @param {number} a -le nombre que vous verifier 
 * @return {boolean} la resultat de nombre si pair true sinon false 
 */
function estpair(a){
    if(a%2==0){
       return true;
    }
    else{
        return false;
    }
}
console.log(estpair(5));