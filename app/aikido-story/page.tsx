import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aikido",
  description:
    "A personal note from Laurent Najman about Aikido practice, lineage, and Terry Dobson's story about conflict resolution.",
};

const aikidoLinks = [
  {
    title: "ACNA / Michel Bécart Shihan",
    href: "https://www.michelbecart.com/",
    description:
      "Association Culturelle Nationale d'Aïkido, founded by Michel Bécart Shihan.",
  },
  {
    title: "Aikiway Dojo",
    href: "https://aikiwaydojo.com/",
    description:
      "The Abu Dhabi dojo where my practice now continues.",
  },
  {
    title: "Sensei Jihad Francis",
    href: "https://aikiwaydojo.com/about/",
    description:
      "Instructor and founder of Aikiway Dojo in Abu Dhabi.",
  },
];

export default function AikidoStoryPage() {
  return (
    <main>
      <header className="site-header">
        <Link className="site-name" href="/">
          Laurent Najman
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/research">Research</Link>
          <Link href="/software">Software</Link>
          <Link href="/supervision">Supervision</Link>
          <Link href="/publications">Publications</Link>
          <Link href="/teaching">Teaching</Link>
          <Link href="/bio">Bio / CV</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </header>

      <section className="page-hero section-shell aikido-hero">
        <div>
          <p className="eyebrow">Personal practice</p>
          <h1>Aikido</h1>
          <p>
            Nearly four decades on the tatami, and Aikido still feels like the
            beginning of a journey: a practice of movement, stillness, and the
            search for harmony.
          </p>
          <div className="hero-actions">
            <a
              className="primary-link"
              href="https://www.michelbecart.com/"
            >
              ACNA / Michel Bécart Shihan
            </a>
            <a className="secondary-link" href="https://aikiwaydojo.com/">
              Aikiway Dojo
            </a>
            <Link className="secondary-link" href="/bio">
              Back to Bio
            </Link>
          </div>
        </div>
        <aside className="aikido-panel" aria-label="Aikido practice note">
          <p>
            5th Dan Aikikai and Shidoin (certified instructor) with ACNA, under
            Michel Bécart Shihan, I continue to understand Aikido as a dialogue
            between breath, balance, and time.
          </p>
          <blockquote>
            The practice continues.
          </blockquote>
        </aside>
      </section>

      <section className="section-shell aikido-story-section">
        <div className="section-heading">
          <p className="eyebrow">Practice</p>
          <h2>A path through movement and stillness</h2>
        </div>
        <div className="aikido-practice-card">
          <p>
            I began my practice in 1986 with Michel Bécart Shihan and the
            ACNA, a French organization recognized by the Aikikai Hombu Dojo in
            Japan.
            Over the past twenty years, I have also explored Daito-ryu, Sagawa
            style, Noh theatre, Shinkage-ryu, and Ni-ten-ryu. Each has become
            another mirror of the same spirit, and of the internal bodywork that
            animates movement from within.
          </p>
          <p>
            A new chapter now begins in Abu Dhabi, welcomed by Sensei Jihad
            Francis and Aikiway Dojo. The practice continues as a conversation
            between body, attention, and time.
          </p>
        </div>
        <div className="aikido-link-grid" aria-label="Aikido links">
          {aikidoLinks.map((item) => (
            <a href={item.href} key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.description}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section-shell aikido-story-section" id="terry-dobson">
        <div className="section-heading">
          <p className="eyebrow">Terry Dobson</p>
          <h2>A story I want to preserve</h2>
        </div>
        <p className="section-intro">
          A long time ago, I found somewhere on the web this story from{" "}
          <strong>Terry Dobson</strong>, a master of Aikido and conflict
          resolution. I saved the text, but not its address, and I was not able
          to rediscover it. Anyway, I think this page gives the clearest
          possible definition of Aikido, and so I put it on my web. My apologies
          if anyone is offended.
        </p>
        <div className="aikido-story-card">
          <blockquote className="aikido-story-text">
            <p>
              THE TRAIN CLANKED and rattled through the suburbs of Tokyo on a
              drowsy spring afternoon. Our car was comparatively empty - a few
              housewives with their kids in tow, some old folks going shopping.
              I gazed absently at the drab houses and dusty hedgerows.
            </p>
            <p>
              At one station the doors opened, and suddenly the afternoon quiet
              was shattered by a man bellowing violent, incomprehensible
              curses. The man staggered into our car. He wore laborer’s
              clothing, and he was big, drunk, and dirty. Screaming, he swung
              at a woman holding a baby. The blow sent her spinning into the
              laps of an elderly couple. It was a miracle that the was
              unharmed.
            </p>
            <p>
              Terrified, the couple jumped up and scrambled toward the other end
              of the car. The laborer aimed a kick at the retreating back of the
              old woman but missed as she scuttled to safety. This so enraged
              the drunk that he grabbed the metal pole in the center of the car
              and tried to wrench it out of its stanchion. I could see that on
              of his hands was cut and bleeding. The train lurched ahead, the
              passengers frozen with fear. I stood up.
            </p>
            <p>
              I was young then, some 20 years ago, and in pretty good shape.
              I’d been putting in a solid eight hours of Aikido training nearly
              every day for the past three years. I like to throw and grapple. I
              thought I was tough. Trouble was, my martial skill was untested in
              actual combat. As students of Aikido, we were not allowed to
              fight.
            </p>
            <p>
              &quot;Aikido,&quot; my teacher had said again and again,
              &quot;is the art of reconciliation. Whoever has the mind to fight
              has broken his connection with the universe. If you try to
              dominate people, you are already defeated. We study how to resolve
              conflict, not how to start it.&quot;
            </p>
            <p>
              I listened to his words. I tried hard I even went so far as to
              cross the street to avoid the chimpira, the pinball punks who
              lounged around the train stations. My forbearance exalted me. I
              felt both tough and holy. In my heart, however, I wanted an
              absolutely legitimate opportunity whereby I might save the
              innocent by destroying the guilty.
            </p>
            <p>
              This is it! I said to myself, getting to my feet.{" "}
              <em>
                People are in danger and if I don’t do something fast, they
                will probably get hurt.
              </em>
            </p>
            <p>
              Seeing me stand up, the drunk recognized a chance to focus his
              rage. &quot;Aha!&quot; He roared. &quot;A foreigner! You need a
              lesson in Japanese manners!&quot;
            </p>
            <p>
              I held on lightly to the commuter strap overhead and gave him a
              slow look of disgust and dismissal. I planned to take this turkey
              apart, but he had to make the first move. I wanted him mad, so I
              pursed my lips and blew him an insolent kiss.
            </p>
            <p>
              &quot;All right! He hollered. &quot;You’re gonna get a lesson.&quot;
              He gathered himself for a rush at me.
            </p>
            <p>
              A split second before he could move, someone shouted
              &quot;Hey!&quot; It was earsplitting. I remember the strangely
              joyous, lilting quality of it - as though you and a friend had
              been searching diligently for something, and he suddenly stumbled
              upon it. &quot;Hey!&quot;
            </p>
            <p>
              I wheeled to my left; the drunk spun to his right. We both stared
              down at a little old Japanese. He must have been well into his
              seventies, this tiny gentleman, sitting there immaculate in his
              kimono. He took no notice of me, but beamed delightedly at the
              laborer, as though he had a most important, most welcome secret to
              share.
            </p>
            <p>
              &quot;C’mere,&quot; the old man said in an easy vernacular,
              beckoning to the drunk. &quot;C’mere and talk with me.&quot; He
              waved his hand lightly.
            </p>
            <p>
              The big man followed, as if on a string. He planted his feet
              belligerently in front of the old gentleman, and roared above the
              clacking wheels, &quot;Why the hell should I talk to you?&quot;
              The drunk now had his back to me. If his elbow moved so much as a
              millimeter, I’d drop him in his socks.
            </p>
            <p>The old man continued to beam at the laborer.</p>
            <p>
              &quot;What’cha been drinkin’?&quot; he asked, his eyes sparkling
              with interest. &quot;I been drinkin’ sake,&quot; the laborer
              bellowed back, &quot;and it’s none of your business!&quot; Flecks
              of spittle spattered the old man.
            </p>
            <p>
              &quot;Ok, that’s wonderful,&quot; the old man said,
              &quot;absolutely wonderful! You see, I love sake too. Every night,
              me and my wife (she’s 76, you know), we warm up a little bottle
              of sake and take it out into the garden, and we sit on an old
              wooden bench. We watch the sun go down, and we look to see how our
              persimmon tree is doing. My great-grandfather planted that tree,
              and we worry about whether it will recover from those ice storms
              we had last winter. Our tree had done better than I expected,
              though especially when you consider the poor quality of the soil.
              It is gratifying to watch when we take our sake and go out to
              enjoy the evening - even when it rains!&quot; He looked up at the
              laborer, eyes twinkling.
            </p>
            <p>
              As he struggled to follow the old man’s conversation, the drunk’s
              face began to soften. His fists slowly unclenched.
              &quot;Yeah,&quot; he said. &quot;I love persimmons too…&quot; His voice
              trailed off.
            </p>
            <p>
              &quot;Yes,&quot; said the old man, smiling, &quot;and I’m sure you
              have a wonderful wife.&quot;
            </p>
            <p>
              &quot;No,&quot; replied the laborer. &quot;My wife died.&quot; Very
              gently, swaying with the motion of the train, the big man began
              to sob. &quot;I don’t got no <em>wife</em>, I don’t got no{" "}
              <em>home</em>, I don’t got no <em>job</em>. I am so{" "}
              <em>ashamed</em> of myself.&quot; Tears rolled down his cheeks; a
              spasm of despair rippled through his body.
            </p>
            <p>
              Now it was my turn. Standing there in well-scrubbed youthful
              innocence, my make-this-world-safe-for-democracy righteousness, I
              suddenly felt dirtier than he was.
            </p>
            <p>
              Then the train arrived at my stop. As the doors opened, I heard
              the old man cluck sympathetically. &quot;My, my,&quot; he said,
              &quot;that is a difficult predicament, indeed. Sit down here and
              tell me about it.&quot;
            </p>
            <p>
              I turned my head for one last look. The laborer was sprawled on
              the seat, his head in the old man’s lap. The old man was softly
              stroking the filthy, matted hair.
            </p>
            <p>
              As the train pulled away, I sat down on a bench. What I had wanted
              to do with muscle had been accomplished with kind words. I had
              just seen Aikido tried in combat, and the essence of it was love.
              I would have to practice the art with an entirely different
              spirit. It would be a long time before I could speak about the
              resolution of conflict.
            </p>
            <footer>Terry Dobson</footer>
          </blockquote>
          <p className="aikido-story-credit">
            Our thanks for permission to reprint this excerpt. <cite>Aikido
            and the New Warrior</cite>, published by North Atlantic Books, 2320
            Blake Street, Berkeley, CA 94704.
          </p>
          <div className="hero-actions">
            <a
              className="primary-link"
              href="https://en.wikipedia.org/wiki/Terry_Dobson_(aikidoka)"
            >
              Terry Dobson
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
