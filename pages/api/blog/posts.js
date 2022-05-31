const BLOG_POSTS = [
  {
    id: 1,
    date: "3/6/22",
    title: "The Day Before Rithm",
    body: [`The day before starting a life-changing bootcamp has me filled with lots of emotions. I have read and consumed a MASSIVE
    amount of content over the last 6 months. I have seen so many people say how amazing the career switch is and how it’s
    the best thing they have ever done. Full stop. Where all of this is true, I want to dig deeper into the process, I want
    to talk about the real emotions behind learning a new skill. I want to talk about how while I am so happy to be coding
    and so excited to be switching careers, I am terrified; and learning a new skill is hard.`,

    `I have a strong background in music. I started playing the clarinet when I was 10 and never looked back. Fast-forward –
    I went on to graduate college with a degree in music and spent the last decade attempting to piece together a freelance
    performance career while sustaining a day job to make sure all of my finances are taken care of. With 6-figures in
    student loans I knew I had to work full time to pursue my dream, even though that was the last thing I wanted to do.`,

    `After balancing a few different day-jobs, I discovered I kept coming up empty at the end of the day. Although I was
    being fulfilled musically, I was always out of the house, causing me to sacrifice a lot of my personal relationships. I
    needed more time to recharge when I finally was home. I was being financially irresponsible and unhealthy eating out all
    the time: it’s very difficult to cook and prepare meals when you’re out of the house some days 14+ hours at a time. I
    needed to change something again.`,

    `I dabbled with a computer science class in college. HTML and CSS weren’t totally foreign to me, and I had built a few
    projects with those languages. I had recently heard of a few friends that were breaking into tech, and I thought “why
    not give it a go?” I was working for a car dealership at the time and with the state of the automotive industry I had
    lots of free time at work due to the lack of inventory, so I spent a lot of time reading a few books and taking a web
    development course on Coursera.`,

    `I never finished the course. I got about 80% of the way through and then I stopped. I had made a few projects using
    Bootstrap grid, and they looked great! I was feeling super confident and excited that I was actually enjoying building
    things, how cool! Then the next module had JavaScript, and my head exploded. I folded. I couldn’t handle this new
    language and did not understand it. All of my confidence was gone and I honestly felt like there was no way I could
    learn this new skill and possibly understand a programming language.`,

    `I look back at this moment and laugh. I laugh a lot. Now that I’ve been using JavaScript just about daily for the last 6
    months or so, I looked back at the complexity of what they were attempting to teach (poorly I might add), and realized
    that it wasn’t me. I’m going to start drawing parallels to music now, because there is an incredible amount of
    similarities between music and programming.`,

    `Imagine for a second that you’re learning a brand instrument. You have never picked it up before in your life and while
    you’ve made a sound on a kazoo before just by blowing air, or maybe whistled or hummed, you’ve never read music. So you
    watch a few 8 minute videos of someone playing this instrument (say me with 20+ years of experience), the concepts on
    how to read music, and how to apply the reading notes to the instrument. Ok now 30 minutes later go ahead and read and
    record this piece of music for me on this new instrument you just picked up. How do you think you would do? How
    confident would you feel?`,

    `This is one of the many parallels I’m able to draw between music and programming. Learning a language takes time.
    Learning a language takes practice, and it most definitely does not come overnight. One thing I used to tell my young
    students when they would take private lessons with me is that if you practice 2 hours a week, you will be amazed at the
    progress you will see. I don’t mean an hour on one day and an hour on another: 20 minutes a day, every day. You start to
    develop fundamentals that become second-nature, things you don’t have to think about. This for me is directly connected
    to syntax with a programming language.`,

    `I look back at the last 6 months of my journey and I thank my musical experiences and disciplines. They have allowed me
    to focus and get serious about developing programming skills. Don’t get me wrong, I in no way programmed 20 minutes a
    day every day for the last 6 months. That was a very healthy goal, and where I did try to code every day, there were
    sometimes 3-5 days at a time where I did nothing. I have to remember to forgive myself for that. It’s important to
    listen to your body and emotions and take breaks when you need to.`,

    `This is where my anxiety kicks in. This is where the “I’m super excited, but terrified” feelings begin to surface. Up
    until now I could code at my leisure, take breaks when I wanted and stop when I wanted to.`,

    `I’m all in now.`,

    `Tomorrow I start a 16-week intensive bootcamp. This was a calculated choice on my part, because I knew I wanted guided
    instruction to build healthy habits. Rithm School was the obvious choice due to their small class sizes and overall
    feelings about helping others and the community. Reflecting on my college years I realized I always thrived in my
    smaller classes, and had particularly low grades in classes with large lecture halls of 100+. I wanted one-on-one
    instruction and direct feedback; an environment that mostly reflected my experiences with studying music.`,

    `Here is where the waterfall of feelings comes in, and the inner dialogue of death that I feel isn’t talked about enough:
    “What if I can’t do it?” “What if it’s too much? “What if I’m terrible at it?” “This is expensive, what if I can’t get a
    job?” “Am I too late? Is the market over-saturated?” “What if I get burned out?” “What happens if I finish and I decide
    it’s not for me?”`,

    `Although I feel most of the things above, the prevailing feeling is excitement. When I look ahead to having the
    financial stability I crave, and the work-life balance I crave, a little bit of anxiety seems like a small price to pay.`,

    `It’s comforting to know I am not the only one with all of these feelings. I know there are many programmers out there
    that are feeling the exact same way right now, or have felt this way before. I think the best way to process these
    feelings is to talk them through, and reach out. You’re not alone. And wherever you are in your journey, stop, take a
    step back, and look at exactly what you’ve accomplished up until this point. You’ll be amazed at how all of the feelings
    of dread go away when you start to reflect positively on your accomplishments. Measure your successes in months, or
    maybe weeks, not days. This is a marathon, not a sprint.`,

    `Give yourself permission to fail. You’re not supposed to be great at it yet, that’s why you’re learning.</p>`]

  }

]

export default BLOG_POSTS



export async function getData() {
  return BLOG_POSTS;
}