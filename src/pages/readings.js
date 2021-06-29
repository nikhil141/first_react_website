import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ReadingsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Readings" />
      <div style={{ marginTop: `30px`, fontFamily: `Montserrat` }}>
        <h2>The Lean Startup</h2>
        <p style={{textAlign:'justify'}}>
        Most startups fail. But many of those failures are preventable. The Lean Startup is a new approach being adopted across the globe, changing the way companies are built and new products are launched.Eric Ries defines a startup as an organization dedicated to creating something new under conditions of extreme uncertainty. This is just as true for one person in a garage or a group of seasoned professionals in a Fortune 500 boardroom. What they have in common is a mission to penetrate that fog of uncertainty to discover a successful path to a sustainable business.
        The Lean Startup approach fosters companies that are both more capital efficient and that leverage human creativity more effectively. 
        </p>
        <a href="https://www.goodreads.com/book/show/10127019-the-lean-startup" target="blank" className="no-underline">
        Goodreads
        </a>
      </div>
      <div style={{ marginTop: `30px`, fontFamily: `Montserrat` }}>
        <h2>Memories, Dreams, Reflections</h2>
        <p style = {{textAlign:'justify'}}>
        In the spring of 1957, when he was eighty-one years old, C. G. Jung undertook the telling of his life story. At regular intervals he had conversations with his colleague and friend Aniela Jaffé, and collaborated with her in the preparation of the text based on these talks. On occasion, he was moved to write entire chapters of the book in his own hand, and he continued to work on the final stages of the manuscript until shortly before his death on June 6, 1961.
        </p>
        <a href="https://www.goodreads.com/book/show/612188.Memories_Dreams_Reflections?from_choice=false&from_home_module=false" target="blank" className="no-underline">
        Goodreads
        </a>
      </div>
      <div style={{ marginTop: `30px`, fontFamily: `Montserrat` }}>
        <h2>The Intelligent Investor </h2>
        <p style={{textAlign:'justify'}}>
         More than one million hardcovers sold Now available for the first time in paperback!
         The Classic Text Annotated to Update Graham's Timeless Wisdom for Today's Market Conditions
         The greatest investment advisor of the twentieth century, Benjamin Graham taught and inspired people worldwide. Graham's philosophy of "value investing" -- which shields investors from substantial error and teaches them to develop long-term strategies -- has made The Intelligent Investor the stock market bible ever since its original publication in 1949.
        </p>
        <a href="https://www.goodreads.com/book/show/106835.The_Intelligent_Investor?from_choice=false&from_home_module=false" target="blank" className="no-underline">
        Goodreads
        </a>
      </div>
      <div style={{ marginTop: `30px`, fontFamily: `Montserrat` }}>
        <h2>The Last Lecture</h2>
        <p style={{textAlign:'justify'}}>
          A lot of professors give talks titled 'The Last Lecture'. Professors are asked to consider their demise and to ruminate on what matters most to them: What wisdom would we impart to the world if we knew it was our last chance? If we had to vanish tomorrow, what would we want as our legacy?
          When Randy Pausch, a computer science professor at Carnegie Mellon, was asked to give such a lecture, he didn't have to imagine it as his last, since he had recently been diagnosed with terminal cancer. But the lecture he gave, 'Really Achieving Your Childhood Dreams', wasn't about dying.
        </p>
        <a href="https://www.goodreads.com/book/show/40611510-the-last-lecture?from_choice=false&from_home_module=false" target="blank" className="no-underline">
        Goodreads
        </a>
      </div>
      <div style={{ marginTop: `30px`, fontFamily: `Montserrat` }}>
        <h2>The Road Trip</h2>
        <p style={{textAlign:'justify'}}>
        Addie and her sister are about to embark on an epic road trip to a friend's wedding in the north of Scotland. The playlist is all planned and the snacks are packed.
        But, not long after setting off, a car slams into the back of theirs. The driver is none other than Addie's ex, Dylan, who she's avoided since their traumatic break-up two years earlier.
        Dylan and his best mate are heading to the wedding too, and they've totalled their car, so Addie has no choice but to offer them a ride.          
        </p>
        <a href="https://www.goodreads.com/book/show/51405046-the-road-trip?from_choice=false&from_home_module=false" target="blank" className="no-underline">
        Goodreads
        </a>
      </div>
      <div style={{ marginTop: `30px`, fontFamily: `Montserrat` }}>
        <h2>Thinking, Fast and Slow</h2>
        <p style={{textAlign:'justify'}}>
        In the highly anticipated Thinking, Fast and Slow, Kahneman takes us on a groundbreaking tour of the mind and explains the two systems that drive the way we think. System 1 is fast, intuitive, and emotional; System 2 is slower, more deliberative, and more logical. Kahneman exposes the extraordinary capabilities—and also the faults and biases—of fast thinking, and reveals the pervasive influence of intuitive impressions on our thoughts and behavior. The impact of loss aversion and overconfidence on corporate strategies, the difficulties of predicting what will make us happy in the future, the challenges of properly framing risks at work and at home, the profound effect of cognitive biases on everything from playing the stock market to planning the next vacation—each of these can be understood only by knowing how the two systems work together to shape our judgments and decisions.
        </p>
        <a href="https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow?from_choice=false&from_home_module=false" target="blank" className="no-underline">
        Goodreads
        </a>
      </div>
      <div style={{ marginTop: `30px`, fontFamily: `Montserrat` }}>
        <h2>Elon Musk , Tesla, Spacex, and the Quest for a Fantastic Future</h2>
        <p style={{textAlign:'justify'}}>
        Elon Musk, the entrepreneur and innovator behind SpaceX, Tesla, and SolarCity, sold one of his internet companies, PayPal, for $1.5 billion. Ashlee Vance captures the full spectacle and arc of the genius's life and work, from his tumultuous upbringing in South Africa and flight to the United States to his dramatic technical innovations and entrepreneurial pursuits. Vance uses Musk's story to explore one of the pressing questions of our age: can the nation of inventors and creators who led the modern world for a century still compete in an age of fierce global competition? He argues that Musk is an amalgam of legendary inventors and industrialists including Thomas Edison, Henry Ford, Howard Hughes, and Steve Jobs. 
        </p>
        <a href="https://www.goodreads.com/book/show/25541028-elon-musk?from_choice=false&from_home_module=false" target="blank" className="no-underline">
        Goodreads
        </a>
      </div>
      <div style={{ marginTop: `30px`, fontFamily: `Montserrat` }}>
        <h2>Steve Jobs</h2>
        <p style={{textAlign:'justify'}}>
        Walter Isaacson's "enthralling" (The New Yorker) worldwide bestselling biography of Apple cofounder Steve Jobs. Based on more than forty interviews with Steve Jobs conducted over two years--as well as interviews with more than 100 family members, friends, adversaries, competitors, and colleagues--Walter Isaacson has written a riveting story of the roller-coaster life and searingly intense personality of a creative entrepreneur whose passion for perfection and ferocious drive revolutionized six industries: personal computers, animated movies, music, phones, tablet computing, and digital publishing. Isaacson's portrait touched millions of readers. At a time when America is seeking ways to sustain its innovative edge, Jobs stands as the ultimate icon of inventiveness and applied imagination. He knew that the best way to create value in the twenty-first century was to connect creativity with technology.
        </p>
        <a href="https://www.goodreads.com/book/show/11084145-steve-jobs?from_choice=false&from_home_module=false" target="blank" className="no-underline">
        Goodreads
        </a>
      </div>
      <div style={{ marginTop: `30px`, fontFamily: `Montserrat` }}>
        <h2>Still Life</h2>
        <p style={{textAlign:'justify'}}>
        The discovery of a dead body in the woods on Thanksgiving Weekend brings Chief Inspector Armand Gamache and his colleagues from the Surete du Quebec to a small village in the Eastern Townships. Gamache cannot understand why anyone would want to deliberately kill well-loved artist Jane Neal, especially any of the residents of Three Pines - a place so free from crime it doesn't even have its own police force.
        </p>
        <a href="https://www.goodreads.com/book/show/338691.Still_Life?from_choice=false&from_home_module=false" target="blank" className="no-underline">
        Goodreads
        </a>
      </div>
      <div style={{ marginTop: `30px`, fontFamily: `Montserrat` }}>
        <h2>The Google Story: Inside the Hottest Business, Media and Technology Success of Our Time</h2>
        <p style={{textAlign:'justify'}}>
        Moscow-born Sergey Brin and Midwest-born Larry Page dropped out of graduate school at Stanford University to, in their own words, "change the world" through a powerful search engine that would organize every bit of information on the Web for free. The Google Story takes you deep inside the company's wild ride from an idea that struggled for funding in 1998 to a firm that rakes in billions in profits, making Brin and Page the wealthiest young men in America. 
        </p>
        <a href="https://www.goodreads.com/book/show/164323.The_Google_Story?from_choice=false&from_home_module=false" target="blank" className="no-underline">
        Goodreads
        </a>
      </div>
    </Layout>
  )
}

export default ReadingsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`