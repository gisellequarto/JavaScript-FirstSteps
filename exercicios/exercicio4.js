/*Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.*/

let studants = {
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
}


const betterStudant = x => {
    let finalGrades = {};
    Object.entries(x).forEach(([chave, valor]) => {
        let media = (valor.reduce((a, b) => a + b)) / valor.length;
        Object.defineProperty(finalGrades, `${chave}`, { enumerable: true, value: media });
    });

    let betterMedia =  Object.values(finalGrades).reduce((a, b) => Math.max(a, b));
    let betterSdt = Object.entries(finalGrades).filter(([chave, valor]) => (valor === betterMedia));

    let betterToObj = {};
    Object.defineProperty(betterToObj, betterSdt[0][0], { enumerable: true, value: betterSdt[0][1] });

    console.log(betterToObj);
}


betterStudant(studants);