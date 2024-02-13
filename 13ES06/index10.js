
// export -> 내보내기
export const name = "홍길동";
export const age = 20;
export const getInfo = () => {
    console.log(name, age);
}

let sum = 0;

let add = (a) => {
    sum += a;
}

export{sum, add};