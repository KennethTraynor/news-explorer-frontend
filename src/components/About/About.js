import './About.css';
import authorImage from '../../images/author-image-temp.png';

function About() {
    return (
        <section className='about'>
            <img src={authorImage} alt="author" className='about__author-image' />
            <article className="about__text-container">
                <h2 className="about__title">About the author</h2>
                <p className="about__text">This block describes the project author. Here you should indicate your name, what you do, and which development technologies you know. 
                You can also talk about your experience with Practicum, what you learned there, and how you can help potential customers.</p>
            </article>
        </section>
    )
}

export default About;