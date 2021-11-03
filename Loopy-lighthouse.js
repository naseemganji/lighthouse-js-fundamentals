for (var i = 100; i <= 200; i++) {
  var lo = i % 3 == 0;
  var li = i % 4 == 0;
  console.log(lo ? li ? "LoopyLighthouse" : "Loopy" : li ? "Lighthouse" : i);
}
