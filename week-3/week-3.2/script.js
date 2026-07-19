async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(response);

  const data = await response.json();
  console.log(data);
}
