const puppeteer = require('puppeteer');

(async () => {
  function delay(time) {
    return new Promise(function(resolve) { setTimeout(resolve, time) });
  }

  const browser = await puppeteer.launch({headless : false});
  const page = await browser.newPage();
  await page.goto('https://monkeytype.com');

  await page.waitForSelector('.letter');
  let word_list = [];

  word_list = await page.evaluate(
      () => Array.from(document.querySelectorAll('.word'), e => e.innerText));
  console.log(word_list);

  let check_word = word_list[96];
  console.log('check: ' + check_word);
  word_list = await page.evaluate(
      () => Array.from(document.querySelectorAll('.word'), e => e.innerText));
  for (let i = 0; i < 100; i++) {
    if (word_list[i] != check_word) {
      console.log(`${word_list[i]} != ${check_word}`);
    } else {
      console.log(i);
      word_list.splice(0, i);
      removeNum = i;
      break;
    }
    for (let i = 0; i < 100; i++) {
      console.log(i);
      await page.type('input#wordsInput', word_list[i] + ' ');
      await delay(2.5);
    }

    check_word = word_list[99];
    word_list = await page.evaluate(
        () => Array.from(document.querySelectorAll('.word'), e => e.innerText));
    for (let i = 0; i < 100; i++) {
      if (word_list[i] != check_word) {
        console.log(`${word_list[i]} != ${check_word}`);
      } else {
        console.log(i);
        i++;
        word_list.splice(0, i);
        removeNum = i;
        break;
      }
    }
  }

  for (let i = 0; i < 100; i++) {
    console.log(i);
    console.log(word_list[i]);
    await page.type('input#wordsInput', word_list[i] + ' ');
    await delay(2.5);
  }

  check_word = word_list[99];
  word_list = await page.evaluate(
      () => Array.from(document.querySelectorAll('.word'), e => e.innerText));
  for (let i = 0; i < 100; i++) {
    if (word_list[i] != check_word) {
      console.log(`${word_list[i]} != ${check_word}`);
    } else {
      i++;
      console.log(word_list[i]);
      word_list.splice(0, i);
      removeNum = i;
      break;
    }
  }

  for (let i = 0; i < 100; i++) {
    console.log(i);
    console.log(word_list[i]);
    await page.type('input#wordsInput', word_list[i] + ' ');
    await delay(2.5);
  }
  check_word = word_list[99];
  word_list = await page.evaluate(
      () => Array.from(document.querySelectorAll('.word'), e => e.innerText));
  for (let i = 0; i < 100; i++) {
    if (word_list[i] != check_word) {
      console.log(`${word_list[i]} != ${check_word}`);
    } else {
      i++;
      console.log(word_list[i]);
      word_list.splice(0, i);
      removeNum = i;
      break;
    }
  }

  for (let i = 0; i < 100; i++) {
    console.log(i);
    console.log(word_list[i]);
    await page.type('input#wordsInput', word_list[i] + ' ');
    await delay(2.5);
  }
  check_word = word_list[99];
  word_list = await page.evaluate(
      () => Array.from(document.querySelectorAll('.word'), e => e.innerText));
  for (let i = 0; i < 100; i++) {
    if (word_list[i] != check_word) {
      console.log(`${word_list[i]} != ${check_word}`);
    } else {
      i++;
      console.log(word_list[i]);
      word_list.splice(0, i);
      removeNum = i;
      break;
    }
  }

  for (let i = 0; i < 100; i++) {
    console.log(i);
    console.log(word_list[i]);
    await page.type('input#wordsInput', word_list[i] + ' ');
    await delay(2.5);
  }
  check_word = word_list[99];
  word_list = await page.evaluate(
      () => Array.from(document.querySelectorAll('.word'), e => e.innerText));
  for (let i = 0; i < 100; i++) {
    if (word_list[i] != check_word) {
      console.log(`${word_list[i]} != ${check_word}`);
    } else {
      i++;
      console.log(word_list[i]);
      word_list.splice(0, i);
      removeNum = i;
      break;
    }
  }

  for (let i = 0; i < 100; i++) {
    console.log(i);
    console.log(word_list[i]);
    await page.type('input#wordsInput', word_list[i] + ' ');
    await delay(2.5);
  }
  check_word = word_list[99];
  word_list = await page.evaluate(
      () => Array.from(document.querySelectorAll('.word'), e => e.innerText));
  for (let i = 0; i < 100; i++) {
    if (word_list[i] != check_word) {
      console.log(`${word_list[i]} != ${check_word}`);
    } else {
      i++;
      console.log(word_list[i]);
      word_list.splice(0, i);
      removeNum = i;
      break;
    }
  }

  for (let i = 0; i < 100; i++) {
    console.log(i);
    console.log(word_list[i]);
    await page.type('input#wordsInput', word_list[i] + ' ');
    await delay(2.5);
  }
  check_word = word_list[99];
  word_list = await page.evaluate(
      () => Array.from(document.querySelectorAll('.word'), e => e.innerText));
  for (let i = 0; i < 100; i++) {
    if (word_list[i] != check_word) {
      console.log(`${word_list[i]} != ${check_word}`);
    } else {
      i++;
      console.log(word_list[i]);
      word_list.splice(0, i);
      removeNum = i;
      break;
    }
  }

  for (let i = 0; i < 100; i++) {
    console.log(i);
    console.log(word_list[i]);
    await page.type('input#wordsInput', word_list[i] + ' ');
    await delay(2.5);
  }
  check_word = word_list[99];
  word_list = await page.evaluate(
      () => Array.from(document.querySelectorAll('.word'), e => e.innerText));
  for (let i = 0; i < 100; i++) {
    if (word_list[i] != check_word) {
      console.log(`${word_list[i]} != ${check_word}`);
    } else {
      i++;
      console.log(word_list[i]);
      word_list.splice(0, i);
      removeNum = i;
      break;
    }
  }

  for (let i = 0; i < 100; i++) {
    console.log(i);
    console.log(word_list[i]);
    await page.type('input#wordsInput', word_list[i] + ' ');
    await delay(2.5);
  }
})();
