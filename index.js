let game = false;

(async () => {
  mod = await import('./pkg/idle_potions.js');
  await mod.default();
  game = mod.init();
  setInterval(() => game.tick(), 25);
})();

