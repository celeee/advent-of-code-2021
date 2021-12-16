async function getData() {
  const res = await fetch('data.txt');
  const data = await res.text();

  const arr = data.split('\n').map(x => ({
    direction: x.split(' ')[0],
    value: parseInt(x.split(' ')[1]),
  }));

  let horizontalPos = 0;
  let depthPos = 0;
  let aim = 0;

  const arr1 = [
    {
      direction: 'forward',
      value: 5,
    },
    {
      direction: 'down',
      value: 5,
    },
    {
      direction: 'forward',
      value: 8,
    },
    {
      direction: 'up',
      value: 3,
    },
    {
      direction: 'down',
      value: 8,
    },
    {
      direction: 'forward',
      value: 2,
    },
  ];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i].direction) {
      case 'forward':
        horizontalPos += arr[i].value;
        if (aim > 0) {
          depthPos += arr[i].value * aim;
        }
        break;
      case 'up':
        // depthPos -= arr[i].value;
        aim -= arr[i].value;
        break;
      case 'down':
        // depthPos += arr[i].value;
        aim += arr[i].value;
        break;
    }
  }

  console.log(horizontalPos);

  console.log(depthPos);

  // console.log(aim);

  console.log(horizontalPos * depthPos);
}

getData();
