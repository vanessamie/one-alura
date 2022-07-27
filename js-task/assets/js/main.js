import { novoItem } from "./criaTarefa.js";
import { carregaTarefa } from "./carregaTarefa.js";

const btnAdicionarTarefa = document.querySelector('[data-form-button]');

btnAdicionarTarefa.addEventListener('click', novoItem)

carregaTarefa()