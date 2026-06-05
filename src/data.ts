/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Chapter, Memory, Nickname, MemoryObject } from "./types";

export const CHAPTERS: Chapter[] = [
  {
    id: "dosti-travels",
    number: 1,
    title: "The Dosti Travels Bus",
    subtitle: "June–July 2018",
    description: "Chika joined Andhra School. We met on the Dosti Travels school bus. I studied in NKES School, she studied in Andhra School, and we became friends.",
    illustration: "A blue vintage school bus cruising along a gentle street, with sunshine reflecting on the glass.",
    extraDetail: "Every morning I sat on the last seat on the left side. She would get on a few stops later, move my bag and sit beside me. After school she often reserved seats for me. When the bus was late we played outside near our schools.",
    quote: "Every morning commute became a quiet chapter of a shared journey."
  },
  {
    id: "the-girls",
    number: 2,
    title: "The Question That Stayed",
    subtitle: "November 2019",
    description: "The whispers and questions of junior girls who wondered if we were secretly together, lighting up a completely new perspective that became a turning point.",
    illustration: "Soft hallway lights, where playful laughter echoes through school corridors.",
    extraDetail: "Some junior girls asked whether we were secretly together. This changed my perspective entirely and made me realize I deeply liked her.",
    quote: "A single question from the outside became a mirror to my own heart's truths."
  },
  {
    id: "the-confession",
    number: 3,
    title: "4 December 2019",
    subtitle: "The Confession & Surprise",
    description: "This chapter represents the day I finally gathered enough courage to tell Chika how I felt.",
    illustration: "A tiny blue star glowing softly in the dark twilight sky.",
    extraDetail: "On 4 December 2019, I confessed my feelings to her. She was surprised and asked for some time to understand her own heart.",
    quote: "Confessing is like sending a message in a bottle; you hope the tides carry it to safety."
  },
  {
    id: "the-unfinished-path",
    number: 4,
    title: "11 December 2019",
    subtitle: "Confronting Caste Differences",
    description: "This chapter represents the first answer she gave me after a week of waiting.",
    illustration: "A quiet, misty path with a single fallen autumn leaf resting on a stone.",
    extraDetail: "She initially rejected me on 11 December 2019. One major reason was her concern about caste differences and the difficult social path it could create.",
    quote: "Sometimes family, society, and hesitation shadow the purest of bonds."
  },
  {
    id: "the-lost-chit",
    number: 5,
    title: "13–14 December 2019",
    subtitle: "🖊️ The Pen & The Lost Chit",
    description: "This chapter takes place after the rejection, after the letter, and before the prelim exams.",
    illustration: "A simple Pentonic blue-ink ball pen lying next to a folded chit that is lost in time.",
    extraDetail: "During prelim exam season, she gave me a pen for good luck and secretly placed a chit in my pocket. Later, she tried to get the chit back. The chit was thrown away before I could read it. To this day, I never learned what was written on it.",
    quote: "Some words remain forever kept in the folders of the mystery."
  },
  {
    id: "i-like-you-too",
    number: 6,
    title: "16 December 2019",
    subtitle: "✨ I Like You Too",
    description: "The end of waiting, her answer to the confession, and a beautiful friendship becoming something deeper. The emotional conclusion of Volume I.",
    illustration: "Soft winter afternoon light filtering near a parked car where old answers find new horizons.",
    extraDetail: "On 16 December 2019, my exam ended early. She found me waiting for the bus, grabbed my hand, and took me outside. Standing near a parked car, she gave me her answer: 'I like you too.'",
    quote: "A friendship became something more, sealing the memory of that December bus ride."
  }
];

export const NICKNAMES: Nickname[] = [
  { name: "Habibi", meaning: "Memory content will be added later." },
  { name: "Apple", meaning: "Memory content will be added later." },
  { name: "Love", meaning: "Memory content will be added later." },
  { name: "My Everything", meaning: "Memory content will be added later." },
  { name: "JF", meaning: "Memory content will be added later." },
  { name: "NG", meaning: "Memory content will be added later." },
  { name: "Strawberry", meaning: "Memory content will be added later." },
  { name: "Chika", meaning: "Memory content will be added later." },
  { name: "Butterfly", meaning: "Memory content will be added later." },
  { name: "Apple of My Eye", meaning: "Memory content will be added later." },
  { name: "Rizzler", meaning: "Memory content will be added later." },
  { name: "Daku", meaning: "Memory content will be added later." },
  { name: "Dhun Dhun", meaning: "Memory content will be added later." },
  { name: "Mad Apple", meaning: "Memory content will be added later." },
  { name: "My Love", meaning: "Memory content will be added later." }
];

export const MEMORY_OBJECTS: MemoryObject[] = [
  {
    id: "dosti-bus",
    emoji: "🚌",
    name: "Dosti Travels Bus",
    date: "June–July 2018",
    story: "Every morning on the school bus, I sat on the last seat on the left side, waiting for you to move my bag and sit beside me.",
    details: "We met on the Dosti Travels school bus. I studied in NKES School, and you studied in Andhra School. After school, you would often reserve seats for me. When the bus was late, we played outside near our schools under the afternoon sun.",
    shadowColor: "rgba(14, 165, 233, 0.4)"
  },
  {
    id: "good-luck-pen",
    emoji: "🖊️",
    name: "Good Luck Pen",
    date: "December 2019",
    story: "During prelim exams, you gave me a pen for good luck.",
    details: "A simple blue ink pen that meant much more than a writing instrument. It carried the unspoken weight of your support in those quiet exam rooms.",
    shadowColor: "rgba(34, 211, 238, 0.4)"
  },
  {
    id: "lost-chit",
    emoji: "📜",
    name: "The Lost Chit",
    date: "13–14 December 2019",
    story: "During prelims, you secretly placed a folded chit in my pocket, but tried to take it back later.",
    details: "The chit was thrown away before I had any chance to read it. To this day, I never learned what was written inside.",
    shadowColor: "rgba(232, 121, 249, 0.4)"
  },
  {
    id: "parked-car",
    emoji: "🚗",
    name: "The Parked Car",
    date: "16 December 2019",
    story: "Standing near a parked car, just a few steps away from the bus, where you gave me your answer.",
    details: "You grabbed my hand, told me 'Come with me,' and took me outside the bus. Standing near that parked car, you looked unbelievably excited and told me: 'I like you too.' It became one of the most important memories of my life.",
    shadowColor: "rgba(244, 63, 94, 0.4)"
  }
];

export const BIRTHDAY_LETTER_PAGES = [
  "Hiii,\nI hope u r doing well, its ur birthday, and again im not with u, sorry for that,\nenjoy ur day, ill be waiting for u \nGood night\nChika"
];
