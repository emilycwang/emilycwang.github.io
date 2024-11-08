import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Life would be easier if we could just download information into our brains. <br className='sm:block hidden' />
        Lucky for you I have it here:
      </p>
      <Link to='https://drive.google.com/uc?export=download&id=1jnmQhl66ZP1Db3pRH9xjyl1ji7BbsyV7' className='btn'>
        Resume
      </Link>
    </section>
  );
};

export default CTA;
