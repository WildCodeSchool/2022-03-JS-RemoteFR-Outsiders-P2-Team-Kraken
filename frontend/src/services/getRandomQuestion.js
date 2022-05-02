import questionList from "../assets/questionList.json";

// getRandomQuestion est une fonction qui s'appelle dans une page uniquement.
// L'appel à la fonction se fait via la commande getRandomQuestion(nbfilms)
// où nbfilms est le nombre de film affiché. Ce nombre doit être supérieur ou
// égal à 2.
// Elle renvoi un object ayant la structure suivante :
//
// {
// id: id unique de la question,
// nbfilms: (2 ou multiple) qui permet d'afficher les questions
//          en fonction du nombre de film
// question: la question a afficher sur la page
// topic: clef identique à l'api pour lier question et info api
// }
//
// la question renvoyée est choisi aléatoirement dans le fichier questionList.json

function getRandomQuestion(nbfilms) {
  let strnbfilms = "";

  if (nbfilms === 2) {
    strnbfilms = "2";
  } else {
    strnbfilms = "multiple";
  }
  const possibleQuestion = questionList.filter((e) => e.nbfilms === strnbfilms);
  const randIndex = Math.round(Math.random() * (possibleQuestion.length - 1));
  const ficheQuestion = possibleQuestion[randIndex];

  return ficheQuestion;
}

export default getRandomQuestion;
