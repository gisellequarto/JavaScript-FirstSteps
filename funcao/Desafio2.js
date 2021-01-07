/*Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

function qualTriangulo(a, b, c) {
    if ((a > 0 && b > 0 && c > 0) && (a + b > c && a + c > b && b + c > a)) {
        if (a == b && a== c) {
            return "Equilátero"
        } else if ((a== b && a != c) || (a == c && c != b)) {
            return "Isósceles"
        } else {
            return "Escaleno"
        }

    } else {
        return "Não é um triangulo!"
    }

}

console.log(qualTriangulo(3, 3, 3))