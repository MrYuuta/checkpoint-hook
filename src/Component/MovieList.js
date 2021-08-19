import React from "react";
import MovieCard from "./MovieCard";
import { useState } from "react";
import FormAdd from "./FormAdd";
import { v4 as uuidv4 } from "uuid";
import { Rating } from 'react-simple-star-rating'
function MovieList() {
  const [movies, setMovies] = useState([
    {
      id: uuidv4(),
      Title: "Pirates of the Caribbean: On Stranger Tides",
      posterURL: "https://i.egycdn.com/pic/WmFwZn-dlY21ibVltdmNtbUVjbVRUcHZtamNOanZj.jpg",
      rating: "3",
      Description:
        "In an adventurous setting, Jack Sparrow meets a mysterious girl named Angelica. The events follow between them after she forces him to board the steamer (Queens Ann Riving), the evil pirate ship (Blackbeard), and he finds himself on an adventure fraught with surprises, and he is confused as to whether he should fear the evil pirate or (Angelica). ",
    },

{
      id: uuidv4(),
      Title: "The Conjuring",
      posterURL: "https://i.egycdn.com/pic/WmFwZndlY212bWptdm1FbWpFY3ZOWXJOdnZObW16.jpg",
      rating: "4",
      Description:
        "The horror story revolves around Ed Warren (Patrick Wilson) and his wife, Lauren (Vera Farmiga), who are world-renowned paranormal investigators who are asked for help by the Roger (Ron Livingston) family; Terrified by dark forces on a secluded farm, they must confront a powerful demonic entity, and the Warren family falls into the most terrifying situation of their lives. ",
    },

{
      id: uuidv4(),
      Title: "Spider-Man",
      posterURL: "https://i.egycdn.com/pic/WmFwZndlY21qbVlqdmNtam1qRWNtWWpQY3dQbUVtdmE.jpg",
      rating: "3",
      Description:
        "Based on the popular comics series Spider-Man, the film revolves around Peter Parker, a quiet, poor, shy orphan student who is bitten by a genetically modified spider, which gives him supernatural abilities, while Peter loves (Mary) in silence because she accompanies his friend (Harry Osborne). When Harry's eccentric millionaire father Norman uses a new type of performance-enhancing drug to become the Green Goblin, Peter must confront him to save his family and friends. ",
    },

{
      id: uuidv4(),
      Title: "The Hunger Games: Mockingjay - Part 1 ",
      posterURL: "https://i.egycdn.com/pic/WmFwZndlY21Fdk52dmN2UmN2Y3ZjbXBwcHBFdnc.jpg",
      rating: "3",
      Description:
        "chronicles the life of Katniss Everdeen (Jennifer Lawrence) as she reluctantly becomes a symbol of the Panem region and an icon of the rebellion against injustice, tyranny and tyranny. Katniss leads the rebels and rebels in a life-and-death war to determine the fate of Panem forever. Events escalate and violence extends to all regions. Katniss finds herself in a massive internal struggle as she must decide who she can trust and who is not worthy of her trust and has to make many fateful decisions. ",
    },

{
      id: uuidv4(),
      Title: "Zombieland",
      posterURL: "https://i.egycdn.com/pic/WmFwZndlY21FdmNtdm1ZdkVjUG1wcGJtcEVjd0s.jpg",
      rating: "4",
      Description:
        "A horrific comedy, it tells the story of two people who succeeded in surviving among a group of zombies, and their unique way to survive in these atmospheres with the help of some magicians and by using some bullets.  ",
    },

{
      id: uuidv4(),
      Title: "Pirates of the Caribbean: Dead Man's Chest",
      posterURL: "https://i.egycdn.com/pic/WmFwZndlY21Fdk5ibUxSY3Z0Y212UG1ibG1uSQ.jpg",
      rating: "3",
      Description:
        "Lord Cutler Beckett tries to retrieve the legendary ship (Dead Man's Chest). According to the legend, whoever takes this ship has control of massive gains, and (Beckett) insists on using this formidable power to destroy all pirates in the Caribbean, and from here begins The struggle between him and Sparrow to get the cursed ship.",
    },

{
      id: uuidv4(),
      Title: "I Am Legend",
      posterURL: "https://i.egycdn.com/pic/WmFwZndlY21ibUhjbW1FY21Md2FtVFRmTmI.jpg",
      rating: "3",
      Description:
        "Years after the outbreak of an epidemic that killed most if not all of humanity, the rest turn into monsters, and the only survivor is (Robert Neville), as he struggles to stop this terrible virus as he is the last survivor in New York City, as Neville tries in every way to find any survivors others to save them from death or transformation. ",
    },

{
      id: uuidv4(),
      Title: "Rise of the Planet of the Apes",
      posterURL: "https://i.egycdn.com/pic/WmFwZndlY21UbW1UYm1tdmNtdkVjYWF2Y2x3VGRUbQ.jpg",
      rating: "4",
      Description:
        "Within the corridors of San Francisco, many scientific experiments are conducted, especially genetic engineering experiments. This time the scientist (Will Rodman) tries to conduct research on the treatment of Alzheimer's disease, so he resorts to conducting scientific experiments on monkeys, but these experiments result in increasing the intelligence of monkeys, which leads to excitement The situation and the superiority of monkeys over humans, and here the spark of war begins. ",
    },

{
      id: uuidv4(),
      Title: "Bird Box",
      posterURL: "https://i.egycdn.com/pic/WmFwZndlY21URW12dmNtYm1wZWNtdmFtYmxtRXdMd3g.jpg",
      rating: "3",
      Description:
        " After the apocalypse, a woman and a group of blindfolded children try to make their way across a river. ",
    },

{
      id: uuidv4(),
      Title: "Jumanji: Welcome to the Jungle",
      posterURL: "https://i.egycdn.com/pic/WmFwZndlY21UbW1MY3ZjbVRqRWNQbUh3YXdURW1wZw.jpg",
      rating: "3",
      Description:
        "Four high school students discover an ancient game and plunge them into the jungle connected to the game's settings and controls, literally the game embodied in their choices, only to realize with time that Jumanji is not just a game, but a challenge to survive, where you have to finish the game to be able to return to your world natural realist. ",
    },

{
      id: uuidv4(),
      Title: "Warcraft: The Beginning",
      posterURL: "https://i.egycdn.com/pic/WmFwZndlY21MY21UYnZjbWVjbW1tdnZOVHZtTGN4.jpg",
      rating: "3",
      Description:
        " Within a framework of fantasy and fantasy adventures, the film presents the legendary saga of the bitter conflict between humans and orcs in the world of Azeroth, addressing through events all aspects of the struggle that witnessed their union to face the next danger that threatens their survival on Earth.",
    },

{
      id: uuidv4(),
      Title: "Mission: Impossible - Ghost Protocol",
      posterURL: "https://i.egycdn.com/pic/WmFwZndlY21Fdk5UbW1qRWNtSHdsdmNtbW1qUHZ3.jpg",
      rating: "3",
      Description:
        "The International Monetary Fund is involved in bombings in the Kremlin, so Ethan Hunt and his team go in an attempt to save the situation, and pursue the terrorist (Hendricks), especially after he gained access to the secret codes of Russian nuclear weapons, which prompts the President of America to launch the Stealth Protocol program The program requires that Ethan and his team be held responsible for the bombing, while allowing them to escape in order to capture the real culprit. ",
    },

{
      id: uuidv4(),
      Title: "Venom",
      posterURL: "https://i.egycdn.com/pic/WmFwZndlY21UbXZjdnRjdmNtYWNjd2FtVFlibWptYm1F.jpg",
      rating: "3",
      Description:
        "Eddie Brock/Venom (Tom Hardy) is one of the most mysterious, complex and sinister characters in the Marvel universe, as well as the archenemy of Spider-Man. Venom was a completely ordinary person, until he was possessed by an alien that gave him unprecedented superpowers; From this moment on, everything related to his life changed, and he and the alien became one and indivisible entity. ",
    },

{
      id: uuidv4(),
      Title: "Frozen",
      posterURL: "https://i.egycdn.com/pic/WmFwZndlY21FbXZ2TllhY21FYW1tdmNtcHp4eA.jpg",
      rating: "3",
      Description:
        "Princesses Elsa (Edna Menzel) the next queen and Anna (Kristen Bell). Elsa had a unique superpower, she could create snow and ice, but this power was suppressed by an accident that shocked her. During Elsa's inauguration as Queen, things get out of hand and take a path of complications and everything starts to fall apart, so Elsa runs away. Anna decides to accompany Kristoff (Jonathan Groff) and Olive (Josh Gad) on a perilous journey to find Elsa and save the kingdom before it's too late. ",
    },

{
      id: uuidv4(),
      Title: "War for the Planet of the ApesWar for the Planet of the Apes",
      posterURL: "https://i.egycdn.com/pic/WmFwZndlY3ZOam1qdmN2Y21tRWNhdk54anZObW1qbXo.jpg",
      rating: "4",
      Description:
        "Caesar's journey continues, as he and his fellow monkeys are forced into a deadly and bloody war with an army of humans led by a ruthless colonel. After the apes suffer unimaginable losses, Caesar struggles with his dark instincts and seeks revenge for his bloodline. He and the colonel fight an epic battle that will determine their fates and the future of the planet. ",
    },

{
      id: uuidv4(),
      Title: "Pirates of the Caribbean: The Curse of the Black Pearl ",
      posterURL: "https://i.egycdn.com/pic/WmFwZndlY21UbW1UYm1tdmNtbUVjY052bWRmd3h4bA.jpg",
      rating: "4",
      Description:
        "A Royal Navy ship rescues a boy named William Turner. Elizabeth finds a gold necklace hanging around William's neck. When Elizabeth sinks, the gold skull necklace sends out mysterious impulses that summon a ship with a cursed crew to hijack Elizabeth. Forces are launched The Navy teams up with Captain (Jack Sparrow) to search for her. ",
    },

{
      id: uuidv4(),
      Title: "The Hunger Games: Catching Fire",
      posterURL: "https://i.egycdn.com/pic/WmFwZndlY21FbUhjbXZtYkVjbXNqbXZjd2xtRW1iY3c.jpg",
      rating: "3",
      Description:
        "The second part of the Hunger Games trilogy, in which we follow the events that take place in the dark future society; in which each territory is obliged to offer a sacrifice in the form of a boy or a teenage girl to take part in a television program on the air to the delight of the gentlemen; Where they are forced to fight to the death for the amusement of the people.. But the harbingers of a revolution loom on the horizon, so what happens? ",
    },

{
      id: uuidv4(),
      Title: "Suicide Squad",
      posterURL: "https://i.egycdn.com/pic/WmFwZndlY21tdk5qbXBibWFjS3hjd2xtam1idmNteg.jpg",
      rating: "2",
      Description:
        "The events of the film revolve around a group of the most evil prisoners on Earth, known to everyone as (Suicide Squad), who succeed in concluding an agreement with a corrupt government agency in order to carry out highly dangerous missions, and in return all members of the (Suicide Squad) will receive safety and protection in prison, as well as About some other advantages. ",
    },

{
      id: uuidv4(),
      Title: "X-Men: Days of Future Past",
      posterURL: "https://i.egycdn.com/pic/WmFwZndlY21tbUxOdnZOZWN2Y2F3ZmtObW1vYw.jpg",
      rating: "4",
      Description:
        "X-Men are forced to travel back in time to try to change a very important and great historical event that could negatively affect the future of the human race, as well as the future of those with genetic mutations known as X-Men. ",
    },

{
      id: uuidv4(),
      Title: "Doctor Strange",
      posterURL: "https://i.egycdn.com/pic/WmFwZndlY21UbW1UYm1ibVliRWNtdm1ibWJQbWJ3VHZQ.jpg",
      rating: "3",
      Description:
        "With his career on the line and a car accident that ends tragically, genius and arrogant surgeon Dr. Stephen Strange (Benedict Cumberbatch) gets a new lease on life as he begins to learn the secrets of the hidden world of magic and alternate dimensions, and discovers that he possesses a supernatural ability to... fight evil. ",
    },

{
      id: uuidv4(),
      Title: "Aquaman",
      posterURL: "https://i.egycdn.com/pic/WmFwZndlY21URW12bWJtWUhSY21tbGFLeG1ZVGc.jpg",
      rating: "3",
      Description:
        "Arthur Curry realizes that he is the heir to the underwater kingdom of Atlantis, and he must aspire to lead his people to become their first hero, and then the world's champion, and engage in endless battles, so that he can achieve what he was created for. ",
    },


  ]);
  const [formKey, setformKey] = useState(5);
  // eslint-disable-next-line no-unused-vars
  const [inputKey, setinputKey] = useState(5);
  const [buttonpopup, setbuttonpopup] = useState(false);
  const add = (newmovie) => {
    
    setMovies((movies) => [...movies, newmovie]);
  };
  const [Inputsearch, setInputsearch] = useState("");
  const [InputRating, setInputRating] = useState("");
  const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // Some logic
  }

  return (
    <div className="MovieList">
      <form>
        <input
          key={inputKey}
          type="text"
          placeholder="Search for a movie"
          onChange={(e) => setInputsearch(e.target.value)}
        />
        <button type="submit">
          <i className="fa fa-search" />
        </button>
        <input
          type="text"
          placeholder="Tape a rating ..."
          onChange={(e) => setInputRating(e.target.value)}
        />
      </form>
      <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />
      <button className="Add" onClick={() => setbuttonpopup(true)}>
        Add Movie
      </button>
      <div
        className="MovieListitems"
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        {movies
          .filter((movie) =>
            movie.Title.toLowerCase().includes(
              Inputsearch.toString().toLowerCase()
            ) && movie.rating>=InputRating
          )
          .map((movie) => (
            <MovieCard
              key={movie.id}
              posterURL={movie.posterURL}
              rating={movie.rating}
              Title={movie.Title}
              Description={movie.Description}
            ></MovieCard>
          ))}

        <FormAdd
          key={formKey}
          setformKey={setformKey}
          trigger={buttonpopup}
          settrigger={setbuttonpopup}
          add={(M) => add(M)}
        />
      </div>
    </div>
  );
}

export default MovieList;
