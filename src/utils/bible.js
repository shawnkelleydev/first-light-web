// import { CONTEXT_KEYS } from './constants/global'
// import { BIBLE_STATE_KEYS, BIBLE_QUERY_TYPES } from './constants/bible'

// import { getBibleData } from 'services/bible'
// import verses from 'utils/constants/data/verses'

// export const getNextVerse = contextDispatch => {
//   const n = Math.floor(Math.random() * (verses.length + 1))

//   contextDispatch({
//     parnetKey: CONTEXT_KEYS.bible,
//     key: CONTEXT_KEYS.verse,
//     value: verses[n],
//   })
// }

// export const setBible = async (bibles, bibleId, dispatch) => {
//   dispatch({ key: BIBLE_STATE_KEYS.loading, value: true })

//   dispatch({ parentKey: BIBLE_STATE_KEYS.input, key: BIBLE_STATE_KEYS.book })
//   dispatch({
//     parentKey: BIBLE_STATE_KEYS.input,
//     key: BIBLE_STATE_KEYS.chapter,
//   })

//   const bible = bibles.find(bib => bib.id === bibleId)
//   const books = await getBibleData(BIBLE_QUERY_TYPES.books, bibleId)
//   bible.books = books

//   dispatch({
//     parentKey: BIBLE_STATE_KEYS.input,
//     key: BIBLE_STATE_KEYS.bible,
//     value: bible,
//   })

//   dispatch({ key: BIBLE_STATE_KEYS.loading, value: false })
// }

// export const setBook = (bible, bookId, dispatch) => {
//   const book = bible.books.find(book => book.id === bookId)

//   dispatch({
//     parentKey: BIBLE_STATE_KEYS.input,
//     key: BIBLE_STATE_KEYS.chapter,
//   })

//   dispatch({
//     parentKey: BIBLE_STATE_KEYS.input,
//     key: BIBLE_STATE_KEYS.book,
//     value: book,
//   })
// }

// ********

const _patterns = {
  chapter: /\w*\s*\d+/,
  header: /\\n\S\D+\\n/g,
  verse: /\[\d+\]/g,
}

const content =
  '1\nThe Gospel Exalted\n     [1] Paul, a bond-servant of Christ Jesus, called as an apostle, set apart for the gospel of God,  [2] which He promised beforehand through His prophets in the holy Scriptures,  [3] concerning His Son, who was born of a descendant of David according to the flesh,  [4] who was declared the Son of God with power according to the Spirit of holiness by the resurrection from the dead, Jesus Christ our Lord,  [5] through whom we have received grace and apostleship to bring about the obedience of faith among all the Gentiles in behalf of His name,  [6] among whom you also are the called of Jesus Christ;\n     [7] to all who are beloved of God in Rome, called as saints: Grace to you and peace from God our Father and the Lord Jesus Christ.\n     [8] First, I thank my God through Jesus Christ for you all, because your faith is being proclaimed throughout the world.  [9] For God, whom I serve in my spirit in the preaching of the gospel of His Son, is my witness as to how unceasingly I make mention of you,  [10] always in my prayers requesting if perhaps now, at last by the will of God, I will succeed in coming to you.  [11] For I long to see you so that I may impart some spiritual gift to you, that you may be established;  [12] that is, that I may be encouraged together with you while among you, each of us by the other’s faith, both yours and mine.  [13] I do not want you to be unaware, brothers and sisters, that often I have planned to come to you (and have been prevented so far) so that I may obtain some fruit among you also just as among the rest of the Gentiles.  [14] I am under obligation both to Greeks and to the uncultured, both to the wise and to the foolish.  [15] So, for my part, I am eager to preach the gospel to you also who are in Rome.\n     [16] For I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes, to the Jew first and also to the Greek.  [17] For in it the righteousness of God is revealed from faith to faith; as it is written: “But the righteous one will live by faith.”\nUnbelief and Its Consequences\n     [18] For the wrath of God is revealed from heaven against all ungodliness and unrighteousness of people who suppress the truth in unrighteousness,  [19] because that which is known about God is evident within them; for God made it evident to them.  [20] For since the creation of the world His invisible attributes, that is, His eternal power and divine nature, have been clearly perceived, being understood by what has been made, so that they are without excuse.  [21] For even though they knew God, they did not honor Him as God or give thanks, but they became futile in their reasonings, and their senseless hearts were darkened.  [22] Claiming to be wise, they became fools,  [23] and they exchanged the glory of the incorruptible God for an image in the form of corruptible mankind, of birds, four-footed animals, and crawling creatures.\n     [24] Therefore God gave them up to vile impurity in the lusts of their hearts, so that their bodies would be dishonored among them.  [25] For they exchanged the truth of God for falsehood, and worshiped and served the creature rather than the Creator, who is blessed forever. Amen.\n     [26] For this reason God gave them over to degrading passions; for their women exchanged natural relations for that which is contrary to nature,  [27] and likewise the men, too, abandoned natural relations with women and burned in their desire toward one another, males with males committing shameful acts and receiving in their own persons the due penalty of their error.\n     [28] And just as they did not see fit to acknowledge God, God gave them up to a depraved mind, to do those things that are not proper,  [29] people having been filled with all unrighteousness, wickedness, greed, and evil; full of envy, murder, strife, deceit, and malice; they are gossips,  [30] slanderers, haters of God, insolent, arrogant, boastful, inventors of evil, disobedient to parents,  [31] without understanding, untrustworthy, unfeeling, and unmerciful;  [32] and although they know the ordinance of God, that those who practice such things are worthy of death, they not only do the same, but also approve of those who practice them.\n\n\n1.1: Lit a called apostle\n1.3: Lit seed\n1.4: Or spirit\n1.4: Or as a result of\n1.5: Lit for obedience\n1.7: Lit holy ones; i.e., God’s people\n1.8: Or concerning you all, that...\n1.11: Or strengthened\n1.14: Lit debtor\n1.14: I.e., non-Hellenes\n1.17: Or by\n1.17: Or But the one who is righteous by faith shall live\n1.18: Or by\n1.19: Or among\n1.21: Lit glorify\n1.23: Or reptiles\n1.25: Lit the lie\n1.25: Lit unto the ages\n1.27: Lit of the female\n1.27: Lit shamelessness\n1.27: Lit themselves\n1.28: Lit to have God in knowledge\n1.30: Or hateful to God\n'

// console.log('MATCH', data.data.content.match(_patterns.header))
console.log(
  JSON.stringify(content)
    .match(_patterns.verse)
    .map(verse => verse.replace('[', '<sup>').replace(']', '</sup>'))
)
