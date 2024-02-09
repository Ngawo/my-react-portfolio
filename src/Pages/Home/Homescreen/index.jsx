// import HeroSection from "../HeroSection";

export default function Home() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hello... I'm ZANELE MANGQANGWANA</p>
                    <h1 className="hero--section--tittle"> <span className="hero--section-title--color">A Junior Software</span> <br />Developer</h1>
                    <p className="hero--section-description">I am a Junior Software Developer <br/>located in Cape Town.</p>
                </div>
                <button className="btn btn-primary">Download Cv</button>
                {/* <button className="btn btn-primary">Contact Me</button> */}
                
            </div>
            <div className="hero--section--img">
                <img src="src/assets/images/zan.jpg" alt="my pic" />
            </div>
        </section>
    );
}
