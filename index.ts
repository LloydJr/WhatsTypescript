// Import stylesheets
import './style.css';


const form: HTMLFormElement = document.querySelector('#defineform');


form.onsubmit = () => {
  const formData = new FormData(form);

  console.log(formData);
  const text = formData.get('defineword') as string;
  console.log(text);
  return false; // prevent reload
};

function fetchJSON(sord: string) {
  fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + Text)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    localStorage.setItem('definition', JSON.stringify(data))
  });
}