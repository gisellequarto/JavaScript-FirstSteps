/* Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.*/

let dia = 5;

let diaMes = d => {
    if (d  < 1 || d > 31) {
        return "Dia inválido, sua besta"
    }

    switch (d) {
        case 1:
        case 7:
        case 8:
        case 14:
        case 15:
        case 21:
        case 22:
        case 28:
        case 29:
            return "Final de semana! Vai curtir"
        default:
            return "Dia útil! Vai trabalhar!"
    }
}

console.log(diaMes(dia))