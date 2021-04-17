import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Socials: React.FC = () => {
  return (
    <div style={{ display: 'flex', fontSize: '1.5rem' }}>
      <a href="https://github.com/halvorboe" style={{ color: 'white' }}>
        <FaGithub />
      </a>
      &nbsp;
      <a href="https://linkedin.com/in/halvorboe" style={{ color: 'white' }}>
        <FaLinkedin />
      </a>
      <a href="mailto:halvor@complex.codes" style={{ color: 'white' }}>
        &nbsp;
        <FaEnvelope />
      </a>
    </div>
  )
}

export default Socials
