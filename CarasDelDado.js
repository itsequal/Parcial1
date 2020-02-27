let vec=[0,0,0,0,0,0];
let cara=0;
let j=1;

for (var i = 0; i < 100; i++) {
  cara=dado();
  if (cara==1) {
    vec[0]++;
  }else if (cara==2) {
    vec[1]++;
  }
  else if (cara==3) {
    vec[2]++;
  }
  else if (cara==4) {
    vec[3]++;
  }
  else if (cara==5) {
    vec[4]++;
  }
  else {
    vec[5]++;
  }
}

for (var i = 0; i < 6; i++) {
  console.log("hay",vec[i],j);
  j++;
}

function dado() {
  return Math.floor(Math.random() * 6 + 1);
}
