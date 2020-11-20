function fn(){
    console.log("inn function fn")
    console.log(a)
}

function fn2() {
    var  a;
    a = 99;
    console.log(a)

    fn()
}

fn2();