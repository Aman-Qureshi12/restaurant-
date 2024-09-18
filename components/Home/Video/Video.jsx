import "./Video.css";

const Video = () => {
  return (
    <section className="app__video-section section__padding">
      <video controls>
        <source src="/restaurant/meal.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Video;
