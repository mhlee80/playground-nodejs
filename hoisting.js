let a = "a";
{
  let a = "a1";
  {
    let a = "a2";
    console.log(a);

    let a = "a3";
    console.log(a);
  }
  console.log(a);
}
console.log(a);
