const booksOfMosesData = [
  { question: "Creation", answer: "Genesis 1 & 2" },
  { question: "Sin enters the world", answer: "Genesis 3" },
  { question: "The global flood", answer: "Genesis 6 & 7" },
  { question: "Promises to Abraham", answer: "Genesis 12" },
  { question: "Sodom & Gomorrah destroyed", answer: "Genesis 19" },
  { question: "Abraham sacrifices Isaac", answer: "Genesis 22" },
  { question: "Joseph sold by brothers", answer: "Genesis 37" },
  { question: "Joseph's rise to power", answer: "Genesis 41" },
  { question: "Israelites move to Egypt", answer: "Genesis 46" },
  { question: "Israelites enslaved in Egypt", answer: "Exodus 1" },
  { question: "Moses' birth", answer: "Exodus 2" },
  { question: "The burning bush", answer: "Exodus 3" },
  { question: "The ten plagues", answer: "Exodus 7-12" },
  { question: "Parting of the Red Sea", answer: "Exodus 14" },
  { question: "Ten Commandments given", answer: "Exodus 20" },
  { question: "Aaron's golden calf", answer: "Exodus 32" },
  { question: "Tabernacle completed", answer: "Exodus 40" },
  { question: "Nadab & Abihu", answer: "Leviticus 10" },
  { question: "Spies return with a bad report", answer: "Numbers 13" },
  { question: "40 years of wandering as punishment", answer: "Numbers 14" },
  { question: "Moses' sin of striking the rock", answer: "Numbers 20" },
  { question: "The bronze serpent", answer: "Numbers 21" },
  { question: "If you obey, you will be blessed", answer: "Deuteronomy 28" },
  { question: "If you disobey, you will be cursed", answer: "Deuteronomy 28" },
  { question: "Moses dies at 120 years old", answer: "Deuteronomy 34" },
]

const judgesData = [
  { question: "Judges 1", answer: "An incomplete conquest of Canaan" },
  { question: "Judges 2", answer: "Israel cycles from sin to salvation" },
  { question: "Judges 3", answer: "Othniel, Ehud, & Shamgar save Israel" },
  { question: "Judges 4", answer: "Deborah & Barak save Israel" },
  { question: "Judges 5", answer: "The Song of Deborah & Barak" },
  { question: "Judges 6", answer: "Gideon called to save Israel" },
  { question: "Judges 7", answer: "Gideon's victory with 300 soldiers" },
  { question: "Judges 8", answer: "Gideon pursues the fleeing Midianites" },
  { question: "Judges 9", answer: "Abimelech's conspiracy" },
  { question: "Judges 10", answer: "Tola & Jair save Israel" },
  { question: "Judges 11", answer: "Jephthah saves Israel" },
  { question: "Judges 12", answer: "Ibzan, Elon, & Abdon save Israel" },
  { question: "Judges 13", answer: "The birth of Samson" },
  { question: "Judges 14", answer: "Samson's Philistine wife" },
  { question: "Judges 15", answer: "Samson saves Israel" },
  { question: "Judges 16", answer: "Samson & Delilah" },
  { question: "Judges 17", answer: "Micah's idolatry & priesthood" },
  { question: "Judges 18", answer: "Danites adopt Micah's idolatry & priesthood" },
  { question: "Judges 19", answer: "Benjamites kill the Levite's concubine" },
  { question: "Judges 20", answer: "Israel wages war against the Benjamites" },
  { question: "Judges 21", answer: "Wives provided for the Benjamites" },
]

const matthewData = [
  { question: "Jesus' genealogy through Joseph", answer: "Matthew 1" },
  { question: "Wise men search for Jesus", answer: "Matthew 2" },
  { question: "John baptizes Jesus", answer: "Matthew 3" },
  { question: "Temptations of Jesus", answer: "Matthew 4" },
  { question: "Sermon on the Mount", answer: "Matthew 5-7" },
  { question: "Centurion's servant healed", answer: "Matthew 8" },
  { question: "Jesus forgives sins & works miracles", answer: "Matthew 9" },
  { question: "Twelve apostles chosen", answer: "Matthew 10" },
  { question: "Jesus gives true rest", answer: "Matthew 11" },
  { question: "A tree is known by its fruit", answer: "Matthew 12" },
  { question: "Parable of the sower", answer: "Matthew 13" },
  { question: "Death of John the baptizer", answer: "Matthew 14" },
  { question: "Defilement comes from within", answer: "Matthew 15" },
  { question: "Jesus is the Christ", answer: "Matthew 16" },
  { question: "Jesus' transfiguration", answer: "Matthew 17" },
  { question: "Parable of the unforgiving servant", answer: "Matthew 18" },
  { question: "Marriage, divorce, & remarriage", answer: "Matthew 19" },
  { question: "Parable of the workers in the vineyard", answer: "Matthew 20" },
  { question: "The triumphant entry", answer: "Matthew 21" },
  { question: "Parable of the wedding feast", answer: "Matthew 22" },
  { question: "Woes to the scribes & Pharisees", answer: "Matthew 23" },
  { question: "Destruction of Jerusalem", answer: "Matthew 24" },
  { question: "Judgment Day", answer: "Matthew 25" },
  { question: "Judas' betrayal", answer: "Matthew 26" },
  { question: "Death of Jesus", answer: "Matthew 27" },
  { question: "Great Commission", answer: "Matthew 28" },
]

const johnData = [
  { question: "The Word became flesh", answer: "John 1" },
  { question: "Water into wine", answer: "John 2" },
  { question: "The new birth", answer: "John 3" },
  { question: "Samaritan woman at the well", answer: "John 4" },
  { question: "Jesus heals on the Sabbath", answer: "John 5" },
  { question: "Jesus feeds 5000", answer: "John 6" },
  { question: "People disagree about Jesus", answer: "John 7" },
  { question: "Woman caught in adultery", answer: "John 8" },
  { question: "A man born blind receives sight", answer: "John 9" },
  { question: "Jesus the Good Shepherd", answer: "John 10" },
  { question: "Death & resurrection of Lazarus", answer: "John 11" },
  { question: "Jesus anointed at Bethany", answer: "John 12" },
  { question: "Washing the disciples' feet", answer: "John 13" },
  { question: "The way, the truth, & the life", answer: "John 14" },
  { question: "The true vine", answer: "John 15" },
  { question: "Preparing apostles for Jesus' departure", answer: "John 16" },
  { question: "Jesus prays for unity", answer: "John 17" },
  { question: "Jesus before Pilate", answer: "John 18" },
  { question: "Jesus mocked, crucified, & buried", answer: "John 19" },
  { question: "The risen Christ", answer: "John 20" },
  { question: "Jesus restores Peter", answer: "John 21" },
]

const genesisData = [
  { question: "Genesis 1", answer: "Creation: overall summary" },
  { question: "Genesis 2", answer: "Creation: specifics related to mankind" },
  { question: "Genesis 3", answer: "Sin enters the world" },
  { question: "Genesis 4", answer: "Cain & Abel" },
  { question: "Genesis 5", answer: "Genealogy of Seth" },
  { question: "Genesis 6", answer: "Preparing the ark" },
  { question: "Genesis 7", answer: "The global flood" },
  { question: "Genesis 8", answer: "Exiting the ark" },
  { question: "Genesis 9", answer: "Rainbow promise" },
  { question: "Genesis 10", answer: "Genealogy of Noah" },
  { question: "Genesis 11", answer: "Tower of Babel" },
  { question: "Genesis 12", answer: "Promises to Abram" },
  { question: "Genesis 13", answer: "Abram & Lot separate" },
  { question: "Genesis 14", answer: "Lot captured & rescued" },
  { question: "Genesis 15", answer: "God's covenant with Abram" },
  { question: "Genesis 16", answer: "Hagar & Ishmael" },
  { question: "Genesis 17", answer: "The sign of the covenant" },
  { question: "Genesis 18", answer: "A son is promised" },
  { question: "Genesis 19", answer: "Sodom & Gomorrah destroyed" },
  { question: "Genesis 20", answer: "Abraham & Abimelech" },
  { question: "Genesis 21", answer: "Birth of Isaac" },
  { question: "Genesis 22", answer: "Abraham sacrifices Isaac" },
  { question: "Genesis 23", answer: "Sarah's burial" },
  { question: "Genesis 24", answer: "Finding a bride for Isaac" },
  { question: "Genesis 25", answer: "Esau sells his birthright" },
  { question: "Genesis 26", answer: "Isaac & Abimelech" },
  { question: "Genesis 27", answer: "Jacob steals Esau's blessing" },
  { question: "Genesis 28", answer: "Jacob's vow at Bethel" },
  { question: "Genesis 29", answer: "Jacob marries Leah & Rachel" },
  { question: "Genesis 30", answer: "Jacob's children & animals increase" },
  { question: "Genesis 31", answer: "Jacob flees Laban" },
  { question: "Genesis 32", answer: "Gifts for Esau and wrestling with God" },
  { question: "Genesis 33", answer: "Jacob & Esau reconcile" },
  { question: "Genesis 34", answer: "Dinah & Shechem" },
  { question: "Genesis 35", answer: "Jacob returns to Bethel" },
  { question: "Genesis 36", answer: "Genealogy of Esau" },
  { question: "Genesis 37", answer: "Joseph sold by his brothers" },
  { question: "Genesis 38", answer: "Judah & Tamar" },
  { question: "Genesis 39", answer: "Joseph: slave & prisoner" },
  { question: "Genesis 40", answer: "The prisoners' dreams" },
  { question: "Genesis 41", answer: "Joseph's rise to power" },
  { question: "Genesis 42", answer: "Joseph's brothers buy grain in Egypt" },
  { question: "Genesis 43", answer: "Joseph's brothers return with Benjamin" },
  { question: "Genesis 44", answer: "Judah intercedes for Benjamin" },
  { question: "Genesis 45", answer: "Joseph reveals his identity" },
  { question: "Genesis 46", answer: "Israelites move to Egypt" },
  { question: "Genesis 47", answer: "Joseph manages the famine" },
  { question: "Genesis 48", answer: "Jacob blesses Joseph's sons" },
  { question: "Genesis 49", answer: "Jacob prophesies & dies" },
  { question: "Genesis 50", answer: "Mourning for Jacob & death of Joseph" },
]

const generalData = [
  { question: "Old Testament books", answer: "Genesis, Exodus, etc." },
  { question: "New Testament books", answer: "Matthew, Mark, etc." },
  { question: "Creation", answer: "Genesis 1 & 2" },
  { question: "Love", answer: "I Corinthians 13" },
  { question: "What is the purpose of life?", answer: "To fear God & keep His commandments" },
  { question: "What is success?", answer: "Living your life for God and going to heaven" },
  { question: "What is failure?", answer: "Living your life for self and going to hell" },
  { question: "Sermon on the Mount", answer: "Matthew 5, 6, & 7" },
  { question: "Faith", answer: "Hebrews 11" },
  { question: "Heaven", answer: "Revelation 21" },
  { question: "The birth of the church", answer: "Acts 2" },
  { question: "Sin enters the world", answer: "Genesis 3" },
  { question: "What do you want to be when you grow up?", answer: "A Christian" },
  { question: "Birth of Jesus", answer: "Luke 2" },
  { question: "Death of Jesus", answer: "Matthew 27" },
  { question: "Temptations of Jesus", answer: "Matthew 4" },
  { question: "What is God's plan for marriage?", answer: "One man and one woman for life" },
  { question: "The global flood", answer: "Genesis 6 & 7" },
  { question: "Judgment Day", answer: "Matthew 25" },
  { question: "Promises to Abraham", answer: "Genesis 12" },
  { question: "Ten Commandments given", answer: "Exodus 20" },
  { question: "Ascension of Christ", answer: "Acts 1" },
  { question: "Conversion of Saul", answer: "Acts 9" },
  { question: "If you obey, you will be blessed", answer: "Deuteronomy 28" },
  { question: "If you disobey, you will be cursed", answer: "Deuteronomy 28" },
]

const bibleBookSummaryData = [
  { question: "Genesis", answer: "The Book of Beginnings" },
  { question: "Exodus", answer: "From Egypt to Sinai" },
  { question: "Leviticus", answer: "The Law of the Priests" },
  { question: "Numbers", answer: "The Wilderness Wanderings" },
  { question: "Deuteronomy", answer: "The Book of Remembrance" },
  { question: "Joshua", answer: "The Conquest of Canaan" },
  { question: "Judges", answer: "Cycling from Sin to Salvation" },
  { question: "Ruth", answer: "A Love Story" },
  { question: "I Samuel", answer: "Transitioning from Judges to Kings" },
  { question: "II Samuel", answer: "The Reign of David" },
  { question: "I Kings", answer: "The Kingdom United and the Kingdom Divided" },
  { question: "II Kings", answer: "The Decline and Fall of Israel and Judah" },
  { question: "I & II Chronicles", answer: "Genealogies and the History of Judah" },
  { question: "Ezra", answer: "The Second Exodus" },
  { question: "Nehemiah", answer: "Rebuilding Jerusalem's Wall" },
  { question: "Esther", answer: "God's Powerful Providence" },
  { question: "Job", answer: "From Tragedy to Triumph" },
  { question: "Psalms", answer: "A Book of Praises" },
  { question: "Proverbs", answer: "A Book of Wise Sayings" },
  { question: "Ecclesiastes", answer: "Life Without God is Vain" },
  { question: "Song of Solomon", answer: "The Beauty of Wedded Love" },
  { question: "Isaiah", answer: "God's Prophet of Doom and Deliverance" },
  { question: "Jeremiah", answer: "God's Prophet of Tears and Terror" },
  { question: "Lamentations", answer: "Jerusalem is Destroyed!" },
  { question: "Ezekiel", answer: "Prophecies of Judgment and Restoration" },
  { question: "Daniel", answer: "God Rules the Nations" },
  { question: "Hosea", answer: "The Spiritual Adultery and Judgment of Israel" },
  { question: "Joel", answer: "Repent, Judah!" },
  { question: "Amos", answer: "Judgment and Visions of the Future" },
  { question: "Obadiah", answer: "The Judgment of Edom" },
  { question: "Jonah", answer: "Delivering God's Message" },
  { question: "Micah", answer: "The Judgment of Israel and Judah" },
  { question: "Nahum", answer: "The Judgment of Ninevah" },
  { question: "Habakkuk", answer: "The Questioning Prophet" },
  { question: "Zephaniah", answer: "The Day of the Lord is Coming!" },
  { question: "Haggai", answer: "Rebuilding the Temple" },
  { question: "Zechariah", answer: "Night Visions and the Coming Messiah" },
  { question: "Malachi", answer: "The Unfaithful Priesthood and the Coming Messenger" },
  { question: "Matthew", answer: "Jesus the King" },
  { question: "Mark", answer: "Jesus the Sacrificial Servant" },
  { question: "Luke", answer: "Jesus the Son of Man" },
  { question: "John", answer: "Jesus the Son of God" },
  { question: "Acts", answer: "The Birth and Spread of Jesus' Church" },
  { question: "Romans", answer: "Justification Through the Gospel and an Obedient Faith" },
  { question: "I Corinthians", answer: "Division, Discipline, & Answering Posed Questions" },
  { question: "II Corinthians", answer: "Defending Paul's Apostleship, Holiness, and Giving" },
  { question: "Galatians", answer: "Liberty is in Christ" },
  { question: "Ephesians", answer: "The Church, the Body of Christ" },
  { question: "Philippians", answer: "To Live is Christ" },
  { question: "Colossians", answer: "Christ, the Head of the Church" },
  { question: "I Thessalonians", answer: "Encouragement and the Second Coming of Christ" },
  { question: "II Thessalonians", answer: "The Great Apostasy and Withdrawing Fellowship" },
  { question: "I Timothy", answer: "Gender and Leadership Roles & Advice to a Young Preacher" },
  { question: "II Timothy", answer: "Preach the Inspired Word of God" },
  { question: "Titus", answer: "Appointing Elders, God's Grace, and Good Works" },
  { question: "Philemon", answer: "A Plea for Reconciliation" },
  { question: "Hebrews", answer: "The Superiority of the New Covenant" },
  { question: "James", answer: "Practical Christian Living" },
  { question: "I Peter", answer: "Salvation, Submission, Suffering, and Service" },
  { question: "II Peter", answer: "Growing in Christ, False Teachers, and False Doctrines" },
  { question: "I John", answer: "God is Light, Love, and Life" },
  { question: "II John", answer: "Abide in the Doctrine of Christ" },
  { question: "III John", answer: "Walk in Truth, Be Faithful, and Diotrephes" },
  { question: "Jude", answer: "Contend Earnestly for the Faith" },
  { question: "Revelation", answer: "The Faithful in Christ will be Victorious" },
]

const attributesData = [
  { question: "God is one", answer: "Deuteronomy 6:4" },
  { question: "God is eternal", answer: "Psalm 90:2" },
  { question: "God is all-knowing", answer: "I John 3:20" },
  { question: "God is all-powerful", answer: "Jeremiah 32:17" },
  { question: "God is Spirit", answer: "John 4:24" },
  { question: "God is just", answer: "Revelation 15:3" },
  { question: "God is faithful", answer: "II Timothy 2:13" },
  { question: "God is holy", answer: "I Peter 1:15,16" },
  { question: "God is love", answer: "I John 4:8,9" },
  { question: "God is longsuffering", answer: "II Peter 3:9" },
  { question: "God is merciful", answer: "I Peter 1:3" },
  { question: "God is gracious", answer: "Psalm 116:5" },
  { question: "God is our Savior", answer: "Jude 25" },
  { question: "God is light", answer: "I John 1:5" },
  { question: "God is our helper", answer: "Psalm 46:1" },
  { question: "God is a consuming fire", answer: "Hebrews 12:29" },
]

const romansData = [
  { question: "Romans 1", answer: "The Gentiles need the gospel, which is God's power to save believers" },
  { question: "Romans 2", answer: "The Jews need the gospel more than the law or circumcision" },
  { question: "Romans 3", answer: "All have sinned, but atonement is available through Christ" },
  { question: "Romans 4", answer: "Like Abraham, we can be justified by faith" },
  { question: "Romans 5", answer: "Sin entered the world through Adam, but justification through Christ" },
  { question: "Romans 6", answer: "Believers are baptized to walk in new life, not old sins" },
  { question: "Romans 7", answer: "Christians are married to Christ & delivered from the law" },
  { question: "Romans 8", answer: "God's love is strong; there is no condemnation for faithful Christians" },
  { question: "Romans 9", answer: "Righteousness must be sought by faith, not by works of the law" },
  { question: "Romans 10", answer: "Jews & Gentiles can both be saved through faith in Christ" },
  { question: "Romans 11", answer: "The Gentiles have been grafted in to God's tree" },
  { question: "Romans 12", answer: "Everyday Christian living" },
  { question: "Romans 13", answer: "Submit to governing authorities" },
  { question: "Romans 14", answer: "Handling matters of indifference" },
  { question: "Romans 15", answer: "Paul plans to visit Rome" },
  { question: "Romans 16", answer: "Various greetings" },
]

const leviticusData = [
  { question: "Book of Leviticus", answer: "The Law of the Priests" },
  { question: "Leviticus 1 - 7", answer: "Details for various offerings" },
  { question: "Leviticus 8 & 9", answer: "Beginning of Aaron's family priesthood" },
  { question: "Leviticus 10", answer: "Nadab & Abihu" },
  { question: "Leviticus 11 - 15", answer: "Laws regarding ceremonial cleanness" },
  { question: "Leviticus 16", answer: "Day of Atonement" },
  { question: "Leviticus 17", answer: "The sanctity of blood" },
  { question: "Leviticus 18 - 20", answer: "Laws regarding moral issues" },
  { question: "Leviticus 23 - 25", answer: "Feast days, Sabbath year, & Jubilee" },
  {
    question: "Leviticus 26",
    answer: "If you obey, you will be blessed; if you disobey, you will be cursed (cf. Deut. 28)",
  },
]

const deuteronomyData = [
  { question: "Book of Deuteronomy", answer: "The Book of Remembrance" },
  { question: "Deuteronomy 1 - 4", answer: "First discourse: Their history (Past)" },
  { question: "Deuteronomy 5 - 26", answer: "Second discourse: Their laws (Present)" },
  { question: "Deuteronomy 27 - 30", answer: "Third discourse: Their choice (Future)" },
  { question: "Deuteronomy 31-34", answer: "Moses' last days" },
]

const numbersData = [
  { question: "Book of Numbers", answer: "The Wilderness Wanderings" },
  { question: "Numbers 1 - 4", answer: "The first census" },
  { question: "Numbers 6", answer: "Nazirite vow" },
  { question: "Numbers 9", answer: "Pillar of cloud & fire" },
  { question: "Numbers 10", answer: "Departing Mt. Sinai" },
  { question: "Numbers 11", answer: "Quail for the complainers" },
  { question: "Numbers 12", answer: "Miriam's jealousy" },
  { question: "Numbers 13", answer: "Spies return with a bad report" },
  { question: "Numbers 14", answer: "40 years of wandering as punishment" },
  { question: "Numbers 15", answer: "Sabbath violator" },
  { question: "Numbers 16", answer: "Korah's rebellion" },
  { question: "Numbers 17", answer: "The budding of Aaron's rod" },
  { question: "Numbers 20", answer: "Moses' sin of striking the rock" },
  { question: "Numbers 21", answer: "The bronze serpent" },
  { question: "Numbers 22 - 24", answer: "Balaam & Balak" },
  { question: "Numbers 25", answer: "Harlotry with Moab" },
  { question: "Numbers 26", answer: "The second census" },
  { question: "Numbers 27", answer: "Appointment of Joshua" },
  { question: "Numbers 32", answer: "The inheritance of the 2 1/2 tribes" },
  { question: "Numbers 34", answer: "Dividing the land of Canaan" },
  { question: "Numbers 35", answer: "Cities of refuge" },
]

const joshuaData = [
  { question: "Joshua 1", answer: "Prepare to possess Canaan" },
  { question: "Joshua 2", answer: "Rahab and the spies" },
  { question: "Joshua 3", answer: "Crossing the Jordan on dry ground" },
  { question: "Joshua 4", answer: "Memorial stones" },
  { question: "Joshua 5", answer: "2nd generation circumcised" },
  { question: "Joshua 6", answer: "Destruction of Jericho" },
  { question: "Joshua 7", answer: "The sin of Achan" },
  { question: "Joshua 8", answer: "Destruction of Ai" },
  { question: "Joshua 9", answer: "Covenant with the Gibeonites" },
  { question: "Joshua 10", answer: "Conquering while the sun stood still" },
  { question: "Joshua 11", answer: "Summarizing Joshua's conquests" },
  { question: "Joshua 12", answer: "List of conquered kings" },
  { question: "Joshua 13", answer: "Land divided east of the Jordan: Reuben, Gad, & one-half of Manasseh" },
  { question: "Joshua 14", answer: "Caleb inherits Hebron" },
  { question: "Joshua 15", answer: "Land inheritance of Judah" },
  { question: "Joshua 16", answer: "Land inheritance of Ephraim" },
  { question: "Joshua 17", answer: "Land inheritance of the other half of Manasseh to the west" },
  { question: "Joshua 18", answer: "Land inheritance of Benjamin" },
  { question: "Joshua 19", answer: "Land inheritance of remaining tribes" },
  { question: "Joshua 20", answer: "Cities of refuge" },
  { question: "Joshua 21", answer: "Cities of the Levites" },
  { question: "Joshua 22", answer: "The altar by the Jordan" },
  { question: "Joshua 23", answer: "Joshua's farewell address" },
  { question: "Joshua 24", answer: "Choose whom you will serve" },
]

const firstCorinthiansData = [
  { question: "1 Corinthians 1", answer: "Unity required in Christ" },
  { question: "1 Corinthians 2", answer: "Power in the gospel, not human wisdom" },
  { question: "1 Corinthians 3", answer: "God gives the increase" },
  { question: "1 Corinthians 4", answer: "A call for humble faithfulness" },
  { question: "1 Corinthians 5", answer: "Withdrawal of fellowship" },
  { question: "1 Corinthians 6", answer: "Flee sexual immorality" },
  { question: "1 Corinthians 7", answer: "Principles of marriage" },
  { question: "1 Corinthians 8", answer: "Be sensitive to the consciences of others" },
  { question: "1 Corinthians 9", answer: "Denying self to save others" },
  { question: "1 Corinthians 10", answer: "Flee idolatry; do all to the glory of God" },
  { question: "1 Corinthians 11", answer: "Head coverings; the Lord's supper" },
  { question: "1 Corinthians 12", answer: "Many gifts & many members, but one body" },
  { question: "1 Corinthians 13", answer: "Love never fails" },
  { question: "1 Corinthians 14", answer: "Tongue-speaking & prophesying for edification" },
  { question: "1 Corinthians 15", answer: "Resurrection" },
  { question: "1 Corinthians 16", answer: "The collection" },
]

const secondCorinthiansData = [
  { question: "2 Corinthians 1", answer: "Paul explains his personal conduct" },
  { question: "2 Corinthians 2", answer: "Forgive the penitent; be the fragrance of Christ" },
  { question: "2 Corinthians 3", answer: "The gospel is a glorious system of grace" },
  { question: "2 Corinthians 4", answer: "Preach Christ boldly and persevere" },
  { question: "2 Corinthians 5", answer: "Living for Christ as a new creation" },
  { question: "2 Corinthians 6", answer: "Be separate from the world" },
  { question: "2 Corinthians 7", answer: "Godly sorrow produces repentance leading to salvation" },
  { question: "2 Corinthians 8", answer: "Giving is a proof of your love" },
  { question: "2 Corinthians 9", answer: "God loves a cheerful giver" },
  { question: "2 Corinthians 10", answer: "Don't commend yourself but glory in the Lord" },
  { question: "2 Corinthians 11", answer: "Paul's sufferings for Christ as a genuine apostle" },
  { question: "2 Corinthians 12", answer: "Paul's thorn in the flesh" },
  { question: "2 Corinthians 13", answer: "Examine yourself and avoid disqualification" },
]

const exodusData = [
  { question: "Exodus 1", answer: "Israelites enslaved in Egypt" },
  { question: "Exodus 2", answer: "Birth of Moses" },
  { question: "Exodus 3", answer: "The burning bush" },
  { question: "Exodus 4", answer: "Moses reluctantly returns to Egypt" },
  { question: "Exodus 5", answer: "Pharaoh increases Israel's work" },
  { question: "Exodus 6", answer: "Israel rejects Moses' leadership" },
  { question: "Exodus 7", answer: "Plagues: Water into blood" },
  { question: "Exodus 8", answer: "Plagues: Frogs, lice, & flies" },
  { question: "Exodus 9", answer: "Plagues: Pestilence, boils, & hail" },
  { question: "Exodus 10", answer: "Plagues: Locusts & darkness" },
  { question: "Exodus 11", answer: "Death of the firstborn announced" },
  { question: "Exodus 12", answer: "Passover instituted & the final plague" },
  { question: "Exodus 13", answer: "The exodus" },
  { question: "Exodus 14", answer: "Parting of the Red Sea" },
  { question: "Exodus 15", answer: "The songs of Moses & Miriam" },
  { question: "Exodus 16", answer: "Bread from heaven" },
  { question: "Exodus 17", answer: "Water from the rock" },
  { question: "Exodus 18", answer: "Moses delegates authority" },
  { question: "Exodus 19", answer: "Israel arrives at Sinai" },
  { question: "Exodus 20", answer: "Ten Commandments given" },
  { question: "Exodus 21", answer: "Laws: Servants, violence, & animal control" },
  { question: "Exodus 22", answer: "Laws: Property & moral issues" },
  { question: "Exodus 23", answer: 'Laws"Exodus 23', answer: "Laws: Justice, Sabbaths, & feasts" },
  { question: "Exodus 24", answer: "Israel affirms the covenant" },
  { question: "Exodus 25", answer: "Instructions for the tabernacle furnishings" },
  { question: "Exodus 26", answer: "Instructions for the tabernacle structure" },
  { question: "Exodus 27", answer: "Instructions for the tabernacle court" },
  { question: "Exodus 28", answer: "Instructions for priestly garments" },
  { question: "Exodus 29", answer: "Instructions for priestly consecration" },
  { question: "Exodus 30", answer: "Miscellaneous tabernacle instructions" },
  { question: "Exodus 31", answer: "The tabernacle artisans" },
  { question: "Exodus 32", answer: "Aaron's golden calf" },
  { question: "Exodus 33", answer: "The command to leave Sinai" },
  { question: "Exodus 34", answer: "New tablets & covenant renewed" },
  { question: "Exodus 35", answer: "Giving for the tabernacle project" },
  { question: "Exodus 36", answer: "Building the tabernacle structure" },
  { question: "Exodus 37", answer: "Building the tabernacle furnishings" },
  { question: "Exodus 38", answer: "Building the tabernacle court" },
  { question: "Exodus 39", answer: "Making the priestly garments" },
  { question: "Exodus 40", answer: "Tabernacle completed" },
]

const actsData = [
  { question: "Acts 1", answer: "Ascension of Christ" },
  { question: "Acts 2", answer: "The birth of the church" },
  { question: "Acts 3", answer: "Lame man healed" },
  { question: "Acts 4", answer: "Peter & John arrested" },
  { question: "Acts 5", answer: "Ananias & Sapphira lie & die" },
  { question: "Acts 6", answer: "Seven servants selected" },
  { question: "Acts 7", answer: "Stoning of Stephen" },
  { question: "Acts 8", answer: "Conversion of the Ethiopian eunuch" },
  { question: "Acts 9", answer: "Conversion of Saul" },
  { question: "Acts 10", answer: "Conversion of Cornelius" },
  { question: "Acts 11", answer: "They were first called Christians in Antioch" },
  { question: "Acts 12", answer: "Death of James" },
  { question: "Acts 13 & 14", answer: "Paul's first missionary journey" },
  { question: "Acts 15", answer: "Jerusalem meeting about circumcision" },
  { question: "Acts 16", answer: "Conversion of the Philippian jailer" },
  { question: "Acts 17", answer: "The philosophers in Athens" },
  { question: "Acts 18", answer: "Apollos, Aquila, & Priscilla" },
  { question: "Acts 19", answer: "Riot at Ephesus" },
  { question: "Acts 20", answer: "Encouraging the Ephesian elders" },
  { question: "Acts 21", answer: "Paul arrested in Jerusalem" },
  { question: "Acts 22", answer: "Paul recounts his conversion" },
  { question: "Acts 23", answer: "Paul before the Sanhedrin" },
  { question: "Acts 24", answer: "Paul before Felix" },
  { question: "Acts 25", answer: "Paul before Festus" },
  { question: "Acts 26", answer: "Paul before Agrippa" },
  { question: "Acts 27", answer: "Paul shipwrecked" },
  { question: "Acts 28", answer: "Paul's arrival at Rome" },
]

export {
  booksOfMosesData,
  judgesData,
  matthewData,
  johnData,
  genesisData,
  generalData,
  bibleBookSummaryData,
  attributesData,
  romansData,
  leviticusData,
  deuteronomyData,
  numbersData,
  joshuaData,
  firstCorinthiansData,
  secondCorinthiansData,
  exodusData,
  actsData,
}
