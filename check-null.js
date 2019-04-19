function checkNull(a) {
  console.log("---------------");
  console.log("is undefefined?:", a === undefined);
  console.log("is null?:", a === null);  
  console.log("is not null?:", !a);
}

checkNull();
// checkNull(null);
// checkNull("");
// checkNull({});
