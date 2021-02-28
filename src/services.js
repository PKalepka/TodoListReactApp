const uri = 'http://localhost:52370/api/TodoList';

export default async function getDefaultTodoList() {
  // fetch(uri)
  //   .then(response => response.json())
  //   .then(callBack)
  //   .catch(error => console.error('Unable to get todo list.', error));

  try {
    const response = await fetch(uri);
    return await response.json();
  }
  catch (e) {
    console.error('Unable to get todo list.', e)
  }

  return [];
}