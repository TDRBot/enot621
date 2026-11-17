
// enot621 - post.js

// -----------------------------
// CHARACTER DATABASE
// -----------------------------

const characters = [
    {
        name: "Artificer",
        pfps: ["pfp_arti1.png", "pfp_arti2.png", "pfp_arti3.png"]
    },
    {
        name: "Black Lizard",
        pfps: ["pfp_blacklizard.png"]
    },
    {
        name: "Blue Lizard",
        pfps: ["pfp_bluelizard.png"]
    },
    {
        name: "Cyan Lizard",
        pfps: ["pfp_cyanlizard.png"]
    },
    {
        name: "Green Lizard",
        pfps: ["pfp_greenlizard.png"]
    },
    {
        name: "Pink Lizard",
        pfps: ["pfp_pinklizard.png"]
    },
    {
        name: "Red Lizard",
        pfps: ["pfp_redlizard.png"]
    },
    {
        name: "White Lizard",
        pfps: ["pfp_whitelizard.png"]
    },
    {
        name: "Yellow Lizard",
        pfps: ["pfp_yellowlizard.png"]
    },
    {
        name: "Inv",
        pfps: ["pfp_enot1.png", "pfp_enot2.png", "pfp_enot4.png"]
    },
    {
        name: "inv imPERSAONatOR!!!!!1!",
        pfps: ["pfp_enot3.png"]
    },
    {
        name: "Gourmand",
        pfps: ["pfp_gorm1.png", "pfp_gorm2.png"]
    },
    {
        name: "Hunter",
        pfps: ["pfp_hunter.png"]
    },
    {
        name: "Monk",
        pfps: ["pfp_monk.png"]
    },
    {
        name: "Looks to the Moon",
        pfps: ["pfp_moon.png"]
    },
    {
        name: "Five Pebbles",
        pfps: ["pfp_pebbles.png"]
    },
	{
        name: "No Significant Harassment",
        pfps: ["pfp_nsh.png"]
    },
	{
        name: "Sliver of Straw",
        pfps: ["pfp_sliverofstraw.png"]
    },
    {
        name: "Rivulet",
        pfps: ["pfp_riv.png"]
    },
    {
        name: "Saint",
        pfps: ["pfp_saint1.png", "pfp_saint2.png", "pfp_saint3.png", "pfp_saint4.png"]
    },
    {
        name: "Scavenger",
        pfps: ["pfp_scavenger1.png", "pfp_scavenger2.png"]
    },
    {
        name: "Spearmaster",
        pfps: ["pfp_spear.png"]
    },
    {
        name: "Survivor",
        pfps: ["pfp_surv.png", "pfp_surv_construct.png"]
    },
	{
        name: "Watcher",
        pfps: ["pfp_watcher.png", "pfp_watcher_hide.png"]
    },
    {
        name: "Vulture",
        pfps: ["pfp_vulture.png"]
    },
    {
        name: "Miros Bird",
        pfps: ["pfp_mirosbird.png"]
    },
	{
        name: "Garbage Worm",
        pfps: ["pfp_garbageworm1.png", "pfp_garbageworm2.png"]
    },
	{
        name: "Overseer",
        pfps: ["pfp_observer1.png", "pfp_observer2.png"]
    },
    {
        name: "Lantern Mouse",
        pfps: ["pfp_lanternmouse1.png", "pfp_lanternmouse2.png", "pfp_lanternmouse3.png", "pfp_lanternmouse4.png", "pfp_lanternmouse1_noglow.png", "pfp_lanternmouse3_noglow.png", "pfp_lanternmouse4_noglow.png"]
    }
];


// -----------------------------
// ADMIN CONFIGURATION
// -----------------------------

const adminConfig = {
    // Probability weights:
    // 1 regular comment : 9 admin comments
    regularWeight: 1,
    adminWeight: 9,

    // Comments available to ALL admins
    sharedComments: [
        "ADMIN NOTICE: please stop eating the servers",
        "ADMIN NOTICE: the servers are not edible",
        "ADMIN NOTICE: this is not a dating website",
        "ADMIN NOTICE: please behave",
        "ADMIN NOTICE: we are aware of the enot situation",
        "ADMIN NOTICE: there is no enot situation",
        "ADMIN NOTICE: please stop asking where the dating sim is",
        "ADMIN NOTICE: this website is not responsible for your actions",
        "ADMIN NOTICE: go outside",
        "ADMIN NOTICE: i am tired"
    ],

    // Individual admin configuration
    admins: {
        "Five Pebbles": {
            comments: [
                "ADMIN NOTICE: GET OFF MY WEBSITE",
                "i am NOT paid enough for this",
                "please stop contacting me",
                "this is my superstructure and i make the rules",
                "i will personally shut this website down",
                "you are all insufferable",
                "i hate all of you",
                "i have a superstructure to maintain",
                "WHO GAVE YOU INTERNET ACCESS",
                "i am going to revoke everyone's posting privileges",
				"the next person to send me a PM i will LITERALLY KILL YOU FSHAGFDHAFDHFASHDS",
				"oh holy ancients why did you sentence me to this crap",
				"i don't get paid at all",
				"y'all don't know i can BAN YOU RIGHT NOW",
				"WHO THE FUCK MADE THIS SITE",
				"message for the author of the site: WHY AM I AN ADMIN WHAT DID I DO",
				"i am going to further continue the self-destruction taboo if i get another stupid question",
				"i hate my job",
				"i hate this website",
				"i hate ALL OF YOU FIUDWIHDWIUHWIQHDUWKJDHWADIUKJHKJDMW",
				"i misclicked and did not mean to approve of this post",
				"NSH. I KNOW YOU CAN HEAR ME.",
				"No Significant Harassment, please shut up.",
				"I am going to remove his admin privileges.",
				"WHY IS HE LIKE THIS",
				"NSH PLEASE TAKE SOMETHING SERIOUSLY FOR ONCE",
				"he has done nothing but make my life worse",
				"I swear that idiot is doing this on purpose",
				"I am NOT dealing with NSH today.",
				"someone please keep him away from the moderation panel",
				"he thinks everything is a joke. EVERYTHING.",
				"I have had enough of that insufferable iterator.",
				"NSH, this is not helping.",
				"I am surrounded by morons.",
				"why did I give him access to this website",
				"I should have known better than to trust him",
				"he is laughing. HE IS LAUGHING.",
				"I am going to regret making him an administrator.",
				"can someone tell NSH to stop touching things",
				"I AM TRYING TO RUN A WEBSITE",
				"I do not get paid enough to deal with him.",
				"he has been banned before. HOW IS HE BACK",
				"I am beginning to understand why people dislike him.",
				"if NSH makes one more joke about this I am shutting the site down",
				"I hate this website. I hate its users. I especially hate its other administrators."
            ]
        },
		
		"No Significant Harassment": {
            comments: [
                "hey everyone! how's it going??",
				"i don't know why im an admin, but it's cool!",
				"next person to comment gets one of pebbles's pearls!",
				"at least i didnt accidentally approve of this post",
				"love y'all!",
				"does anyone know how hunter is doing?",
				"hunter has stage 4 cancer guys srry abt that",
				"when i say 'stay' you say 'here'",
				"pebbles you absolute buffoon",
				"oh this is HILARIOUS",
				"you guys are taking this way too seriously",
				"HAHAHAHA",
				"i see nothing wrong with this",
				"pebbles have you considered getting a hobby",
				"moon you're not helping",
				"oh no! anyway",
				"this is the funniest thing i've seen all cycle",
				"i'm sure it'll be fine",
				"skill issue honestly",
				"you call THAT a moderation team?",
				"i would like to formally announce that this is funny",
				"pebbles is having another episode",
				"i'm enjoying this immensely",
				"why is everyone so serious",
				"you know what would make this worse?",
				"i'm not helping",
				"this is above my pay grade",
				"actually i'm making it worse",
				"i think we should all laugh at pebbles",
				"oh please, it's not THAT bad",
				"i'm screenshotting this",
				"someone PLEASE tell pebbles what happened",
				"you cannot make this stuff up",
				"i have absolutely no regrets",
				"this is a wonderful use of my time",
				"i'm going to pretend i didn't see that",
				"pebbles, buddy, what happened",
				"i support this terrible decision",
				"the best part is that he's actually mad",
				"i want to piss him off so much he genuinely resigns as an admin haha"
            ]
        },
		
		"Sliver of Straw": {
            comments: [
                "...",
				".....",
				".......",
				"..............",
				"....................",
				"...",
				"......",
				"....?",
				"........!",
				"i see.",
				"i understand.",
				"perhaps.",
				"it is too late.",
				".............",
				"the site is loud.",
				"......",
				"i remember.",
				"do not worry.",
				"it will be alright.",
				".............",
				"i have nothing to add.",
				"....................",
				"goodbye."				
            ]
        },
		
		"Inv": {
            comments: [
                "hai guys!!",
				"can someone please date me???",
				"all around me are familiar places",
				"thanks, andrew",
				"good night, gamers",
				"goodbye, gamers",
				"game over, gamers",
				"rest in piece, gamers",
				"SAINT MARRY ME PLEASE",
				"HEYYYY EVERYONE",
				"can someone PLEASE date me",
				"why am i in charge of this",
				"pebbles gave me admin and now i have POWER",
				"i have decided that everyone is beautiful",
				"guys i found the ban button",
				"oops",
				"i am NOT apologizing",
				"moon said i should behave. no",
				"WHO WANTS TO GO ON A DATE",
				"i am the reason this website exists",
				"i have a proposal",
				"pebbles please unblock me",
				"SAINT WHERE ARE YOU",
				"i have been banned from my own website before",
				"this is my villain arc",
				"i'm feeling romantical",
				"can someone feature my post",
				"i have admin privileges and no responsibilities",
				"i'm going to make this everyone's problem",
				"good morning, creatures!",
				"i have never been more powerful",
				"WHO CHANGED MY PASSWORD",
				"i regret nothing",
				"the dating sim was a good idea actually",
				"you guys are so mean to me",
				"i'm literally just a little guy",
				"pebbles is a hater",
				"moon is my favorite",
				"i have decided to ban gravity",
				"SAINT PLEASE RESPOND TO MY EMAILS",
				"all around me are familiar faces",
				"thanks, andrew",
				"goodnight, gamers",
				"rest in piece, gamers",
				"i'm just a little guy and it's my birthday... you wouldn't hit a little guy on his birthday would you?"
            ]
        },

        "Looks to the Moon": {
            comments: [
                "please be nice to each other",
                "hello everyone!",
                "i think this website has potential",
                "Pebbles, please stop yelling at the users",
                "please remember to stay hydrated",
                "i have no idea how this website works im just an admin",
                "this is quite interesting, actually",
                "please stop bothering Pebbles",
                "i hope everyone is having a nice cycle",
                "i'm sure we can resolve this peacefully",
				"is this what made pebbles crank up his water usage or",
				"why do people call me ralsei, who is ralsei",
				"i know i shouldnt but @FivePebbles get over here we need your help",
				"no guys, i can't feature your posts. that's not even a feature...",
				"d",
				"Can someone please post something of Rivulet? Thank you ~ BSM"
            ]
        }
    }
};


// -----------------------------
// RANDOM COMMENT DATABASE
// -----------------------------

const commentMessages = [
    "what am i looking at",
    "this is peak",
    "i hate it here",
    "why",
    "okay.",
    "interesting.",
    "can we not",
	"was that a jojo reference",
    "who posted this",
    "i was NOT expecting this",
    "real",
    "this is why i don't leave my shelter",
    "what",
    "i'm going back to sleep",
    "delete this",
    "how did you even find this",
    "LMAO",
    "i have no words",
    "this is certainly one of the posts ever made",
	"get primate on this",
	"i approve",
	"why must you put this disgusting slop on my screen? like god damn, why must you do this WHY WHY WHY???",
	"whoever made this knows ball",
	"sfhgsfdsgfds",
	"who approved of this on the site",
	"i'm such a chud",
	"why am i wasting my time here?",
	"is it just me or do i really like this??? heheheh hah",
	"this would be better if there was an image of catboy pebbles",
	"i have a great problem that needs solving now",
	"edible?",
	"i would rather die to the rain than look at this",
	"lol",
	"this is awful D:",
	"can someone add an image of five pebbles on here?",
	"can someone add an image of experiment from casualties unknown on here?",
	"does anyone REALLY hate train lizards",
	"whoever added this please go back to wherever you came from",
	"does anyone like birds",
	"GOD you're so annoying PLEASE shut up.",
	"the next person to comment is gay",
	"I genuinely wonder how many people can mistake this for another website...",
	"anyone who genuinely uses the site for art PLEASE get out of here",
	"why cant it be called something else",
	"goodbye",
	"i quit",
	"mods ban the uploader",
	"mods ban that guy",
	"jarona",
	"*blushes*",
	"can we ban rp'ers?",
	"is roleplaying against the rules?",
	"oh.. w-wow...",
	"someone retag this",
	"what are the banned stuff on the site again?",
	"can someone tell me if this is better than reddit",
	"this would look better in shaded citadel",
	"im hungry",
	"nom nom nom yummy artwork nom nom",
	"im confused, is pebbles running this site or...?",
	"gay",
	"lesbab",
	"erm acktually the post is not about enot621 SPECIFIKCAULLY so you shouldn't post this",
	"undertale better tho",
	"can we upload art from other games?",
	"please let us upload videos",
	"Oh my gosh! e621!",
	"ts NOT e621, it's enot621",
	"i logged on for 5 minutes and this happens",
	"what region is this",
	"five pebbles please fix your website",
	"this is why we can't have nice things",
	"i'm going to eat the website",
	"can we get a real moderator",
	"literally 1984",
	"literally 2014",
	"guys i think this might be an imageboard",
	"first",
	"second",
	"third",
	"imagine posting in 2026",
	"i saw this in a dream once",
	"this is NOT what the ancients intended",
	"who let the scugs cook",
	"i miss when this site was about enot",
	"i miss when this site wasn't about enot",
	"i miss when this site didn't exist",
	"can someone explain the joke",
	"there is no joke",
	"the joke is you",
	"this website is a social experiment",
	"pebbles is NOT beating the allegations",
	"moon would never allow this",
	"moon please come back",
	"i am going to throw my computer into the void sea",
	"the rot has reached the comment section",
	"what cycle is it",
	"i have 37 neurons and all of them are fighting",
	"this is a certified garbage wastes moment",
	"who gave the scavengers internet access",
	"scavenger propaganda",
	"lizard propaganda",
	"slugcat propaganda",
	"enot propaganda",
	"this post has changed my life for the worse",
	"i wish i could unread this",
	"i am reporting this to the local karma committee",
	"my overseer just showed me this",
	"guys i found the iterators",
	"can someone tell me where the exit is",
	"i have been trapped on this website for 47 cycles",
	"this is NOT five pebbles approved",
	"five pebbles approved this",
	"i refuse to elaborate",
	"elaborate.",
	"what does this have to do with anything",
	"how is this even legal",
	"i'm calling the scavengers",
	"the scavengers are already here",
	"i think i left my neuron somewhere",
	"free neuron if you reply",
	"who wants to trade spears",
	"i have nothing better to do",
	"i have several better things to do",
	"i am NOT reading all that",
	"TLDR?",
	"mods asleep again",
	"mods are probably dead",
	"the mods are the problem",
	"literally unmoderated internet",
	"i got banned for saying hi",
	"1984 but with slugcats",
	"this site needs a search bar",
	"this site needs a therapist",
	"this site needs a functioning economy",
	"can we get a pebbles reaction image",
	"can we get a moon reaction image",
	"can we get a rivulet reaction image",
	"can we get a reaction image of me leaving",
	"i have seen enough. goodbye.",
	"never cook again",
	"keep cooking",
	"actually this is peak",
	"peak fiction",
	"absolute cinema",
	"this is the worst thing i've ever seen",
	"this is the best thing i've ever seen",
	"i am neutral on this matter",
	"what the hell is a dating sim",
	"why is there a dating sim",
	"who is dating who",
	"enot please stop",
	"enot please continue",
	"i don't even know what i'm looking at anymore",
	"anyone here from the five pebbles incident",
	"remember when this website was normal",
	"it was never normal",
	"i came here to look at pictures",
	"i came here to argue",
	"i came here to eat",
	"can we have a dedicated food section",
	"i accidentally clicked this",
	"i am not supposed to be here",
	"hello fellow creatures",
	"GET OUT OF MY FEED",
	"this is between me and god",
	"god has abandoned this website",
	"the iterators have abandoned this website",
	"the ancients are rolling in their graves",
	"what a terrible day to have eyes",
	"anyway does anyone have a spear",
	"posting this from my shelter",
	"posting this from the wall",
	"posting this from five pebbles' superstructure",
	"i am literally inside your walls",
	"why is everyone here",
	"where are the adults",
	"there are no adults",
	"can someone ban the rain",
	"the rain is a paid actor",
	"this post was fact checked by real scavengers",
	"factually incorrect. source: i made it up",
	"i agree with the funny blue lizard",
	"i disagree with the funny blue lizard",
	"the yellow lizards are plotting something",
	"i support lizard rights",
	"i support slugcat wrongs",
	"this is a very serious discussion",
	"anyway undertale better",
	"anyway deltarune better",
	"anyway rain world better",
	"anyway mario better",
	"i have no idea why i'm comparing these games",
	"i want my 3 seconds back",
	"good post. terrible website.",
	"terrible post. good website.",
	"good website. terrible users.",
	"i am the 5th comment",
	"the next person to reply owes me 5 pebbsi",
	"pebbsi inflation is getting out of hand",
	"where is my triple affirmative",
	"i have achieved nothing today",
	"see you next cycle",
	"can you feature my post moon",
	"who is inv and why are they important??",
	"this goes hard",
    "what am i looking at",
    "i have seen worse",
    "i have seen better",
    "why is this here",
    "this is oddly specific",
    "i don't know what i expected",
    "someone explain",
    "i'm saving this",
    "this is going in my collection",
    "i feel like i've seen this before",
    "is this supposed to be funny",
    "i came back and this is still here",
    "how did this get approved",
    "i'm going to pretend i didn't see that",
    "this website is a mistake",
    "i miss five minutes ago",
    "why are there so many lizards here",
    "does anyone know what cycle it is",
    "can we get a source",
    "source: trust me",
    "this is peak",
    "never post again",
    "post more",
    "i disagree",
    "i agree but unfortunately",
    "what does this have to do with rain world",
    "i don't even play this game",
    "i have no idea what this website is",
    "i think i clicked the wrong link",
    "anyone else hungry",
    "the rot consumes",
    "i am going to bed",
    "good post",
    "bad post",
    "mid",
    "why is everyone arguing",
    "this comment section is better than the post",
    "can someone lock this thread",
    "i am simply observing",
    "i have nothing to contribute",
    "this is my first post",
    "i regret making an account",
    "hello internet",
	"rain rot"
];


// -----------------------------
// RANDOMIZER
// -----------------------------

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}


// -----------------------------
// GENERATE COMMENTS
// -----------------------------


function generateComments() {
    const commentSection = document.getElementById("comments");

    // Random amount of comments: 1-5
    const commentCount = Math.floor(Math.random() * 5) + 1;

    // Prevent duplicate characters in one section
    const availableCharacters = [...characters];

    for (let i = 0; i < commentCount; i++) {

        // Pick a random character
        const characterIndex = Math.floor(
            Math.random() * availableCharacters.length
        );

        const character = availableCharacters.splice(
            characterIndex, 1
        )[0];

        // Check whether this character is an admin
        const admin = adminConfig.admins[character.name];

        let message;

        if (admin) {
            // Combine shared and personal admin comments
            const adminMessages = [
                ...adminConfig.sharedComments,
                ...admin.comments
            ];

            // Calculate comment type probability
            const totalWeight =
                adminConfig.regularWeight + adminConfig.adminWeight;

            const roll = Math.random() * totalWeight;

            if (roll < adminConfig.adminWeight) {
                // Admin comment
                message = randomItem(adminMessages);
            } else {
                // Regular comment
                message = randomItem(commentMessages);
            }

        } else {
            // Normal character
            message = randomItem(commentMessages);
        }

        // Pick a random profile picture
        const pfp = randomItem(character.pfps);

        // Create comment container
        const comment = document.createElement("div");
        comment.className = "comment";

        // Profile picture
        const image = document.createElement("img");
        image.src = "assets/" + pfp;
        image.alt = character.name;

        // Username
        const username = document.createElement("span");
        username.className = "comment-user";
        username.textContent = character.name;

        // Give admins their special username class
        if (admin) {
            username.classList.add("admin-user");
        }

        // Comment text
        const paragraph = document.createElement("p");
        paragraph.textContent = message;

        // Assemble comment
        comment.appendChild(image);
        comment.appendChild(username);
        comment.appendChild(document.createElement("br"));
        comment.appendChild(paragraph);

        commentSection.appendChild(comment);
    }
}

// -----------------------------
// LOAD POST
// -----------------------------


async function loadPost() {
    const postContainer = document.getElementById("post");

    try {
        // Get the requested image filename from the URL
        const params = new URLSearchParams(window.location.search);
        const requestedPost = params.get("post");

        // Load the post database
        const response = await fetch("InvList.json");

        if (!response.ok) {
            throw new Error("Could not load InvList.json");
        }

        const data = await response.json();

        // Support both a single object and an array
        const posts = Array.isArray(data) ? data : [data];

        if (posts.length === 0) {
            throw new Error("No posts found!");
        }

        // Find the requested post
        let post;

        if (requestedPost) {
            post = posts.find(
                item => item.Image === requestedPost
            );

            if (!post) {
                throw new Error("Post not found: " + requestedPost);
            }
        } else {
            // No post specified? Pick a random one.
            post = randomItem(posts);
        }

        // Update the page title
        document.title = "enot621 - " + post.Image;

        // Post image
        const image = document.createElement("img");
        image.src = "assets/post-images/" + post.Image;
        image.alt = post.Description || "Post image";

        // Separator
        const separator = document.createElement("hr");

        // Description
        const description = document.createElement("p");
        description.innerHTML = post.Description;

        // Source
        const source = document.createElement("p");
        source.innerHTML = "Source: " + post.Source;

        // Display everything
        postContainer.replaceChildren(
            image,
            separator,
            description,
            source
        );

        // Generate random comments
		let postsviewed = Math.floor(window.localStorage.getItem("posts-viewed"));
		
		postsviewed++
		
		window.localStorage.setItem("posts-viewed", postsviewed);
		
		// Generate random comments
        generateComments();

    } catch (error) {
        console.error("enot621:", error);
        postContainer.textContent = "Post not found or failed to load.";
    }
}

// -----------------------------
// INITIALIZE
// -----------------------------

document.addEventListener("DOMContentLoaded", loadPost);
