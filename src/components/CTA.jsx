import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Gee, that's a lotta good stuff and I wish I could download a summary...
      </p>
      <Link to='https://drive.google.com/uc?export=download&id=1jnmQhl66ZP1Db3pRH9xjyl1ji7BbsyV7' className='btn'>
        Resume
      </Link>
    </section>
  );
};

export default CTA;
