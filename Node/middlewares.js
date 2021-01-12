//middleware pattern (chain of responsability)

const step1 = (ctx, next) => {
    ctx.valor1 = "mid1";
    next()
}

const step2 = (ctx, next) => {
    ctx.valor2 = "mid2";
    next()
}


const step3 = ctx => ctx.valor3 = "mid3";

const execute = (ctx, ...middlewares) => {
    const execStep = index => {
        middlewares && index < middlewares.length && 
                middlewares[index](ctx, () => execStep(index + 1))
    }
    execStep(0);
}

const ctx = {}
execute(ctx, step1, step2, step3)

console.log(ctx)