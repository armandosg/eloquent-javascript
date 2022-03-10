let size = 4;
let concatHashtag = false;
for(let y = 0; y < size; y ++) {
  let line = "";
  for (let x = 0; x < size; x ++) {
    line += (concatHashtag) ? "#" : " ";
    concatHashtag = !concatHashtag;
  }
  console.log(line);
  concatHashtag = (size % 2 == 0) ? !concatHashtag : concatHashtag;
}
