function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

async function ageResults() {
  try {
    const draw = await Promise.all([
      await luckyDraw("Tina"),
      await luckyDraw("Jorge"),
      await luckyDraw("Julien"),
    ]);
    console.log("Results: ", draw);
  } catch (err) {
    console.log(err);
  }
}

ageResults()
