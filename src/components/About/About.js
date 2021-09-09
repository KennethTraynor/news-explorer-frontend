import './About.css';

function About() {
    return (
        <section className='about'>
            <div className='about__container'>
                <div className='about__author-image-container' ><div className='about__author-image'></div></div>
                <article className="about__text-container">
                    <h2 className="about__title">About the author</h2>
                    <p className='about__text'>Hi. My name is Kenneth Traynor and I'm a frontend and backend web developer.</p>
                    <p className='about__text'>Some of the different development technologies I've worked with are Visual Studio Code, Figma, Github, Git, React, Express, Mongodb, Microsoft Azure, and Google Cloud Platform.</p>
                    <p className='about__text'>My experience with Practicum has been interesting, challenging, and fun. I've enjoyed learning about frontend and backend development. And with the knowledge I have gained from Practicum I can help potential customers with developing full websites independently, with a group, or for a company.</p>
                </article>
            </div>
        </section>
    )
}

export default About;