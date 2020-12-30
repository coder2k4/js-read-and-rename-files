fs = require('fs');

// Путь до каталога с перечнем названий видо
const video_folder_path = 'D:\\Knowledge\\JS\\Vue\\Vue 3 - The Complete Guide (incl. Router, Vuex, Composition API)\\'
// Путь до файла с перечнем названий видо
const folder__list_path =  video_folder_path + 'Vue 3 - The Complete Guide (incl. Router, Vuex, Composition API).txt'

// Получаем массив названий видео
const file_name_list_array = fs.readFileSync(folder__list_path, 'utf8').split('\n');


const file_list_array = fs.readdirSync(video_folder_path);

//Сортировка номерной строки
const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
const file_list_array_sorted = file_list_array.sort(collator.compare).filter(str=>str.indexOf('.mp4')!== -1)


file_list_array_sorted.forEach((file,index)=> {

  let number;
  let correctIndex = index+1

  if (correctIndex < 10)
    number = `00${correctIndex}`
  else if (correctIndex < 99 && correctIndex > 9)
    number = '0' + (correctIndex).toString()
  else
    number = (correctIndex).toString()

  newFilename = video_folder_path + number + ' ' + file_name_list_array[index].trim().replace(/[\\/:*?\"<>|]/gm, '') + '.mp4'

  //console.log(newFilename)

  fs.renameSync(video_folder_path+file, newFilename)
})
//console.log(file_list_array_sorted)
