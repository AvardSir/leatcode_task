const getFinalLocation = (mapConfig, startLocation, path) => {
  let currentLocation = startLocation;

  for (const direction of path) {
    // Проверяем, есть ли текущая локация в конфиге и есть ли выход в нужном направлении
    if (mapConfig[currentLocation] && mapConfig[currentLocation][direction]) {
      currentLocation = mapConfig[currentLocation][direction];
    } else {
      // Если пути нет, искатель забрел в тупик
      return 'Путь прерван'; 
    }
  }

  return currentLocation;
};
