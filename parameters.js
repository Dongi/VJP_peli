var clues = {
	
	paris: "Paul advises Reetta to go to Rome, Italy, and seek Niccolo Raffaelli, who owns a B&B near the Colosseum. He must have more information on the owner of the camera. ",
	rome: "The next morning, while having a cornetto for breakfast, Reetta was advised to travel to Montreal, Canada, where Kamran had left to visit the historic area of Old Montreal. ",
	montreal:"Reetta chatted with the waitress a bit and found out that Kamran had been working in this cafe for a few months before heading to Havana to see his friend Fernàn Abrantes. She can’t give up on her search now, she has come all this way.. ",
	havana:"Kamran had left Havana after a few weeks and gone to  Buenos Aires, Argentina. He was keen to visit The Palace of the Argentine National Congress, tells Fernàn.",
	buenos:"Suddenly Reetta notices that there is something engraved to the arm of the bench. It says ”Paris - Rome - Montreal - Havana - Buenos Aires - CAPE HORN ”. This can’t be a coincidence… Reetta decides to head to the southern most spot in Chile.  ",
	cape:"The hostel was owned by an older couple that was very friendly and welcoming. It turns out that their daughter, Catalina, had fallen in love with Kamran after he spent 2 months here in their village. Together they had continued Kamran’s trip around the world. Their next destination had been Timbuktu, Mali. ",
	timbuktu:"When speaking with one of the caravaners, Reetta found out that Catalina and Kamran had met an Australian veterinarian, Cooper Williams, who had invited them to tag along with him on his return to Sydney, Australia. ",
	sydney:"Cooper told that Kamran and Catalina had stayed with him for a few days and then headed off to the Ayer’s Rock, a natural landmark in the Northern Territory of Australia, also called Uluru. ",
	uluru:"The couple had been staying at his farm in Alice Springs for a few weeks and became friends with one of his other visitors, Emmanuel. Emmanuel was from Tanzania, Africa, and wanted to show his home to his new friends. All three of them left for Tanzania to visit Africa’s highest mountain, Kilimanjaro. ",
	kilimanjaro:"Emmanuel was a sweet young man with a pocketful of stories to tell. Reetta, tired from her chase, stayed with Emmanuel for a few nights before taking the road again. Emmanuel told her that Kamran with his girlfriend had headed off to Asia, to see one of the seven wonders of the world; The Great Wall of China.",
	great:"At the Wall Reetta met many travelers from all around the world. Suddenly a Japanese boy named Shin recognized the camera she was carrying with her.  He told Reetta that he and Kamran had become friends a few months back when he was here with his girlfriend - or fiancée actually. He had proposed to Catalina here on the Great Wall. Shin had offered to take a picture of the engaged couple but sadly Kamran had lost his camera. They are going to have their wedding in Chennai, India, in a week.",
	chennai:"When Reetta walked into the garden she saw a few familiar faces among the crowd; Catalina’s parents, Emmanuel, the Australian tour guide and Niccolo Raffaelli from Rome. They were all here to celebrate Kamran’s and Catalina’s marriage that was going to take place tomorrow. Finally Reetta could return the camera to its owner and as a thank you Kamran invited her to their wedding. She was the guest of honor. 
			What an adventure !"
}


var reaction = "Your answer was incorrect. Are you sure you have completed the tasks in the correct order? 
				Please read again the previous clue.";




var answers = {

	paris:"sibelius monument",
	rome:"the eiffel tower",
	montreal:"cornetto",
	havana:"bar a beurre",
	buenos:"fruit",
	cape:"wood",
	timbuktu:"2",
	sydney:"veterinarian",
	uluru:"pete",
	kilimanjaro:"alice springs",
	great:"moshi town",
	chennai:"shin"
}

var mParis = new Mission(parisI, answers.paris,clues.paris,reaction);
var mRome = new Mission(romeI, answers.rome,clues.rome, reaction);

var mMontreal = new Mission(montrealI,answers.montreal,clues.montreal, reaction);
var mHavana = new Mission(havanaI,answers.havana,clues.havana, reaction);

var mBuenos = new Mission(buenosI,answers.buenos,clues.buenos, reaction);
var mCape = new Mission(capeI,answers.cape,clues.cape, reaction);

var mTimbuktu = new Mission(timbuktuI,answers.timbuktu,clues.timbuktu, reaction);
var mKilimanjaro = new Mission(kilimanjaroI,answers.kilimanjaro,clues.kilimanjaro, reaction);

var mGreat = new Mission(greatI,answers.great,clues.great, reaction);
var mChennai = new Mission(chennaiI,answers.chennai,clues.chennai, reaction);

var mSydney = new Mission(sydneyI,answers.sydney,clues.sydney, reaction);
var mUluru = new Mission(uluruI,answers.uluru,clues.uluru, reaction);