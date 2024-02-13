export const sort = (characters, sortSelection) => {
  if (sortSelection === "A-Z" || sortSelection === "Z-A") {
    characters.sort((a, b) => {
      if (a.character > b.character) {
        return 1;
      }
      if (b.character > a.character) {
        return -1;
      }
      return 0;
    });

    if (sortSelection === "Z-A") {
      characters.reverse();
    }
  }

  if (sortSelection === "Liked" || sortSelection === "notLiked") {
    characters.sort((a, b) => {
      return a.liked === b.liked ? 0 : a.liked ? -1 : 1;
    });

    if (sortSelection === "notLiked") {
      characters.reverse();
    }
  }

  return characters;
};
