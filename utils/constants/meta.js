const getYear = epoc => {
  return epoc.getFullYear()
}

export const META = {
  AUTHOR: 'Shawn Kelley',
  CURRENT_YEAR: getYear(new Date()),
  // TODO: edit DESCRIPTION
  DESCRIPTION: 'A Personal Daily Devotional Application',
  // TODO: edit KEYWORDS
  KEYWORDS: 'shawn, kelley, first, light',
  TITLE: 'First Light',
}

export const PAGES = {
  bible: 'bible',
  space: 'space',
  inspiration: 'inspiration',
}
