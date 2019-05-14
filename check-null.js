function checkNull(a) {
  console.log("---------------");
  console.log("is undefefined?:", a === undefined);
  console.log("is null?:", a === null);  
  console.log("is not null?:", !a);
  
  if (a) {
    console.log("a is not null");
  } else {
    console.log("a is null");
  }

  if (!!a) {
    console.log("a is not null");
  } else {
    console.log("a is null");
  }
}

// checkNull();
// checkNull(null);
// checkNull("");
// checkNull({});
// checkNull([]);

let dict = {};
console.log(dict.not_declared_variable == null);

console.log(dict.not_declared_variable != null);