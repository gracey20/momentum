const verses = [
  {
    verse: "The sluggard craves and gets nothing, but the desires of the diligent are fully satisfied.",
    author: "Proverbs 13:4",
  },
  {
    verse: "Rejoice in the Lord always. I will say again: Rejoice!",
    author: "Philippians 4:4",
  },
  {
    verse: "The Lord is my light and my salvation - whom shall I fear?",
    author: "Psalm 27:1",
  },
  {
    verse: "The Lord is the stronghold my life - of whom shall I be afraid?",
    author: "Psalm 27:1",
  },
  {
    verse: "Be kind and compassionate to one another, forgiving each other, Just as in Christ God forgave you.",
    author: "Ephesians 4:32",
  },
  {
    verse: "He guides the humble in what is right and teaches them his way.",
    author: "psalm 25:9",
  },
  {
    verse: "I will instruct you and teach you in the way you should go; I will counsel you with my loving eye on you.",
    author: "Psalm 32:8",
  },
  {
    verse: "But when you give to the needy, do not let your left hand know what your right hand is doing.",
    author: "Matthew 6:3",
  },
  {
    verse: "So I say, walk by the Spirit, and you will not gratify the desires of the flesh.",
    author: "Galatians 5:16",
  },
  {
    verse: "A little sleep, little slumber, a little folding of the hands to rest - and poverty will come on you like a thief and scarcity like an armed man.",
    author: "Proverbs 24:33-34",
  },








]

const verse = document.querySelector("#verse span:first-child");
const author = document.querySelector("#verse span:last-child");

const todaysVerse = verses[Math.floor(Math.random() * verses.length)];

verse.innerText = todaysVerse.verse;
author.innerText = todaysVerse.author;