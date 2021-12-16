const getData = async () => {
  const res = await fetch('data.txt');
  const data = await res.text();

  const arr = data
    .split('\n')
    .filter(x => Boolean(x))
    .map(x => parseInt(x));

  // Part 1
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      count += 1;
    }
  }

  console.log(count);

  // Part 2
  let count1 = 0;
  const arr1 = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
  for (let i = 0; i < arr.length; i++) {
    let a = arr[i];
    let b = arr[i + 1];
    let c = arr[i + 2];

    let d = arr[i + 1];
    let g = arr[i + 2];
    let f = arr[i + 3];
    const sum1 = a + b + c;
    const sum2 = d + g + f;

    if (sum1 < sum2) count1 += 1;
  }

  console.log(count1);
};

getData();
