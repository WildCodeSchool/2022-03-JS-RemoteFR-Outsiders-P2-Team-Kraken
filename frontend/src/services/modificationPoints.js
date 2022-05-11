function modificationPoints(pointsquestion, nbfilms, timer) {
  console.log(timer);
  const maxTimer = nbfilms === 2 ? 15 : 25;
  const percent = timer / maxTimer;
  const pointsReduction = pointsquestion * percent;
  return Math.round(pointsReduction);
}

export default modificationPoints;
