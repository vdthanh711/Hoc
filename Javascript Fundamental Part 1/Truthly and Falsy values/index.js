//truthly: chuỗi khác rỗng, số khác 0 và object
Boolean(true); //true
Boolean({}); //true
Boolean([]); //true
Boolean(23); //true
Boolean("0"); //true
Boolean("false"); //true
Boolean(new Date); //true
Boolean(-23); //true
Boolean(12n); //true
Boolean(2.3435); //true
Boolean(-2.3443); //true
Boolean(Infinity); //true
Boolean(-Infinity); //true
//falsy: undefined, null, false, 0, -0, 0n, NaN, ""
Boolean(false); //false
Boolean(0); //false
Boolean(-0); //false
Boolean(0n); //false
Boolean(""); //false
Boolean(null); //false
Boolean(undefined); //false
Boolean(NaN); //false