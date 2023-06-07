const characters = ["|", "/", "-", "\\"];
const delay = 200;

const spinner = function () {
  let position = 0;

  setInterval(() => {
    const character = characters[position];
    process.stdout.write(`\r${character}   `);
    position = (position + 1) % characters.length;
  }, delay);
};

spinner();
