
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="bg-[#faf8f4] text-[#29231f]">

      {/* INTRODUCTION */}
      <section className="px-6 pb-20 pt-20 md:px-[8%] md:pb-28 md:pt-28">
        <div className="mx-auto max-w-7xl">

          <p className="mb-8 text-[11px] uppercase tracking-[3px] text-[#a77b58]">
            The story behind the corner
          </p>

          <h1 className="max-w-5xl font-serif text-5xl leading-[1.12] md:text-7xl lg:text-8xl">
            A little curiosity
            <br />
            can change the way
            <br />
            you see <span className="italic text-[#a77b58]">everything.</span>
          </h1>

          <div className="mt-12 grid gap-8 border-t border-[#e8e0d6] pt-8 md:grid-cols-2 md:gap-16">

            <p className="text-lg leading-8 text-[#76563f]">
              The Curious Corner is a small space built around
              one simple idea: to make the complex world of technology more understandable. We explore the systems, ideas and discoveries that quietly shape our everyday lives, and explain them in a way that is clear, engaging and easy to understand.
            </p>

            <p className="max-w-lg text-sm leading-8 text-[#766d65]">
              From the technology behind your everyday apps
              to the artificial intelligence shaping our future,
              this is a place to slow down, explore the details
              and understand the things we often take for granted.
            </p>

          </div>
        </div>
      </section>


      {/* WHY THIS EXISTS */}
      <section className="bg-[#eee7dd] px-6 py-20 md:px-[8%] md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:gap-20">

          <div>
            <p className="mb-6 text-[11px] uppercase tracking-[3px] text-[#98765b]">
              01 / Why this exists
            </p>

            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              Because not everything complicated needs to
              <span className="italic text-[#a77b58]">
                {" "}sound complicated.
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-sm leading-8 text-[#766d65]">

            <p>
              We use technology every single day. We connect
              to Wi-Fi, search the internet, scan QR codes,
              use navigation apps and interact with artificial
              intelligence.
            </p>

            <p>
              But how often do we stop and ask what actually
              happens behind the screen?
            </p>

            <p>
              I created The Curious Corner to make those
              questions worth exploring. I wanted a place where
              interesting concepts could be broken down into
              clear, engaging explanations without unnecessary
              jargon or overwhelming technical language.
            </p>


          </div>
        </div>
      </section>


      {/* WHO IS IT FOR */}
      <section className="px-6 py-20 md:px-[8%] md:py-28">
        <div className="mx-auto max-w-7xl">

          <p className="mb-6 text-[11px] uppercase tracking-[3px] text-[#98765b]">
            02 / Who is this for?
          </p>

          <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
            For anyone who has ever wondered
            <span className="italic text-[#a77b58]">
              {" "}how things work.
            </span>
          </h2>


          <div className="mt-16 grid gap-12 border-t border-[#e8e0d6] pt-10 md:grid-cols-3">

            <div>
              <span className="font-serif text-3xl text-[#c3a58a]">01</span>

              <h3 className="mb-4 mt-6 font-serif text-2xl">
                Curious beginners
              </h3>

              <p className="text-sm leading-7 text-[#766d65]">
                People who want to understand technology
                without getting lost in complicated terminology.
              </p>
            </div>

            <div>
              <span className="font-serif text-3xl text-[#c3a58a]">02</span>

              <h3 className="mb-4 mt-6 font-serif text-2xl">
                Students & learners
              </h3>

              <p className="text-sm leading-7 text-[#766d65]">
                Students looking for simple explanations,
                additional context and interesting ways to
                explore computer science and AI.
              </p>
            </div>

            <div>
              <span className="font-serif text-3xl text-[#c3a58a]">03</span>

              <h3 className="mb-4 mt-6 font-serif text-2xl">
                Everyday explorers
              </h3>

              <p className="text-sm leading-7 text-[#766d65]">
                Anyone who uses digital technology and wants
                to understand what happens behind the scenes.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* WHAT WE EXPLORE */}
      <section className="bg-[#e9dfd3] px-6 py-20 md:px-[8%] md:py-28">
        <div className="mx-auto max-w-7xl">

          <p className="mb-6 text-[11px] uppercase tracking-[3px] text-[#98765b]">
            03 / What you'll find here
          </p>

          <div className="grid gap-12 md:grid-cols-2 md:items-end">

            <h2 className="font-serif text-4xl leading-tight md:text-6xl">
              Small questions.
              <br />
              <span className="italic text-[#a77b58]">
                Bigger understanding.
              </span>
            </h2>

            <p className="max-w-md text-sm leading-8 text-[#766d65]">
              Every topic begins with a question.
              We explore the ideas, systems and discoveries
              that make our digital world work.
            </p>

          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2">

            {[
              {
                number: "01",
                title: "The Internet",
                description: "Wi-Fi, DNS, websites, servers and the invisible systems connecting us."
              },
              {
                number: "02",
                title: "Artificial Intelligence",
                description: "Machine learning, language models, neural networks and intelligent systems."
              },
              {
                number: "03",
                title: "Computer Science",
                description: "Programming, algorithms, databases and the logic behind software."
              },
              {
                number: "04",
                title: "Everyday Technology",
                description: "QR codes, GPS, digital payments, browsers and the tools we use daily."
              }
            ].map((item) => (
              <div
                key={item.number}
                className="border-t border-[#cbb9a7] py-7"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs tracking-widest text-[#a77b58]">
                    {item.number}
                  </span>

                  <span className="font-serif text-2xl text-[#a77b58]">
                    ↗
                  </span>
                </div>

                <h3 className="mb-3 mt-8 font-serif text-2xl">
                  {item.title}
                </h3>

                <p className="max-w-md text-sm leading-7 text-[#766d65]">
                  {item.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>


    
{/* A NOTE FROM THE CREATOR */}
<section className="bg-[#eee7dd] px-6 py-20 md:px-[8%] md:py-28">

  <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_1.2fr] md:gap-24">

    {/* Left side */}
    <div>
      <p className="mb-6 text-[11px] uppercase tracking-[3px] text-[#98765b]">
        04 / A note from the creator
      </p>

      <h2 className="max-w-md font-serif text-4xl leading-tight md:text-6xl">
        A little space,
        <br />
        built from
        <span className="italic text-[#a77b58]">
          {" "}curiosity.
        </span>
      </h2>

      <div className="mt-10 h-px w-20 bg-[#a77b58]"></div>
    </div>

    {/* Right side */}
    <div className="flex flex-col justify-center">

      <p className="font-serif text-2xl leading-relaxed text-[#4d4036] md:text-3xl">
        "I've always believed that some of the most
        interesting things are the ones we use every
        day but rarely stop to understand."
      </p>

      <div className="mt-8 space-y-5 text-sm leading-8 text-[#766d65]">

        <p>
          I created The Curious Corner as a small personal
          project to explore the ideas behind the technology
          that surrounds us. I wanted to build something
          that makes learning feel less like studying a
          complicated subject and more like discovering
          something fascinating.
        </p>

        <p>
          As someone who enjoys both technology and teaching,
          I find it interesting how a difficult concept can
          become much easier when explained through the right
          question, a simple example or an everyday experience.
        </p>

        <p>
          This website is my little attempt to bring that
          feeling to the internet.
        </p>

      </div>

      <div className="mt-10 border-t border-[#cbb9a7] pt-6">
        <p className="font-serif text-2xl italic text-[#76563f]">
          With curiosity,
        </p>

        <p className="mt-2 text-xs uppercase tracking-[2px] text-[#98765b]">
          The Creator, The Curious Corner
        </p>
      </div>

    </div>

  </div>

</section>



      {/* CLOSING */}
      <section className="bg-[#29231f] px-6 py-24 text-center text-[#faf8f4] md:px-[8%] md:py-32">

        <p className="mb-8 text-[11px] uppercase tracking-[3px] text-[#c49a76]">
          Your curiosity belongs here
        </p>

        <h2 className="mx-auto max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
          The world has more
          <br />
          to explain than we think.
        </h2>

        <p className="mx-auto mt-8 max-w-lg text-sm leading-7 text-[#c2b7ac]">
          Never stop being curious.
        </p>

        <Link
          to="/#articles"
          className="mt-10 inline-flex items-center gap-4 border border-[#c49a76] px-8 py-4 text-sm text-[#eee7dd] transition-all duration-300 hover:bg-[#c49a76] hover:text-[#29231f]"
        >
          Explore the articles
          <span>→</span>
        </Link>

      </section>

    </main>
  );
}

export default About;
