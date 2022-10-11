export const BIBLE_PATTERNS = {
  book: /\d* ?[a-z]+ ?[a-z]* ?[a-z]*/i,
}

export const BIBLE_QUERY_TYPES = {
  bibles: 'bibles',
  book: 'book',
  books: 'books',
  chapter: 'chapter',
  esv: 'esv',
  passage: 'passage',
}

export const BIBLE_INPUT_TYPES = {
  bible: 'bible',
  book: 'book',
  chapter: 'chapter',
}

export const BIBLE_STATE_KEYS = {
  api: 'api',
  bible: 'bible',
  bibles: 'bibles',
  book: 'book',
  chapter: 'chapter',
  dispatch: 'dispatch',
  input: 'input',
  loading: 'loading',
  passage: 'passage',
  verse: 'verse',
}

export const BIBLE_IDS = {
  esv: 'esv',
  nasb: 'a761ca71e0b3ddcf-01',
}

export const ESV_COPYRIGHT = [
  'Scripture quotations are from the ESV® Bible (The Holy Bible, English Standard Version®), copyright © 2001 by Crossway, a publishing ministry of Good News Publishers. Used by permission. All rights reserved. The ESV text may not be quoted in any publication made available to the public by a Creative Commons license. The ESV may not be translated into any other language.',
  'Users may not copy or download more than 500 verses of the ESV Bible or more than one half of any book of the ESV Bible.',
]
