//your JS code here. If required.
new Promise((resolve) => {
  setTimeout(() => {
    resolve([1, 2, 3, 4]);
  }, 3000);
})
.then((data) => {
  return new Promise((resolve) => {
    const evens = data.filter(num => num % 2 === 0);
    setTimeout(() => {
      document.getElementById('output').innerText = evens.join(',');
      resolve(evens);
    }, 1000);
  });
})
.then((evens) => {
  return new Promise((resolve) => {
    const doubled = evens.map(num => num * 2);
    setTimeout(() => {
      document.getElementById('output').innerText = doubled.join(',');
      resolve(doubled);
    }, 2000); 
  });
});
