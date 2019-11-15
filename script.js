console.log('init');
//selecteurs
const $calculator = document.querySelector('#calculator');
const $buttons =$calculator.querySelectorAll('button');
const $input = document.querySelector('input');

//validation des selecteurs
console.log($calculator, $buttons, $input);

//listing des calculs
const add =(a, b) => a + b;
const substract = (a,b) => a -b ;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

//gere les evenements des selecteurs
const handleClick = ev =>{
    //si le bouton pressé est ac, je nettoie le champ input 
    if( ev.target.textContent === 'ac'){
        $input.value ='';
        return;
    }
    //si le bouton égal est pressé, je découpe ma chaine de caractère et calcule
    if (ev.target.textContent === '='){
        // récupération de la position de mon opérateur
        const operatorPosition = ($input.value.search(/[\+\-\*\/]/g));

        // découpage de la valeur de l'input
        const a = $input.value.slice(0, operatorPosition);
        const b = $input.value.slice(operatorPosition + 1);
        const operator = $input.value[operatorPosition];
        //debug des valeurs
        console.log(a, b, operator);

        $input.value = dispachActions (a ,b , operator);
        return ; // stop la fonction
    }
    console.log(ev.target.textContent); //debug du champs texte
    $input.value += ev.target.textContent;// concaténation de la valeur
};

const dispachActions = (a,b,operator) => {
    switch (operator){
        case '+':
            return add(a,b);
        case '-':
             return substract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
    }
}

$buttons.forEach(button => 
    button.addEventListener('click',handleClick)
    );
